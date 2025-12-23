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
                    {videoUrl ? (() => {
                        const getYouTubeID = (url) => {
                            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                            const match = url.match(regExp);
                            return (match && match[2].length === 11) ? match[2] : null;
                        };
                        const videoId = getYouTubeID(videoUrl);
                        
                        return videoId ? (
                             <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title={title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="text-muted-foreground">Invalid YouTube URL</div>
                        );
                    })() : (
                        <div className="text-muted-foreground flex flex-col items-center gap-2">
                            <p>Video not available yet.</p>
                            <p className="text-xs">Provide a YouTube URL in the project data.</p>
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