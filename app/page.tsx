import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeatureCases } from "@/components/landing/feature-cases";
import { FeatureExtraction } from "@/components/landing/feature-extraction";
import { FeatureManagement } from "@/components/landing/feature-management";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      <Hero />
      <FeatureCases />
      <FeatureExtraction />
      <FeatureManagement />
      <Footer />
    </main>
  );
}
