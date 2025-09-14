# Portfolio Site

개발 기간: 2025.09.13 - 진행 중

## 📝 Overview

Next.js + Tailwind 기반의 개인 포트폴리오 웹사이트입니다.  
자기소개, 프로젝트, 경력/교육 정보를 정리하고 Vercel로 배포했습니다.
(\* 배포 예정)

## 🚀 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## 📖 Development Log (요약)

- 2025-09-13: 기본 Next.js 프로젝트 생성, Tailwind 설정, MainSection UI 컴포넌트 작성
- 2025-09-14: 다국어 지원을 고려한 data.ts 구조 설계 (data.ts -> UI component)

## 📦 Deployment

- Vercel에 연결, custom domain 적용 예정

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
