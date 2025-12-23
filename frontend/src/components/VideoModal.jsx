import { X } from "lucide-react";
import { useEffect } from "react";

export const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header/Title */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-secondary transition-colors"
                        aria-label="Close modal"
                    >
                        <X  className="hover:text-primary cursor-pointer" size={24} />
                    </button>
                </div>

                {/* Video Container */}
                <div className="aspect-video bg-black flex items-center justify-center">
                    {videoUrl ? (
                        <video 
                            key={videoUrl}
                            controls 
                            autoPlay 
                            muted
                            playsInline
                            className="w-full h-full outline-hidden"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="text-muted-foreground flex flex-col items-center gap-2">
                            <p>Video not available yet.</p>
                            <p className="text-xs">Place your mp4 in the public folder.</p>
                        </div>
                    )}
                </div>

                {/* Footer/Info */}
                <div className="p-4 bg-secondary/30 text-xs text-muted-foreground">
                    <p>Demo Preview • {title}</p>
                </div>
            </div>
        </div>
    );
};