"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants/routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-card mx-4 my-4 rounded-lg"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold gradient-text">
                Mikasasoft
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-silver hover:text-emerald transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild size="sm">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-platinum hover:text-emerald transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-glass-border pt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-silver hover:text-emerald transition-colors duration-300 px-4 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4">
                  <Button asChild fullWidth>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </header>
  );
}
