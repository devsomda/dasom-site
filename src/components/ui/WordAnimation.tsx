"use client";

import { useState, useEffect } from "react";

const BaseWordPath = (
  <path
    d="M0.5 175.5V1.5C0.5 0.947715 0.947716 0.5 1.5 0.5H50.8333C51.3856 0.5 51.8333 0.947711 51.8333 1.5V124.167C51.8333 124.719 52.281 125.167 52.8333 125.167H124.167C124.719 125.167 125.167 124.719 125.167 124.167V1.5C125.167 0.947715 125.614 0.5 126.167 0.5H175.5C176.052 0.5 176.5 0.947714 176.5 1.5V175.5C176.5 176.052 176.052 176.5 175.5 176.5H1.5C0.947715 176.5 0.5 176.052 0.5 175.5Z"
    fill="currentColor"
    stroke="currentColor"
  />
);

const steps: { kind: "baseword"; rotation: number; color: string }[] = [
  { kind: "baseword", rotation: 0, color: "#7bd47b" },
  { kind: "baseword", rotation: 90, color: "#7cb0ff" },
  { kind: "baseword", rotation: 180, color: "#ffa9d4" },
];

export default function WordAnimation() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 2000); // 2초마다 변경

    return () => clearInterval(interval);
  }, []);

  const step = steps[stepIndex];

  return (
    <div className="flex justify-center items-center mb-8">
      <div
        className="transition-transform duration-500 ease-in-out origin-center"
        style={{ transform: `rotate(${step.rotation}deg)` }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 177 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: step.color }}
        >
          {BaseWordPath}
        </svg>
      </div>
    </div>
  );
}
