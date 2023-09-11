<script lang="ts">
  import { fade } from "svelte/transition";

  export let value: boolean;
</script>

<button
  class="border-1 disable-dbl-tap-zoom fixed right-0 mr-1 mt-3 h-8 w-8 rounded-full border border-blue-200 bg-blue-200 focus:outline-none dark:border-gray-800 dark:bg-gray-800"
  on:click
>
  {#if value}
    <div in:fade={{ duration: 250 }}>🌜</div>
  {:else}
    <div in:fade={{ duration: 250 }}>🌞</div>
  {/if}
</button>
