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
    <div class="mr-4">
      <img
        class="self-start align-middle w-20"
        src={`img/${imageName}`}
        alt={`Logo for ${institution}`}
      />
    </div>

    <section>
      <p>
        <span class="font-semibold">{studyType}</span>,
        <span class="text-gray-500">{institution}</span>
      </p>
      <p>
        {area}
        <time class="text-gray-500 text-xs pl-2"
          >{formatDate(startDate)} - {formatDate(endDate)}</time
        >
      </p>
    </section>
  </header>
</Section>
