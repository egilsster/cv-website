<script>
  import Arrow from "./Arrow.svelte";

  let darkMode = document.documentElement.classList.contains("dark");

  function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    darkMode = !darkMode;
    if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
</script>

<article
  class="flex flex-col h-screen items-center border-t-8 border-gray-800 dark:border-gray-200 sm:text-xl bg-[#e7eaea] dark:bg-gray-900 dark:text-gray-200"
>
  <button class="self-end m-4" on:click={toggleTheme}
    >{darkMode ? "🌜" : "🌞"}</button
  >

  <section class="flex flex-row justify-center lg:w-2/5 p-6 h-1/2">
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
        class="pt-4 text-right text-sm md:text-md sm:text-base font-extralight"
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
    font-family: "Source Sans Pro", sans-serif;
  }

  section {
    margin: auto;
  }
</style>
