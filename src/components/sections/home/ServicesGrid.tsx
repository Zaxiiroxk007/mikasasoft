"use client";

import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Cloud, Palette } from "lucide-react";
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import type { ServiceHighlight } from "@/types";

interface ServicesGridProps {
  services: ServiceHighlight[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
};

function ServiceCard({ service }: { service: ServiceHighlight }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <div className="group relative h-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>

      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-zinc-500">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href="/services"
        className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors mt-auto"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-lg text-zinc-400">
            From concept to deployment, we deliver end-to-end solutions that drive results and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="primary">
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

