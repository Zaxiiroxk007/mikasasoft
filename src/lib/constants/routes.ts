/**
 * Application route constants
 */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  PORTFOLIO: "/portfolio",
  BLOG: "/blog",
  CAREERS: "/careers",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TERMS: "/terms",
} as const;

export const DYNAMIC_ROUTES = {
  PROJECT: (slug: string) => `/portfolio/${slug}`,
  BLOG_POST: (slug: string) => `/blog/${slug}`,
  JOB: (id: string) => `/careers/${id}`,
  SERVICE: (slug: string) => `/services/${slug}`,
} as const;

export const NAVIGATION_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Services", href: ROUTES.SERVICES },
  { label: "Portfolio", href: ROUTES.PORTFOLIO },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "Careers", href: ROUTES.CAREERS },
  { label: "Contact", href: ROUTES.CONTACT },
] as const;
