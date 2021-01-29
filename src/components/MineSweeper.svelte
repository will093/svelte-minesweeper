<main>
  <GameGrid gridRows={$gridRows} on:leftClick={onLeftClick} on:rightClick={onRightClick} />
</main>

<script lang="ts">
  import { onMount } from 'svelte';
  import GameGrid from './GameGrid.svelte';

  import { gridRows, initialise } from '../stores/game';

  onMount(() => {
    initialise(8, 8, 15);
  })

  const onLeftClick = ({ detail: { x, y }}) => {
    console.log('left click', x, y);
  }

  const onRightClick = ({ detail: { x, y }}) => {
    console.log('right click', x, y);
  }
  
</script>