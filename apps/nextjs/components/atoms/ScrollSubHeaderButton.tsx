"use client";

import { ReactNode } from "react";
import { RxChevronRight } from "react-icons/rx";

interface ScrollSubHeaderButtonProps {
  children?: ReactNode;
}

export default function ScrollSubHeaderButton({}: ScrollSubHeaderButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById("promoted");
    if (element) {
      element.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="btn btn-xs glass no-animation absolute right-0 z-10 flex h-full items-center rounded-r-none"
      onClick={handleScroll}
    >
      <RxChevronRight />
    </div>
  );
}
