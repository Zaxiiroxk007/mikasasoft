"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Cloud, Palette } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Heading } from "@/components/common/Typography";
import { FadeIn, StaggerChildren } from "@/components/common/Animations";
import { Button } from "@/components/ui/button";
import type { ServiceHighlight } from "@/types";

interface ServicesGridProps {
  services: ServiceHighlight[];
}

const iconMap: Record<string, any> = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
};

function ServiceCard({ service }: { service: ServiceHighlight }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const Icon = iconMap[service.icon] || Globe;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group h-full"
    >
      <div className="glass-card h-full p-10 md:p-12 rounded-2xl border-2 border-white/10 hover:border-emerald/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald/30 backdrop-blur-xl bg-gradient-to-br from-graphite/70 to-slate/40">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald/15 via-transparent to-brass/15" />

        <div className="relative" style={{ transform: "translateZ(30px)" }}>
          {/* Icon with better spacing */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-emerald/20 to-brass/20 border-2 border-emerald/30 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald/40 transition-all duration-300">
            <Icon className="w-10 h-10 md:w-12 md:h-12 text-emerald group-hover:text-brass transition-colors duration-300" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-platinum mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald group-hover:to-brass group-hover:bg-clip-text transition-all duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-silver/90 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm text-silver flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center mt-0.5">
                  <span className="text-emerald text-xs">✓</span>
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/services"
            className="group/btn flex items-center justify-between w-full px-4 py-3 rounded-lg border border-emerald/30 bg-emerald/10 hover:bg-emerald hover:border-emerald text-emerald hover:text-white transition-all duration-300"
          >
            <span className="font-semibold text-sm">Learn More</span>
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <Section spacing="xl" background="alternate" className="relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brass/20 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <FadeIn className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-2 border-emerald/30 text-emerald text-sm md:text-base font-bold mb-8 shadow-lg shadow-emerald/20"
          >
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
            Our Expertise
          </motion.div>

          <Heading as="h2" className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-platinum via-pure-white to-silver bg-clip-text text-transparent">
              What We Do Best
            </span>
          </Heading>
          <p className="text-platinum text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end solutions that drive results and exceed expectations
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-16">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
