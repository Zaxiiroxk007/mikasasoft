"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants/routes";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Layout";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
        ? "bg-zinc-950/90 border-zinc-800 backdrop-blur-md py-3"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <Container size="xl" className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <Sparkles size={16} fill="currentColor" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">
            Mikasasoft
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="primary"
            className="font-semibold px-5 py-2 rounded-full text-sm"
          >
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold mt-4"
          >
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}

