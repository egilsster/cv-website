<script lang="ts">
  import type { ResumeSchema } from "../cv-schema";
  import WorkItem from "./WorkItem.svelte";
  import EducationItem from "./EducationItem.svelte";
  import SkillItem from "./SkillItem.svelte";
  import Header from "./Header.svelte";

  export let data: ResumeSchema;

  const { work, education, skills } = data;
</script>

<section class="container md:mx-auto lg:w-3/5">
  <h1 class="text-5xl font text-center my-12">Curriculum Vitae</h1>

  <div class="">
    <Header>Work Experience</Header>

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
    <Header>Education</Header>

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
    <Header>Skills</Header>

    {#each skills as skill}
      <SkillItem
        name={skill.name}
        level={skill.level}
        keywords={skill.keywords}
      />
    {/each}
  </div>
</section>
