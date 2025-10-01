"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { GradientText } from "@/components/common/Typography";
import { Button } from "@/components/ui/button";
import type { CTABanner as CTABannerType } from "@/types";

interface CTABannerProps {
  data: CTABannerType;
}

export function CTABanner({ data }: CTABannerProps) {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald/10 to-brass/10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 95, 76, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-card p-12 md:p-16 rounded-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <GradientText as="span">{data.title}</GradientText>
            </h2>

            <p className="text-lg md:text-xl text-silver mb-8 max-w-2xl mx-auto">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {data.cta.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  variant={button.variant as "primary" | "secondary"}
                  size="lg"
                >
                  <Link href={button.href || "#"} className="group">
                    {button.text}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
