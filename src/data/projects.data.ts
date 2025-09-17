export const projectData = {
  projects: [
    {
      name: "Osio",
      period: "2023.11 - 현재",
      company: "Peoplcat",
      description: "소상공인의 고객 관리·예약·결제를 통합 지원하는 웹 솔루션.",
      highlights: [
        {
          issue: "초기 JS 번들이 14MB로 과도하게 커 로딩 지연 발생",
          solution: "사용 빈도 낮은 모듈을 lazy/dynamic import 처리",
          result: "번들 크기 14MB → 9.3MB (34% 감소), 초기 로딩 성능 개선",
        },
        {
          issue: "모든 컴포넌트가 1초마다 불필요하게 리렌더링",
          solution: "Provider 구조 개편 및 memoization 적용",
          result: "불필요 렌더링 80% 이상 감소, UI 반응 속도 개선",
        },
        {
          issue: "결제 오류 원인 파악 및 대응까지 평균 30분 이상 소요",
          solution: "Sentry 기반 결제 오류 모니터링 및 알림 자동화 도입",
          result: "대응 시간 30분 → 5~10분 (최대 80% 개선)",
        },
      ],
      serviceLink: null,
      otherLink: "https://osio.peoplcat.com",
      githubLink: null,
    },
    {
      name: "OCI (대안 신용 평가 프로젝트)",
      period: "2025.08 - 2025.09",
      company: "Peoplcat",
      description:
        "소상공인 매출 데이터를 분석·시각화하여 신용 평가 지표를 제공하는 웹 서비스.",
      highlights: [
        {
          issue: "보고서 데이터 호출이 직렬 처리되어 응답 지연 발생",
          solution: "Promise.all을 통한 API 병렬 호출",
          result: "응답 속도 409.3ms → 137.9ms (66% 개선)",
        },
        {
          issue: "동일 UI를 SSR/CSR에서 중복 구현해야 하는 비효율",
          solution: "View ↔ Loader 패턴 도입으로 SSR/CSR 데이터 로딩 통합",
          result: "공통 UI 재사용 → 중복 코드 감소, 유지보수성 향상",
        },
        {
          issue: "월/필터 변경 시 불필요한 in-flight 요청으로 상태 혼란",
          solution: "AbortController로 요청 취소 처리",
          result: "불필요 렌더링 차단 → UX 안정성 확보",
        },
      ],
      serviceLink: null,
      otherLink: null,
      githubLink: null,
    },
    {
      name: "Manna",
      period: "2025.06 - 진행 중",
      company: "Personal",
      description:
        "팀/개인 일정 생성 및 공유, 응답 수집을 지원하는 일정 관리 웹서비스.",
      highlights: [
        {
          issue: "토큰 만료 시 API마다 예외 처리 필요 → 중복 코드 발생",
          solution: "Axios Interceptor + 공통 clientApi 모듈 도입",
          result: "401 에러 공통 처리 → 중복 코드 제거 및 인증 안정성 확보",
        },
        {
          issue: "로그인 직후 userData 반영 지연 → UX 혼란",
          solution: "useSession().status 분리 처리",
          result: "플리커 현상 방지, 로그인 UX 개선",
        },
        {
          issue: "다크 모드 적용 시 UI 색상 불일치",
          solution: "CSS 변수 체계화 (--color-main, --color-background 등)",
          result: "다크/라이트 모드 UI 일관성 확보",
        },
      ],
      serviceLink: "https://manna.it.kr",
      otherLink:
        "https://www.notion.so/somtha/24dd73a0e7d880519a38e6041cd44e02",
      githubLink: "https://github.com/sideet/manna",
    },
    {
      name: "개인 포트폴리오 사이트",
      period: "2025.09 - 진행 중",
      company: "Personal",
      description:
        "Next.js 기반으로 제작한 개인 포트폴리오 웹사이트. 프로젝트 소개, 블로그 연동 등을 제공.",
      highlights: [
        {
          issue: "개인 포트폴리오 사이트 제작 필요",
          solution: "Next.js(App Router) + Tailwind CSS로 개발",
          result: "Vercel 배포 및 SEO 최적화 적용(예정)", // TODO: SEO 최적화 작업 필요
        },
      ],
      serviceLink: null,
      otherLink: null,
      githubLink: "https://github.com/devsomda/dasom-site",
    },
  ],
} as const;
