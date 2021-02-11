<div>
  {#each grid as row, y (y)}
    <div class="flex">
      {#each row as { state, value }, x (x)}
        <div class="min-w-8 w-10" animate:flip transition:fade>
          <GameGridCell 
            on:click={() => onClick(x, y)} 
            on:contextmenu={() => onContextMenu(x, y)} 
            {state}
            {value}/>
        </div>
      {/each}
    </div>
  {/each}
</div>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';

  import GameGridCell from './GameGridCell.svelte';
  import type { Cell } from '../models/cell';
  import type { GameOver } from '../models/game-over';
  import { CellState } from '../enum/cell-state.enum';

  export let grid: Cell[][] = [];
  export let gameOver: GameOver;
  export let muted: boolean;

  let uncoverAudio: HTMLAudioElement;
  let flagAudio: HTMLAudioElement;
  let loseAudio: HTMLAudioElement;
  let winAudio: HTMLAudioElement;

  onMount(() => {
    uncoverAudio = createAudio('/assets/audio/pop.mp3');
    flagAudio = createAudio('/assets/audio/flag.mp3');
    loseAudio = createAudio('/assets/audio/lose.mp3');
    winAudio = createAudio('/assets/audio/win.mp3');
  })

  $: {
    if (gameOver && gameOver.win) {
      playAudio(winAudio);
    }
    if (gameOver && !gameOver.win) {
      playAudio(loseAudio)
    }
  }

  const createAudio = (path: string): HTMLAudioElement => {
    const audio = new Audio(path);
    audio.volume = 0.4;
    return audio;
  }

  const playAudio = (audio: HTMLAudioElement): void => {
    if (!muted) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  const onClick = (x: number, y: number) => {
    const { state, value } = grid[y][x];
    if (!gameOver && (state === CellState.Covered)) { 
      if (value !== 'm') {
        playAudio(uncoverAudio);
      }
      dispatch('uncover', { x, y }); 
    }
  };

  const onContextMenu = (x: number, y: number) => {
    const { state } = grid[y][x];
    if (!gameOver && (state === CellState.Covered || state === CellState.Flagged)) { 
      playAudio(flagAudio);
      dispatch('toggleFlag', { x, y }); 
    }
  };

	const dispatch = createEventDispatcher();
</script>