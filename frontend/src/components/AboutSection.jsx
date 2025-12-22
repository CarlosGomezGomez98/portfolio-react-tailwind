
import { cn } from "@/lib/utils";
import { Code, User, Briefcase } from "lucide-react";

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
                    With a strong background in web development and a deep love for technology, I am dedicated to creating innovative and user-friendly solutions.
                    My journey in the tech industry has been both challenging and rewarding, and I am committed to pushing the boundaries of what is possible.
                </p>

                <p className="text-muted-foreground">
                    I am always eager to learn new technologies and explore new ideas, and I am excited to continue my journey in the tech industry.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        {" "}Get In Touch
                    </a>

                    <a href="" className={cn(
                        "px-6 py-2 rounded-full border border-primary text-primary",
                        "hover:bg-primary/10 transition-colors duration-300"
                        )}>
                        {" "}Descargar CV
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg"> Web Development </h4>
                            <p className="text-muted-foreground">
                                Creating responsive and user-friendly websites using the latest web technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg"> User Experience </h4>
                            <p className="text-muted-foreground">
                                Ensuring that websites are easy to use and provide a positive user experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
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