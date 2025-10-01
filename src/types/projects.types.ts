import type { ImageAsset, Testimonial } from "./common";

/**
 * Projects/Portfolio page data types
 */

export interface ProjectMetrics {
  metric: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  thumbnail: ImageAsset;
  images: ImageAsset[];
  shortDescription: string;
  challenge: string;
  solution: string;
  results: ProjectMetrics[];
  technologies: string[];
  testimonial?: Testimonial;
  featured: boolean;
  date: string;
  industry?: string;
  duration?: string;
  teamSize?: number;
  url?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export interface ProjectsData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  projects: Project[];
  categories: ProjectCategory[];
}
