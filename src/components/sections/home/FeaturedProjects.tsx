"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import type { ProjectHighlight } from "@/types";

import Image from "next/image";
import { getCategoryImage } from "@/lib/utils/helpers";

interface FeaturedProjectsProps {
  projects: ProjectHighlight[];
}

function ProjectCard({ project }: { project: ProjectHighlight }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <div className="relative h-full rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-xl flex flex-col">
        {/* Image Placeholder / Gradient */}
        <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
          <Image
            src={getCategoryImage(project.category)}
            alt={project.category}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />

          {/* Project Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              {project.client}
            </p>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-auto pt-4 border-t border-zinc-800">
            View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400">
            Explore our portfolio of successful projects that have transformed businesses and delighted users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="primary">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
