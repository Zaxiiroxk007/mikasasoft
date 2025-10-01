"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Layout";
import { GradientText } from "@/components/common/Typography";
import type { HeroSection } from "@/types";

interface HomeHeroProps {
  data: HeroSection;
}

export function HomeHero({ data }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-midnight via-obsidian to-deep-midnight">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(45, 95, 76, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium">
              {data.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <GradientText as="span" className="block">
              {data.title}
            </GradientText>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-silver mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {data.cta.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant as "primary" | "secondary"}
                size="lg"
              >
                <Link href={button.href || "#"} className="group">
                  {button.text}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>
            ))}
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "250+", label: "Projects" },
              { value: "180+", label: "Clients" },
              { value: "45+", label: "Team" },
              { value: "12+", label: "Years" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-silver">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-silver"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </Container>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brass/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}
