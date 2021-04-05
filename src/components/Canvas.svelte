<script>
  import Arrow from "./Arrow.svelte";

  function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }
</script>

<article class="flex flex-col items-center">
  <section class="flex flex-row justify-center">
    <div class="about">
      <p class="font-bold">
        Hæ, ég heiti Egill &mdash; I am a software engineer at
        <a href="https://www.qlik.com/">Qlik</a>.
      </p>

      <p class="font-normal">
        I love meeting new people, learning and experiencing new things,
        <a href="https://github.com/egilsster">programming</a> and CrossFit.
      </p>

      <!-- padding-top: 15px;
    color: black;
    font-size: 12pt;
    text-align: right; -->
      <p class="footer font-extralight">
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
    font-size: 16pt;
  }

  section {
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 60%;
    height: 50%;
    max-width: 520px;
  }

  .about p {
    padding-bottom: 50px;
  }

  .footer {
    padding-top: 15px;
    color: black;
    font-size: 12pt;
    text-align: right;
  }
</style>
