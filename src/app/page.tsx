import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-16 h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* 자기소개 */}
      <section className="space-y-4 text-center h-screen snap-start">
        <h1 className="text-3xl font-bold">
          안녕하세요, 프론트엔드 개발자{" "}
          <span className="text-blue-600">박다솜</span>입니다.
        </h1>
        <p className="text-gray-700">
          React와 TypeScript를 중심으로 웹 기반 CRM 솔루션을 개발하고 있습니다.
          개발을 통해 더 나은 프로덕트를 만들고, 사용자 경험을 개선하는 데
          관심이 많습니다.
        </p>
      </section>

      {/* 기술 스택 */}
      <section className="h-screen snap-start">
        <h2 className="text-2xl font-semibold mb-4">주력 스택</h2>
        <ul className="grid grid-cols-3 gap-4 text-center">
          <li className="p-2 border rounded">React</li>
          <li className="p-2 border rounded">Next.js</li>
          <li className="p-2 border rounded">TypeScript</li>
          <li className="p-2 border rounded">Redux Toolkit</li>
          <li className="p-2 border rounded">styled-components</li>
          <li className="p-2 border rounded">AWS (S3, Amplify)</li>
        </ul>
      </section>

      {/* 프로젝트 경험 */}
      <section className="h-screen snap-start">
        <h2 className="text-2xl font-semibold mb-6">프로젝트 경험</h2>
        <div className="space-y-8">
          {/* 프로젝트 카드 */}
          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">Osio (CRM & POS 솔루션)</h3>
            <p className="text-sm text-gray-600">2023.11 ~ 현재 | Peoplcat</p>
            <p className="mt-2">
              서비스 결제 및 예약 관리, 키오스크/프린터 연동 등 다양한 기능을
              개발했습니다.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>React, TypeScript, Redux Toolkit 기반 UI 개발</li>
              <li>Sentry 도입 및 에러 로깅 체계 구축</li>
            </ul>
          </article>

          <article className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">개인 포트폴리오 사이트</h3>
            <p className="text-sm text-gray-600">2025</p>
            <p className="mt-2">
              Next.js 기반으로 제작한 개인 포트폴리오 웹사이트입니다. 프로젝트
              소개, 기술 블로그, GitHub 연동 등을 포함합니다.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Next.js(App Router) + Tailwind CSS</li>
              <li>Vercel 배포 및 SEO 최적화</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 경력 사항 */}
      <section className="h-screen snap-start">
        <h2 className="text-2xl font-semibold mb-4">경력 사항</h2>
        <ul className="space-y-4">
          <li>
            <strong>Peoplcat</strong> — 프론트엔드 개발자 (2023.11 ~ 현재)
            <p className="text-sm text-gray-700">
              CRM 솔루션 ‘Osio’ 개발 및 유지보수. 결제, 예약 관리, 키오스크 연동
              등 핵심 기능 담당.
            </p>
          </li>
          <li>
            <strong>Shinsegae I&C</strong> — 영업 (2022.02 ~ 2022.06)
            <p className="text-sm text-gray-700">
              B2B 영업 경험을 통해 고객 커뮤니케이션 역량 습득.
            </p>
          </li>
          <li>
            <strong>Codeit</strong> — B2B 세일즈 (2021.04 ~ 2021.11)
            <p className="text-sm text-gray-700">
              고객사 니즈 분석 및 제안 경험을 통해 문제 해결 능력 강화.
            </p>
          </li>
        </ul>
      </section>

      {/* 교육 사항 */}
      <section className="h-screen snap-start">
        <h2 className="text-2xl font-semibold mb-4">교육 사항</h2>
        <ul className="space-y-2">
          <li>
            <strong>삼성 청년 SW 아카데미 (SSAFY)</strong> — (2022)
            <p className="text-sm text-gray-700">
              React & TypeScript 기반 프로젝트 3회 진행
            </p>
            <p className="text-sm text-gray-700">
              Vue.js & Javascript 기반 프로젝트 1회 진행
            </p>
          </li>
          <li>SQLD (2024), 정보처리기사 (2024) 취득</li>
        </ul>
      </section>
    </main>
  );
}
