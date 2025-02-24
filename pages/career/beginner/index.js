import CareerHeroSection from "@/components/feature/career/career-hero-section";
import CourseSectionUIUX from "@/components/feature/career/CourseSectionUiuxcourse";
import ArticleSection from "@/components/feature/career/ArticleSection";
import ExampleOfUiuxdesignerFromScratch from "@/components/feature/career/ExampleOfUiuxdesignerFromScratch";
import AboutBono from "@/components/feature/career/AboutBono";
import {
  portfolioArticles,
  sectionData,
} from "@/components/feature/career/data/articles";
export default function HomePage() {
  return (
    <div className="bg-stone-100">
      <CareerHeroSection />
      <div className="Articles-Section flex flex-col justify-center items-center">
        <div className="Articles-Section-Title"></div>
        <ArticleSection
          sectionData={sectionData.portfolio}
          articles={portfolioArticles}
        />
      </div>
      <ExampleOfUiuxdesignerFromScratch />
      <AboutBono />
    </div>
  );
}
