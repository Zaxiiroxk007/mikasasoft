import { notFound } from 'next/navigation';
import { JobDetail } from '@/components/sections/careers/JobDetail';
import careersData from '@/data/careers.json';

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return careersData.jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = careersData.jobs.find(j => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <JobDetail job={job} />
    </main>
  );
}
