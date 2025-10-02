import { getHomepageData } from "@/lib/data/fetchers";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { CTABanner } from "@/components/sections/home/CTABanner";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <main className="w-full">
      <HomeHero data={data.hero} />
      <ServicesGrid services={data.services} />
      <FeaturedProjects projects={data.projects} />
      <TestimonialsCarousel testimonials={data.testimonials} />
      <CTABanner data={data.cta} />
    </main>
  );
}
