import { useState } from "react";
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";

const projects = [
    {
        id: 1,
        title: "Barcelona Real Estate Price Predictor",
        description: ` An end-to-end data science project that scrapes real estate data, performs market segmentation using
                      clustering, and predicts housing prices in Barcelona using regression models. `,
        image: "/projects/project1.png",
        tags: [
            "Data Science", "Machine Learning", "Regression", "Clustering", "Data Visualization",
            "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook", "Streamlit", "Selenium"
        ],
        githubUrl: "https://github.com/CarlosGomezGomez98/idealista-data-analysis?tab=readme-ov-file",
        demoUrl: null,
    },
    {
        id: 2,
        title: "Lighting Control System for Padel Courts",
        description: `Designed and implemented a full stack IoT solution based on LoRaWAN for remote control of padel court lighting 
                      (on/off and scheduling). Participated in the full project cycle: requirements analysis, platform design, backend APIs, 
                      database management, and user interface development.`,
        image: "/projects/project2.png",
        tags: [
            "IoT", "LoRaWAN", "Full Stack", "Backend", "Database", "User Interface",
            "Python", "PhP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery",
            "MariaDB", "REST API", "Docker", "MQTT", "GitHub",
        ],
        githubUrl: null,
        videoUrl: "https://youtu.be/8_wsleQYRS4",
        isEnterprise: true,
    },
    {   
        id: 3,  
        title: "Integrated Energy & Environmental Monitoring System",
        description: `Developed a comprehensive real-time monitoring platform for building energy management. 
                      The system tracks photovoltaic generation, electric vehicle (EV) charging stations, 
                      and building consumption, alongside environmental parameters via LoRaWAN air quality sensors 
                      to optimize energy efficiency and sustainability.`,
        image: "/projects/project3.png",
        tags: [
            "IoT", "Energy Efficiency", "Photovoltaic", "EV Charging", "LoRaWAN", "Sustainability",
            "Dashboard Design", "Real-time Data", "Environmental Monitoring", "Smart Building"
        ],
        githubUrl: null,
        isEnterprise: true,
    },
]

const ProjectCard = ({ project, onPlayVideo }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="group gradient-border overflow-hidden card-hover flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {project.isEnterprise && (
                    <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-md backdrop-blur-sm">
                            Enterprise
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 min-h-[60px]">
                    <div className="flex flex-wrap gap-2">
                        {(isExpanded ? project.tags : project.tags.slice(0, 6)).map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-2 py-1 text-[11px] font-medium border rounded-full bg-secondary/70 text-secondary-foreground transition-all"
                            >
                                {tag}
                            </span>
                        ))}
                        {!isExpanded && project.tags.length > 6 && (
                            <button 
                                onClick={() => setIsExpanded(true)}
                                className="px-2 py-1 text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer"
                                title="Show more tags"
                            >
                                ...
                            </button>
                        )}
                        {isExpanded && (
                            <button 
                                onClick={() => setIsExpanded(false)}
                                className="px-2 py-1 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                                Show less
                            </button>
                        )}
                    </div>
                </div>
            
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">
                    {project.description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            aria-label="View Source on GitHub"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {project.videoUrl && (
                        <button
                            onClick={() => onPlayVideo(project)}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                            aria-label="Play Demo Video"
                        >
                            <Play size={20} fill="currentColor" className="opacity-70" />
                            <span className="text-sm font-medium">Demo</span>
                        </button>
                    )}
                    {(project.link || project.demoUrl) && (
                        <a
                            href={project.link || project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            aria-label="View Project"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
                    A selection of my most significant work, ranging from data-driven insights to full-stack IoT solutions. 
                    These projects demonstrate my ability to bridge the gap between complex data analysis and practical, scalable applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            onPlayVideo={(proj) => setSelectedProject(proj)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto" 
                        href="https://github.com/CarlosGomezGomez98"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check My GitHub 
                        <ArrowRight size={16} className="ml-2" />
                    </a>
                </div>
            </div>

            <VideoModal 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)}
                videoUrl={selectedProject?.videoUrl}
                title={selectedProject?.title}
            />
        </section>
    );
}