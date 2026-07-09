import { AcademicJourney } from "@/components/sections/AcademicJourney";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Learning } from "@/components/sections/Learning";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <AcademicJourney />
      <Learning />
      <Achievements />
      <Contact />
    </>
  );
}
