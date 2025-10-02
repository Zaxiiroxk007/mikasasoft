'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Building2,
  Clock,
  Star,
  Quote
} from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: string;
    slug: string;
    title: string;
    client: string;
    category: string;
    tags: string[];
    thumbnail: { url: string; alt: string };
    images?: Array<{ url: string; alt: string }>;
    shortDescription: string;
    challenge: string;
    solution: string;
    results: Array<{ metric: string; value: string }>;
    technologies: string[];
    testimonial?: {
      id: string;
      text: string;
      author: string;
      role: string;
      company: string;
      rating: number;
    };
    featured: boolean;
    date: string;
    industry: string;
    duration?: string;
    teamSize?: number;
    url?: string;
  };
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative bg-deep-midnight">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-obsidian via-deep-midnight to-deep-midnight">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 76, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-8 py-20 text-center">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-military-brass hover:text-survey-corps-emerald transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category & Featured Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-survey-corps-emerald/10 text-military-brass text-sm font-medium border border-survey-corps-emerald/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-military-brass to-survey-corps-emerald text-white text-sm font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-survey-corps-emerald via-military-brass to-survey-corps-emerald bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            {/* Client */}
            <p className="text-xl text-silver mb-8">{project.client}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-silver">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-military-brass" />
                <span>{project.industry}</span>
              </div>
              {project.duration && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-military-brass" />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-military-brass" />
                  <span>{project.teamSize} team members</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-military-brass" />
                <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Project Link */}
            {project.url && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-survey-corps-emerald to-military-brass text-white font-bold hover:scale-105 transition-transform duration-300"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24" ref={ref}>
        {/* Challenge Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            The Challenge
          </h2>
          <p className="text-lg text-silver leading-relaxed">
            {project.challenge}
          </p>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Our Solution
          </h2>
          <p className="text-lg text-silver leading-relaxed">
            {project.solution}
          </p>
        </motion.section>

        {/* Results Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Results & Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-survey-corps-emerald to-military-brass bg-clip-text text-transparent mb-2">
                  {result.value}
                </div>
                <div className="text-silver text-sm">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-lg bg-graphite/50 backdrop-blur-sm border border-white/5 text-platinum font-medium hover:border-survey-corps-emerald/30 hover:bg-survey-corps-emerald/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Testimonial Section */}
        {project.testimonial && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-graphite/50 to-slate/50 backdrop-blur-sm border border-survey-corps-emerald/20 overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-survey-corps-emerald/20" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-military-brass fill-military-brass" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-platinum leading-relaxed mb-8 italic">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center">
                    <span className="text-military-brass font-bold">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-platinum font-bold">{project.testimonial.author}</div>
                    <div className="text-silver text-sm">
                      {project.testimonial.role}, {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-survey-corps-emerald/10 to-military-brass/10 border border-survey-corps-emerald/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-silver text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Get in touch to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-survey-corps-emerald to-military-brass text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-survey-corps-emerald/20"
          >
            <span>Get Started</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};
