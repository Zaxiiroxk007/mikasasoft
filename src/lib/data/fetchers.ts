/**
 * Data fetching utilities with caching and error handling
 */

import type {
  HomepageData,
  AboutData,
  ServicesData,
  ProjectsData,
  BlogData,
  CareersData,
  ContactData,
} from "@/types";

/**
 * Generic data fetcher
 * @param path - Path to JSON file
 * @returns Parsed JSON data
 */
async function fetchData<T>(path: string): Promise<T> {
  try {
    const data = await import(`@/data/${path}`);
    return data.default || data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw new Error(`Failed to load data from ${path}`);
  }
}

/**
 * Fetches site configuration
 */
export async function getSiteConfig() {
  return fetchData("site-config.json");
}

/**
 * Fetches homepage data
 */
export async function getHomepageData(): Promise<HomepageData> {
  return fetchData<HomepageData>("homepage.json");
}

/**
 * Fetches about page data
 */
export async function getAboutData(): Promise<AboutData> {
  const [about, team] = await Promise.all([
    fetchData("about.json"),
    fetchData("team.json"),
  ]);

  return {
    ...about,
    team: team.members,
  };
}

/**
 * Fetches services data
 */
export async function getServicesData(): Promise<ServicesData> {
  const [services, technologies, process] = await Promise.all([
    fetchData("services.json"),
    fetchData("technologies.json"),
    fetchData("process.json"),
  ]);

  return {
    ...services,
    technologies: technologies.categories,
    process: process.steps,
  };
}

/**
 * Fetches projects/portfolio data
 */
export async function getProjectsData(): Promise<ProjectsData> {
  return fetchData<ProjectsData>("projects.json");
}

/**
 * Fetches single project by slug
 * @param slug - Project slug
 */
export async function getProjectBySlug(slug: string) {
  const data = await getProjectsData();
  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`);
  }

  return project;
}

/**
 * Fetches blog data
 */
export async function getBlogData(): Promise<BlogData> {
  const [posts, authors, categories] = await Promise.all([
    fetchData("blog/posts.json"),
    fetchData("blog/authors.json"),
    fetchData("blog/categories.json"),
  ]);

  return {
    hero: {
      title: "Insights & Updates",
      subtitle: "From the Mikasasoft Team",
    },
    posts: posts.posts,
    authors: authors.authors,
    categories: categories.categories,
  };
}

/**
 * Fetches single blog post by slug
 * @param slug - Post slug
 */
export async function getPostBySlug(slug: string) {
  const data = await getBlogData();
  const post = data.posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  // Get author data
  const author = data.authors.find((a) => a.id === post.author);

  return {
    ...post,
    authorData: author,
  };
}

/**
 * Fetches careers data
 */
export async function getCareersData(): Promise<CareersData> {
  const [jobs, benefits] = await Promise.all([
    fetchData("careers/jobs.json"),
    fetchData("careers/benefits.json"),
  ]);

  return {
    hero: {
      title: "Join Our Team",
      subtitle: "Build the Future with Us",
      description: "We're always looking for talented people who are passionate about technology and innovation.",
    },
    culture: {
      title: "A Culture of Innovation",
      description: "At Mikasasoft, we've built a community of passionate technologists.",
      images: [],
      highlights: ["Remote work", "Learning budget", "Team events"],
    },
    benefits: benefits.categories,
    jobs: jobs.jobs,
    hiringProcess: [
      {
        step: 1,
        title: "Apply",
        description: "Submit your application",
        icon: "file-text",
        duration: "1 day",
      },
      {
        step: 2,
        title: "Phone Screen",
        description: "Brief call with our team",
        icon: "phone",
        duration: "30 min",
      },
      {
        step: 3,
        title: "Technical Interview",
        description: "Technical assessment",
        icon: "code",
        duration: "1-2 hours",
      },
      {
        step: 4,
        title: "Final Interview",
        description: "Meet the team",
        icon: "users",
        duration: "1 hour",
      },
      {
        step: 5,
        title: "Offer",
        description: "Welcome aboard!",
        icon: "check-circle",
        duration: "1 day",
      },
    ],
  };
}

/**
 * Fetches single job by ID
 * @param id - Job ID
 */
export async function getJobById(id: string) {
  const data = await getCareersData();
  const job = data.jobs.find((j) => j.id === id);

  if (!job) {
    throw new Error(`Job with ID "${id}" not found`);
  }

  return job;
}

/**
 * Fetches contact page data
 */
export async function getContactData(): Promise<ContactData> {
  return fetchData<ContactData>("contact.json");
}

/**
 * Fetches team members
 */
export async function getTeamMembers() {
  const data = await fetchData<{ members: unknown[] }>("team.json");
  return data.members;
}

/**
 * Fetches featured team members
 */
export async function getFeaturedTeamMembers() {
  const members = await getTeamMembers();
  return members.filter((member: { featured?: boolean }) => member.featured);
}
