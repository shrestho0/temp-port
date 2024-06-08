

export type UnitSkill = {
    name: string,
    exp_level?: string,
}

export type Skills = {
    languages: UnitSkill[];
    frameworks: UnitSkill[];
    databases: UnitSkill[];
    tools: UnitSkill[];
};


const skills: Skills = {
    languages: [
        { name: "JavaScript", exp_level: "Intermediate" },
        { name: "TypeScript", exp_level: "Intermediate" },
        { name: "Python", exp_level: "Intermediate" },
        { name: "Java", exp_level: "Beginner" },
        { name: "Dart", exp_level: "Beginner" },
        { name: "Golang", exp_level: "Beginner" },
        { name: "SQL", exp_level: "Intermediate" },
    ],
    frameworks: [
        { name: "SvelteKit", exp_level: "Intermediate" },
        { name: "Express", exp_level: "Intermediate" },
        { name: "Django", exp_level: "Intermediate" },
        { name: "Elysia", exp_level: "Beginner" },
        { name: "Flutter", exp_level: "Beginner" },
        { name: "SpringBoot", exp_level: "Beginner" },
        { name: "Fiber", exp_level: "Beginner" },
    ],
    databases: [
        { name: "MySQL", exp_level: "Intermediate" },
        { name: "Mongo", exp_level: "Intermediate" },
        { name: "Postgres", exp_level: "Beginner" },
        { name: "SurrealDB", exp_level: "Beginner" },
    ],
    tools: [
        { name: "Docker" },
        { name: "Vitest" },
        { name: "Nodejs" },
        { name: "Bun" },
        { name: "Maven" },
        { name: "Tailwind" },
        { name: "Firebase" },
    ],

}

export default skills;
