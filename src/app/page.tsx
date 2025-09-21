import IntroSection from "@/sections/IntroSection";
import ProfileSection from "@/sections/ProfileSection";
import ProjectsSection from "@/sections/ProjectsSection";
import BackgroundSection from "@/sections/BackgroundSection";
import VelogLatestSection from "@/sections/VelogLatestSection";

export default function Home() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-10 h-[100svh] overflow-y-scroll snap-y snap-mandatory break-keep">
      {/* 자기소개 */}
      <IntroSection />

      {/* 프로필 */}
      <ProfileSection />

      {/* 프로젝트 경험 */}
      <ProjectsSection />

      {/* 경력 및 교육 사항 */}
      <BackgroundSection />

      {/* 최신 블로그 글 */}
      <VelogLatestSection />
    </main>
  );
}
