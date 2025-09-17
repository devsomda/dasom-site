"use client";

import { useState } from "react";
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

  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Projects</h2>
      <hr className="mt-2 w-full border-gray-200" />

      {/* 가로 스크롤 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <button
            key={project.name}
            onClick={() => setSelected(project)}
            className="rounded-lg border border-gray-200 bg-white shadow hover:shadow-md transition cursor-pointer p-6"
          >
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm text-gray-500">
              {project.period} | {project.company}
            </p>
            <p className="mt-2 line-clamp-3 text-sm text-gray-700">
              {project.description}
            </p>
          </button>
        ))}
      </div>

      {/* 상세 팝업 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition cursor-pointer"
            >
              <IoClose className="text-2xl" />
            </button>

            {/* 헤더 */}
            <header className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {selected.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {selected.period} · {selected.company}
              </p>
            </header>

            {/* 본문 설명 */}
            <p className="text-base text-gray-700 leading-relaxed">
              {selected.description}
            </p>

            {/* 하이라이트 */}
            {selected.highlights && (
              <div className="mt-6 space-y-4">
                <p className="font-bold text-lg">Troubleshooting</p>
                {selected.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-gray-50 p-4 space-y-2 border border-gray-200"
                  >
                    <div className="flex items-center gap-1">
                      <IoWarning className="text-yellow-500" />
                      <p className="font-medium">{h.issue}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoConstruct className="text-blue-400" />
                      <p className="font-medium">{h.solution}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoCheckmarkCircle className="text-green-500" />
                      <p className="font-bold">{h.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 하단 링크 */}
            <div className="mt-8 flex flex-wrap gap-3">
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
      )}
    </MainSection>
  );
}
