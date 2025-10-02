import { AboutHero } from '@/components/sections/about/AboutHero';
import { CompanyStory } from '@/components/sections/about/CompanyStory';
import { MissionVisionValues } from '@/components/sections/about/MissionVisionValues';
import { CompanyTimeline } from '@/components/sections/about/CompanyTimeline';
import { TeamSection } from '@/components/sections/about/TeamSection';
import aboutData from '@/data/about.json';
import teamData from '@/data/team.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Mikasasoft',
  description: 'Learn about Mikasasoft - our story, mission, values, and the talented team building the future of software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero data={aboutData.hero} />
      <CompanyStory story={aboutData.story} />
      <MissionVisionValues items={aboutData.missionVisionValues} />
      <CompanyTimeline data={{
        title: "Company Timeline",
        subtitle: "Our Journey Through Innovation",
        description: "From our humble beginnings to becoming a leading software development agency, here's our story of growth, innovation, and success.", 
        timeline: aboutData.timeline
      }} />
      <TeamSection members={teamData.members} />
    </main>
  );
}
