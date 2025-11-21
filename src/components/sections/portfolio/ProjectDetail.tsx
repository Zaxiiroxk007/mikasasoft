'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Building2,
  Clock,
  Star,
  Quote,
  Cpu,
  Layers,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

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
    architecture?: string;
    keyFeatures?: string[];
    technicalDeepDive?: string;
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
  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-zinc-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>

            {/* Header Content */}
            <div className="animate-fade-in">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  {project.category}
                </div>
                {project.featured && (
                  <div className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured Case Study
                  </div>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
                {project.shortDescription}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-zinc-800 py-8 mb-10">
                <div>
                  <div className="text-zinc-500 text-sm mb-1 flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Client
                  </div>
                  <div className="text-white font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-sm mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Duration
                  </div>
                  <div className="text-white font-medium">{project.duration || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-sm mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Team Size
                  </div>
                  <div className="text-white font-medium">{project.teamSize || 'N/A'} Members</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-sm mb-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date
                  </div>
                  <div className="text-white font-medium">
                    {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>

              {/* Live Link */}
              {project.url && (
                <Button asChild size="lg" variant="primary">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Live Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-8 space-y-20">

              {/* Challenge & Solution */}
              <div className="space-y-12">
                <div className="animate-fade-in [animation-delay:200ms]">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-red-500 rounded-full" />
                    The Challenge
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="animate-fade-in [animation-delay:300ms]">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-blue-500 rounded-full" />
                    The Solution
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technical Deep Dive */}
              {project.technicalDeepDive && (
                <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 animate-fade-in [animation-delay:400ms]">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-purple-500" />
                    Technical Deep Dive
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    {project.technicalDeepDive}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {project.keyFeatures && (
                <div className="animate-fade-in [animation-delay:500ms]">
                  <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="animate-fade-in [animation-delay:600ms]">
                <h2 className="text-2xl font-bold text-white mb-8">Impact & Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                      <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                      <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-10">

              {/* Architecture */}
              {project.architecture && (
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 animate-fade-in [animation-delay:400ms]">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-500" />
                    Architecture
                  </h3>
                  <div className="text-zinc-300 font-medium">
                    {project.architecture}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 animate-fade-in [animation-delay:500ms]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-sm border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 animate-fade-in [animation-delay:600ms]">
                  <Quote className="w-8 h-8 text-zinc-700 mb-4" />
                  <p className="text-zinc-300 italic mb-6 leading-relaxed">
                    &ldquo;{project.testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">
                      {project.testimonial.author[0]}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{project.testimonial.author}</div>
                      <div className="text-zinc-500 text-xs">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950">
        <Container size="md" className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Own Success Story?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Let&apos;s discuss how we can apply these same engineering principles to your project.
          </p>
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">
              Start a Conversation
            </Link>
          </Button>
        </Container>
      </section>
    </div>
  );
};
