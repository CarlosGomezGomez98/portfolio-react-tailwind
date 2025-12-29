import { SiHtml5, SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiPython, SiDjango, SiNodedotjs, SiPostgresql, SiDocker, SiGithub, SiFigma } from "react-icons/si";

export const skills = [
    // Frontend
    {
        name: "HTML/CSS",
        startYear: 2020,
        category: "frontend",
        icon: SiHtml5,
        className: "md:row-span-1",
        description: "Expertise in building semantic, accessible, and responsive web structures with advanced CSS layouts.",
        details: ["Semantic HTML5", "Flexbox & Grid", "SASS/SCSS", "Responsive Design"]
    },
    {
        name: "JavaScript",
        startYear: 2020,
        category: "frontend",
        icon: SiJavascript,
        className: "md:col-span-2 ",
        description: "Deep understanding of core JS, asynchronous programming, and modern ES6+ features for complex logic.",
        details: ["ES6+", "Async/Await", "DOM Manipulation", "Functional Programming"]
    },
    {
        name: "React",
        startYear: 2021,
        category: "frontend",
        icon: SiReact,
        className: "md:col-span-1",
        description: "Building scalable SPAs with high-performance components and optimized state management.",
        details: ["Hooks", "Context API", "React Router", "State Management"]
    },
    {
        name: "TypeScript",
        startYear: 2022,
        category: "frontend",
        icon: SiTypescript,
        className: "md:col-span-1",
        description: "Leveraging static typing to catch errors early and improve codebase maintainability and readability.",
        details: ["Interfaces & Types", "Generics", "Strict Typing", "API Integration"]
    },
    {
        name: "Tailwind CSS",
        startYear: 2021,
        category: "frontend",
        icon: SiTailwindcss,
        className: "md:col-span-1",
        description: "Rapidly designing custom, modern interfaces using a utility-first approach and design systems.",
        details: ["Utility-First", "Custom Themes", "Responsive Variants", "JIT Engine"]
    },
    // Backend
    {
        name: "Python",
        startYear: 2019,
        category: "backend",
        icon: SiPython,
        className: "md:col-span-2 md:row-span-2",
        description: "Versatile development from automation scripts to high-performance data processing and backend APIs.",
        details: ["Automation Scripts", "Pandas & NumPy", "FastAPI", "Web Scraping"]
    },
    {
        name: "Django",
        startYear: 2021,
        category: "backend",
        icon: SiDjango,
        className: "md:col-span-1",
        description: "Developing secure, production-ready web applications with the 'batteries-included' framework.",
        details: ["DRF", "ORM", "Authentication", "Admin Panel"]
    },
    {
        name: "Node.js",
        startYear: 2022,
        category: "backend",
        icon: SiNodedotjs,
        className: "md:col-span-1",
        description: "Building fast, non-blocking server-side applications and RESTful microservices with JavaScript.",
        details: ["Express.js", "REST APIs", "NPM Ecosystem", "Environment Config"]
    },
    {
        name: "PostgreSQL",
        startYear: 2022,
        category: "backend",
        icon: SiPostgresql,
        className: "md:col-span-1",
        description: "Designing robust relational schemas and optimizing complex queries for data integrity and speed.",
        details: ["SQL Queries", "Database Design", "Indexes", "Migrations"]
    },
    // Tools
    {
        name: "Docker",
        startYear: 2023,
        category: "tools",
        icon: SiDocker,
        className: "md:col-span-2",
        description: "Streamlining development and deployment processes through reliable containerization environments.",
        details: ["Containerization", "Docker Compose", "Images", "Volumes"]
    },
    {
        name: "Git & GitHub",
        startYear: 2020,
        category: "tools",
        icon: SiGithub,
        className: "md:col-span-1",
        description: "Managing project history and team collaboration through efficient version control workflows.",
        details: ["Branching Strategy", "Pull Requests", "Actions (CI/CD)", "Resolving Conflicts"]
    },
    {
        name: "Figma",
        startYear: 2022,
        category: "tools",
        icon: SiFigma,
        className: "md:col-span-1",
        description: "Bridging the gap between design and code with high-fidelity prototypes and collaborative design.",
        details: ["UI/UX Prototyping", "Design Systems", "Auto Layout", "Components"]
    },
];
