"use client";

import { useState, useEffect } from "react";
import { intro } from "@/data/intro.data";
import MainSection from "@/components/ui/MainSection";
import WordAnimation from "@/components/ui/WordAnimation";

export default function IntroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % intro.roles.length);
    }, 1800); // 1.8초마다 변경

    return () => clearInterval(interval);
  }, []);

  const currentRole = intro.roles[currentRoleIndex];

  return (
    <MainSection>
      <div className="flex-1 flex flex-col items-center justify-center">
        <WordAnimation />
        <h1 className="text-4xl font-bold tracking-tight whitespace-pre-line">
          {intro.greeting}
          <br />
          <p
            className="transition-colors duration-500"
            style={{ color: currentRole.color }}
          >
            {currentRole.text}
          </p>
          <span className="text-primary">{intro.name}</span>
          {intro.isKorean && "입니다."}
        </h1>
      </div>
    </MainSection>
  );
}
