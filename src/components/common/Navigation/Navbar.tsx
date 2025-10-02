"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className={`relative transition-all duration-500 nav-backdrop border border-white/10 ${
          isScrolled
            ? "bg-black/40"
            : "bg-black/20"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 clamp(16px, 1.5vw, 24px) clamp(40px, 4vw, 60px) -15px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)"
            : "0 clamp(16px, 1.5vw, 24px) clamp(40px, 4vw, 60px) -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
          margin: "clamp(8px, 1vw, 16px)",
          padding: "clamp(8px, 1vw, 16px) clamp(12px, 2vw, 32px)",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 opacity-50 nav-gradient-overlay-default transition-all duration-500 ${
            isScrolled ? "nav-gradient-overlay-scrolled" : ""
          }`}
          style={{
            borderRadius: "clamp(12px, 1vw, 18px)",
          }}
        />

        <div className="relative" style={{ padding: "0 clamp(16px, 1.5vw, 32px)" }}>
          <div className="flex items-center justify-between relative" style={{ padding: "clamp(12px, 1.5vw, 24px) 0" }}>
            {/* Logo with Icon */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 p-0.5 shadow-lg shadow-blue-500/30"
                  style={{ width: "clamp(32px, 2.5vw, 40px)", height: "clamp(32px, 2.5vw, 40px)" }}
                >
                  <div className="w-full h-full bg-black flex items-center justify-center" style={{ borderRadius: "clamp(8px, 0.5vw, 12px)" }}>
                    <Sparkles style={{ width: "clamp(14px, 1.2vw, 20px)", height: "clamp(14px, 1.2vw, 20px)" }} className="text-blue-400" />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tracking-tight" style={{ fontSize: "clamp(18px, 2vw, 28px)" }}>
                    Mikasasoft
                  </span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full mt-0.5" />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation - Positioned Absolute Center */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2" style={{ gap: "clamp(20px, 2vw, 40px)" }}>
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-zinc-300 hover:text-white transition-all duration-300 font-medium group whitespace-nowrap py-2"
                    style={{ fontSize: "clamp(14px, 1vw, 18px)" }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="primary"
                  className="relative overflow-hidden shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-400/20 text-white font-semibold"
                  style={{
                    borderRadius: "clamp(8px, 0.5vw, 12px)",
                    padding: "clamp(8px, 1vw, 14px) clamp(20px, 2vw, 32px)",
                    fontSize: "clamp(14px, 1vw, 16px)"
                  }}
                >
                  <Link href="/contact" className="relative z-10">
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex-shrink-0 md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-zinc-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="md:hidden border-t border-white/10 overflow-hidden"
              >
                <motion.div
                  className="flex flex-col space-y-1 py-4"
                >
                  {NAVIGATION_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group relative text-zinc-300 hover:text-white px-4 py-3 font-medium text-base rounded-lg block"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full mt-1" />
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: NAVIGATION_LINKS.length * 0.08, duration: 0.3 }}
                    className="px-4 pt-4"
                  >
                    <Button
                      asChild
                      fullWidth
                      size="md"
                      variant="primary"
                      className="relative overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 border border-blue-400/20 rounded-lg py-3 text-white font-semibold"
                    >
                      <Link href="/contact">
                        Get Started
                      </Link>
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
