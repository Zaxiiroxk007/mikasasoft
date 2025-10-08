'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Eye, Heart } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  featured?: boolean;
}

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

export const BlogGrid = ({ posts, categories }: BlogGridProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const filteredPosts = posts.filter(post => 
    activeFilter === 'All' || post.category === activeFilter
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      default:
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    }
  });

  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-red-400 font-medium">Knowledge Hub</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Latest</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              Discover insights, tutorials, and industry trends from our expert team
            </motion.p>

            {/* Filters & Sorting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {['All', ...categories].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl'
                        : 'bg-black/40 text-zinc-300 hover:bg-black/60 hover:text-white border border-white/10'
                    }`}
                    style={{
                      fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex gap-3 ml-8">
                {[
                  { key: 'latest', label: 'Latest' },
                  { key: 'popular', label: 'Popular' },
                  { key: 'trending', label: 'Trending' }
                ].map((option) => (
                  <motion.button
                    key={option.key}
                    onClick={() => setSortBy(option.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      sortBy === option.key
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl'
                        : 'bg-black/40 text-zinc-300 hover:bg-black/60 hover:text-white border border-white/10'
                    }`}
                    style={{
                      fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500"


                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`relative w-full h-full ${
                      post.featured 
                        ? 'bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20'
                        : 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20'
                    }`}>
                      {/* Placeholder for post image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl ${
                          post.featured
                            ? 'bg-gradient-to-br from-red-500 to-yellow-500'
                            : 'bg-gradient-to-br from-blue-500 to-pink-500'
                        } flex items-center justify-center shadow-xl`}>
                          <span className="text-white text-2xl font-bold">
                            {post.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1.5 bg-red-500/90 backdrop-blur-md border border-red-500/30 rounded-full text-white text-xs font-bold shadow-lg">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="flex items-center px-3 py-1.5 bg-yellow-500/90 backdrop-blur-md border border-yellow-500/30 rounded-full text-white text-xs font-bold shadow-lg">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Engagement Stats */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-md rounded-full text-white text-xs">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}/k</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-black/80 backdrop-blur-md rounded-full text-white text-xs">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent" />
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 md:p-8">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-zinc-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="text-zinc-300 mb-6 leading-relaxed"
                      style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: '1.6' }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-zinc-400 text-sm font-medium">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/arrow inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold text-sm"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 group-hover/arrow:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${
                    post.featured
                      ? 'bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5'
                      : 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-500 hover:to-yellow-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Load More Articles →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};