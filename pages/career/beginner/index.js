import CareerHeroSection from "@/components/feature/career/career-hero-section";
import CourseSectionUIUX from "@/components/feature/career/CourseSectionUiuxcourse";
import ArticleSection from "@/components/feature/career/ArticleSection";
import ExampleOfUiuxdesignerFromScratch from "@/components/feature/career/ExampleOfUiuxdesignerFromScratch";
import AboutBono from "@/components/feature/career/AboutBono";
import {
  interviewArticles,
  portfolioArticles,
  roadmapArticles,
  sectionData,
  uiuxportfolioArticles,
  z,
} from "@/components/feature/career/data/articles";
import CareerHeader from "@/components/feature/career/CareerHeader";
import WaveDecorationSection from "@/components/feature/career/WaveDecorationSection";

export default function HomePage() {
  return (
    <div className="bg-stone-100">
      <CareerHeader />
      <CareerHeroSection />
      <WaveDecorationSection />
      <div className="Articles-Section flex flex-col justify-center items-center">
        <div className="Articles-Section-Title"></div>
        <ArticleSection
          sectionData={sectionData.portfolio}
          articles={portfolioArticles}
        />
        <ArticleSection
          sectionData={sectionData.roadmap}
          articles={roadmapArticles}
        />
        <ArticleSection
          sectionData={sectionData.uiuxportfolio}
          articles={uiuxportfolioArticles}
        />
        <ArticleSection
          sectionData={sectionData.interview}
          articles={interviewArticles}
        />
      </div>
      <ExampleOfUiuxdesignerFromScratch />
      <AboutBono />
    </div>
  );
}
