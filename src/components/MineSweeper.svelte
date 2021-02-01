<main>
  <GameGrid grid={$gameGrid} on:leftClick={onLeftClick} on:rightClick={onRightClick} />
  <div>{$remainingFlags}</div>
</main>

<script lang="ts">
  import { onMount } from 'svelte';
  import GameGrid from './GameGrid.svelte';

  import { gameGrid, gameSettings, remainingFlags, initialise, toggleFlag, uncover } from '../stores/game';

  onMount(() => {
    initialise($gameSettings);
  })

  const onLeftClick = ({ detail: { x, y }}) => {
    uncover(x, y);
  }

  const onRightClick = ({ detail: { x, y }}) => {
    toggleFlag(x, y);
  }
  
</script>