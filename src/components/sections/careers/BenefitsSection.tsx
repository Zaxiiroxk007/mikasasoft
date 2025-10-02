'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Calendar, DollarSign, BookOpen, Home, Gift, Check, type LucideIcon } from 'lucide-react';

interface Benefit {
  id: string;
  category: string;
  items: string[];
  icon: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  calendar: Calendar,
  'dollar-sign': DollarSign,
  'book-open': BookOpen,
  home: Home,
  gift: Gift,
};

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 bg-obsidian overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-survey-corps-emerald/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-platinum to-silver bg-clip-text text-transparent">
              Benefits & Perks
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-survey-corps-emerald to-military-brass mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Gift;
            return (
              <motion.div
                key={benefit.id}
                className="group relative p-6 rounded-2xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-military-brass" />
                  </div>
                  <h3 className="text-lg font-bold text-platinum">{benefit.category}</h3>
                </div>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-silver text-sm">
                      <Check className="w-4 h-4 text-survey-corps-emerald mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
