<script lang="ts">
  import { formatDate, getTimeRange } from "../utils";
  import Section from "./Section.svelte";

  export let company: string;
  export let position: string;
  export let startDate: string;
  export let endDate: string | undefined = undefined;
  export let summary: string | undefined = undefined;
  export let imageName: string;
  export let website: string;
  export let highlights: string[] = [];
</script>

<Section>
  <header class="flex items-center">
    <div class="mr-4 rounded-sm border border-gray-400/25 p-2 dark:bg-gray-200">
      <img
        class="h-7 self-start align-middle"
        src={`img/${imageName}`}
        alt={`Logo for ${company}`}
      />
    </div>

    <div>
      <p class="text-lg">
        {position},
        <a href={website} target="_blank">{company}</a>
      </p>
      <time class="align-top text-xs text-gray-500 dark:text-gray-400"
        >{formatDate(startDate)} - {formatDate(endDate)} ({getTimeRange(
          startDate,
          endDate,
        )})
      </time>
    </div>
  </header>

  <div>
    <p class="text-justify font-light">{summary}</p>

    {#if highlights.length > 0}
      <ul class="my-4 list-outside list-disc px-4">
        {#each highlights as highlight}
          <li class="font-light">{highlight}</li>
        {/each}
      </ul>
    {/if}
  </div>
</Section>

<style>
</style>
