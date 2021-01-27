<div class="bg-blue-900">
  { value }
  { state }
</div>

<script lang="ts">
  import type { CellState } from "../enum/cell-state.enum";
  import type { CellValue } from "../types/cell-value";

  export let state: CellState;
  export let value: CellValue;
</script>