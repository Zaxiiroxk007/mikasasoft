"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald via-brass to-gold bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-sm md:text-base text-silver uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-midnight pt-24 md:pt-0">
      {/* Animated Background Effects */}
      <GradientMesh />
      <ParticleSystem />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,14,18,0.8)_100%)]" />

      <Container size="xl" className="relative z-10 py-12 md:py-20">
        <div className="text-center w-full">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-emerald/30 text-emerald text-sm md:text-base font-semibold tracking-wide shadow-glow-green">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              {data.subtitle}
            </span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black mb-10 leading-[1.05] tracking-tight"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            <span className="bg-gradient-to-r from-pure-white via-platinum to-pure-white bg-clip-text text-transparent">
              {data.title.split(',')[0]},
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald via-brass to-gold bg-clip-text text-transparent">
              {data.title.split(',')[1]}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-platinum mb-14 leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            {data.cta.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant as "primary" | "secondary"}
                size="xl"
              >
                <Link href={button.href || "#"} className="group">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-8 border-t border-emerald/20"
          >
            <AnimatedStat value={250} label="Projects" />
            <AnimatedStat value={180} label="Clients" />
            <AnimatedStat value={45} label="Team" />
            <AnimatedStat value={12} label="Years" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-xs text-silver/60 uppercase tracking-wider font-medium">Scroll</span>
            <ChevronDown className="text-emerald w-6 h-6 group-hover:text-brass transition-colors" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
