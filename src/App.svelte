<script lang="ts">
  import Canvas from "./components/Canvas.svelte";
  import CV from "./components/CV.svelte";
  import { data } from "./cv-data";
</script>

<main class="bg-[#f5f5f5] dark:bg-gray-800 pb-1">
  <Canvas />

  <CV {data} />
</main>
