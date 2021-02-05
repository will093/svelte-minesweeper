<script lang="ts">
  // the component used in the story.
  export let child;
  // the props inherited from the component's story
  export let props = {};

  export let width: string = 'auto';
  export let height: string = 'auto';
</script>

<div style="width: {width}; height: {height}">
  <svelte:component this={child} {...props}/>
</div>