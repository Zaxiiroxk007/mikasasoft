'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Shield, Zap, Globe } from 'lucide-react';
import { BRAND_COLORS, BACKGROUND_EFFECTS } from '@/lib/constants/theme';

interface ServicesHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const services = [
  { icon: Code, title: 'Web Development', color: BRAND_COLORS.web },
  { icon: Smartphone, title: 'Mobile Apps', color: BRAND_COLORS.mobile },
  { icon: Palette, title: 'UI/UX Design', color: BRAND_COLORS.design },
  { icon: Globe, title: 'Digital Strategy', color: BRAND_COLORS.cloud },
  { icon: Shield, title: 'Security', color: BRAND_COLORS.security },
  { icon: Zap, title: 'Performance', color: BRAND_COLORS.ai },
];

export const ServicesHero = ({ data }: ServicesHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #2d3748 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 4vw, 60px) clamp(30px, 4vw, 60px)'
          }} 
        />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-purple-400 font-medium">Premium Development Services</span>
            </motion.div>

            <h1 className="font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Building Tomorrow's</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)'
              }}
            >
              We craft digital experiences that transform businesses and delight users. From concept to deployment, we deliver exceptional results.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`} style={{
                      width: 'clamp(50px, 4vw, 64px)',
                      height: 'clamp(50px, 4vw, 64px)'
                    }}>
                      <IconComponent className="w-8 h-8 text-white" style={{
                        width: 'clamp(24px, 2vw, 32px)',
                        height: 'clamp(24px, 2vw, 32px)'
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-white font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                    >
                      {service.title}
                    </h3>
                    <p 
                      className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"
                      style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}
                    >
                      Comprehensive solutions designed to scale your business and deliver exceptional user experiences.
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Explore Our Services →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};