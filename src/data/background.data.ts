// src/sections/background.data.ts
export type Experience = {
  company: string;
  role: string;
  start: string; // "YYYY.MM"
  end: string; // "YYYY.MM" | "현재"
  summary?: string;
  bullets?: string[];
};

export type Education = {
  title: string; // 학교/과정/자격증
  period?: string; // "YYYY" or "YYYY.MM ~ YYYY.MM"
  bullets?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Peoplcat",
    role: "프론트엔드 개발자",
    start: "2023.11",
    end: "현재",
    summary:
      "CRM 솔루션 'Osio' 개발 및 유지보수. 결제, 예약 관리, 키오스크 연동 등 핵심 기능 담당.",
    bullets: [
      "React, TypeScript, Redux Toolkit 기반 UI 개발",
      "Sentry 도입 및 오류 로깅 체계 구축",
    ],
  },
  {
    company: "Shinsegae I&C",
    role: "영업",
    start: "2022.02",
    end: "2022.06",
    summary: "B2B 영업 경험을 통해 고객 커뮤니케이션 역량 습득.",
  },
  {
    company: "Codeit",
    role: "B2B 세일즈",
    start: "2021.04",
    end: "2021.11",
    summary: "고객사 니즈 분석 및 제안 경험을 통해 문제 해결 능력 강화.",
  },
];

export const educations: Education[] = [
  {
    title: "삼성 청년 SW 아카데미 (SSAFY)",
    period: "2022",
    bullets: [
      "React & TypeScript 기반 프로젝트 3회",
      "Vue.js & JavaScript 기반 프로젝트 1회",
    ],
  },
  {
    title: "자격증",
    bullets: ["SQLD (2024)", "정보처리기사 (2024)"],
  },
];
