"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Layout";
import { ParticleSystem } from "@/components/common/Effects/ParticleSystem";
import { GradientMesh } from "@/components/common/Effects/GradientMesh";
import { useAnimatedCounter } from "@/lib/hooks/useAnimatedCounter";
import type { HeroSection } from "@/types";

interface HomeHeroProps {
  data: HeroSection;
}

function AnimatedStat({ value, label }: { value: number; label: string }) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
        {count}+
      </div>
      <div className="text-sm md:text-base text-zinc-300 uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-24 md:pt-0">
      {/* Animated Background Effects */}
      <GradientMesh />
      <ParticleSystem />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,11,0.8)_100%)]" />

      <Container size="xl" className="relative z-10 pt-24 pb-12 md:pt-28 md:pb-12">
        <div className="text-center w-full">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-blue-500/30 text-blue-400 text-sm md:text-base font-semibold tracking-wide shadow-lg shadow-blue-500/20">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              {data.subtitle}
            </span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 leading-[1.05] tracking-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            <span className="text-white">
              Building Defenses
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Breaking Boundaries
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-200 mb-14 leading-relaxed max-w-4xl mx-auto font-light"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center mb-24"
          >
            {data.cta.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant as "primary" | "secondary"}
                size="xl"
                className="min-w-[200px] justify-center"
              >
                <Link href={button.href || "#"} className="group flex items-center justify-center">
                  {button.text}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={22} />
                </Link>
              </Button>
            ))}
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20 w-full pt-12 border-t border-zinc-800/50"
          >
            <AnimatedStat value={250} label="Projects" />
            <AnimatedStat value={180} label="Clients" />
            <AnimatedStat value={45} label="Team" />
            <AnimatedStat value={12} label="Years" />
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
