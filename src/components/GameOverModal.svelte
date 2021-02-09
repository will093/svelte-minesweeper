<div 
  class:bg-red-600={!gameOver.win} 
  class:bg-green-600={gameOver.win} 
  class="bg-opacity-60 h-full w-full flex justify-center items-center">
  <div 
    in:fly={{ delay: 2000, x: 0, y: 100 }} 
    class:bg-red-600={!gameOver.win} 
    class:bg-green-600={gameOver.win} 
    class="py-2 w-full bg-opacity-90 text-center text-2xl text-white">{#if gameOver.win }You win!{:else}Game Over :({/if}</div>
</div>

<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { GameOver } from "../models/game-over";

  export let gameOver: GameOver;
</script>