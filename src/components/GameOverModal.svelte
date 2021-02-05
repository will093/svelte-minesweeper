<div class="bg-purple-500 bg-opacity-50 h-full w-full flex justify-center items-center">
  <div class="w-full py-2 bg-purple-500 bg-opacity-90 text-center text-2xl text-white">You {#if gameOver.win }win!{:else}lose :({/if}</div>
</div>

<script lang="ts">
  import type { GameOver } from "../models/game-over";

  export let gameOver: GameOver;
</script>