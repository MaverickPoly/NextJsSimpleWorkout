import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProgramsList from "@/components/ProgramsList";
import programsData from "@/data/programs.json";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProgramsList programs={programsData.programs} />
      <FAQ />
      <Footer />
    </>
  );
}
