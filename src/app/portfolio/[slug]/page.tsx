import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/sections/portfolio/ProjectDetail';
import projectsData from '@/data/projects.json';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectDetail project={project} />
    </main>
  );
}
