'use client';

import { Search, Code2, TestTube, Rocket, MessageCircle } from 'lucide-react';
import { Container } from "@/components/common/Layout";

interface ProcessFlowProps {
  data: {
    title: string;
    description: string;
    steps: Array<{
      id: string;
      number: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const iconMap = {
  search: Search,
  brainstorm: MessageCircle,
  code: Code2,
  test: TestTube,
  deploy: Rocket,
  discovery: Search,
};

export const ProcessFlow = ({ data }: ProcessFlowProps) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Our Process
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              Build Success
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            {data.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {data.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Code2;

              return (
                <div key={step.id} className="group relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-zinc-800 transition-all duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-emerald-500" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold text-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};