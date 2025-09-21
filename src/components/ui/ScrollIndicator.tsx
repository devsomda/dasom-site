"use client";

import { IoChevronDown } from "react-icons/io5";

export default function ScrollIndicator() {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        absolute bottom-8 left-1/2 transform -translate-x-1/2
        bg-white/80 backdrop-blur-sm border border-gray-200 
        rounded-full p-3 shadow-lg hover:shadow-xl
        hover:bg-white/90 transition-all duration-300
        scroll-indicator
        lg:block hidden
      `}
      aria-label="다음 섹션으로 스크롤"
    >
      <IoChevronDown className="w-5 h-5 text-gray-600" />
    </button>
  );
}
