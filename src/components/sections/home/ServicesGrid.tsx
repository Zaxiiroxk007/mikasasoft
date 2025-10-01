"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Heading } from "@/components/common/Typography";
import { GlassCard } from "@/components/common/Cards";
import { FadeIn, StaggerChildren } from "@/components/common/Animations";
import { Button } from "@/components/ui/button";
import type { ServiceHighlight } from "@/types";

interface ServicesGridProps {
  services: ServiceHighlight[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <Section spacing="xl" background="alternate">
      <Container>
        <FadeIn className="text-center mb-16">
          <Heading as="h2" gradient className="mb-4">
            What We Do Best
          </Heading>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end solutions that drive results
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <FadeIn key={service.id}>
              <GlassCard hover glow className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-platinum mb-2">{service.title}</h3>
                    <p className="text-silver">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-silver flex items-center gap-2">
                      <span className="text-emerald">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" size="sm" className="w-full justify-between group">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </GlassCard>
            </FadeIn>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
