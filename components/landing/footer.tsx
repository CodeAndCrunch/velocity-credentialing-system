
import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="size-6 rounded bg-primary/10 flex items-center justify-center">
                        <Zap className="size-4 text-primary" />
                    </div>
                    <span className="font-bold text-lg text-foreground">Velocity</span>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
                </div>

                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Velocity Inc.
                </p>
            </div>
        </footer>
    );
}
