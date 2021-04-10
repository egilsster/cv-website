<script lang="ts">
  export let tags: string[];
</script>

{#if tags.length > 0}
  <ul class="list-none font-extralight">
    {#each tags as tag}
      <li
        class="inline-block rounded-sm m-1 px-2 py-1 bg-purple-100 dark:bg-purple-900"
      >
        <a href={`https://www.google.com/search?q=${tag}`} target="_blank"
          >{tag}</a
        >
      </li>
    {/each}
  </ul>
{/if}
