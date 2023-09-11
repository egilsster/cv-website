import type { ResumeSchema } from "./cv-schema";

export const data: ResumeSchema = {
  meta: { theme: "elegant" },
  basics: {
    name: "Egill Sveinbjörnsson",
    label: "Senior Software Engineer",
    picture:
      "https://avatars3.githubusercontent.com/u/5672257?s=460&u=14853eedcade1581de96ea11f752f61bb75e5c3c&v=4",
    email: "egillsveinbjorns@gmail.com",
    phone: "",
    website: "",
    summary:
      "I live for music and I love meeting new people, traveling, learning and experiencing new things and programming. Recently, I have gotten enamoured with the Rust programming language.",
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
      {
        network: "Last.fm",
        username: "egill_s",
        url: "https://www.last.fm/user/egill_s",
      },
    ],
  },
  work: [
    {
      company: "Qlik",
      position: "Senior Software Engineer",
      website: "https://qlik.com",
      startDate: "2021-03-02",
      summary:
        "Member of a front-end core team that is focused on front-end architecture and streamlining delivery pipelines, workflows and various other pieces all directly related to the front-end strategy at Qlik. We build tools, infrastructure, and empower our fellow frontend engineering teams to ship higher quality software in less time.",
      highlights: [],
    },
    {
      company: "Vizlib",
      position: "Senior Software Developer",
      website: "https://home.vizlib.com",
      startDate: "2020-11-02",
      endDate: "2021-02-24",
      summary:
        "Worked as a developer and half dev-ops on a new product called Astrato.",
      highlights: [],
    },
    {
      company: "Qlik",
      position: "Software Engineer",
      website: "https://qlik.com",
      startDate: "2017-11-01",
      endDate: "2020-10-23",
      summary:
        "Was part of various teams during this time. I mainly worked on a resource storage service for our SaaS offering which was a node.js service written in TypeScript and deployed with Kubernetes. Later on I was a member of a team tasked with delivering the first NLP capabilities for our products. Lastly, I moved my focus to the front-end world and joined the analytics client core team where I was working on improving our general front-end guidelines, improving the development experience in that project and other work that required close collaboration between our front-end teams in order to synchronize big changes across our front-end projects.",
      highlights: [
        "Member of core team for the main analytical UI for Qlik Sense (Oct 2019 and onwards)",
        "Team tech lead (Governed content)",
        "Primary maintainer for a back end service now written for Node.js in TypeScript and deployed dockerized to our cloud infrastructure",
        "Cross team knowledge sharing to integrate our service to the Qlik ecosystem",
        "Led initiative to rewrite our Java service from scratch in Node.js using TypeScript. Included creating a prototype, pitching to management and making appropriate planning",
      ],
    },
    {
      company: "Qlik",
      position: "Junior Software Engineer",
      website: "https://qlik.com",
      startDate: "2016-08-01",
      endDate: "2017-10-31",
      summary:
        "As a Software Engineer I am part of a small team that is building a general purpose resource storage service that provides the ability to publish, relate, find, consume, and version resources of any type through a RESTful interface. It will serve as infrastructure across products and platforms (cloud, desktop, enterprise and mobile). My team and I are part of the process from A to Z, which includes designing and implementing the APIs, deploying the service to AWS, monitoring the service, and integrating it into the Qlik product with various teams across the globe.",
      highlights: [
        "Primary maintainer for a back end service written in Java and deployed dockerized to AWS",
        "Was responsible for on-boarding and deploying the Java service to our cloud pipeline",
        "Greatly improved development workflow by converting the Qlik DataMarket product to TypeScript",
      ],
    },
    {
      company: "Fraunhofer USA",
      position: "Intern",
      website: "https://www.fraunhofer.org",
      startDate: "2016-01-15",
      endDate: "2016-06-15",
      summary:
        "Intern at Fraunhofer USA Center for Experimental Software Engineering doing all kinds of software projects.",
      highlights: [
        "Played a big part of introducing them to micro-services architecture and was the main software architect for my group",
        "Set up all our projects using TypeScript",
        "Introduced them to build process / dev environment best practices, using SASS for CSS, using webpack to bundle and more",
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
        "My contributions to the projects was writing an API where teachers and student can send requests for certain things like changing a course. I also created the front end for this particular function. The API was written in NodeJS and the front end was done with AngularJS.",
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
  skills: [
    {
      name: "Programming languages (interpreted)",
      level: "master",
      keywords: ["TypeScript", "JavaScript"],
    },
    {
      name: "Programming languages (compiled)",
      level: "intermediate",
      keywords: ["Rust"],
    },
    {
      name: "Build services",
      level: "master",
      keywords: ["Github Actions", "CircleCI"],
    },
  ],
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
      fluency: "Semi-fluent third language",
    },
  ],
  references: [],
};
