<script lang="ts">
  import { CellState } from "../enum/cell-state.enum";
  import type { CellValue } from "../types/cell-value";
  import Flag from "svelte-material-icons/Flag.svelte";

  export let state: CellState;
  export let value: CellValue;

  $: color =
    state === CellState.Exploded ? cellColors.exploded : cellColors[value];

  let cellColors = {
    exploded: "#ff1f17",
    m: "#e3e3e3",
    0: "#e3e3e3",
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
  class="flex flex-1 text-white text-2xl border border-white w-10"
  class:bg-gray-grad={state === CellState.Covered ||
    state === CellState.Flagged}
  style="background-color: {color}"
>
  <div class="flex justify-center items-center w-full">
    {#if state === CellState.Uncovered || state === CellState.Exploded}
      {#if value === "m"}
        <div
          class="h-3/5 w-3/5 bg-cover"
          style="background-image: url('/images/mine.svg')"
        />
      {:else if value}
        {value}
      {/if}
    {:else if state === CellState.Flagged}
      <Flag />
    {/if}
  </div>
  <div class="pt-full" />
</div>

<style>

</style>