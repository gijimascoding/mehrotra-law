"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200"
          : "bg-white"
      }`}
      role="banner"
    >
      <nav className="container-firm flex items-center justify-between h-18 md:h-20" aria-label="Main navigation">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              {"children" in link && link.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      pathname.startsWith("/services")
                        ? "text-navy"
                        : "text-gray-600 hover:text-navy"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white border border-gray-200 rounded-sm shadow-lg py-2 min-w-64">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
                              pathname === child.href
                                ? "text-navy bg-gray-50"
                                : "text-gray-600 hover:text-navy hover:bg-gray-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-navy"
                      : "text-gray-600 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy-light transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-firm py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base font-medium transition-colors ${
                    pathname === link.href ? "text-navy" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2 text-sm transition-colors ${
                          pathname === child.href ? "text-navy" : "text-gray-500"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center py-3 bg-navy text-white text-sm font-medium rounded-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
