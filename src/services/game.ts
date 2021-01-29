import { CellState } from "../enum/cell-state.enum";
import type { Cell } from "../models/cell";
import type { CellValue } from "../types/cell-value";

const createGrid = (width: number, height: number, totalMines: number): Cell[][] => {
  // Create an empty width x height 2D array. 
  const grid: Cell[][] = Array(width).fill(undefined).map(() => Array(width).fill(undefined));

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
  return grid.map((row, y) => row.map((cell, x) => cell || createCell(grid, x, y)));
};

const adjacentCells = (grid: Cell[][], x: number, y: number) => 
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

const createCell = (grid: Cell[][], x: number, y: number): Cell => {
  const adjacentMines = [
    grid[y-1]?.[x-1],
    grid[y-1]?.[x],
    grid[y-1]?.[x+1],
    grid[y]?.[x-1],
    grid[y]?.[x+1],
    grid[y+1]?.[x-1],
    grid[y+1]?.[x],
    grid[y+1]?.[x+1],
  ]
  .filter(cell => cell && cell.value === 'm')
  .length as CellValue;

  return { state: CellState.Covered, value: adjacentMines, x, y };
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

export { createGrid, uncoverCell };