"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, Calendar, User, Clock } from "lucide-react";

export function FeatureCases() {
    return (
        <section id="cases" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Track every provider. <br />
                            <span className="text-primary">Not just in spreadsheets.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            Velocity treats every provider enrollment as a trackable case. Assign owners, set due dates, and visualize progress on a collaborative board.
                        </p>
                        <ul className="space-y-4">
                            {["Real-time status tracking", "Automated due date alerts", "Clear ownership per provider"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80">
                                    <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <div className="size-2 rounded-full bg-primary" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full opacity-50" />

                        {/* Mock Kanban Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-card border border-white/10 p-6 rounded-xl shadow-2xl backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="inline-block px-2 py-1 rounded text-xs font-semibold bg-blue-500/10 text-blue-500 mb-2">
                                        In Progress
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground">Dr. Sarah Mitchell</h3>
                                    <p className="text-sm text-muted-foreground">Cardiology • Unity Hospital</p>
                                </div>
                                <button className="text-muted-foreground hover:text-foreground">
                                    <MoreHorizontal className="size-5" />
                                </button>
                            </div>

                            <div className="h-px bg-white/5 my-4" />

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <User className="size-4" />
                                    <span>Assignee</span>
                                </div>
                                <div className="text-right text-foreground flex items-center justify-end gap-2">
                                    <div className="size-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                                        JD
                                    </div>
                                    John Doe
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="size-4" />
                                    <span>Due Date</span>
                                </div>
                                <div className="text-right text-foreground">
                                    Oct 24, 2024
                                </div>

                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="size-4" />
                                    <span>Days Open</span>
                                </div>
                                <div className="text-right text-orange-400 font-medium">
                                    12 Days
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="absolute -bottom-6 -left-6 bg-[#1A1A1A] border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-3 z-10"
                        >
                            <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Clock className="size-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Average Turnaround</p>
                                <p className="text-lg font-bold text-foreground">-40% Faster</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
