import type { CellState } from "../enum/cell-state.enum";
import type { CellValue } from "../types/cell-value";

export interface Cell {
  state: CellState;
  value: CellValue;
}