import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GithubDashboard } from "@/components/GithubDashboard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#030712] text-white">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <GithubDashboard />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
