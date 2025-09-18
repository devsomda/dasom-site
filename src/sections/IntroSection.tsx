import { intro } from "@/data/intro.data";
import MainSection from "@/components/ui/MainSection";

export default function IntroSection() {
  return (
    <MainSection>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight whitespace-pre-line">
          {intro.greeting}
          <br />
          {intro.role} <span className="text-primary">{intro.name}</span>
          {intro.isKorean && "입니다."}
        </h1>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
          {intro.lead1}
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-600">
          {intro.lead2}
        </p>
      </div>
    </MainSection>
  );
}
