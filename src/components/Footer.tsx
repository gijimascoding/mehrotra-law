import Link from "next/link";
import { FIRM, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300" role="contentinfo">
      {/* Main Footer */}
      <div className="container-firm py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-white/10 text-white font-serif text-base font-bold rounded-sm">
                M
              </span>
              <span className="text-white font-serif text-lg font-semibold">{FIRM.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {FIRM.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5 font-sans">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5 font-sans">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/commercial-real-estate"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-commercial"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Corporate-Commercial Counsel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5 font-sans">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={FIRM.contact.phoneHref}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {FIRM.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={FIRM.contact.emailHref}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {FIRM.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    {FIRM.contact.address.street}<br />
                    {FIRM.contact.address.suite}<br />
                    {FIRM.contact.address.city}, {FIRM.contact.address.province} {FIRM.contact.address.postalCode}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-firm py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {FIRM.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5">
        <div className="container-firm py-4">
          <p className="text-[11px] text-gray-600 leading-relaxed">
            This website is for informational purposes only and does not constitute legal advice.
            No solicitor-client relationship is created by accessing or using this site. Please do
            not send confidential information until a formal engagement has been confirmed in writing.
            Services primarily offered in Ontario, Canada, subject to applicable regulatory requirements.
          </p>
        </div>
      </div>
    </footer>
  );
}
