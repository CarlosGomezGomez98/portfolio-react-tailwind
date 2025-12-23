import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    
    // Protection states
    const [mathQuestion, setMathQuestion] = useState({ a: 0, b: 0, result: 0 });
    const [userAnswer, setUserAnswer] = useState("");
    const [loadTime] = useState(Date.now());

    // Generate a new math question on load
    useEffect(() => {
        generateQuestion();
    }, []);

    const generateQuestion = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setMathQuestion({ a, b, result: a + b });
        setUserAnswer("");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        
        // 1. Time-based protection (Bots submit too fast)
        const timeElapsed = Date.now() - loadTime;
        if (timeElapsed < 4000) {
            toast({
                title: "Wait a moment",
                description: "You're sending messages too fast. Please wait 4 seconds.",
                variant: "destructive",
            });
            return;
        }

        // 2. Math challenge protection
        if (parseInt(userAnswer) !== mathQuestion.result) {
            toast({
                title: "Incorrect Answer",
                description: "The security check result is incorrect. Try again.",
                variant: "destructive",
            });
            generateQuestion();
            return;
        }

        // 3. Local Rate Limiting (1 per hour)
        const lastSubmission = localStorage.getItem("last_contact_submission");
        const oneHour = 60 * 60 * 1000;
        
        if (lastSubmission && (Date.now() - lastSubmission < oneHour)) {
            const minutesLeft = Math.ceil((oneHour - (Date.now() - lastSubmission)) / (1000 * 60));
            toast({
                title: "Rate Limit Exceeded",
                description: `Please wait ${minutesLeft} minutes before sending another message.`,
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        
        const formData = new FormData(event.target);
        formData.append("access_key", "f3fdbc4f-4db3-450f-b02d-2ebfde7be1b5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                toast({
                    title: "Message Sent!",
                    description: "Thanks for reaching out! I'll get back to you soon.",
                });
                localStorage.setItem("last_contact_submission", Date.now().toString());
                event.target.reset();
                generateQuestion();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Something went wrong while sending your message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Get in <span className="text-primary">touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities and collaborations.
                    Whether you have a project in mind or just want to chat, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Side: Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 rounded-2xl gradient-border transition-colors">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold overflow-x-auto whitespace-nowrap  tracking-widest text-muted-foreground mb-1">Email</p>
                                    <a href="mailto:carlosgomezgomez1998@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        carlosgomezgomez1998@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 rounded-2xl gradient-border transition-colors">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold  tracking-widest text-muted-foreground mb-1">Phone</p>
                                    <a href="tel:+34627304090" className="text-lg font-medium hover:text-primary transition-colors">
                                        +34 627 30 40 90
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 rounded-2xl gradient-border transition-colors">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold  tracking-widest text-muted-foreground mb-1">Location</p>
                                    <p className="text-lg font-medium">Barcelona, Spain</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 space-y-4">
                            <h4 className="text-sm font-bold  tracking-widest text-muted-foreground">Connect With Me</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/carlos-g%C3%B3mez-g%C3%B3mez-a91961185/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border" aria-label="LinkedIn Profile">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/CarlosGomezGomez98" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border" aria-label="GitHub Profile">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-8 shadow-xl card-hover">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            Send a Message
                        </h3>
                        
                        <form onSubmit={onSubmit} className="space-y-5">
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
                                <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Your Email</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Your Message</label>
                                <textarea name="message" id="message" required rows="4" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Hello, I'd like to talk about..." />
                            </div>

                            {/* Math Challenge (Zero Cost Spam Protection) */}
                            <div className="bg-secondary/20 p-4 rounded-xl border border-border/50">
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                                    Security Check: What is {mathQuestion.a} + {mathQuestion.b}?
                                </label>
                                <input 
                                    type="number" 
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    required 
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="Answer"
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 py-4 shadow-lg shadow-primary/20",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <Send className="w-5 h-5" />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
