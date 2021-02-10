<div>
  {#each grid as row, y }
    <div class="flex">
      {#each row as { state, value }, x}
        <GameGridCell 
          on:click={() => onClick(x, y)} 
          on:contextmenu={() => onContextMenu(x, y)} 
          {state}
          {value}/>
      {/each}
    </div>
  {/each}
</div>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  import GameGridCell from './GameGridCell.svelte';
  import type { Cell } from '../models/cell';
  import type { GameOver } from '../models/game-over';
  import { CellState } from '../enum/cell-state.enum';

  export let grid: Cell[][] = [];
  export let gameOver: GameOver;

  let uncoverAudio: HTMLAudioElement;
  let flagAudio: HTMLAudioElement;
  let loseAudio: HTMLAudioElement;
  let winAudio: HTMLAudioElement;

  onMount(() => {
    const getAudio = (path) => {
      const audio = new Audio(path);
      audio.volume = 0.4;
      return audio;
    }
    uncoverAudio = getAudio('/assets/audio/pop.mp3');
    flagAudio = getAudio('/assets/audio/flag.mp3');
    loseAudio = getAudio('/assets/audio/lose.mp3');
    winAudio = getAudio('/assets/audio/win.mp3');
  })

  $: {
    if (gameOver && gameOver.win) {
      winAudio.play();
    }
    if (gameOver && !gameOver.win) {
      loseAudio.play();
    }
  }

  const onClick = (x: number, y: number) => {
    const { state, value } = grid[y][x];
    if (!gameOver && (state === CellState.Covered)) { 
      if (value !== 'm') {
        uncoverAudio.play();
      }
      dispatch('uncover', { x, y }); 
    }
  };

  const onContextMenu = (x: number, y: number) => {
    const { state } = grid[y][x];
    if (!gameOver && (state === CellState.Covered || state === CellState.Flagged)) { 
      flagAudio.play();
      dispatch('toggleFlag', { x, y }); 
    }
  };

	const dispatch = createEventDispatcher();
</script>