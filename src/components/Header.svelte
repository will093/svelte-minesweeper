<header class="flex justify-between items-center bg-gray-700 h-12 text-white px-5">
  <div class="flex-1">
    
  </div>
  <div class="flex-1 flex justify-around">
    <span class="flex"><span class="text-2xl pr-1"><Flag/></span>{remainingFlags}</span>
    <span class="flex"><span class="text-2xl pr-1"><Timer/></span>{formattedTimeElapsed}</span>
  </div>
  <div class="flex-1 flex justify-end">
    <button class="text-2xl" on:click={() => dispatch('reset')}><Restart/></button>
  </div>
</header>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Restart from "svelte-material-icons/Restart.svelte";
  import Flag from "svelte-material-icons/Flag.svelte";
  import Timer from "svelte-material-icons/Timer.svelte";

  export let timeElapsed: number = 0;
  export let remainingFlags: number;

  const dispatch = createEventDispatcher();

  $: formattedTimeElapsed = timeElapsed.toString().padStart(3, '0');
</script>