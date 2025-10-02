import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import blogData from '@/data/blog.json';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero data={{
        title: blogData.hero.title,
        subtitle: blogData.hero.subtitle,
        description: blogData.hero.description,
        featuredPost: blogData.posts.find(post => post.featured) ? {
          title: blogData.posts.find(post => post.featured)!.title,
          excerpt: blogData.posts.find(post => post.featured)!.excerpt,
          slug: blogData.posts.find(post => post.featured)!.slug,
          image: blogData.posts.find(post => post.featured)!.thumbnail.url,
          date: blogData.posts.find(post => post.featured)!.publishDate,
          category: blogData.categories.find(cat => cat.id === blogData.posts.find(post => post.featured)!.category)?.name || 'Technology',
          readTime: `${blogData.posts.find(post => post.featured)!.readTime} min read`
        } : undefined,
        stats: {
          totalPosts: blogData.posts.length,
          categories: blogData.categories.length,
          monthlyViews: blogData.posts.reduce((total, post) => total + post.views, 0),
          writers: blogData.authors.length
        }
      }} />
      <BlogGrid
        posts={blogData.posts.map(post => ({
          ...post,
          author: {
            name: blogData.authors.find(author => author.id === post.author)?.name || 'Unknown Author',
            avatar: blogData.authors.find(author => author.id === post.author)?.avatar?.url || ''
          }
        }))}
        categories={blogData.categories.map(category => category.name)}
      />
    </main>
  );
}
