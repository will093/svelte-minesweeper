<script lang="ts">
  import { CellState } from "../enum/cell-state.enum";
  import type { CellValue } from "../types/cell-value";

  export let state: CellState;
  export let value: CellValue;

  $: color = state === CellState.Exploded ? cellColors.exploded: cellColors[value];

  let cellColors = {
    exploded: '#ff1f17',
    m: "#000000",
    0: "#e3e3e3",
    1: "#1b68e3",
    2: "#178f04",
    3: "#ff1919",
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
  class="flex justify-center items-center flex-1 text-white text-2xl border border-white"
  class:bg-gray-grad={state === CellState.Covered || state === CellState.Flagged}
  style="background-color: {color}"
>
  <div> 
    {#if state === CellState.Uncovered || state === CellState.Exploded }
      {#if value}{value}{/if}
    {:else if state === CellState.Flagged}
      p
    {/if}
  </div>
  <div class="pt-full"></div>
</div>
