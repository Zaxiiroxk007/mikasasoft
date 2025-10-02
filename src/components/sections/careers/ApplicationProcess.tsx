'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

interface ApplicationProcessProps {
  data: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
}

export const ApplicationProcess = ({ data }: ApplicationProcessProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 bg-obsidian overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-military-brass/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="group relative p-6 rounded-2xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center">
                <span className="text-military-brass font-bold">{step.step}</span>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-platinum mb-2 group-hover:text-military-brass transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="inline-block px-3 py-1 rounded-md bg-survey-corps-emerald/10 text-military-brass text-xs font-medium">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
