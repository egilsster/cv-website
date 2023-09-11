<script lang="ts">
  import Section from "./Section.svelte";

  export let name: string;
  export let level: string;
  export let keywords: string[];
</script>

<Section>
  <h5>
    {name}
    <span class="pl-1 text-sm font-thin italic">{level}</span>
  </h5>

  {#if keywords.length > 0}
    <ul class="list-none font-extralight">
      {#each keywords as keyword}
        <li
          class="text-md inline-block rounded-sm m-0.5 px-1.5 py-0.5 bg-gray-900 text-white
           dark:bg-slate-200 dark:text-gray-900"
        >
          <a href={`https://www.google.com/search?q=${keyword}`} target="_blank"
            >{keyword}</a
          >
        </li>
      {/each}
    </ul>
  {/if}
</Section>
