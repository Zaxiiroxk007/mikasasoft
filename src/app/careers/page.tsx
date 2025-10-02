import { CareersHero } from '@/components/sections/careers/CareersHero';
import { WhyWorkWithUs } from '@/components/sections/careers/WhyWorkWithUs';
import { BenefitsSection } from '@/components/sections/careers/BenefitsSection';
import { JobListings } from '@/components/sections/careers/JobListings';
import { ApplicationProcess } from '@/components/sections/careers/ApplicationProcess';
import careersData from '@/data/careers.json';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero data={{
        title: careersData.hero.title,
        subtitle: careersData.hero.subtitle,
        description: careersData.hero.description,
        stats: {
          openPositions: careersData.jobs.filter(job => job.featured).length,
          employees: 45,
          growth: '+150%',
          satisfaction: '98%'
        },
        openPositions: careersData.jobs.filter(job => job.featured).slice(0, 4).map(job => ({
          title: job.title,
          department: job.department,
          type: job.type,
          location: job.location
        }))
      }} />
      <WhyWorkWithUs data={careersData.whyWorkWithUs} />
      <BenefitsSection benefits={careersData.benefits} />
      <JobListings jobs={careersData.jobs} />
      <ApplicationProcess data={careersData.applicationProcess} />
    </main>
  );
}
