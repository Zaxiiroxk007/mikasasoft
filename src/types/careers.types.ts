import type { ImageAsset } from "./common";

/**
 * Careers page data types
 */

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedAt: string;
  closingAt?: string;
  featured?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface BenefitCategory {
  category: string;
  benefits: Benefit[];
}

export interface HiringStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface CompanyCulture {
  title: string;
  description: string;
  images: ImageAsset[];
  highlights: string[];
}

export interface CareersData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    video?: string;
    image?: ImageAsset;
  };
  culture: CompanyCulture;
  benefits: BenefitCategory[];
  jobs: JobPosting[];
  hiringProcess: HiringStep[];
}
