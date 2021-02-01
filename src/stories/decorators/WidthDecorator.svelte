<script lang="ts">
  // the component used in the story.
  export let child;
  // the props inherited from the component's story
  export let props = {};

  export let width: string;
</script>

<div style="width: {width}">
  <svelte:component this={child} {...props}/>
</div>