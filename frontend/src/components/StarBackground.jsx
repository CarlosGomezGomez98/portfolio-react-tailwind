import { useState, useEffect } from "react";

// star = id, size, x, y, opacity, animationDuration
// meteor = id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Detect initial dark mode
        setIsDark(document.documentElement.classList.contains("dark"));

        // Watch for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDark(document.documentElement.classList.contains("dark"));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        generateStars();
        generateMeteors();

        let timeoutId = null;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                generateStars();
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
            observer.disconnect();
        };

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-1000">
            {/* Light Mode: Aura Blobs & Pattern */}
            {!isDark && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden dot-pattern [animation:fade-in-simple_1s_ease-out_forwards]">
                    <div className="absolute top-[-25%] left-[-15%] w-[90%] h-[80%] bg-primary/30 blur-[130px] rounded-full animate-drift" />
                    <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[90%] bg-indigo-500/25 blur-[120px] rounded-full animate-drift [animation-delay:-7s]" />
                    <div className="absolute top-[15%] right-[-15%] w-[60%] h-[60%] bg-purple-500/20 blur-[100px] rounded-full animate-drift [animation-delay:-12s]" />
                    <div className="absolute bottom-[30%] left-[0%] w-[50%] h-[50%] bg-blue-400/15 blur-[110px] rounded-full animate-drift [animation-delay:-4s]" />
                    
                    {/* Light Meteors */}
                    {meteors.map((meteor) => (
                        <div key={meteor.id} 
                        className="light-meteor animate-meteor" 
                        style={{
                            width: `${meteor.size * 1.5}px`, 
                            height: `${meteor.size * 1.5}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animationDelay: `${meteor.delay}s`,
                            animationDuration: `${meteor.animationDuration}s`,
                        }}/>
                    ))}
                </div>
            )}

            {/* Dark Mode: Stars and Meteors */}
            {isDark && (
                <div className="h-full w-full [animation:fade-in-simple_1s_ease-out_forwards]">
                    {stars.map((star) => (
                        <div key={star.id} 
                        className="star animate-pulse-subtle" 
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}/>
                    ))}
                    
                    {meteors.map((meteor) => (
                        <div key={meteor.id} 
                        className="meteor animate-meteor" 
                        style={{
                            width: `${meteor.size}px`,
                            height: `${meteor.size}px`,
                            left: `${meteor.x}%`,
                            top: `${meteor.y}%`,
                            animationDelay: `${meteor.delay}s`,
                            animationDuration: `${meteor.animationDuration}s`,
                        }}/>
                    ))}
                </div>
            )}
        </div>
    );
};