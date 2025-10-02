'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-obsidian via-deep-midnight to-deep-midnight flex items-center justify-center px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 76, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-survey-corps-emerald/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-military-brass/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-9xl md:text-[12rem] font-bold">
              <span className="bg-gradient-to-r from-survey-corps-emerald via-military-brass to-survey-corps-emerald bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-platinum mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-silver mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-survey-corps-emerald to-military-brass text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-survey-corps-emerald/20"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-graphite/50 backdrop-blur-sm border border-white/10 text-platinum font-bold hover:border-survey-corps-emerald/30 transition-all duration-300"
            >
              <Search className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-silver text-sm mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-military-brass hover:text-survey-corps-emerald transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
