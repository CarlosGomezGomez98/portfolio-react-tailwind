import { useState } from "react";
import { cn } from "@/lib/utils.js";
import { Monitor, Server, Wrench, Layout, Plus, Minus, Cpu } from "lucide-react";
import { skills } from "./skills";

const currentYear = new Date().getFullYear();

const categories = [
    { id: "all", label: "All", icon: Layout },
    { id: "frontend", label: "Frontend", icon: Monitor },
    { id: "backend", label: "Backend", icon: Server },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "iot", label: "IoT", icon: Cpu },
];

export const SkillsSectionBento = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const filteredSkills = skills.filter(skill => {
        if (activeCategory === "all") return true;
        if (Array.isArray(skill.category)) {
            return skill.category.includes(activeCategory);
        }
        return skill.category === activeCategory;
    });

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-glow">
                    Technical <span className="text-primary">Stack</span>
                </h2>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer",
                                activeCategory === cat.id
                                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                                    : "bg-background border-border text-muted-foreground hover:border-primary/50"
                            )}
                        >
                            <cat.icon className="w-4 h-4" />
                            <span className="font-medium">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
                    {filteredSkills.map((skill, index) => {
                        const isExpanded = expandedCards[index];
                        const isWideOnDesktop = skill.className?.includes("md:col-span-2");
                        const isHighOnDesktop = skill.className?.includes("md:row-span-2");
                        const isWide = isWideOnDesktop || isHighOnDesktop;

                        return (
                            <div
                                key={index}
                                onClick={() => toggleExpand(index)}
                                className={cn(
                                    "group relative rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden gradient-border card-hover",
                                    // Si es ancho en escritorio, le damos 2 filas en móvil para más espacio
                                    isWideOnDesktop && "row-span-2 md:row-span-1",
                                    // Si ya tiene clases de span, las respetamos
                                    skill.className,
                                    isExpanded ? "ring-2 ring-primary/20 shadow-xl" : ""
                                )}
                            >
                                {/* Decoración de fondo (siempre presente, sutil) */}
                                <div className={cn(
                                    "absolute -right-4 -top-4 text-primary/5 transition-all duration-700",
                                    isExpanded ? "scale-150 rotate-12 opacity-10" : "group-hover:-rotate-12 group-hover:scale-110"
                                )}>
                                    <skill.icon size={150} />
                                </div>

                                <div className="relative h-full w-full p-6 flex flex-col items-start transition-all duration-500">
                                    {/* Header: Icono y Nombre */}
                                    <div className={cn(
                                        "flex items-center gap-4 transition-all duration-500 w-full",
                                        isExpanded ? "mb-4" : "h-full"
                                    )}>
                                        <div className={cn(
                                            "rounded-2xl bg-secondary/50 text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 shrink-0 flex items-center justify-center",
                                            isExpanded ? "p-2 w-10 h-10" : "p-3 w-14 h-14"
                                        )}>
                                            <skill.icon size={isExpanded ? 20 : 32} />
                                        </div>

                                        <div className="flex-1 text-left">
                                            <h3 className={cn(
                                                "font-semibold transition-all duration-500",
                                                isExpanded ? "text-lg text-primary" : "text-xl group-hover:text-primary"
                                            )}>
                                                {skill.name}
                                            </h3>
                                            {isExpanded && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-foreground">
                                                    {currentYear - skill.startYear}+ Years Experience
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contenido Extra (Cuerpo) */}
                                    <div className={cn(
                                        "transition-all duration-500 text-left w-full overflow-hidden",
                                        isExpanded
                                            ? "opacity-100 max-h-[200px] translate-y-0 pb-2"
                                            : "opacity-0 max-h-0 translate-y-4"
                                    )}>
                                        {isWide && (
                                            <p className={cn(
                                                "text-[11px] leading-relaxed text-muted-foreground mb-2",
                                                !isHighOnDesktop ? "line-clamp-none md:line-clamp-1" : "line-clamp-none"
                                            )}>
                                                {skill.description}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-1.5">
                                            {skill.details.map((detail, idx) => (
                                                <span
                                                    key={idx}
                                                    className="tech-tag"
                                                >
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hint visual sutil: Esquina inferior derecha */}
                                    <div className="absolute bottom-3 right-3 transition-opacity duration-300">
                                        <div className={cn(
                                            "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                                            isExpanded ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary/40 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                                        )}>
                                            {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};