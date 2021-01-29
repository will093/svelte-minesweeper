import { Writable, writable } from 'svelte/store';
import { CellState } from '../enum/cell-state.enum';
import type { Cell } from '../models/cell';
import { createGrid, uncoverCell } from '../services/game';

const gridRows: Writable<Cell[][]> = writable(undefined);

const initialise = (width: number, height: number, totalMines: number) => {
  gridRows.set(createGrid(width, height, totalMines));
};

const toggleFlag = (x, y) => {
  gridRows.update(gr => { 
    const cell = gr[y][x];
    if (cell.state === CellState.Covered) {
      cell.state = CellState.Flagged;
    } else if (cell.state === CellState.Flagged) {
      cell.state = CellState.Covered;
    }
    return gr;
  });
}

const uncover = (x, y) => {
  gridRows.update(gr => { 
    uncoverCell(gr, x, y);
    return gr;
  });
}

export { 
  gridRows, 
  initialise,
  toggleFlag,
  uncover,
};

