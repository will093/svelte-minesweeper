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
  import { createEventDispatcher } from 'svelte';

  import GameGridCell from './GameGridCell.svelte';
  import type { Cell } from '../models/cell';
  import type { GameOver } from '../models/game-over';

  export let grid: Cell[][] = [];
  export let gameOver: GameOver;

  const onClick = (x: number, y: number) => {
    if (!gameOver) { dispatch('uncover', { x, y }); }
  };

  const onContextMenu = (x: number, y: number) => {
    if (!gameOver) { dispatch('toggleFlag', { x, y }); }
  };

	const dispatch = createEventDispatcher();
</script>