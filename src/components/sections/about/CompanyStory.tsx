'use client';

import { Award, Users, Target, Heart } from 'lucide-react';
import { Container } from "@/components/common/Layout";

interface CompanyStoryProps {
  story: string;
}

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We love what we do and it shows in every project we deliver.'
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'We measure success by the impact we create for our clients.'
  },
  {
    icon: Users,
    title: 'Team-Centric',
    description: 'Our collaborative approach brings out the best in everyone.'
  },
  {
    icon: Award,
    title: 'Excellence-Obsessed',
    description: 'We never settle for good enough—always pushing for greatness.'
  }
];

export const CompanyStory = ({ story }: CompanyStoryProps) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Our Story
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Tomorrow&apos;s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Digital Legacy
            </span>
          </h2>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative p-8 md:p-12 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div className="text-zinc-300 leading-relaxed text-lg md:text-xl">
              {story}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};