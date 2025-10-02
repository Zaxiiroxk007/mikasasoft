'use client';

import { motion } from 'framer-motion';

interface AboutHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const AboutHero = ({ data }: AboutHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #2d3748 100%)'
    }}>
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Floating Particles Grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: 'clamp(20px, 3vw, 60px) clamp(20px, 3vw, 60px)'
          }} 
        />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
            style={{
              fontSize: 'clamp(12px, 1vw, 16px)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="text-blue-400 font-medium">Elite Software Development</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-bold mb-6" style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            lineHeight: '1.1'
          }}>
            <span className="text-white">{data.title.split(',')[0]},</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              {data.title.split(',')[1] || data.title}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)'
            }}
          >
            {data.description}
          </motion.p>

          {/* Dynamic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '250+', label: 'PROJECTS' },
              { number: '180+', label: 'CLIENTS' },
              { number: '45+', label: 'TEAM' },
              { number: '12+', label: 'YEARS' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="font-bold text-white mb-2"
                  style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-zinc-400 font-medium"
                  style={{ fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                padding: 'clamp(12px, 1.2vw, 18px) clamp(24px, 2vw, 36px)'
              }}
            >
              View Our Work →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-lg text-white font-semibold transition-all duration-300"
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                padding: 'clamp(12px, 1.2vw, 18px) clamp(24px, 2vw, 36px)'
              }}
            >
              Meet Our Team →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs font-medium">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-zinc-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-zinc-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};