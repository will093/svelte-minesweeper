<script lang="ts">
	import MineSweeper from './components/MineSweeper.svelte';
</script>

<MineSweeper/>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>