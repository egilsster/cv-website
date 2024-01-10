import type { ResumeSchema } from "./cv-schema";

export const data: ResumeSchema = {
  meta: { theme: "elegant" },
  basics: {
    name: "Egill Sveinbjörnsson",
    label: "Software Engineer",
    email: "egillsveinbjorns+cv@gmail.com",
    summary:
      "I am deeply committed to delivering excellence with a quality-first approach. My work ethic is defined by thorough problem-solving, collaborative teamwork, and open, clear communication. At my core, I am committed to delivering outstanding user experiences, guided by meticulous attention to detail and high professional standards.",
    location: {
      address: "",
      postalCode: "",
      city: "Malmö",
      countryCode: "SE",
      region: "Europe",
    },
    profiles: [
      {
        network: "GitHub",
        username: "egilsster",
        url: "https://github.com/egilsster",
      },
      {
        network: "LinkedIn",
        username: "esveinbjornsson",
        url: "https://linkedin.com/in/esveinbjornsson/",
      },
    ],
  },
  skills: [
    {
      name: "Languages",
      level: "",
      keywords: ["TypeScript", "JavaScript", "Python", "Rust"],
    },
    {
      name: "Web",
      level: "",
      keywords: ["React", "Svelte", "CSS", "HTML"],
    },
    {
      name: "Tooling",
      level: "",
      keywords: ["Webpack", "Vite", "ESLint", "Prettier", "Biome"],
    },
    {
      name: "Build systems",
      level: "",
      keywords: ["GitHub Actions", "CircleCI"],
    },
  ],
  work: [
    {
      company: "Qlik",
      position: "Senior Software Engineer",
      website: "https://qlik.com",
      startDate: "2021-03-02",
      summary:
        "Member of the frontend core team that is focused on frontend architecture and streamlining delivery pipelines, workflows and various other pieces all directly related to the frontend strategy at Qlik. We build tools, infrastructure, and empower our fellow frontend engineering teams to ship higher quality software in less time.",
      highlights: [
        "Building and documenting internal APIs and tools for our developers, saving them valuable time every month by reducing boilerplate and maximizing effectiveness.",
        "Building our frontend delivery pipeline with reusable GitHub workflows and actions.",
        "Providing thorough code reviews and constructive feedback, accelerating project completion and enhancing quality for developers at all levels.",
        "Achieved substantial cost savings and saved development hours by optimizing build pipelines, enhancing CI efficiency.",
        "Improving performance in critical areas, drastically elevating user experience and satisfaction.",
        "Acting as a promotion sponsor for several colleagues, supporting their advancement to more senior positions and career growth.",
        "A strong proponent for code quality, correctness, and testing. Standardized quality tooling across our frontend projects, ensuring consistency and excellence in engineering practices.",
      ],
    },
    {
      company: "Vizlib",
      position: "Senior Software Developer",
      website: "https://home.vizlib.com",
      startDate: "2020-11-02",
      endDate: "2021-03-01",
      summary:
        "Contributed to the development of a new product called Astrato. My responsibilities included not only technical development but also operational tasks like setting up the office. This experience allowed me to hone my skills in both software development and operational management, particularly in an international team setting.",
      highlights: [
        "Building the user authentication layer for Astrato, focusing on secure and efficient user access.",
        "Collaborated closely with the development team in Poland, enhancing product development through cross-border teamwork.",
        "Played an integral role in establishing the new office in Lund.",
      ],
    },
    {
      company: "Qlik",
      position: "Software Engineer",
      website: "https://qlik.com",
      startDate: "2017-11-01",
      endDate: "2020-10-23",
      summary:
        "Contributed to several key teams across different locations. In Iceland, I developed the resource storage service for our SaaS product. After relocating to Sweden, I assumed the role of tech lead for a new team, where I developed and integrated our new natural language capabilities into our products. This involved creating a backend layer that interfaced between the UI and natural language models. Later, I shifted my focus entirely to frontend development, joining the analytics client core team. In this role, I was instrumental in defining our frontend guidelines, improving the development experience, and coordinating significant, high-impact changes across our frontend projects through close collaboration with various teams.",
      highlights: [
        "Successfully improved our development velocity and reduced the resource footprint of our service by 75% through leading a strategic initiative to rewrite our Java service in Node.js using TypeScript.",
        "As the primary maintainer of our backend service, I was responsible for deployments, ensuring SLA compliance, observability, and seamless operations. My responsibilities also included effectively translating feature requests into actionable tickets.",
        "Cross team knowledge sharing to integrate our service into the Qlik ecosystem.",
      ],
    },
    {
      company: "Qlik",
      position: "Junior Software Engineer",
      website: "https://qlik.com",
      startDate: "2016-08-01",
      endDate: "2017-10-31",
      summary:
        "Contributed to building a general-purpose resource storage service, designed to offer functionalities like publishing, relating, finding, consuming, and versioning various resources through a RESTful interface. This service became a crucial part of the infrastructure across diverse platforms including cloud, desktop, enterprise, and mobile. Our team managed the entire project lifecycle, from the initial design and implementation to deploying and observability in our cloud infrastructure. Additionally, we were integrated this service into Qlik's global product suite, collaborating with teams around the world to ensure a seamless and efficient implementation.",
      highlights: [
        "As a champion for a backend service, I successfully managed a Java application, ensuring its optimal performance in our cloud infrastructure, reaching all SLA targets.",
        "Led the successful onboarding and deployment of our new Java service into the cloud pipeline.",
        "Instrumental in introducing TypeScript to the company, I spearheaded the migration of the Qlik DataMarket product to TypeScript. This move significantly boosted development velocity and release confidence.",
      ],
    },
    {
      company: "Fraunhofer USA",
      position: "Intern",
      website: "https://www.fraunhofer.org",
      startDate: "2016-01-15",
      endDate: "2016-06-15",
      summary:
        "As an Intern at Fraunhofer USA Center for Experimental Software Engineering, I was actively involved in a variety of software projects. My role consisted not only hands-on development but also architectural design and process enhancement, contributing significantly to the organization's software engineering practices.",
      highlights: [
        "Played a pivotal role in introducing microservices architecture, serving as the main software architect for my group and leading the transition to more modular and scalable software.",
        "Led the adoption of TypeScript for all our projects, enhancing code reliability and maintainability.",
        "Introduced best practices in the build process and development environment.",
      ],
    },
  ],
  volunteer: [
    {
      organization: "Reykjavik University",
      position: "Developer",
      website: "https://www.ru.is",
      startDate: "2015-12-01",
      endDate: "2016-12-21",
      summary:
        "Developed a part of Centris, which is a Learning Management System and Student Management System for Reykjavik University.",
      highlights: [
        "My contributions to the projects was writing an API where teachers and student can send requests for certain things like changing a course. I also created the front end for this particular function. The API was written in NodeJS and the front end was done with AngularJS",
      ],
    },
  ],
  education: [
    {
      institution: "Reykjavík University",
      area: "Computer Science",
      studyType: "Bachelor of Science",
      startDate: "2013-08-01",
      endDate: "2016-06-01",
      gpa: "",
      courses: [],
    },
    {
      institution: "Dale Carnegie",
      area: "Certificate of Achievement",
      studyType: "Dale Carnegie Class - Next generation # 16.15.",
      startDate: "2015-09-01",
      endDate: "2015-11-01",
      gpa: "",
      courses: [],
    },
    {
      institution: "Community College of Breiðholt",
      area: "Natural Sciences",
      studyType: "College",
      startDate: "2007-06-01",
      endDate: "2011-12-01",
      gpa: "",
      courses: [],
    },
  ],
  awards: [],
  publications: [],
  languages: [
    {
      language: "Icelandic",
      fluency: "Native speaker",
    },
    {
      language: "English",
      fluency: "Fluent second language",
    },
    {
      language: "Swedish",
      fluency: "Advanced third language",
    },
  ],
  references: [],
};
