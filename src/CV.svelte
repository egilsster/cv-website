<script lang="ts">
  import { intervalToDuration } from "date-fns/intervalToDuration";
  import { data } from "./cv-data";
  import Lights from "./Lights.svelte";
  import Grain from "./Grain.svelte";

  const formatDate = (value: string | undefined): string => value ?? "Present";

  function getTimeRange(start: string, end: string | undefined): string {
    function fmt(text: string, plural: boolean): string {
      return text.concat(plural ? "s" : "");
    }

    const { months, years } = intervalToDuration({
      start: new Date(start),
      end: end ? new Date(end) : new Date(),
    });
    const ranges: string[] = [];
    if (years) {
      ranges.push(`${years} ${fmt("year", years > 1)}`);
    }
    if (months) {
      ranges.push(`${months} ${fmt("month", months > 1)}`);
    }
    return ranges.join(", ");
  }
</script>

<Grain />
<main
  id="top"
  class="flex flex-col items-center border-y-4 border-slate-300 bg-slate-900 p-3 pb-4"
>
  <Lights />

  <article class="z-0 container max-w-[750px] px-3 text-gray-300">
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <section
      tabindex={0}
      class="font-mono-code my-24 flex flex-col justify-center space-y-4 mix-blend-luminosity sm:text-xl"
    >
      <p class="font-bold">Hello there!</p>

      <p>
        My name is Egill &mdash; I build infrastructure, user interfaces, and
        developer tools at <a href="https://www.qlik.com/">Qlik</a>.
      </p>

      <p class="text-sm">
        I am deeply committed to delivering excellence with a quality-first
        approach. My work ethic is defined by thorough problem-solving,
        collaborative teamwork, and open, clear communication.
      </p>

      <p class="text-sm">
        At my core, I am committed to delivering outstanding user experiences,
        guided by meticulous attention to detail, conscientiousness, and high
        standards.
      </p>

      <p
        class="md:text-md pt-4 text-right font-mono text-xs font-extralight md:text-sm"
      >
        <b class="font-bold">Contact me:</b>
        <a href="mailto:egillsveinbjorns+cv@gmail.com"
          >egillsveinbjorns@gmail.com</a
        >
      </p>
    </section>

    <section>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div tabindex={0}>
        <h2
          class="font-mono-code mt-6 mb-2 border-b border-gray-200 font-semibold md:text-2xl"
        >
          Development skills
        </h2>

        <dl
          class="font-mono-code flex flex-col md:grid md:grid-cols-4 md:gap-4"
        >
          {#each data.skills as { name, keywords }}
            <div class="flex flex-col items-start">
              <dt class="font-mono-code mb-1 underline">{name}</dt>
              <dd class="flex flex-row text-sm md:flex-col">
                {#each keywords as keyword}
                  <p class="group whitespace-normal">
                    {keyword}<span class="group-last:hidden md:hidden"
                      >,&nbsp;</span
                    >
                  </p>
                {/each}
              </dd>
            </div>
          {/each}
        </dl>
      </div>

      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div tabindex={0}>
        <h2
          class="font-mono-code mt-6 mb-2 border-b border-gray-200 font-semibold md:text-2xl"
        >
          Experience
        </h2>

        {#each data.work as { company, position, website, startDate, endDate, summary, highlights }}
          <article
            tabindex={0}
            class="my-1 flex border-b-2 pt-2 pb-4 last:border-b-0"
          >
            <section class="space-y-4">
              <header class="font-mono-code flex items-center">
                <div
                  class="mr-4 rounded-xs border border-gray-400/25 bg-gray-200 p-1.5"
                >
                  <img
                    class="h-7 self-start align-middle"
                    src={`img/${company}.svg`}
                    alt={`Logo for ${company}`}
                  />
                </div>

                <div>
                  <p class="text-base lg:text-lg">
                    {position},
                    <a href={website} target="_blank">{company}</a>
                  </p>
                  <time class="align-top text-xs text-gray-400"
                    >{formatDate(startDate)} &ndash; {formatDate(endDate)} ({getTimeRange(
                      startDate,
                      endDate,
                    )})
                  </time>
                </div>
              </header>

              <div class="font-system-ui text-base">
                <p class="text-justify">{summary}</p>

                {#if highlights && highlights.length > 0}
                  <ul class="my-4 list-outside list-disc px-4">
                    {#each highlights as highlight}
                      <li class="font-light">{highlight}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </section>
          </article>
        {/each}
      </div>

      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div tabindex={0}>
        <h2
          class="mt-6 mb-2 border-b border-gray-200 text-lg font-semibold md:text-2xl"
        >
          Education
        </h2>
        {#each data.education as { institution, studyType, startDate, endDate, area }}
          <article
            tabindex={0}
            class="my-1 flex border-b-2 pt-2 pb-4 last:border-b-0"
          >
            <section class="space-y-4">
              <section class="flex flex-col font-mono text-sm">
                <p>
                  {studyType}, <span class="text-gray-400">{institution}</span>
                </p>
                <p>
                  {area}
                  <time class="pl-2 text-xs text-gray-400"
                    >{startDate} &ndash; {endDate}</time
                  >
                </p>
              </section>
            </section>
          </article>
        {/each}
      </div>
    </section>
  </article>

  <footer class="font-mono-code z-0 py-12 text-gray-300">
    <a href="#top">Back to the top</a>
  </footer>
</main>
