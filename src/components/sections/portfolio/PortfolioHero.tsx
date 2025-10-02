'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

interface PortfolioHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const featuredProjects = [
  {
    title: 'Enterprise SaaS Platform',
    category: 'Web Application',
    description: 'A comprehensive business management platform with real-time analytics and team collaboration features.',
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    image: '/placeholder-project-1.jpg'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Application',
    description: 'Secure and intuitive banking experience with advanced biometric authentication and digital wallet integration.',
    tech: ['React Native', 'Swift', 'Firebase', 'Node.js'],
    gradient: 'from-purple-500 to-pink-500',
    image: '/placeholder-project-2.jpg'
  },
  {
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Modern marketplace solution with AI-powered recommendations and seamless payment processing.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Stripe'],
    gradient: 'from-green-500 to-emerald-500',
    image: '/placeholder-project-3.jpg'
  }
];

export const PortfolioHero = ({ data }: PortfolioHeroProps) => {
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

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: 'clamp(40px, 5vw, 80px) clamp(40px, 5vw, 80px)'
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-blue-400 font-medium">Premium Portfolio</span>
            </motion.div>

            <h1 className="font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Crafting Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Masterpieces
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
              Explore our collection of innovative projects that have transformed businesses and created exceptional digital experiences.
            </motion.p>
          </div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                style={{
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Project Image/Background */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}
                  >
                    {project.title}
                  </h3>

                  <p 
                    className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 mb-4"
                    style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)', lineHeight: '1.6' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium"
                        style={{ fontSize: 'clamp(10px, 0.8vw, 12px)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Awards Won' },
              { number: '15+', label: 'Industries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl">
                <div 
                  className="font-bold text-white mb-2"
                  style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-zinc-400 font-medium"
                  style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}
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
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              View All Projects →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};