'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Star, Calendar, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  featured: boolean;
  caseStudy?: boolean;
  slug: string;
  year: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS'];

export const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)
        `
      }} />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px: 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-green-400 font-medium">Our Portfolio</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Recent</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              Explore our diverse portfolio of successful projects across industries and technologies
            </motion.p>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl'
                      : 'bg-black/40 text-zinc-300 hover:bg-black/60 hover:text-white border border-white/10'
                  }`}
                  style={{
                    fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="relative w-full h-full bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-xl">
                          <span className="text-white text-3xl font-bold">
                            {project.title.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center px-3 py-1.5 bg-yellow-500/90 backdrop-blur-md border border-yellow-500/30 rounded-full text-white shadow-lg">
                            <Star className="w-4 h-4 mr-1" />
                            <span className="text-xs font-bold">Featured</span>
                          </div>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1.5 bg-green-500/90 backdrop-blur-md border border-green-500/30 rounded-full text-white text-xs font-bold shadow-lg">
                          {project.category}
                        </div>
                      </div>

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent" />

                      {/* Action buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.caseStudy && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/30"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                          </motion.button>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2.5 rounded-lg bg-zinc-800/80 backdrop-blur-md border border-zinc-500/30"
                        >
                          <Github className="w-4 h-4 text-zinc-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8">
                    {/* Client & Year */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-green-400 font-semibold text-sm">{project.client}</span>
                      <div className="flex items-center gap-1 text-zinc-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-zinc-300 mb-6 leading-relaxed"
                      style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: '1.6' }}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-zinc-800/70 text-zinc-400 rounded-lg text-xs font-medium border border-zinc-700/50 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-medium border border-blue-500/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Link */}
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm group/link"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
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
              Load More Projects →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};