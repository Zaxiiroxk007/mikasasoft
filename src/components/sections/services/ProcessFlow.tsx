'use client';

import { motion } from 'framer-motion';
import { Search, Code2, TestTube, Rocket, MessageCircle } from 'lucide-react';

interface ProcessFlowProps {
  data: {
    title: string;
    description: string;
    steps: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const iconMap = {
  search: Search,
  brainstorm: MessageCircle,
  code: Code2,
  test: TestTube,
  deploy: Rocket,
  discovery: Search,
};

export const ProcessFlow = ({ data }: ProcessFlowProps) => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Connecting Line Background */}
      <div className="absolute inset-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M 200 200 Q 300 100 400 200 Q 500 300 600 200 Q 700 100 800 200 Q 900 300 1000 200"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-emerald-400 font-medium">Our Process</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">How We</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-yellow-400 bg-clip-text text-transparent">
                Build Success
              </span>
            </h2>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              {data.description}
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Code2;
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-yellow-500 to-orange-500'
              ];
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative group"
                >
                  {/* Connection line for mobile */}
                  {index < data.steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent lg:w-12" />
                  )}

                  <div className="relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500 text-center" style={{
                    backdropFilter: 'blur(20px)'
                  }}>
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center font-bold text-white shadow-xl" style={{
                      width: 'clamp(40px, 3vw, 48px)',
                      height: 'clamp(40px, 3vw, 48px)'
                    }}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-8 mt-8">
                      <div 
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} p-6 flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl`}
                        style={{
                          width: 'clamp(64px, 5vw, 80px)',
                          height: 'clamp(64px, 5vw, 80px)'
                        }}
                      >
                        <IconComponent 
                          className="w-10 h-10 text-white" 
                          style={{
                            width: 'clamp(24px, 2.5vw, 40px)',
                            height: 'clamp(24px, 2.5vw, 40px)'
                          }} 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 
                        className="text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300"
                        style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)' }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-zinc-300 leading-relaxed"
                        style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: '1.7' }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors[index % colors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-yellow-600 hover:from-emerald-500 hover:to-yellow-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Start Your Project →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};