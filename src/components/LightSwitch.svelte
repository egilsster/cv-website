<script lang="ts">
  import { fade } from "svelte/transition";

  export let value: boolean;
</script>

<button
  class="self-end m-2 w-12 h-12 border-blue-200 bg-blue-200 dark:bg-gray-800 dark:border-gray-800 rounded-full border border-1 disable-dbl-tap-zoom"
  on:click
>
  {#if value}
    <div in:fade={{ duration: 250 }}>🌜</div>
  {:else}
    <div in:fade={{ duration: 250 }}>🌞</div>
  {/if}
</button>
