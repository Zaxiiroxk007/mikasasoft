'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Zap, Globe } from 'lucide-react';

interface MissionVisionValuesProps {
  items: Array<{
    id: string;
    type: 'mission' | 'vision' | 'value';
    title: string;
    description: string;
    icon?: string;
  }>;
}

const iconMap = {
  mission: Target,
  vision: Eye,
  value: Heart,
  users: Users,
  zap: Zap,
  globe: Globe,
};

export const MissionVisionValues = ({ items }: MissionVisionValuesProps) => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
            backgroundSize: 'clamp(60px, 6vw, 100px) clamp(60px, 6vw, 100px)'
          }} 
        />
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-purple-400 font-medium">Our Foundation</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Mission,</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                Vision & Values
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
              The principles that guide us in everything we do, from the smallest decision to the biggest project.
            </motion.p>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {items.slice(0, 3).map((item, index) => {
              const IconComponent = iconMap[item.type as keyof typeof iconMap] || Target;
              const gradientMap = {
                mission: 'from-blue-500 to-cyan-500',
                vision: 'from-purple-500 to-pink-500',
                value: 'from-green-500 to-emerald-500'
              };
              
              return (
                <motion.div
                  key={item.id || `${item.type}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500 text-center"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Large Icon */}
                  <div className="relative z-10 mb-8">
                    <div 
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradientMap[item.type]} p-6 flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl`}
                      style={{
                        width: 'clamp(80px, 6vw, 96px)',
                        height: 'clamp(80px, 6vw, 96px)'
                      }}
                    >
                      <IconComponent 
                        className="w-12 h-12 text-white" 
                        style={{
                          width: 'clamp(32px, 3vw, 48px)',
                          height: 'clamp(32px, 3vw, 48px)'
                        }} 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-zinc-300 leading-relaxed"
                      style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)', lineHeight: '1.7' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradientMap[item.type]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {items.slice(3).map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Heart;
              
              return (
                <motion.div
                  key={item.id || `${item.type}-${index + 3}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(20px)'
                }} 
                >
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-4 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300" style={{
                      width: 'clamp(48px, 4vw, 64px)',
                      height: 'clamp(48px, 4vw, 64px)'
                    }}>
                      <IconComponent className="w-8 h-8 text-blue-400" style={{
                        width: 'clamp(20px, 2vw, 32px)',
                        height: 'clamp(20px, 2vw, 32px)'
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 
                      className="text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)' }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-zinc-400 leading-relaxed"
                      style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: '1.6' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};