<script>
  import Arrow from "./Arrow.svelte";

  function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }
</script>

<article class="flex flex-col items-center sm:text-xl">
  <section class="flex flex-row justify-center sm:w-3/5 p-6">
    <div class="space-y-14">
      <p class="font-bold">
        Hæ, ég heiti Egill &mdash; I am a software engineer at
        <a href="https://www.qlik.com/">Qlik</a>.
      </p>

      <p class="font-normal">
        I love meeting new people, learning and experiencing new things,
        <a href="https://github.com/egilsster">programming</a> and CrossFit.
      </p>

      <p
        class="pt-4 text-black text-right text-sm md:text-md sm:text-base font-extralight"
      >
        <b class="font-bold">Contact me:</b>
        <a href="mailto:egillsveinbjorns@gmail.com"
          >egillsveinbjorns@gmail.com</a
        >
      </p>
    </div>
  </section>

  <div class="items-center m-4">
    <Arrow on:click={scrollDown} />
  </div>
</article>

<style>
  article {
    border-top: 10px solid #212121;
    font-family: "Source Sans Pro", sans-serif;
    height: 100vh;
    background-color: #e7eaea;
  }

  section {
    margin: auto;
    height: 50%;
  }
</style>
