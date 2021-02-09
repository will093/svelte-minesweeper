<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { backOut, quadOut } from 'svelte/easing';
  import { CellState } from "../enum/cell-state.enum";
  import type { CellValue } from "../types/cell-value";
  import Flag from "svelte-material-icons/Flag.svelte";

  export let state: CellState;
  export let value: CellValue;

  $: color =
    state === CellState.Exploded ? cellColors.exploded : cellColors[value];

  let cellColors = {
    exploded: "#ff1f17",
    m: "#d6d6d6",
    0: "#d6d6d6",
    1: "#1b68e3",
    2: "#178f04",
    3: "#ff7512",
    4: "#6632a8",
    5: "#8a4f01",
    6: "#2d006b",
    7: "#075c03",
    8: "#a69800",
  };
</script>

<div
  on:click
  on:contextmenu|preventDefault
  class="relative border border-white w-10 text-white text-2xl"
>
  <div class="flex justify-center items-center w-full h-full" style="background-color: {color}">
    <div class="pt-full" />
    {#if value === "m"}
      <div
        class="h-3/5 w-3/5 bg-cover"
        style="background-image: url('/images/mine.svg')"
      />
    {:else if value}
      {value}
    {/if}
  </div>
  {#if state === CellState.Covered || state === CellState.Flagged}
    <div out:fade={{ duration: 500, easing: quadOut }} class="absolute inset-0 flex justify-center items-center bg-gray-grad">
      {#if state === CellState.Flagged }
      <div transition:scale={{ duration: 250, easing: backOut }} class="text-red-600">
        <Flag />
      </div>
      {/if}
    </div>
  {/if}
</div>

<style>

</style>