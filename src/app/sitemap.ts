import { MetadataRoute } from 'next';
import projectsData from '@/data/projects.json';
import blogData from '@/data/blog.json';
import careersData from '@/data/careers.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mikasasoft.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/careers',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Portfolio project pages
  const projectPages = projectsData.projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog post pages
  const blogPages = blogData.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Career pages
  const careerPages = careersData.jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(job.posted),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages, ...careerPages];
}
