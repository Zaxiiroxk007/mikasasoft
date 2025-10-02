import { notFound } from 'next/navigation';
import { BlogPost } from '@/components/sections/blog/BlogPost';
import blogData from '@/data/blog.json';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogData.posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.posts.find(p => p.slug === params.slug);
  const author = post ? blogData.authors.find(a => a.id === post.author) : null;
  const relatedPosts = post
    ? blogData.posts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3)
    : [];

  if (!post || !author) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <BlogPost post={post} author={author} relatedPosts={relatedPosts} />
    </main>
  );
}
