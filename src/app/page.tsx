import { AcademicJourney } from "@/components/sections/AcademicJourney";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Learning } from "@/components/sections/Learning";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />
      <AcademicJourney />
      <Learning />
      <Contact />
    </>
  );
}
