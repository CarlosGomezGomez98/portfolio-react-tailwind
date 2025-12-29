
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSectionBento } from "@/components/SkillsSectionBento";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        { /* Theme Toggle */}
        <ThemeToggle />
        { /* Background Effects */}
        <StarBackground />

        { /* Navbar */}
        <Navbar />
        { /* Main Content */}

        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSectionBento />
            <ProjectsSection />
            <ContactSection />
        </main>
        { /* Footer */}
        <FooterSection />
    </div>
};