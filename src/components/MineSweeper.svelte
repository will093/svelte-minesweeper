<main>
  <Header {remainingFlags} {timeElapsed} on:reset/>
  <GameGrid grid={gameGrid} on:leftClick on:rightClick/>
</main>

<script lang="ts">
  import type { Cell } from '../models/cell';
  import GameGrid from './GameGrid.svelte';
  import Header from './Header.svelte';

  export let gameGrid: Cell[][];
  export let remainingFlags: number;
  export let timeElapsed: number;
</script>