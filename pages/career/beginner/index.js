import CareerHeroSection from "@/components/feature/career/career-hero-section";
import CourseSectionUIUX from "@/components/feature/career/CourseSectionUiuxcourse";
import ArticleSection from "@/components/feature/career/ArticleSection";
import ExampleOfUiuxdesignerFromScratch from "@/components/feature/career/ExampleOfUiuxdesignerFromScratch";
import AboutBono from "@/components/feature/career/AboutBono";
export default function HomePage() {
  return (
    <div className="bg-stone-100">
      <CareerHeroSection />
      <div className="Articles-Section justify-center items-center">
        <div className="Articles-Section-Title"></div>
        <ArticleSection />
        <ArticleSection />
      </div>
      <ExampleOfUiuxdesignerFromScratch />
      <div className="w-full h-[200px] p-2.5 bg-[#fff6fd] border-t border-b border-black flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-32 text-center text-[#1e1e1e] text-sm font-bold font-['Noto Sans JP'] leading-[18.48px]">
          旅のことば
        </div>
        <div className="text-center text-[#1e1e1e] text-base font-bold font-['Noto Sans JP'] leading-[21.12px]">
          “デザインはオリジナリティを発揮するもの。と思い込んではいけません。
          <br />
          まずは世の中の良いものに目を向けて”定番”の表現を吸収していくのです”
        </div>
      </div>
      <AboutBono />
    </div>
  );
}
