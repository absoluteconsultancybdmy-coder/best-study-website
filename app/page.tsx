import { ClassSelector } from "@/components/home/class-selector";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { FreeResources } from "@/components/home/free-resources";
import { HeroSection } from "@/components/home/hero-section";
import { LeadCaptureSection } from "@/components/home/lead-capture-section";
import { LearningJourney } from "@/components/home/learning-journey";
import { ParentSection } from "@/components/home/parent-section";
import { ResultsSection } from "@/components/home/results-section";
import { TeacherIntro } from "@/components/home/teacher-intro";
import { WhyBestStudy } from "@/components/home/why-best-study";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClassSelector />
      <WhyBestStudy />
      <LearningJourney />
      <FeaturedCourses />
      <TeacherIntro />
      <FreeResources />
      <ParentSection />
      <ResultsSection />
      <LeadCaptureSection />
    </>
  );
}
