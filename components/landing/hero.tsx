"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                >
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium text-muted-foreground">The new standard for provider enrollment</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-4xl"
                >
                    Credentialing, <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-blue-300">
                        at speed.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl"
                >
                    Turn provider enrollments into trackable cases. Upload PDFs for instant AI extraction, and manage approvals in one unified workspace.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/20 rounded-full">
                        Start Free Trial
                        <ArrowRight className="ml-2 size-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-10 border-white/10 hover:bg-white/5 bg-transparent backdrop-blur-sm rounded-full">
                        Book a Demo
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-primary" />
                        <span>AI-Powered Extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-primary" />
                        <span>Kanban Workflows</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-primary" />
                        <span>Automated Follow-ups</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
