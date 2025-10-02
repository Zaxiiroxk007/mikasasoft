"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Heading } from "@/components/common/Typography";
import { FadeIn, StaggerChildren } from "@/components/common/Animations";
import { Button } from "@/components/ui/button";
import type { ProjectHighlight } from "@/types";

interface FeaturedProjectsProps {
  projects: ProjectHighlight[];
}

function ProjectCard({ project }: { project: ProjectHighlight }) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative h-full"
      >
        <div className="glass-card h-full rounded-2xl border-2 border-white/10 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-graphite/70 to-slate/40 hover:border-emerald/50 hover:shadow-2xl hover:shadow-emerald/30 transition-all duration-500">
          {/* Image Container with Overlay */}
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-emerald/30 via-obsidian to-brass/30">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/40 via-graphite to-brass/40" />
            <div className="absolute inset-0 bg-gradient-to-tl from-crimson/20 via-transparent to-emerald/20" />

            {/* Animated gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald/50 via-brass/40 to-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Project initials placeholder with premium styling */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-emerald/50 to-brass/50 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl">
                  {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
            </div>

            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-midnight/95 via-deep-midnight/50 to-transparent z-[5]" />

            {/* Floating badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className="px-3 py-1.5 text-xs bg-emerald/90 backdrop-blur-md border border-emerald/30 rounded-full text-white font-bold uppercase tracking-wider shadow-lg">
                {project.category}
              </div>
            </div>

            {/* External link icon on hover */}
            <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-lg bg-emerald/20 backdrop-blur-md border border-emerald/30">
                <ExternalLink className="w-4 h-4 text-emerald" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Client name */}
            <p className="text-xs md:text-sm text-brass font-bold uppercase tracking-wider mb-4">
              {project.client}
            </p>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-5 bg-gradient-to-r from-platinum to-silver bg-clip-text text-transparent group-hover:from-emerald group-hover:to-brass transition-all duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-platinum text-base md:text-lg mb-8 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-lg bg-slate/50 text-silver/80 border border-slate/30 font-medium hover:bg-emerald/10 hover:border-emerald/30 hover:text-emerald transition-colors"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-3 py-1.5 text-xs rounded-lg bg-emerald/10 text-emerald border border-emerald/30 font-medium">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center text-emerald text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
              <span>View Case Study</span>
              <ArrowRight size={18} className="ml-2" />
            </div>
          </div>

          {/* Gradient border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald/20 via-transparent to-brass/20" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section spacing="xl" background="default" className="relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brass/30 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <FadeIn className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-2 border-emerald/30 text-emerald text-sm md:text-base font-bold mb-8 shadow-lg shadow-emerald/20"
          >
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
            Our Work
          </motion.div>

          <Heading as="h2" className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-platinum via-pure-white to-silver bg-clip-text text-transparent">
              Featured Projects
            </span>
          </Heading>
          <p className="text-platinum text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that have transformed businesses and delighted users
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16">
          {projects.slice(0, 6).map((project) => (
            <FadeIn key={project.id}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
