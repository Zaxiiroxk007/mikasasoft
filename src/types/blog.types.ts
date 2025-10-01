import type { ImageAsset, SocialLinks } from "./common";

/**
 * Blog page data types
 */

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: ImageAsset;
  role: string;
  social: SocialLinks;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string; // Author ID
  category: string; // Category ID
  tags: string[];
  featuredImage: ImageAsset;
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  featured?: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: ImageAsset;
  category: string;
}

export interface BlogData {
  hero: {
    title: string;
    subtitle: string;
    featuredPost?: string; // Post ID
  };
  posts: BlogPost[];
  authors: Author[];
  categories: BlogCategory[];
}
