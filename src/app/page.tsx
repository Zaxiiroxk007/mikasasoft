import { getHomepageData } from "@/lib/data/fetchers";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { CTABanner } from "@/components/sections/home/CTABanner";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <main>
      <HomeHero data={data.hero} />
      <ServicesGrid services={data.services} />
      <FeaturedProjects projects={data.projects} />
      <CTABanner data={data.cta} />
    </main>
  );
}
