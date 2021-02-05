<main>
  <Header {remainingFlags} {timeElapsed} on:reset/>
  <div class="relative">
    <GameGrid grid={gameGrid} {gameOver} on:uncover on:toggleFlag />
    {#if gameOver}
      <div class="absolute h-full w-full inset-0">
        <GameOverModal {gameOver}/>
      </div>
    {/if}
  </div>
</main>

<script lang="ts">
  import type { Cell } from '../models/cell';
  import type { GameOver } from '../models/game-over';
  import GameGrid from './GameGrid.svelte';
  import Header from './Header.svelte';
  import GameOverModal from './GameOverModal.svelte';

  export let gameGrid: Cell[][];
  export let remainingFlags: number;
  export let timeElapsed: number;
  export let gameOver: GameOver;
</script>