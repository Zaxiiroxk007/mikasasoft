import { PortfolioHero } from '@/components/sections/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/sections/portfolio/PortfolioGrid';
import projectsData from '@/data/projects.json';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero data={projectsData.hero} />
      <PortfolioGrid
        projects={projectsData.projects}
        categories={projectsData.categories}
      />
    </main>
  );
}
