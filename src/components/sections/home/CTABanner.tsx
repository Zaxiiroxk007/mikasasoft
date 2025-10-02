"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import type { CTABanner as CTABannerType } from "@/types";

interface CTABannerProps {
  data: CTABannerType;
}

export function CTABanner({ data }: CTABannerProps) {
  return (
    <Section spacing="xl" background="default" className="relative overflow-hidden border-t border-white/5">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-emerald/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-brass/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 95, 76, 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald via-brass to-gold rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Main card */}
            <div className="relative glass-card p-12 md:p-16 lg:p-20 rounded-3xl border-2 border-emerald/30 backdrop-blur-2xl bg-gradient-to-br from-graphite/80 to-slate/60">
              {/* Sparkle icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-8"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald/20 to-brass/20 border border-emerald/30">
                  <Sparkles className="w-10 h-10 text-emerald" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black mb-6 text-center"
              >
                <span className="bg-gradient-to-r from-pure-white via-platinum to-silver bg-clip-text text-transparent">
                  {data.title}
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-silver/90 mb-12 max-w-3xl mx-auto leading-relaxed text-center font-light"
              >
                {data.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                {data.cta.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    variant={button.variant as "primary" | "secondary"}
                    size="xl"
                  >
                    <Link href={button.href || "#"} className="group/btn">
                      {button.text}
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                        size={22}
                      />
                    </Link>
                  </Button>
                ))}
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12 pt-8 border-t border-emerald/20 text-center"
              >
                <p className="text-sm text-silver/60 uppercase tracking-wider font-medium">
                  Join 180+ Companies Building the Future
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
