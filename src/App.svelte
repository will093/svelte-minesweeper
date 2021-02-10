<MineSweeper 
  gameGrid={$gameGrid}
  remainingFlags={$remainingFlags}
  timeElapsed={$timeElapsed}
  gameOver={$gameOver}
  difficulty={$difficulty}
  on:uncover={onUncover}
  on:toggleFlag={onToggleFlag}
  on:reset={onReset}
  on:setDifficulty={onSetDifficulty}
/>

<script lang="ts">
  import  MineSweeper from './components/MineSweeper.svelte';

  import { onMount } from 'svelte';

  import { gameGrid, gameSettings, remainingFlags, timeElapsed, initialise, toggleFlag, uncover, gameOver, difficulty } from './stores/game';

  onMount(() => {
    initialise($gameSettings);
  })

  const onUncover = ({ detail: { x, y }}) => {
    uncover(x, y); 
  }

  const onToggleFlag = ({ detail: { x, y }}) => { 
    toggleFlag(x, y);
  }

  const onReset = () => {
    initialise($gameSettings);
  }

  const onSetDifficulty = ({ detail }) => {
    difficulty.set(detail);
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