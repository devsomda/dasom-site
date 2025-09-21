# Portfolio Site

개발 기간: 2025.09.13 - 진행 중

배포 링크: www.devsomda.com

## 📝 Overview

Next.js + Tailwind 기반의 개인 포트폴리오 웹사이트입니다.  
자기소개, 프로젝트, 경력/교육 정보를 정리하고 Vercel로 배포했습니다.

## 🚀 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## 📖 Development Log (요약)

- 2025-09-13: 기본 Next.js 프로젝트 생성, Tailwind 설정, MainSection UI 컴포넌트 작성
- 2025-09-14: 다국어 지원을 고려한 data.ts 구조 설계 (data.ts -> UI component)
- 2025-09-17: 전체 data 및 ui 업데이트, 커스텀 도메인 적용하여 배포

## 📦 Deployment

- Vercel에 연결, custom domain 적용

---

## 📔 Detailed Notes

### 2025-09-14

#### 📂 폴더 구조 설계

- 심플하지만 다국어 확장 고려 → 데이터(`.data.ts`)와 UI(`Section.tsx`) 분리
- 의미 단위의 섹션(예: ProfileSection) vs 단순 UI(MainSection) 구분

#### 📝 What I Learned

- 스크롤 스냅(scroll-snap-type) 적용해 단일 페이지 네비게이션 UX 개선 가능
- `<dl>`, `<dt>`, `<dd>` 태그의 시맨틱한 의미와 활용법  
  → Profile 섹션에서 “라벨: 값” 구조에 적합

#### ✅ 오늘의 성과

- Intro / Profile / Skills / Projects / Background 섹션 1차 구조 완성

### 2025-09-17

#### ✅ 오늘의 성과

- 커스텀 도메인 적용하여 배포 완료

### 2025-09-21

#### 📝 What I Learned

뷰포트 단위 차이 정리

- 100vh: 브라우저 UI(주소창·하단바 포함) 기준, 모바일 Safari에서 실제 보이는 높이보다 크게 잡혀 스크롤 튐 발생
- 100svh (small viewport height): UI가 열린 상태의 실제 보이는 높이, 안정적으로 한 화면 꽉 채우기에 적합
- 100lvh (large viewport height): UI가 닫힌 상태의 최대 뷰포트 높이, 풀스크린 레이아웃에 유용
- 100dvh (dynamic viewport height): UI 열림/닫힘에 따라 동적으로 변함, 하지만 레이아웃 튀는 문제가 있을 수 있음

scroll-snap-type의 옵션 비교
- snap-mandatory: 스크롤 종료 시 반드시 가까운 섹션으로 정렬
- snap-proximity: 스크롤이 끝났을 때 snap point 근처라면 부드럽게 스냅되지만, 멀리 있으면 스냅하지 않음

#### ✅ 오늘의 성과

-  메인 섹션 레이아웃을 `min-h-[100svh]`로 수정해 iOS Safari 환경에서도 안정적인 풀스크린 대응
-  Projects 섹션에 콘텐츠 길이에 따라 **수평 스크롤 ↔ 그리드 레이아웃 전환** 로직 구현
