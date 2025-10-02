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
      <div className="relative h-full p-6 md:p-8 lg:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm group overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>

        <div className="relative translate-z-30">
          {/* Icon with better spacing */}
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
            <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-sm text-zinc-300 flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center mt-0.5 border border-blue-500/20">
                  <span className="text-blue-400 text-xs font-bold">✓</span>
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/services"
            className="group/btn flex items-center justify-between w-full px-5 py-3 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500 hover:to-purple-600 hover:border-blue-400 text-blue-400 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/25 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            <span className="font-semibold text-sm">Learn More</span>
            <ArrowRight
              size={18}
              className="group-hover/btn:translate-x-2 transition-all duration-300 group-hover/btn:scale-110"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <Section spacing="xl" background="alternate" className="relative overflow-hidden border-t border-zinc-800">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <FadeIn className="text-center mb-20">
          <Heading as="h2" className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-400 bg-clip-text text-transparent">
              What We Do Best
            </span>
          </Heading>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-sm md:text-base font-bold mb-8 shadow-lg shadow-blue-500/20"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Our Expertise
          </motion.div>

          <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end solutions that drive results and exceed expectations
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button asChild size="lg" variant="primary">
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
