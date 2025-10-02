import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import { ProcessFlow } from '@/components/sections/services/ProcessFlow';
import { TechStack } from '@/components/sections/services/TechStack';
import servicesData from '@/data/services.json';
import processData from '@/data/process.json';
import techData from '@/data/technologies.json';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero data={servicesData.hero} />
      <ServicesGrid services={servicesData.services} />
      <ProcessFlow data={{
        title: "Our Process",
        description: "We follow a proven methodology that ensures your project is delivered on time, on budget, and exceeds expectations. Here's how we transform your ideas into reality.",
        steps: processData.steps.map(step => ({
          id: step.id,
          number: step.step.toString(),
          title: step.title,
          description: step.description,
          icon: step.icon
        }))
      }} />
      <TechStack data={{
        title: "Technology Stack",
        description: "We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and secure solutions that drive your business forward.",
        categories: techData.categories.map(category => ({
          name: category.category,
          technologies: category.technologies.map(tech => ({
            name: tech.name,
            expertise: tech.proficiency,
            popular: tech.proficiency >= 90,
            trending: ['React', 'Next.js', 'TypeScript', 'AWS', 'AI & ML'].includes(category.category),
            icon: tech.icon
          }))
        }))
      }} />
    </main>
  );
}
