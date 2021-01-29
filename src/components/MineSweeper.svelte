<main>
  <GameGrid gridRows={$gridRows} on:leftClick={onLeftClick} on:rightClick={onRightClick} />
</main>

<script lang="ts">
  import { onMount } from 'svelte';
  import GameGrid from './GameGrid.svelte';

  import { gridRows, initialise, toggleFlag, uncover } from '../stores/game';

  onMount(() => {
    initialise(8, 8, 5);
  })

  const onLeftClick = ({ detail: { x, y }}) => {
    uncover(x, y);
  }

  const onRightClick = ({ detail: { x, y }}) => {
    toggleFlag(x, y);
  }
  
</script>