type Social = {
  label: string;
  link: string;
};

type Presentation = {
  name: string;
  mail: string;
  title: string;
  short_title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  name: "Shrestho",
  mail: "coffee@shrestho.me",
  short_title: 'Shrestho',
  title: `Hi, I’m Shrestho 👋`,
  // profile: "/profile.webp",
  description:
    "Hello, i'm a *full-stack developer* with over *2 years* of web experience and final year undergrad student. I am currently working with *SvelteKit, Express, Elysia, Typescript *. Outside of study and development work, I am learning NestJs, HTMX and Rust and working on my startup *DeshiCode*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/shrestho0/",
    },
    {
      label: "Github",
      link: "https://github.com/shrestho0/",
    },
  ],
};

export default presentation;
