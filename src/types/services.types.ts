import type { ImageAsset } from "./common";

/**
 * Services page data types
 */

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  caseStudies: string[]; // Project IDs
  benefits: string[];
  image?: ImageAsset;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
  proficiency?: number;
}

export interface TechnologyCategory {
  category: string;
  technologies: Technology[];
}

export interface ServicesData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: Service[];
  process: ProcessStep[];
  technologies: TechnologyCategory[];
}
