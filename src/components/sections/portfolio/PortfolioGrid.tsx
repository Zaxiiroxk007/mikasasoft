'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Star } from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { getCategoryImage } from "@/lib/utils/helpers";

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

const categories = ['All', 'Healthcare', 'FinTech', 'Mobile Apps', 'Big Data', 'Enterprise Systems', 'Web Development'];

export const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project =>
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Our Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Projects
            </span>
          </h2>

          <p className="text-lg text-zinc-400 mb-12">
            Explore our diverse portfolio of successful projects across industries and technologies
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-zinc-800 overflow-hidden">
                <Image
                  src={getCategoryImage(project.category)}
                  alt={project.category}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-medium">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-2 py-1 bg-zinc-950/50 backdrop-blur-sm border border-white/10 rounded-full text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-400 text-sm font-medium">{project.client}</span>
                  <div className="flex items-center gap-1 text-zinc-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-xs border border-zinc-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Link */}
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-blue-400 transition-colors mt-auto"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900">
            Load More Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};