'use client';

import { motion } from 'framer-motion';
import { Search, Calendar, TrendingUp, Clock, Star } from 'lucide-react';

interface BlogHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    featuredPost?: {
      title: string;
      excerpt: string;
      slug: string;
      image: string;
      date: string;
      category: string;
      readTime: string;
    };
    stats: {
      totalPosts: number;
      categories: number;
      monthlyViews: number;
      writers: number;
    };
  };
}

export const BlogHero = ({ data }: BlogHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { w: 80, h: 60, left: 15, top: 20 },
          { w: 120, h: 90, left: 80, top: 10 },
          { w: 100, h: 80, left: 30, top: 60 },
          { w: 70, h: 110, left: 85, top: 70 },
          { w: 90, h: 70, left: 10, top: 80 },
          { w: 130, h: 100, left: 90, top: 40 },
          { w: 60, h: 85, left: 50, top: 15 },
          { w: 110, h: 95, left: 65, top: 85 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${item.w}px`,
              height: `${item.h}px`,
              left: `${item.left}%`,
              top: `${item.top}%`,
              filter: 'blur(30px)'
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 20 : -15)],
              y: [0, (i % 3 === 0 ? 25 : -20)],
              scale: [1, i % 4 === 0 ? 1.2 : 0.9],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-400 font-medium">Latest Insights</span>
            </motion.div>

            {/* Title */}
            <h1 className="font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Innovation</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                & Insights
              </span>
            </h1>

            {/* Description */}
            <motion.p
              className="text-zinc-300 max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              {data.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {[
                { label: 'Articles', value: data.stats.totalPosts },
                { label: 'Categories', value: data.stats.categories },
                { label: 'Monthly Views', value: data.stats.monthlyViews + 'K' },
                { label: 'Writers', value: data.stats.writers }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="font-bold text-white mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-zinc-400 font-medium"
                    style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl text-white placeholder-zinc-400 focus:border-orange-500/50 focus:outline-none transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Featured Post */}
          {data.featuredPost && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Featured Post Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                style={{
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Post Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20">
                    {/* Placeholder for post image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-xl">
                        <span className="text-white text-3xl font-bold">
                          {data.featuredPost.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center px-3 py-1.5 bg-orange-500/90 backdrop-blur-md border border-orange-500/30 rounded-full text-white shadow-lg">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-xs font-bold">Featured</span>
                      </div>
                    </div>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-8">
                  {/* Category & Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-semibold">
                      {data.featuredPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-zinc-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{data.featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{data.featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-white font-bold mb-4"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                  >
                    {data.featuredPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p 
                    className="text-zinc-300 mb-6 leading-relaxed"
                    style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: '1.6' }}
                  >
                    {data.featuredPost.excerpt}
                  </p>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-500 hover:to-pink-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{
                      fontSize: 'clamp(14px, 1.2vw, 16px)'
                    }}
                  >
                    Read Full Article →
                  </motion.button>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs font-medium">EXPLORE ARTICLES</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-zinc-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-zinc-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};