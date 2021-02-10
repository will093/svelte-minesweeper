import { derived, Readable, Writable, writable } from 'svelte/store';
import { CellState } from '../enum/cell-state.enum';
import type { Cell } from '../models/cell';
import type { GameOver } from '../models/game-over';
import type { GameSettings } from '../models/game-settings';
import type { CellValue } from '../types/cell-value';

const gameSettings = writable<GameSettings>({ width: 10, height: 10, totalMines: 15 })

const gameGrid: Writable<Cell[][]> = writable([]);
const remainingFlags: Readable<number> = derived(
  [gameSettings, gameGrid], 
  ([$gameSettings, $gameGrid]) => $gameSettings.totalMines - $gameGrid.flat().filter(cell => cell.state === CellState.Flagged).length)

const timeElapsed = writable<number>(0);
let timeElapsedInterval: number;

const gameOver: Readable<GameOver> = derived(gameGrid, 
  $gameGrid => {
    const cells = $gameGrid.flat();
    const lose = cells.length && cells.some(cell => cell.state === CellState.Exploded);
    const win = cells.length && cells.filter(cell => cell.value !== 'm').every(cell => cell.state === CellState.Uncovered);
    const gameOver = win || lose;
    return gameOver
      ? { win }
      : undefined;
  }
);

/**
 * Create the Minesweeper grid.
 */
const initialise = ({ width, height, totalMines }: GameSettings) => {
  // Reset the timer
  if (timeElapsedInterval) {
    clearInterval(timeElapsedInterval);
    timeElapsedInterval = undefined;
  }
  timeElapsed.set(0);

  // Create an empty width x height 2D array. 
  let grid: Cell[][] = Array(width).fill(undefined).map(() => Array(width).fill(undefined));

  // Place mines randomly within the grid.
  let count = 0;
  while (count < totalMines) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    if (!grid[x][y]) {
      grid[x][y] = { state: CellState.Covered, value: 'm', x, y }
      count += 1;
    }
  }

  // Fill in the other cells.
  grid = grid.map((row, y) => row.map((cell, x) => cell || createCell(grid, x, y)));
  gameGrid.set(grid);
};

/**
 * Toggle whether a specific cell is flagged.
 */
const toggleFlag = (x, y): void => {
  if (!timeElapsedInterval) {
    startTimer();
  }
  gameGrid.update(gr => { 
    const cell = gr[y][x];
    if (cell.state === CellState.Covered) {
      cell.state = CellState.Flagged;
    } else if (cell.state === CellState.Flagged) {
      cell.state = CellState.Covered;
    }
    return gr;
  });
}

/*
 * Uncover a cell - if the cell's value is 0, uncovers the area of 0 valued connected cells and their adjacent cells.
 */
const uncover = (x: number, y: number): void => {
  if (!timeElapsedInterval) {
    startTimer();
  }
  gameGrid.update(grid => { 
    uncoverCell(grid, x, y);
    return grid;
  });
}

const uncoverCell = (grid: Cell[][], x: number, y: number): void => {
  const cell = grid[y][x];
  
  if (cell.state !== CellState.Covered) {
    return;
  }

  cell.state = CellState.Uncovered;

  if (cell.value === 0) {
    adjacentCells(grid, x, y)
      .filter(c => c.state === CellState.Covered)
      .forEach(c => uncoverCell(grid, c.x, c.y));
  } else if (cell.value === 'm') {
    grid.flat().filter(cell => cell.value === 'm').forEach(cell => cell.state = CellState.Uncovered);
    cell.state = CellState.Exploded;
  }
}

const createCell = (grid: Cell[][], x: number, y: number): Cell => {
  const adjacentMines = adjacentCells(grid, x, y)
    .filter(cell => cell.value === 'm')
    .length as CellValue;

  return { state: CellState.Covered, value: adjacentMines, x, y };
}

const adjacentCells = (grid: Cell[][], x: number, y: number): Cell[] => 
  [
    grid[y-1]?.[x-1],
    grid[y-1]?.[x],
    grid[y-1]?.[x+1],
    grid[y]?.[x-1],
    grid[y]?.[x+1],
    grid[y+1]?.[x-1],
    grid[y+1]?.[x],
    grid[y+1]?.[x+1],
  ]
  .filter(cell => cell);

const startTimer = () => {
  timeElapsedInterval = setInterval(() => {
    timeElapsed.update(t => t + 1);
  }, 1000);
}

gameOver.subscribe($gameOver => {
  if ($gameOver) {
    clearInterval(timeElapsedInterval);
    timeElapsedInterval = undefined;
  }
})

export { 
  gameGrid,
  gameSettings,
  remainingFlags,
  timeElapsed,
  gameOver,
  initialise,
  toggleFlag,
  uncover,
};

