import type { ImageAsset, SocialLinks } from "./common";

/**
 * About page data types
 */

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
  image?: ImageAsset;
}

export interface MissionVisionValue {
  id: string;
  type: "mission" | "vision" | "value";
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: ImageAsset;
  social: SocialLinks;
  featured?: boolean;
  skills?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  logo: ImageAsset;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  year: string;
  image?: ImageAsset;
}

export interface CultureHighlight {
  title: string;
  description: string;
  images: ImageAsset[];
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  story: string;
  timeline: TimelineItem[];
  missionVisionValues: MissionVisionValue[];
  team: TeamMember[];
  culture: CultureHighlight;
  certifications: Certification[];
  awards: Award[];
}
