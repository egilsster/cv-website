<script lang="ts">
  import { formatDate } from "../utils";
  import Section from "./Section.svelte";

  export let institution: string;
  export let area: string;
  export let studyType: string;
  export let startDate: string;
  export let endDate: string | undefined = undefined;
  export let imageName: string;
</script>

<Section>
  <header class="flex items-center">
    <div class="mr-4 dark:bg-gray-200 rounded-sm border border-gray-400/25 p-2">
      <img
        class="self-start align-middle object-contain h-12 md:w-14"
        src={`img/${imageName}`}
        alt={`Logo for ${institution}`}
      />
    </div>

    <section class="text-md md:text-lg">
      <p class="">
        {studyType},
        <span class="text-gray-600 dark:text-gray-300">{institution}</span>
      </p>
      <p>
        {area}
        <time class="text-gray-500 dark:text-gray-400 text-xs pl-2"
          >{formatDate(startDate)} - {formatDate(endDate)}</time
        >
      </p>
    </section>
  </header>
</Section>
