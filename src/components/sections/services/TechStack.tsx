'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Server, Cpu } from 'lucide-react';

interface TechStackProps {
  data: {
    title: string;
    description: string;
    categories: Array<{
      name: string;
      technologies: Array<{
        name: string;
        expertise: number;
        popular: boolean;
        trending: boolean;
        icon?: string;
      }>;
    }>;
  };
}

const categoryIcons = {
  'Frontend': Code,
  'Backend': Server,
  'Database': Database,
  'Cloud': Cloud,
  'Mobile': Smartphone,
  'DevOps': Cpu,
};

export const TechStack = ({ data }: TechStackProps) => {
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

      {/* Floating Tech Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
            backgroundSize: 'clamp(20px, 3vw, 40px) clamp(20px, 3vw, 40px)'
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
              <span className="text-blue-400 font-medium">Technology Stack</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Cutting-Edge</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Technologies
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

          {/* Tech Categories */}
          <div className="space-y-12">
            {data.categories.map((category, categoryIndex) => {
              const CategoryIcon = categoryIcons[category.name as keyof typeof categoryIcons] || Code;
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
                  className="relative"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-3 flex items-center justify-center" style={{
                      width: 'clamp(40px, 3vw, 48px)',
                      height: 'clamp(40px, 3vw, 48px)'
                    }}>
                      <CategoryIcon className="w-6 h-6 text-blue-400" style={{
                        width: 'clamp(20px, 2vw, 24px)',
                        height: 'clamp(20px, 2vw, 24px)'
                      }} />
                    </div>
                    <h3 
                      className="text-white font-bold"
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                    >
                      {category.name}
                    </h3>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 + categoryIndex * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative p-4 md:p 6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                        style={{
                          backdropFilter: 'blur(20px)'
                        }}
                      >
                        {/* Technology Name */}
                        <div className="text-center">
                          <h4 
                            className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
                          >
                            {tech.name}
                          </h4>

                          {/* Expertise Bar */}
                          <div className="w-full bg-zinc-700/50 rounded-full h-2 mb-3">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.expertise}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 + categoryIndex * 0.1 + techIndex * 0.05 }}
                              style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                            />
                          </div>

                          {/* Expertise Level */}
                          <p 
                            className="text-zinc-400 text-xs"
                            style={{ fontSize: 'clamp(0.7rem, 1vw, 0.8rem)' }}
                          >
                            {tech.expertise}% Expertise
                          </p>

                          {/* Badges */}
                          <div className="flex gap-1 justify-center mt-3">
                            {tech.popular && (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                                Popular
                              </span>
                            )}
                            {tech.trending && (
                              <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">
                                Trending
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
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
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-500 hover:to-green-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Discuss Your Tech Stack →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};