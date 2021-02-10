<header class="flex justify-between items-center bg-gray-700 h-12 text-white px-3">
  <div class="flex-1">
    <!-- svelte-ignore a11y-no-onchange -->
    <select value={difficulty} on:change={onChange} class="bg-gray-700 p-1">
      <option value={GameDifficulty.Easy}>Easy</option>
      <option value={GameDifficulty.Medium}>Med</option>
      <option value={GameDifficulty.Hard}>Hard</option>
    </select>
  </div>
  <div class="flex-1 flex justify-around">
    <span class="flex pr-5"><span class="text-2xl text-red-600 pr-1"><Flag/></span>{remainingFlags}</span>
    <span class="flex"><span class="text-2xl text-yellow-400 pr-1"><Timer/></span>{formattedTimeElapsed}</span>
  </div>
  <div class="flex-1 flex justify-end">
    <!-- {#if muted}
      <button class="text-2xl mx-2" on:click={() => dispatch('mute')}><VolumeHigh/></button>
    {:else}
      <button class="text-2xl mx-2" on:click={() => dispatch('unmute')}><VolumeMute/></button>
    {/if} -->
    <button class="text-2xl" on:click={() => dispatch('reset')}><Restart/></button>
  </div>
</header>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Restart from "svelte-material-icons/Restart.svelte";
  // import VolumeMute from "svelte-material-icons/VolumeMute.svelte";
  // import VolumeHigh from "svelte-material-icons/VolumeHigh.svelte";

  import Flag from "svelte-material-icons/Flag.svelte";
  import Timer from "svelte-material-icons/Timer.svelte";
  import { GameDifficulty } from '../enum/game-difficulty.enum';

  export let timeElapsed: number = 0;
  export let remainingFlags: number;
  export let muted: boolean;
  export let difficulty: GameDifficulty;

  const dispatch = createEventDispatcher();

  $: formattedTimeElapsed = timeElapsed.toString().padStart(3, '0');

  let onChange = (e: any): void => dispatch('setDifficulty', e.target.value);
</script>