import { derived, Readable, Writable, writable } from 'svelte/store';
import { CellState } from '../enum/cell-state.enum';
import type { Cell } from '../models/cell';
import type { GameSettings } from '../models/game-settings';
import type { CellValue } from '../types/cell-value';

const gameSettings = writable<GameSettings>({ width: 10, height: 10, totalMines: 1 })

const gameGrid: Writable<Cell[][]> = writable([]);
const remainingFlags: Readable<number> = derived(
  [gameSettings, gameGrid], 
  ([$gameSettings, $gameGrid]) => $gameSettings.totalMines - $gameGrid.flat().filter(cell => cell.state === CellState.Flagged).length)

/**
 * Create the Minesweeper grid.
 */
const initialise = ({ width, height, totalMines }: GameSettings) => {
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
  gameGrid.update(grid => { 
    uncoverCell(grid, x, y);
    return grid;
  });
}

const uncoverCell = (grid: Cell[][], x: number, y: number): void => {
  const cell = grid[y][x];
  cell.state = CellState.Uncovered;

  if (cell.value === 0) {
    adjacentCells(grid, x, y)
      .filter(c => c.state === CellState.Covered)
      .forEach(c => uncoverCell(grid, c.x, c.y));
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

export { 
  gameGrid,
  gameSettings,
  remainingFlags,
  initialise,
  toggleFlag,
  uncover,
};

