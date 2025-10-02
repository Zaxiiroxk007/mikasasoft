"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react";
import { Container } from "../Layout";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-deep-midnight to-obsidian border-t border-emerald/30">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 95, 76, 0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Company Info */}
            <motion.div {...fadeInUp}>
              <Link href="/" className="inline-block mb-6 group">
                <h3 className="text-3xl font-display font-black bg-gradient-to-r from-emerald via-brass to-gold bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  Mikasasoft
                </h3>
              </Link>
              <p className="text-silver/80 text-sm leading-relaxed mb-6">
                Building Defenses, Breaking Boundaries. Premium software development for
                visionary companies.
              </p>
              <div className="flex items-center gap-2 text-emerald">
                <div className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider">
                  Available for Projects
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.5 }}>
              <h4 className="text-platinum font-bold mb-6 text-base uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Careers", href: "/careers" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-silver hover:text-emerald transition-colors text-sm"
                    >
                      <span className="w-0 h-px bg-emerald group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.5 }}>
              <h4 className="text-platinum font-bold mb-6 text-base uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-silver hover:text-emerald transition-colors text-sm"
                    >
                      <span className="w-0 h-px bg-emerald group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3, duration: 0.5 }}>
              <h4 className="text-platinum font-bold mb-6 text-base uppercase tracking-wider">
                Get in Touch
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:contact@mikasasoft.com"
                    className="group flex items-center gap-3 text-silver hover:text-emerald transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      contact@mikasasoft.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="group flex items-center gap-3 text-silver hover:text-emerald transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      +1 (555) 123-4567
                    </span>
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {[
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg glass-card border border-emerald/20 hover:border-emerald/50 hover:bg-emerald/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-silver group-hover:text-emerald transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-10 border-t border-emerald/20 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-sm text-silver/70 text-center md:text-left">
              &copy; {currentYear} Mikasasoft. All rights reserved. Built with precision, designed
              with passion.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 rounded-full glass-card border border-emerald/30 hover:border-emerald hover:bg-emerald/10 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-silver group-hover:text-emerald transition-colors" />
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
