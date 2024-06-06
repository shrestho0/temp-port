export type Experience = {
    title: string;
    techs: string[];

    time_line: string;
    company: string;
    work_location?: string;
    company_link?: string;

};

const experiences: Experience[] = [
    {
        title: "Freelancer",
        company: "Fiverr",
        company_link: "https://www.fiverr.com/shrestho0",
        techs: ["SvelteKit", "Express", "TypeScript", "Docker"],
        time_line: "March, 2024 - Current",
        work_location: "Remote",
    },
    {
        title: "Server Maintainer (Contractual, Part-time)",
        time_line: "2020 - Current",
        techs: ["Docker", "Deployment", "CI/CD"],
        company: "Team-X Limited",
        company_link: "https://www.teamx.com.bd/",
        work_location: "Dhaka, Bangladesh"
    },
    {
        company: "Unifone Limited",
        work_location: "Dhaka, Bangladesh",
        title: "Software Engineer (Project Based Contract)",
        time_line: "2023 - 2024",
        techs: ["SvelteKit", "Express", "REST API", "Docker", "CI/CD"],
        company_link: 'https://www.unifonbd.com/',
    },



];

export default experiences;
