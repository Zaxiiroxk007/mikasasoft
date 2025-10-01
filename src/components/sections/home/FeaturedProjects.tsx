"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Heading } from "@/components/common/Typography";
import { GlassCard } from "@/components/common/Cards";
import { FadeIn, StaggerChildren } from "@/components/common/Animations";
import { Button } from "@/components/ui/button";
import type { ProjectHighlight } from "@/types";

interface FeaturedProjectsProps {
  projects: ProjectHighlight[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section spacing="xl">
      <Container>
        <FadeIn className="text-center mb-16">
          <Heading as="h2" gradient className="mb-4">
            Featured Work
          </Heading>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <FadeIn key={project.id}>
              <Link href={`/portfolio/${project.slug}`}>
                <GlassCard hover className="group cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-emerald/20 to-brass/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl opacity-50">📱</span>
                  </div>

                  <div className="mb-2">
                    <span className="text-xs text-emerald font-medium">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-platinum mb-2 group-hover:text-emerald transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-silver text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-slate/50 text-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-emerald text-sm font-medium group-hover:translate-x-2 transition-transform">
                    View Case Study
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </GlassCard>
              </Link>
            </FadeIn>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-12">
          <Button asChild variant="secondary" size="lg">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
