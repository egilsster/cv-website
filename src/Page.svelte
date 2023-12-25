<script lang="ts">
  import LightSwitch from "./components/LightSwitch.svelte";
  import WorkItem from "./components/WorkItem.svelte";
  import EducationItem from "./components/EducationItem.svelte";
  import SkillItem from "./components/SkillItem.svelte";
  import { data } from "./cv-data";

  let darkMode = document.documentElement.classList.contains("dark");

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    const newTheme = dark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    darkMode = !darkMode;
  }

  const { work, education, skills } = data;
</script>

<main class="thin-scroll bg-[#f5f5f5] pb-1 dark:bg-gray-800">
  <LightSwitch on:click={toggleTheme} value={darkMode} />

  <article
    class="flex h-[500px] flex-col items-center border-t-8 border-gray-800 bg-[#e7eaea] sm:text-xl dark:border-gray-200 dark:bg-gray-900 dark:text-gray-200"
  >
    <section class="flex h-1/2 flex-row justify-center p-2 lg:w-2/5">
      <div class="space-y-14">
        <p class="font-bold">
          Hæ, ég heiti Egill &mdash; I build frontend architecture and tools as
          an engineer at <a href="https://www.qlik.com/">Qlik</a>
          in Lund, Sweden.
        </p>

        <p class="font-normal">
          I am very passionate about music, love learning and experiencing new
          things, especially traveling.
        </p>

        <p
          class="md:text-md pt-4 text-right text-sm font-extralight sm:text-base"
        >
          <b class="font-bold">Contact me:</b>
          <a href="mailto:egillsveinbjorns+cv@gmail.com"
            >egillsveinbjorns@gmail.com</a
          >
        </p>
      </div>
    </section>
  </article>

  <section class="container px-3 md:mx-auto lg:w-3/5 dark:text-gray-200">
    <div>
      <h2
        class="my-6 border-b border-black font-semibold md:text-2xl dark:border-gray-200"
      >
        Experience
      </h2>

      {#each work as workItem}
        <WorkItem
          company={workItem.company}
          position={workItem.position}
          startDate={workItem.startDate}
          endDate={workItem.endDate}
          website={workItem.website}
          imageName={`${workItem.company}.png`}
          summary={workItem.summary}
          highlights={workItem.highlights}
        />
      {/each}
    </div>

    <div>
      <h2
        class="my-6 border-b border-black font-semibold md:text-2xl dark:border-gray-200"
      >
        Education
      </h2>
      {#each education as educationItem}
        <EducationItem
          institution={educationItem.institution}
          studyType={educationItem.studyType}
          area={educationItem.area}
          startDate={educationItem.startDate}
          endDate={educationItem.endDate}
          imageName={`${educationItem.institution}.png`}
        />
      {/each}
    </div>

    <div>
      <h2
        class="my-6 border-b border-gray-900 font-semibold md:text-2xl dark:border-gray-200"
      >
        Skills
      </h2>

      {#each skills as skill}
        <SkillItem
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
        />
      {/each}
    </div>
  </section>
</main>

<style>
  article {
    font-family: "Source Sans Pro", sans-serif;
  }

  section {
    margin: auto;
  }
</style>
