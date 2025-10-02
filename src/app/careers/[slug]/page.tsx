import { notFound } from 'next/navigation';
import { JobDetail } from '@/components/sections/careers/JobDetail';
import careersData from '@/data/careers.json';

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return careersData.jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default function JobPage({ params }: JobPageProps) {
  const job = careersData.jobs.find(j => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <JobDetail job={job} />
    </main>
  );
}
