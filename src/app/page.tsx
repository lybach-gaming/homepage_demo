import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RoiCalculator />
        <Services />
        <TechStack />
        <Projects />
        <Comparison />
        <Testimonials />
      </main>
    </>
  );
}
