'use client';

import { Linkedin, Github, Twitter } from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  bio: string;
  image: {
    url: string;
    alt: string;
  };
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  featured?: boolean;
  skills?: string[];
}

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Meet Our Team
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Minds <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Behind Innovation
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            Our diverse team of experts brings together decades of experience in cutting-edge technologies and business innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Member Image Placeholder */}
              <div className="aspect-[4/3] bg-zinc-800 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${index % 3 === 0 ? 'from-blue-500/10 to-purple-500/10' :
                  index % 3 === 1 ? 'from-green-500/10 to-blue-500/10' :
                    'from-purple-500/10 to-pink-500/10'
                  }`} />

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-500">
                    {member.role}
                  </p>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="primary">
            Join Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
};