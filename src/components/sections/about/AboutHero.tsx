'use client';

import { Container } from "@/components/common/Layout";

interface AboutHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const AboutHero = ({ data }: AboutHeroProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Elite Software Development
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in [animation-delay:200ms]">
            {data.title.split(',')[0]}, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {data.title.split(',')[1] || data.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
            {data.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-12 animate-fade-in [animation-delay:600ms]">
            {[
              { number: '250+', label: 'PROJECTS' },
              { number: '180+', label: 'CLIENTS' },
              { number: '45+', label: 'TEAM' },
              { number: '12+', label: 'YEARS' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-500 font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};