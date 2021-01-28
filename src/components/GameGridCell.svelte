<div on:click on:contextmenu|preventDefault
  class="flex justify-center items-center w-12 h-12 text-white text-2xl border border-white"
  class:bg-gray-grad={state !== CellState.Uncovered}
  style="background-color: {color}">
  {#if state === CellState.Uncovered}
    {#if value}{ value }{/if}
  {:else if state === CellState.Flagged}
    p
  {/if}
</div>

<script lang="ts">
  import { CellState } from "../enum/cell-state.enum";
  import type { CellValue } from "../types/cell-value";

  export let state: CellState;
  export let value: CellValue;

  $: color = state === CellState.Uncovered ? cellColors[value] : '#9c9c9c';


  let cellColors = {
    m: '#000000',
    0: '#e3e3e3',
    1: '#1b68e3',
    2: '#178f04',
    3: '#ff1919',
    4: '#6632a8',
    5: '#8a4f01',
    6: '#2d006b',
    7: '#075c03',
    8: '#a69800',
  };
</script>