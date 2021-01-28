<div>
  {#each gridRows as row, y }
    <div class="flex">
      {#each row as { state, value }, x}
        <GameGridCell 
          on:click={() => dispatch('leftClick', { x, y })} 
          on:contextmenu={() => dispatch('rightClick', { x, y })} 
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

  export let gridRows: Cell[][] = [];

	const dispatch = createEventDispatcher();
</script>