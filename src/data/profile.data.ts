import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiAmazon,
  SiStyledcomponents,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiMysql,
  SiNestjs,
} from "react-icons/si";

export const profile = {
  name: "박다솜",
  title: "Frontend Developer",
  email: "dev.somda@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/devsomda" },
    { label: "Velog", href: "https://velog.io/@somda" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/devsomda/" },
  ],
  resumeHref: null,
  imageSrc: "/dasom.png",
  stacks: [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  ],
  subStacks: [
    { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-500" },
    {
      name: "styled-components",
      icon: SiStyledcomponents,
      color: "text-pink-500",
    },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "Nest.js", icon: SiNestjs, color: "text-pink-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  ],
  highlights: [
    "성능 최적화를 즐기는 개발자입니다.",
    "코드를 오래 유지보수할 수 있도록 구조를 다듬습니다.",
    "오류 추적과 대응 체계 구축에 강점이 있습니다.",
    "협업 속에서 더 힘을 발휘합니다.",
  ], // 추후 활용
} as const;
