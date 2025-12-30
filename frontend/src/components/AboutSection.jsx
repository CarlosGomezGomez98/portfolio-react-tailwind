
import { cn } from "@/lib/utils";
import { Code, Database, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold"> Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        I am a Full Stack & IoT Engineer specialized in creating seamless connections between devices, data, and users.
                        With a strong background in LoRaWAN/Sigfox networks and a recently completed M.Sc. in Big Data Management,
                        I build robust architectures that transform complex sensor data into strategic business intelligence.
                    </p>

                    <p className="text-muted-foreground">
                        Throughout my career at companies like Cellnex Telecom and MODI S.L. I have led the development of energy efficiency platforms and smart monitoring solutions,
                        integrating secure backends with high-performance, user-centered interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}Get In Touch
                        </a>

                        <a
                            href="/CV_Carlos_Gomez_Gomez_ENG_V2.pdf"
                            download="CV_Carlos_Gomez_Gomez.pdf"
                            className={cn(
                                "px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center"
                            )}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground">
                                    Developing responsive web applications using Python, JavaScript, and SQL. I focus on building efficient backends and user-friendly interfaces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Data Engineering & Analytics </h4>
                                <p className="text-muted-foreground">
                                    Specialized in creating ETL pipelines and real-time dashboards to transform raw data into actionable insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management </h4>
                                <p className="text-muted-foreground">
                                    Organizing and managing projects to ensure they are completed on time and to the highest standard.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
};