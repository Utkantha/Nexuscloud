import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { AppState } from "@/lib/types"
import { Menu, Cloud, Lock, Share2, Zap, ChevronRight, CheckCircle2, Shield, Globe2, Star, Github, Twitter, Linkedin, Plus } from "lucide-react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const NAV_HEIGHT = "5rem"

const features = [
    {
        title: "Secure Storage",
        description: "Your files are encrypted and securely stored in our state-of-the-art cloud infrastructure.",
        icon: <Lock className="size-6 text-blue-500" />
    },
    {
        title: "Seamless Sharing",
        description: "Share files and folders instantly with anyone, with granular permission controls.",
        icon: <Share2 className="size-6 text-purple-500" />
    },
    {
        title: "Lightning Fast",
        description: "Experience blazing fast uploads and downloads, optimized for any device.",
        icon: <Zap className="size-6 text-yellow-500" />
    },
    {
        title: "Global Access",
        description: "Access your files from anywhere in the world with 99.9% uptime guarantee.",
        icon: <Globe2 className="size-6 text-emerald-500" />
    },
    {
        title: "Advanced Security",
        description: "Enterprise-grade security features including 2FA, audit logs, and compliance.",
        icon: <Shield className="size-6 text-rose-500" />
    },
    {
        title: "Smart Organization",
        description: "Intelligent sorting and categorization makes finding files a breeze.",
        icon: <CheckCircle2 className="size-6 text-indigo-500" />
    }
]

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Product Designer",
        content: "NexusCloud completely transformed how my team collaborates. The seamless sharing is incredible.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content: "The best cloud storage platform I've used. Fast, secure, and the UI is absolutely gorgeous.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Freelance Photographer",
        content: "I store all my high-res photos here. The upload speeds are unmatched and I never worry about security.",
        rating: 5
    }
]

const Landing = () => {
    const isLoggedIn = useSelector((state: AppState) => state.isLoggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/mydrive")
        }
    }, [isLoggedIn])

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden relative selection:bg-primary/30">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-indigo-500/15 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            {/* Floating Navbar */}
            <header
                className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 dark:border-white/5 transition-all duration-300"
                style={{ height: NAV_HEIGHT }}
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 sm:px-12">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 select-none cursor-pointer group"
                        onClick={() => navigate("/")}
                    >
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                            <Cloud className="size-6 text-white" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight" style={{ fontFamily: 'system-ui, Inter, Helvetica, Arial, sans-serif' }}>
                            NexusCloud
                        </span>
                    </motion.div>

                    {/* Desktop Login Button */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden sm:flex gap-4 items-center"
                    >
                        <Button variant="ghost" className="rounded-full px-6 font-semibold hover:bg-muted/50" onClick={() => navigate("/login")}>
                            Log in
                        </Button>
                        <Button 
                            size="lg" 
                            className="rounded-full px-8 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" 
                            onClick={() => navigate("/login")}
                        >
                            Sign Up Free
                        </Button>
                    </motion.div>

                    {/* Mobile Hamburger */}
                    <div className="sm:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50">
                                    <Menu className="size-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="flex flex-col gap-6 pt-24 bg-background/80 backdrop-blur-2xl border-l border-white/10">
                                <Button variant="outline" size="lg" className="rounded-full w-full font-semibold" onClick={() => navigate("/login")}>
                                    Log In
                                </Button>
                                <Button size="lg" className="rounded-full w-full font-semibold shadow-lg shadow-primary/20 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" onClick={() => navigate("/login")}>
                                    Sign Up Free
                                </Button>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col z-10 pt-32 sm:pt-40 relative">
                <section className="flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto w-full">
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40 border border-white/10 backdrop-blur-md text-sm font-medium hover:bg-muted/60 transition-colors cursor-pointer">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
                            <span className="text-foreground/80">NexusCloud 2.0 is now live</span>
                            <ChevronRight className="size-4 text-foreground/50 ml-1" />
                        </motion.div>
                        
                        <motion.h1 
                            variants={fadeUp}
                            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05] max-w-4xl"
                        >
                            Your Cloud. <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Your Files.</span> Anywhere.
                        </motion.h1>
                        
                        <motion.p 
                            variants={fadeUp}
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                        >
                            Effortlessly store, organize, and access your files from any device. Experience the next generation of cloud file management.
                        </motion.p>
                        
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button 
                                size="lg" 
                                className="rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 group bg-foreground text-background hover:bg-foreground/90 border-0" 
                                onClick={() => navigate("/login")}
                            >
                                Get Started for Free
                                <ChevronRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline"
                                className="rounded-full px-8 h-14 text-lg bg-background/30 backdrop-blur-md border-border hover:bg-muted transition-all duration-300"
                            >
                                View Pricing
                            </Button>
                        </motion.div>
                        
                        <motion.div variants={fadeUp} className="mt-12 text-sm text-muted-foreground font-medium flex items-center gap-4">
                            <div className="flex items-center gap-1"><CheckCircle2 className="size-4 text-green-500"/> No credit card required</div>
                            <div className="flex items-center gap-1"><CheckCircle2 className="size-4 text-green-500"/> 10GB Free forever</div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Dashboard Preview mockup */}
                <section className="mt-24 max-w-4xl mx-auto px-6 w-full relative z-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="rounded-[2rem] p-3 sm:p-4 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="rounded-[1.5rem] overflow-hidden bg-background border border-border flex flex-col aspect-video relative group">
                            {/* Abstract Dashboard representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                            
                            {/* Mockup Header */}
                            <div className="h-12 border-b border-border bg-muted/20 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="size-3 rounded-full bg-red-500/50" />
                                    <div className="size-3 rounded-full bg-yellow-500/50" />
                                    <div className="size-3 rounded-full bg-green-500/50" />
                                </div>
                            </div>

                            <div className="flex-1 flex items-center justify-center text-center p-8 relative">
                                <div>
                                    <Cloud className="size-20 sm:size-24 text-primary/20 mx-auto mb-6 transition-transform duration-500 group-hover:scale-110" />
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground/60 mb-2">Beautiful Dashboard</h3>
                                    <p className="text-sm sm:text-base text-muted-foreground/60">Manage your files with an intuitive interface.</p>
                                </div>
                                
                                {/* Floating Add Action Button */}
                                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 size-12 sm:size-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30 flex items-center justify-center hover:scale-110 hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer animate-bounce">
                                    <Plus className="size-6 sm:size-8 text-white" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="py-32 max-w-7xl mx-auto px-6 w-full">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything you need. <br/><span className="text-muted-foreground">Nothing you don't.</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Powerful features designed to make file management effortless and secure.</p>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeUp}
                                className="flex flex-col items-start p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-background/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Testimonials */}
                <section className="py-24 bg-muted/20 border-t border-b border-border">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Loved by teams worldwide</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border shadow-sm">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-lg mb-8 font-medium italic">"{t.content}"</p>
                                    <div>
                                        <h4 className="font-bold">{t.name}</h4>
                                        <p className="text-sm text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 max-w-5xl mx-auto px-6 w-full text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Ready to elevate your cloud?</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Join thousands of users who have already made the switch to NexusCloud.</p>
                    <Button 
                        size="lg" 
                        className="rounded-full px-12 h-16 text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" 
                        onClick={() => navigate("/login")}
                    >
                        Create your free account
                    </Button>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-border mt-auto">
                    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Cloud className="size-6 text-primary" />
                            <span className="font-bold text-xl">NexusCloud</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} NexusCloud Inc. All rights reserved.
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="size-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="size-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="size-5" /></a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Landing