import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="size-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-foreground">
                        Velocity
                    </span>
                </div>



                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
                        Log in
                    </Link>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
