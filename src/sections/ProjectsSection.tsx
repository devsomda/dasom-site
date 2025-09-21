"use client";

import { useState, useEffect } from "react";
import { projectData } from "@/data/projects.data";
import MainSection from "@/components/ui/MainSection";
import {
  IoClose,
  IoWarning,
  IoConstruct,
  IoCheckmarkCircle,
} from "react-icons/io5";

export default function ProjectsSection() {
  const { projects } = projectData;
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null
  );
  const [useHorizontalScroll, setUseHorizontalScroll] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      const vh = window.innerHeight * 0.01;
      const availableHeight = window.innerHeight - 200; // 헤더, 패딩 등 제외
      const estimatedContentHeight = projects.length * 120; // 각 카드 높이 추정

      // 모바일이거나 콘텐츠가 화면보다 클 때 수평 스크롤
      setUseHorizontalScroll(
        window.innerWidth < 640 || estimatedContentHeight > availableHeight
      );
    };

    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, [projects.length]);

  return (
    <MainSection title="Projects">
      <div className="w-full">
        {useHorizontalScroll ? (
          // 수평 스크롤 레이아웃 - 세로 카드
          <>
            <div className="w-full overflow-x-auto pb-4">
              <div
                className="flex gap-4 sm:gap-6"
                style={{ width: "max-content" }}
              >
                {projects.map((project) => (
                  <button
                    key={project.name}
                    onClick={() => setSelected(project)}
                    className="flex-shrink-0 w-64 sm:w-72 h-80 sm:h-96 rounded-lg border border-gray-200 bg-white shadow hover:shadow-md transition cursor-pointer p-4 sm:p-6 text-left flex flex-col"
                  >
                    {/* 헤더 영역 */}
                    <div className="flex-shrink-0">
                      <h3 className="text-lg sm:text-xl text-gray-900 font-bold line-clamp-2">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        {project.period} | {project.company}
                      </p>
                    </div>

                    {/* 구분선 */}
                    <hr className="my-4 border-gray-200" />

                    {/* 설명 영역 */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-6 sm:line-clamp-8">
                        {project.description}
                      </p>
                    </div>

                    {/* 하단 여백 */}
                    <div className="flex-shrink-0 mt-4">
                      <div className="text-xs text-primary hover:underline text-center font-medium">
                        자세히 보기 →
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {window.innerWidth < 640 && (
              <p className="text-xs text-gray-400 mt-3 text-center">
                ← 좌우로 스크롤해보세요 →
              </p>
            )}
          </>
        ) : (
          // 그리드 레이아웃
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            {projects.map((project) => (
              <button
                key={project.name}
                onClick={() => setSelected(project)}
                className="rounded-lg border border-gray-200 bg-white shadow hover:shadow-md transition cursor-pointer p-4 sm:p-6 text-left"
              >
                <h3 className="text-lg sm:text-xl font-bold">{project.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {project.period} | {project.company}
                </p>
                <p className="mt-2 line-clamp-3 sm:line-clamp-4 text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 상세 팝업 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] sm:max-h-[85vh] rounded-xl bg-white shadow-2xl animate-fadeIn overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10 text-gray-400 hover:text-gray-700 transition cursor-pointer bg-white/90 rounded-full p-1.5 sm:p-1"
            >
              <IoClose className="text-lg sm:text-xl lg:text-2xl" />
            </button>

            {/* 스크롤 가능한 내용 */}
            <div className="overflow-y-auto p-3 sm:p-4 lg:p-6">
              {/* 헤더 */}
              <header className="border-b border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6 pr-10 sm:pr-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  {selected.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {selected.period} · {selected.company}
                </p>
              </header>

              {/* 본문 설명 */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {selected.description}
              </p>

              {/* 하이라이트 */}
              {selected.highlights && (
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <p className="font-bold text-base sm:text-lg text-gray-900">
                    Troubleshooting
                  </p>
                  {selected.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-gray-50 p-3 space-y-2 border border-gray-200 text-left"
                    >
                      <div className="flex items-start gap-2">
                        <IoWarning className="text-yellow-500 mt-0.5 flex-shrink-0" />
                        <p className="font-medium text-sm sm:text-base text-gray-900">
                          {h.issue}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <IoConstruct className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <p className="font-medium text-sm sm:text-base text-gray-900">
                          {h.solution}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <IoCheckmarkCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="font-bold text-sm sm:text-base text-gray-900">
                          {h.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 하단 링크 */}
              <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap gap-2 sm:gap-3 pb-2">
                {selected.serviceLink && (
                  <a
                    href={selected.serviceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-primary px-3 py-1.5 text-white text-sm hover:opacity-90 transition"
                  >
                    서비스 바로가기
                  </a>
                )}
                {selected.otherLink && (
                  <a
                    href={selected.otherLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    소개 보기
                  </a>
                )}
                {selected.githubLink && (
                  <a
                    href={selected.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </MainSection>
  );
}
