import { SiHtml5, SiJavascript, SiReact, SiMqtt, SiFastapi, SiBootstrap, SiMongodb, SiApachesuperset, SiPostman, SiMariadb, SiTailwindcss, SiPython, SiPostgresql, SiDocker, SiGithub, SiFigma } from "react-icons/si";
import { Radio } from "lucide-react";

export const skills = [
    // Frontend
    {
        name: "HTML/CSS",
        startYear: 2022,
        category: "frontend",
        icon: SiHtml5,
        className: "md:row-span-1",
        description: "Expertise in building semantic, accessible, and responsive web structures with advanced CSS layouts.",
        details: ["Semantic HTML5", "Flexbox & Grid", "SASS/SCSS", "Responsive Design"]
    },
    {
        name: "JavaScript",
        startYear: 2022,
        category: "frontend",
        icon: SiJavascript,
        className: "md:col-span-2 ",
        description: "Deep understanding of core JS, asynchronous programming, and modern ES6+ features for complex logic.",
        details: ["ES6+", "Async/Await", "DOM Manipulation", "Functional Programming"]
    },
    {
        name: "React",
        startYear: 2024,
        category: "frontend",
        icon: SiReact,
        className: "md:col-span-1",
        description: "Building scalable SPAs with high-performance components and optimized state management.",
        details: ["Hooks", "Context API", "React Router", "State Management"]
    },
    {
        name: "Tailwind CSS",
        startYear: 2024,
        category: "frontend",
        icon: SiTailwindcss,
        className: "md:col-span-1",
        description: "Rapidly designing custom, modern interfaces using a utility-first approach and design systems.",
        details: ["Utility-First", "Custom Themes", "Responsive Variants", "JIT Engine"]
    },
    {
        name: "Bootstrap",
        startYear: 2022,
        category: "frontend",
        icon: SiBootstrap,
        className: "md:col-span-1",
        description: "Designing responsive, mobile-first websites using the world's most popular front-end open-source toolkit.",
        details: ["Grid System", "Responsive Utilities", "Custom Components"]
    },
    // Backend
    {
        name: "Python",
        startYear: 2021,
        category: "backend",
        icon: SiPython,
        className: "md:col-span-2 md:row-span-2",
        description: "Versatile development from automation scripts to high-performance data processing and backend APIs.",
        details: ["Automation Scripts", "Pandas & NumPy", "FastAPI", "Web Scraping", "Scikit-learn", "PyTorch", "TensorFlow"]
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
    {
        name: "MariaDB",
        startYear: 2022,
        category: "backend",
        icon: SiMariadb,
        className: "md:col-span-1",
        description: "Managing reliable relational data with high performance and high availability storage systems.",
        details: ["Relational Design", "Optimization", "Storage Engines", "Clustering"]
    },
    {
        name: "MongoDB",
        startYear: 2022,
        category: "backend",
        icon: SiMongodb,
        className: "md:col-span-1",
        description: "Building scalable and flexible applications with a high-performance document-oriented NoSQL database.",
        details: ["BSON Documents", "Schema Design", "Sharding & Replication"]
    },
    {
        name: "MQTT",
        startYear: 2021,
        category: ["iot", "backend"],
        icon: SiMqtt,
        className: "md:col-span-1",
        description: "Expertise in M2M messaging protocols for efficient data transmission between sensors and servers.",
        details: ["Pub/Sub Architecture", "Broker Management", "QoS Levels"]
    },
    {
        name: "API Development",
        startYear: 2021,
        category: "backend",
        icon: SiFastapi,
        className: "md:col-span-2",
        description: "Designing and implementing high-performance RESTful APIs to bridge the gap between IoT data and user interfaces.",
        details: ["RESTful Architecture", "FastAPI", "JWT Authentication", "Swagger/OpenAPI Documentation"]
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
    {
        name: "Postman",
        startYear: 2022,
        category: "tools",
        icon: SiPostman,
        className: "md:col-span-1",
        description: "Leading platform for API development, testing, and documentation to streamline team workflows.",
        details: ["API Testing", "Environments", "Collection Runner", "Documentation"]
    },
    // IoT
    {
        name: "Bi Dashboard",
        startYear: 2021,
        category: ["iot", "backend"],
        icon: SiApachesuperset, // O SiTableau / SiPowerbi según lo que uses
        className: "md:col-span-2",
        description: "Transforming complex datasets into interactive dashboards to monitor energy efficiency and IoT KPIs.",
        details: ["Grafana", "Power BI", "Custom Charting (Chart.js)", "Apache Superset", "Real-time"]
    },
    {
        name: "LoRaWAN",
        startYear: 2021,
        category: "iot",
        icon: Radio,
        className: "md:col-span-1",
        description: "Deploying low-power, wide-area networks for long-range communication in IoT solutions.",
        details: ["TTN / ChirpStack", "Gateway Config", "Node Activation", "Payload Decoders"]
    },
    {
        name: "Sigfox",
        startYear: 2021,
        category: "iot",
        icon: Radio, // Puedes usar el mismo de LoRaWAN o buscar SiSigfox
        className: "md:col-span-1",
        description: "Implementing ultra-narrowband connectivity for low-power IoT devices in industrial monitoring.",
        details: ["Device Provisioning", "Callback", "Radio Link"]
    },


];
