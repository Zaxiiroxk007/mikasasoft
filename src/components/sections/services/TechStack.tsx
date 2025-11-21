'use client';

import { Code, Database, Cloud, Smartphone, Server, Cpu } from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Technology Stack
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Technologies
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            {data.description}
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {data.categories.map((category) => {
            const CategoryIcon = categoryIcons[category.name as keyof typeof categoryIcons] || Code;

            return (
              <div key={category.name} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </h4>
                        {tech.popular && (
                          <span className="px-1.5 py-0.5 bg-green-500/10 text-green-500 rounded text-[10px] font-medium border border-green-500/20">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Expertise Bar */}
                      <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-2">
                        <div
                          className="h-1.5 bg-blue-500 rounded-full"
                          style={{ width: `${tech.expertise}%` }}
                        />
                      </div>

                      <p className="text-zinc-500 text-xs">
                        {tech.expertise}% Expertise
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 text-center">
          <Button size="lg" variant="primary">
            Discuss Your Tech Stack
          </Button>
        </div>
      </Container>
    </section>
  );
};