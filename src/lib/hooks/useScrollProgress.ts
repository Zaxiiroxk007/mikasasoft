"use client";

import { useEffect, useState } from "react";
import { throttle } from "@/lib/utils/helpers";

/**
 * Hook to track scroll progress (0-100)
 * @returns scroll progress percentage
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    const throttledCalculate = throttle(calculateProgress, 100);

    window.addEventListener("scroll", throttledCalculate);
    calculateProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", throttledCalculate);
    };
  }, []);

  return progress;
}
