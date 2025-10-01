import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "../Layout";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-slate/50">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Mikasasoft</h3>
              <p className="text-silver text-sm mb-4">
                Building Defenses, Breaking Boundaries. Premium software development for
                visionary companies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-platinum font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-platinum font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-silver hover:text-emerald transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-platinum font-semibold mb-4">Get in Touch</h4>
              <ul className="space-y-2 text-sm text-silver">
                <li>contact@mikasasoft.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-4 flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate/50 text-center">
            <p className="text-sm text-silver">
              &copy; {currentYear} Mikasasoft. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
