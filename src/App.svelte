<MineSweeper 
  gameGrid={$gameGrid}
  remainingFlags={$remainingFlags}
  timeElapsed={$timeElapsed}
  on:leftClick={onLeftClick}
  on:rightClick={onRightClick}
  on:reset={onReset}
/>

<script lang="ts">
  import  MineSweeper from './components/MineSweeper.svelte';

  import { onMount } from 'svelte';

  import { gameGrid, gameSettings, remainingFlags, timeElapsed, initialise, toggleFlag, uncover } from './stores/game';

  onMount(() => {
    initialise($gameSettings);
  })

  const onLeftClick = ({ detail: { x, y }}) => {
    uncover(x, y);
  }

  const onRightClick = ({ detail: { x, y }}) => {
    toggleFlag(x, y);
  }

  const onReset = () => {
    initialise($gameSettings);
  }
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
 
  @tailwind utilities;
</style>