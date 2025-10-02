'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';

interface CareersHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      openPositions: number;
      employees: number;
      growth: string;
      satisfaction: string;
    };
    openPositions: Array<{
      title: string;
      department: string;
      type: string;
      location: string;
    }>;
  };
}

export const CareersHero = ({ data }: CareersHeroProps) => {
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

      {/* Floating Career Badges */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { tech: 'React', left: 15, top: 20 },
          { tech: 'Node.js', left: 80, top: 70 },
          { tech: 'Python', left: 25, top: 40 },
          { tech: 'AWS', left: 65, top: 15 },
          { tech: 'Docker', left: 10, top: 60 },
          { tech: 'Kubernetes', left: 90, top: 35 },
          { tech: 'TypeScript', left: 50, top: 85 },
          { tech: 'Terraform', left: 75, top: 45 }
        ].map((item, i) => (
          <motion.div
            key={item.tech}
            className="absolute px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `-${i * 0.5}s`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (i % 2 === 0 ? 8 : -6), 0],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            {item.tech}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Badge */}
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
              <Briefcase className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-400 font-medium">Join Our Team</span>
            </motion.div>

            {/* Title */}
            <h1 className="font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Build The</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-zinc-300 max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              {data.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {[
                { label: 'Open Positions', value: data.stats.openPositions, icon: Users },
                { label: 'Team Members', value: data.stats.employees, icon: Users },
                { label: 'Growth Rate', value: data.stats.growth, icon: TrendingUp },
                { label: 'Job Satisfaction', value: data.stats.satisfaction, icon: Award }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 p-2">
                        <IconComponent className="w-4 h-4 text-green-400" />
                      </div>
                      <div 
                        className="font-bold text-white"
                        style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div 
                      className="text-zinc-400 font-medium"
                      style={{ fontSize: 'clamp(0.7rem, 1vw, 0.9rem)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  padding: 'clamp(12px, 1.2vw, 18px) clamp(24px, 2vw, 36px)'
                }}
              >
                View Open Positions →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-xl text-white font-semibold transition-all duration-300"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  padding: 'clamp(12px, 1.2vw, 18px) clamp(24px, 2vw, 36px)'
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl"
              style={{
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="mb-6">
                <h3 
                  className="text-white font-bold mb-2"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                >
                  Recent Openings
                </h3>
                <p 
                  className="text-zinc-400"
                  style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}
                >
                  Join our growing team of talented professionals
                </p>
              </div>

              <div className="space-y-4">
                {data.openPositions.slice(0, 4).map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 
                          className="text-white font-semibold mb-1"
                          style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
                        >
                          {position.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                            {position.department}
                          </span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            {position.type}
                          </span>
                        </div>
                        <p 
                          className="text-zinc-400 text-xs"
                          style={{ fontSize: 'clamp(0.7rem, 1vw, 0.8rem)' }}
                        >
                          📍 {position.location}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 transition-all duration-300"
                      >
                        <Briefcase className="w-4 h-4 text-green-400" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl text-green-400 font-semibold hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300"
                style={{
                  fontSize: 'clamp(12px, 1vw, 14px)'
                }}
              >
                View All Positions →
              </motion.button>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs font-medium">EXPLORE OPPORTUNITIES</span>
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