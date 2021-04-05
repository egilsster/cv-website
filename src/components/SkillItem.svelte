<script lang="ts">
  import TagList from "./TagList.svelte";
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

  <TagList tags={keywords} />
</Section>

<style>
</style>
