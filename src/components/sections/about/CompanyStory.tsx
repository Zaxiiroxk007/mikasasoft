'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

interface CompanyStoryProps {
  story: string;
}

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We love what we do and it shows in every project we deliver.'
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'We measure success by the impact we create for our clients.'
  },
  {
    icon: Users,
    title: 'Team-Centric',
    description: 'Our collaborative approach brings out the best in everyone.'
  },
  {
    icon: Award,
    title: 'Excellence-Obsessed',
    description: 'We never settle for good enough—always pushing for greatness.'
  }
];

export const CompanyStory = ({ story }: CompanyStoryProps) => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)
        `
      }} />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px)'
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-blue-400 font-medium">Our Story</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Building Tomorrow's</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Digital Legacy
              </span>
            </h2>
          </div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl" style={{
              backdropFilter: 'blur(20px)'
            }}>
              {/* Quote decoration */}
              <div className="absolute top-8 left-8 text-blue-400 opacity-30" style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}>
                "
              </div>
              
              <blockquote 
                className="text-zinc-300 leading-relaxed italic text-lg md:text-xl lg:text-2xl"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: '1.7'
                }}
              >
                {story}
              </blockquote>
              
              <div className="absolute bottom-8 right-8 text-blue-400 opacity-30" style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}>
                "
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300 text-center"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-4 flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300" style={{
                      width: 'clamp(50px, 4vw, 64px)',
                      height: 'clamp(50px, 4vw, 64px)'
                    }}>
                      <IconComponent className="w-8 h-8 text-blue-400" style={{
                        width: 'clamp(20px, 2vw, 32px)',
                        height: 'clamp(20px, 2vw, 32px)'
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"
                      style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)', lineHeight: '1.6' }}
                    >
                      {value.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
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