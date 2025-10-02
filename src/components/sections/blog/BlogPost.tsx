'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Share2,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';

interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: { url: string; alt: string };
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: number;
}

interface BlogPostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    thumbnail: { url: string; alt: string };
    author: string;
    category: string;
    tags: string[];
    publishDate: string;
    readTime: number;
    featured: boolean;
    views: number;
  };
  author: Author;
  relatedPosts: RelatedPost[];
}

export const BlogPost = ({ post, author, relatedPosts }: BlogPostProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative bg-deep-midnight">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-gradient-to-b from-obsidian via-deep-midnight to-deep-midnight">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 76, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 w-full w-full px-6 lg:px-8 pb-12">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-military-brass hover:text-survey-corps-emerald transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-survey-corps-emerald/10 text-military-brass text-sm font-medium border border-survey-corps-emerald/30">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-platinum">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-silver mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-military-brass" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-military-brass" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-military-brass" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-graphite/30 backdrop-blur-sm border border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center">
                <span className="text-military-brass font-bold">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-platinum font-bold">{author.name}</div>
                <div className="text-silver text-sm">{author.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="relative w-full px-6 lg:px-8 py-16" ref={ref}>
        {/* Main Content */}
        <motion.article
          className="prose prose-invert prose-lg max-w-none mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-silver leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.article>

        {/* Tags */}
        <motion.div
          className="mb-16 pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-platinum font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-graphite/50 backdrop-blur-sm border border-white/5 text-platinum hover:border-survey-corps-emerald/30 hover:bg-survey-corps-emerald/10 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Share Section */}
        <motion.div
          className="mb-16 pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5 text-military-brass" />
            <span className="text-platinum font-bold">Share this article:</span>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-graphite/50 hover:bg-survey-corps-emerald/20 border border-white/5 hover:border-survey-corps-emerald/30 flex items-center justify-center transition-all duration-300">
                <Twitter className="w-4 h-4 text-silver" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-graphite/50 hover:bg-survey-corps-emerald/20 border border-white/5 hover:border-survey-corps-emerald/30 flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-4 h-4 text-silver" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-graphite/50 hover:bg-survey-corps-emerald/20 border border-white/5 hover:border-survey-corps-emerald/30 flex items-center justify-center transition-all duration-300">
                <Facebook className="w-4 h-4 text-silver" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-graphite/50 to-slate/50 backdrop-blur-sm border border-survey-corps-emerald/20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-platinum mb-6">About the Author</h3>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-survey-corps-emerald/20 to-military-brass/20 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-military-brass">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-xl font-bold text-platinum mb-1">{author.name}</div>
              <div className="text-military-brass text-sm mb-3">{author.role}</div>
              <p className="text-silver leading-relaxed mb-4">{author.bio}</p>
              {author.social && (
                <div className="flex gap-3">
                  {author.social.twitter && (
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-survey-corps-emerald/20 flex items-center justify-center transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4 text-silver" />
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-survey-corps-emerald/20 flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 text-silver" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-platinum mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group p-6 rounded-xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-300">
                    <h4 className="text-lg font-bold text-platinum mb-2 line-clamp-2 group-hover:text-military-brass transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-silver text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-ash">
                      <span>{new Date(relatedPost.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
