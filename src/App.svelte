<main>
  <GameGrid {gridRows} on:leftClick={onLeftClick} on:rightClick={onRightClick} />
</main>

<script lang="ts">
  import GameGrid from "./components/GameGrid.svelte";
  import { CellState } from "./enum/cell-state.enum";
  import type { Cell } from "./models/cell";

  let gridRows: Cell[][] = [[{ value: 1, state: CellState.Uncovered }]];

  const onLeftClick = ({ detail: { x, y }}) => {
    console.log('left click', x, y);
  }

  const onRightClick = ({ detail: { x, y }}) => {
    console.log('right click', x, y);
  }
</script>
