import { Writable, writable } from 'svelte/store';
import type { Cell } from '../models/cell';
import { createGrid } from '../services/game';

const gridRows: Writable<Cell[][]> = writable(undefined);

const initialise = (width: number, height: number, totalMines: number) => {
  gridRows.set(createGrid(width, height, totalMines));
};

export { 
  gridRows, 
  initialise
};

