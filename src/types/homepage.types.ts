import type { ImageAsset, Testimonial, Statistic, ButtonProps } from "./common";

/**
 * Homepage data types
 */

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  cta: ButtonProps[];
  backgroundImage?: ImageAsset;
  backgroundVideo?: string;
}

export interface AboutPreview {
  title: string;
  description: string;
  image: ImageAsset;
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  cta?: ButtonProps;
}

export interface ServiceHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: ImageAsset;
}

export interface ProjectHighlight {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  thumbnail: ImageAsset;
  tags: string[];
  category: string;
}

export interface CTABanner {
  title: string;
  description: string;
  cta: ButtonProps[];
  backgroundImage?: ImageAsset;
}

export interface HomepageData {
  hero: HeroSection;
  about: AboutPreview;
  services: ServiceHighlight[];
  projects: ProjectHighlight[];
  stats: Statistic[];
  testimonials: Testimonial[];
  cta: CTABanner;
}
