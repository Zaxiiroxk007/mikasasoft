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
        <div className="relative h-full rounded-2xl border border-zinc-700/50 overflow-hidden backdrop-blur-sm bg-zinc-900/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-zinc-800/50">
          {/* Image Container with Overlay */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-500/20 via-zinc-900 to-purple-500/20">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-zinc-800 to-purple-500/30" />
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/10 via-transparent to-purple-400/10" />

            {/* Animated gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Project initials placeholder with premium styling */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 backdrop-blur-md border-2 border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl md:text-4xl font-black text-white drop-shadow-2xl">
                  {project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
            </div>

            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent z-[5]" />

            {/* Floating badge */}
            <div className="absolute top-5 right-5 z-20">
              <div className="px-4 py-2 text-xs bg-blue-500/90 backdrop-blur-md border border-blue-500/30 rounded-full text-white font-bold uppercase tracking-wider shadow-lg">
                {project.category}
              </div>
            </div>

            {/* External link icon on hover */}
            <div className="absolute top-5 left-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2.5 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/30">
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Client name */}
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-3">
              {project.client}
            </p>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-snug">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-zinc-800/70 text-zinc-400 border border-zinc-700/50 font-medium hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30 font-medium">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
              <span>View Case Study</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
          </div>

          {/* Gradient border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section spacing="xl" background="default" className="relative overflow-hidden border-t border-zinc-800">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <FadeIn className="text-center mb-20">
          <Heading as="h2" className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </Heading>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-sm md:text-base font-bold mb-6 shadow-lg shadow-blue-500/20"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Our Work
          </motion.div>

          <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that have transformed businesses and delighted users
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {projects.slice(0, 4).map((project) => (
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
