'use client';

import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Cpu,
  Briefcase,
  CheckCircle,
  type LucideIcon
} from 'lucide-react';
import { Container } from "@/components/common/Layout";

interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
}

interface ServicesGridProps {
  services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
  cpu: Cpu,
  briefcase: Briefcase,
};

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Our Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Technology Solutions
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            Tailored solutions to drive your business forward with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:bg-zinc-700 transition-colors">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-400 text-xs leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-500 text-xs font-medium border border-zinc-700">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

