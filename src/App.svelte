<script lang="ts">
  import Canvas from "./components/Canvas.svelte";
  import CV from "./components/CV.svelte";
  import { data } from "./cv-data";
</script>

<main>
  <Canvas />

  <CV {data} />
</main>
