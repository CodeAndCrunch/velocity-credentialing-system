"use client";

import { motion } from "framer-motion";
import { List, CheckSquare, MessageSquare, File, ArrowRight } from "lucide-react";

export function FeatureManagement() {
    return (
        <section id="management" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            One place for <br />
                            <span className="text-primary">the entire lifecycle.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            From intake to in-network. Manage internal notes, store documents securely, and handle committee approvals without leaving the provider's profile.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <MessageSquare className="size-6 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Contextual Notes</h4>
                                    <p className="text-sm text-muted-foreground">Tag team members and keep history attached to the case.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <File className="size-6 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Document Repository</h4>
                                    <p className="text-sm text-muted-foreground">Licenses, CVs, and Malpractice history—always one click away.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                <CheckSquare className="size-6 text-green-400 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Approval Workflows</h4>
                                    <p className="text-sm text-muted-foreground">Route cases to the Credentials Committee with a digital audit trail.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="bg-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                            {/* Mock Header */}
                            <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-muted-foreground">Case #1042</span>
                                    <div className="h-4 w-px bg-white/10" />
                                    <span className="text-sm font-bold text-foreground">Dr. Sarah Mitchell</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-red-500/20" />
                                    <div className="size-3 rounded-full bg-yellow-500/20" />
                                    <div className="size-3 rounded-full bg-green-500/20" />
                                </div>
                            </div>

                            {/* Mock Content area */}
                            <div className="p-6 bg-[#0A0A0A]">
                                <div className="flex gap-6">
                                    {/* Sidebar */}
                                    <div className="w-1/3 space-y-3">
                                        <div className="h-2 w-12 bg-white/10 rounded mb-4" />
                                        <div className="p-3 rounded bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                                            Overview
                                        </div>
                                        <div className="p-3 rounded text-muted-foreground hover:bg-white/5 text-xs font-medium cursor-pointer">
                                            Documents (4)
                                        </div>
                                        <div className="p-3 rounded text-muted-foreground hover:bg-white/5 text-xs font-medium cursor-pointer">
                                            Notes
                                        </div>
                                        <div className="p-3 rounded text-muted-foreground hover:bg-white/5 text-xs font-medium cursor-pointer">
                                            History
                                        </div>
                                    </div>

                                    {/* Main Panel */}
                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-sm font-bold text-foreground">Activity Log</h3>
                                            <div className="text-[10px] text-muted-foreground">Today</div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex gap-3">
                                                <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-500 font-bold shrink-0">SJ</div>
                                                <div className="text-xs">
                                                    <p className="text-foreground"><span className="font-semibold">Sarah Jenkins</span> changed status to <span className="text-yellow-500">In Review</span></p>
                                                    <p className="text-muted-foreground mt-1">10:42 AM</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="size-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-500 font-bold shrink-0">SYS</div>
                                                <div className="text-xs">
                                                    <p className="text-foreground"><span className="font-semibold">System</span> verified CA License #A12345</p>
                                                    <p className="text-muted-foreground mt-1">10:45 AM</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-500 font-bold shrink-0">SJ</div>
                                                <div className="text-xs">
                                                    <p className="text-foreground"><span className="font-semibold">Sarah Jenkins</span> uploaded <span className="underline">Packet.pdf</span></p>
                                                    <p className="text-muted-foreground mt-1">11:05 AM</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-4 border-t border-white/5">
                                            <div className="flex gap-2">
                                                <div className="h-8 flex-1 bg-white/5 rounded border border-white/10" />
                                                <div className="size-8 bg-primary rounded flex items-center justify-center">
                                                    <ArrowRight className="size-4 text-primary-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
