'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(
  () => import('./SmoothScroll').then((mod) => mod.SmoothScroll),
  { ssr: false }
);

export function SafariOptimizedScroll({ children }: { children: React.ReactNode }) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari (but not Chrome)
    const ua = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(ua);
    setIsSafari(isSafariBrowser);
  }, []);

  // For Safari, use native scroll (much faster)
  if (isSafari) {
    return <>{children}</>;
  }

  // For other browsers, use smooth scroll
  return <SmoothScroll>{children}</SmoothScroll>;
}

