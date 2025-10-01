/**
 * Common types used across the application
 */

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: Address;
  social: SocialLinks;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavLink extends LinkItem {
  children?: NavLink[];
}

export interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatar?: ImageAsset;
  rating?: number;
}

export interface Statistic {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  icon?: string;
}
