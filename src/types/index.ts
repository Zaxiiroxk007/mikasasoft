/**
 * Central barrel export for all TypeScript types
 */

// Common types
export type {
  ImageAsset,
  SocialLinks,
  Address,
  ContactInfo,
  SEOMetadata,
  LinkItem,
  NavLink,
  ButtonProps,
  Testimonial,
  Statistic,
} from "./common";

// Homepage types
export type {
  HeroSection,
  AboutPreview,
  ServiceHighlight,
  ProjectHighlight,
  CTABanner,
  HomepageData,
} from "./homepage.types";

// About page types
export type {
  TimelineItem,
  MissionVisionValue,
  TeamMember,
  Certification,
  Award,
  CultureHighlight,
  AboutData,
} from "./about.types";

// Services page types
export type {
  Service,
  ProcessStep,
  Technology,
  TechnologyCategory,
  ServicesData,
} from "./services.types";

// Projects page types
export type {
  ProjectMetrics,
  Project,
  ProjectCategory,
  ProjectsData,
} from "./projects.types";

// Blog page types
export type {
  Author,
  BlogCategory,
  BlogPost,
  RelatedPost,
  BlogData,
} from "./blog.types";

// Careers page types
export type {
  JobPosting,
  Benefit,
  BenefitCategory,
  HiringStep,
  CompanyCulture,
  CareersData,
} from "./careers.types";

// Contact page types
export type {
  ContactFormData,
  Office,
  FAQ,
  ContactData,
} from "./contact.types";
