import { AboutHero } from '@/components/sections/about/AboutHero';
import { CompanyStory } from '@/components/sections/about/CompanyStory';


import { TeamSection } from '@/components/sections/about/TeamSection';
import aboutData from '@/data/about.json';
import teamData from '@/data/team.json';
import type { Metadata } from 'next';
import type { MissionVisionValue } from '@/types/about.types';

export const metadata: Metadata = {
  title: 'About Us | Mikasasoft',
  description: 'Learn about Mikasasoft - our story, mission, values, and the talented team building the future of software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero data={aboutData.hero} />
      <CompanyStory story={aboutData.story} />


      <TeamSection members={teamData.members} />
    </main>
  );
}
