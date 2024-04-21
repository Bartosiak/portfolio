import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
