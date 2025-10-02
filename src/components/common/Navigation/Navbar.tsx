"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants/routes";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2 md:px-3 lg:px-4 py-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`max-w-full mx-auto rounded-2xl border-2 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian/90 border-emerald/40 shadow-2xl shadow-emerald/20 backdrop-blur-2xl"
            : "bg-deep-midnight/70 border-white/10 backdrop-blur-xl"
        }`}
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-3xl font-display font-black bg-gradient-to-r from-emerald via-brass to-gold bg-clip-text text-transparent"
              >
                Mikasasoft
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2.5 text-platinum hover:text-emerald transition-colors duration-300 font-semibold text-sm lg:text-base group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald to-brass group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild size="lg" className="shadow-lg shadow-emerald/30">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-platinum hover:text-emerald transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-emerald/20 overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col space-y-1 py-4"
                >
                  {NAVIGATION_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-platinum hover:text-emerald hover:bg-emerald/10 transition-all duration-300 px-6 py-3 font-medium text-base rounded-lg block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: NAVIGATION_LINKS.length * 0.1 }}
                    className="px-6 pt-4"
                  >
                    <Button asChild fullWidth size="md">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}
