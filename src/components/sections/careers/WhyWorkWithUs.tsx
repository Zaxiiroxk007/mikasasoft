'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, TrendingUp, Heart, DollarSign, type LucideIcon } from 'lucide-react';

interface Reason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WhyWorkWithUsProps {
  data: {
    title: string;
    description: string;
    reasons: Reason[];
  };
}

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  'trending-up': TrendingUp,
  heart: Heart,
  'dollar-sign': DollarSign,
};

export const WhyWorkWithUs = ({ data }: WhyWorkWithUsProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 bg-deep-midnight overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 76, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-platinum to-silver bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-survey-corps-emerald to-military-brass mx-auto rounded-full mb-4" />
          <p className="text-silver text-lg max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Zap;
            return (
              <motion.div
                key={reason.id}
                className="group relative p-8 rounded-2xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-survey-corps-emerald/0 to-military-brass/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-7 h-7 text-military-brass" />
                  </div>
                  <h3 className="text-xl font-bold text-platinum mb-3 group-hover:text-military-brass transition-colors duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
