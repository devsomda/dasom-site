export const projectData = {
  projects: [
    {
      name: "Osio",
      period: "2023.11 - 현재",
      company: "Peoplcat",
      description:
        " 서비스 결제 및 예약 관리, 키오스크/프린터 연동 등 다양한 기능을 개발했습니다.  ",
      subDescription: [
        "React, TypeScript, Redux Toolkit 기반 UI 개발",
        "Sentry 도입 및 에러 로깅 체계 구축",
      ],
      serviceLink: null,
      otherLink: "https://osio.peoplcat.com",
      githubLink: null,
    },
    {
      name: "개인 포트폴리오 사이트",
      period: "2025.09 - 진행 중",
      company: "Personal",
      description:
        " Next.js 기반으로 제작한 개인 포트폴리오 웹사이트입니다. 프로젝트 소개, 기술 블로그, GitHub 연동 등을 포함합니다. ",
      subDescription: [
        "Next.js(App Router) + Tailwind CSS",
        "Vercel 배포 및 SEO 최적화",
      ],
      serviceLink: null,
      otherLink: null,
      githubLink: "https://github.com/devsomda/dasom-site",
    },
    {
      name: "Manna",
      period: "2025.06 - 진행 중",
      company: "Personal",
      description:
        "일정 생성 및 응답 웹서비스입니다. 전체 UI/UX 설계 및 구현을 담당했습니다.",
      subDescription: [
        "Next.js(App Router) + TypeScript + CSS Modules",
        "다크 모드 및 라이트 모드 테마 지원",
      ],
      serviceLink: "https://manna.it.kr",
      otherLink:
        "https://www.notion.so/somtha/24dd73a0e7d880519a38e6041cd44e02",
      githubLink: "https://github.com/sideet/manna",
    },
  ],
} as const;
