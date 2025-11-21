"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Container } from "../Layout";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                Mikasasoft
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Building Defenses, Breaking Boundaries. Premium software engineering for the modern web.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <a href="mailto:contact@mikasasoft.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm mb-4">
              <Mail size={16} />
              contact@mikasasoft.com
            </a>
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Mikasasoft. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </Container>
    </footer>
  );
}

