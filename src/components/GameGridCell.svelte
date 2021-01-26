<div>
  { value }
  { state }
</div>

<script lang="ts">
  import { CellState } from "../enum/cell-state.enum";
  import { CellValue } from "../types/cell-value";

  export let state: CellState;
  export let value: CellValue;
</script>