import { intro } from "@/data/intro.data";
import MainSection from "@/components/ui/MainSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function IntroSection() {
  return (
    <MainSection>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight whitespace-pre-line">
        {intro.greeting}
        <br />
        {intro.role} <span className="text-primary">{intro.name}</span>
        {intro.isKorean && "입니다."}
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-typo-paragraph max-w-2xl">
        {intro.lead1}
      </p>

      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-typo-paragraph max-w-xl">
        {intro.lead2}
      </p>

      {/* 스크롤 유도 아이콘 - IntroSection에만 */}
      <ScrollIndicator />
    </MainSection>
  );
}
