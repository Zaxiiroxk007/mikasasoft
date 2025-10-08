"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Layout";
import type { HeroSection } from "@/types";

interface HomeHeroProps {
  data: HeroSection;
}

export function HomeHero({ data }: HomeHeroProps) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
  }, []);

  // For Safari: Use plain div, no animations
  // For others: Use Framer Motion
  const Wrapper = isSafari ? 'div' : motion.div;
  const animProps = isSafari ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-24 md:pt-0">
      {/* Simple static background - no canvas, no particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10 pt-24 pb-12 md:pt-28 md:pb-12">
        <div className="text-center w-full">
          {/* Badge */}
          <Wrapper {...animProps} className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-blue-500/30 text-blue-400 text-sm md:text-base font-semibold tracking-wide">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              {data.subtitle}
            </span>
          </Wrapper>

          {/* Title */}
          <Wrapper {...animProps} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10">
            <span className="text-white">Building Defenses</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Breaking Boundaries
            </span>
          </Wrapper>

          {/* Description */}
          <Wrapper {...animProps} className="text-lg md:text-xl text-zinc-200 mb-10 max-w-3xl mx-auto px-4">
            {data.description}
          </Wrapper>

          {/* CTA Buttons */}
          <Wrapper {...animProps} className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            {data.cta.map((button, index) => (
              <Link
                key={index}
                href={button.href || "#"}
                className={`
                  inline-flex items-center justify-center gap-3 rounded-xl font-bold transition-all duration-200 
                  min-w-[280px] px-10 py-5 text-base
                  ${button.variant === 'primary' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90' 
                    : 'border-2 border-blue-500/40 bg-blue-500/10 text-zinc-300 hover:bg-blue-500/20'
                  }
                `}
              >
                {button.text}
                <ArrowRight size={18} />
              </Link>
            ))}
          </Wrapper>

          {/* Stats - Simple, no animations */}
          <Wrapper {...animProps} className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-12 border-t border-zinc-800/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-sm text-zinc-300 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">180+</div>
              <div className="text-sm text-zinc-300 uppercase tracking-wider">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">45+</div>
              <div className="text-sm text-zinc-300 uppercase tracking-wider">Team</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-sm text-zinc-300 uppercase tracking-wider">Years</div>
            </div>
          </Wrapper>
        </div>
      </Container>
    </section>
  );
}
