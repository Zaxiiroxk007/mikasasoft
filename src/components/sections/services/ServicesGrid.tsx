'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-deep-midnight overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-survey-corps-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-military-brass/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-platinum to-silver bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-survey-corps-emerald to-military-brass mx-auto rounded-full mb-4" />
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                {/* Service Card */}
                <div className="relative h-full p-8 rounded-2xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-500 overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-survey-corps-emerald/0 via-survey-corps-emerald/0 to-military-brass/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 border border-survey-corps-emerald/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="w-8 h-8 text-military-brass" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-platinum mb-3 group-hover:text-military-brass transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-silver text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-survey-corps-emerald mt-0.5 flex-shrink-0" />
                          <span className="text-silver text-xs leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md bg-survey-corps-emerald/10 text-military-brass text-xs font-medium border border-survey-corps-emerald/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-3 py-1 rounded-md bg-white/5 text-ash text-xs font-medium">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-survey-corps-emerald/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
