<script lang="ts">
  import { formatDate, getTimeRange } from "../utils";
  import Section from "./Section.svelte";

  export let company: string;
  export let position: string;
  export let startDate: string;
  export let endDate: string = undefined;
  export let summary: string = undefined;
  export let imageName: string;
  export let website: string;
  export let highlights: string[] = [];
</script>

<Section>
  <header class="flex items-center">
    <div class="mr-4">
      <img
        class="self-start align-middle h-7"
        src={`img/${imageName}`}
        alt={`Logo for ${company}`}
      />
    </div>

    <div>
      <p class="text-lg">
        {position},
        <a href={website} target="_blank">{company}</a>
      </p>
      <time class="text-gray-500 text-xs align-top"
        >{formatDate(startDate)} - {formatDate(endDate)} ({getTimeRange(
          startDate,
          endDate
        )})
      </time>
    </div>
  </header>

  <div>
    <p class="font-light text-justify">{summary}</p>

    {#if highlights.length > 0}
      <ul class="list-disc list-outside px-4 my-4">
        {#each highlights as highlight}
          <li class="font-light">{highlight}</li>
        {/each}
      </ul>
    {/if}
  </div>
</Section>

<style>
</style>
