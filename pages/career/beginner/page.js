import CareerHeroSection from "@/components/feature/career/career-hero-section";
import FigmaCareerHeroSection from "@/components/feature/career/figma-career-hero-section";
export default function HomePage() {
  return (
    <div className="bg-white">
      <h2>App Routerのテストページ</h2>
      <p>このページが表示されていれば、App Routerが正常に動作しています。</p>
      <CareerHeroSection />
      <FigmaCareerHeroSection />
    </div>
  );
}
