<main class="inline-block max-w-full">
  <Header {remainingFlags} {timeElapsed} {difficulty} on:reset on:setDifficulty/>
  <div class="relative overflow-auto">
    <GameGrid grid={gameGrid} {gameOver} on:uncover on:toggleFlag />
    {#if gameOver}
      <div in:fade={{ duration: 1500, easing: quadIn }} class="absolute h-full w-full inset-0">
        <GameOverModal {gameOver}/>
      </div>
    {/if}
  </div>
</main>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import { quadIn } from 'svelte/easing';
  
  import type { Cell } from '../models/cell';
  import type { GameOver } from '../models/game-over';
  import GameGrid from './GameGrid.svelte';
  import Header from './Header.svelte';
  import GameOverModal from './GameOverModal.svelte';
  import type { GameDifficulty } from '../enum/game-difficulty.enum';

  export let gameGrid: Cell[][];
  export let remainingFlags: number;
  export let timeElapsed: number;
  export let gameOver: GameOver;
  export let difficulty: GameDifficulty;
</script>