"use client";

import { motion } from "framer-motion";
import { FileText, FileCheck, ScanLine, ArrowRight } from "lucide-react";

export function FeatureExtraction() {
    return (
        <section id="extraction" className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Drop a PDF. <br />
                            <span className="text-blue-400">Get a profile.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            Velocity's AI engine extracts NPIs, licenses, education, and dates instantly. No more manual data entry or copy-pasting from provider packets.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg bg-card border border-white/5">
                                <h4 className="font-semibold text-foreground mb-2">99% Accuracy</h4>
                                <p className="text-sm text-muted-foreground">On CAQH, CVs, and State Licenses</p>
                            </div>
                            <div className="p-4 rounded-lg bg-card border border-white/5">
                                <h4 className="font-semibold text-foreground mb-2">Instant Sync</h4>
                                <p className="text-sm text-muted-foreground">Data populates your roster immediately</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-center py-8">
                        <div className="relative w-full max-w-md aspect-[4/3] bg-card border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden flex items-center gap-4">

                            {/* PDF Icon */}
                            <motion.div
                                className="size-20 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0"
                                animate={{ x: [0, 50, 0], opacity: [1, 0, 1] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                            >
                                <FileText className="size-10 text-red-500" />
                            </motion.div>

                            {/* Processing Stream */}
                            <motion.div
                                className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden"
                            >
                                <motion.div
                                    className="h-full bg-primary w-full"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            {/* Profile Card */}
                            <motion.div
                                className="w-40 bg-[#1A1A1A] border border-white/10 rounded-xl p-3 shrink-0"
                                animate={{ x: [0, -50, 0], opacity: [1, 1, 1] }} // Simplified animation for demo
                            /* A more complex sequence would show the card APPEARING after the PDF disappears */
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="size-8 rounded-full bg-white/10" />
                                    <div className="h-2 w-16 bg-white/20 rounded" />
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1.5 w-full bg-white/10 rounded" />
                                    <div className="h-1.5 w-full bg-white/10 rounded" />
                                    <div className="h-1.5 w-2/3 bg-blue-500/50 rounded" />
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <div className="size-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <FileCheck className="size-2.5 text-green-500" />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
