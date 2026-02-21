import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Scale } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mehrotra Law provides legal counsel in commercial real estate and corporate-commercial matters, including acquisitions, leasing, financing, incorporations, and commercial agreements.",
  openGraph: {
    title: "Services | Mehrotra Law",
    description:
      "Legal counsel in commercial real estate and corporate-commercial matters for businesses in Toronto and Ontario.",
  },
};

const services = [
  {
    icon: Building2,
    title: "Commercial Real Estate",
    href: "/services/commercial-real-estate",
    description:
      "Comprehensive legal support across the commercial real estate lifecycle—from acquisition and due diligence through financing, leasing, and closing. We advise landlords, tenants, developers, investors, and lenders on the documentation and risk management that underpin every transaction.",
    areas: [
      "Acquisitions & Dispositions",
      "Commercial Leasing",
      "Financing & Secured Lending",
      "Due Diligence Coordination",
      "Title & Closing Support",
      "Development Support",
    ],
  },
  {
    icon: Scale,
    title: "Corporate-Commercial Counsel",
    href: "/services/corporate-commercial",
    description:
      "Practical corporate and commercial counsel for businesses at every stage. From incorporation through growth and restructuring, we provide the governance frameworks, agreements, and strategic advice that help companies operate with clarity and manage risk effectively.",
    areas: [
      "Incorporations & Reorganizations",
      "Shareholder Agreements & Governance",
      "Commercial Contracts",
      "Joint Ventures & Partnerships",
      "Private Financing Support",
      "General Counsel for SMEs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-firm">
          <div className="max-w-3xl">
            <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
              Practice Areas
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our practice is organized around two complementary areas of focus, allowing us to
              advise on commercial real estate transactions and corporate-commercial matters
              with the depth and attentiveness our clients expect.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28">
        <div className="container-firm space-y-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                i > 0 ? "pt-20 border-t border-gray-200" : ""
              }`}
            >
              <div>
                <service.icon className="w-10 h-10 text-slate mb-5" aria-hidden="true" />
                <h2 className="text-3xl font-serif font-semibold text-navy mb-4 line-accent">
                  {service.title}
                </h2>
                <p className="mt-8 text-gray-600 text-lg leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy-light transition-colors duration-200"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm">
                <h3 className="text-sm font-sans font-semibold text-navy uppercase tracking-wider mb-5">
                  Areas of Focus
                </h3>
                <ul className="space-y-3">
                  {service.areas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate mt-2" aria-hidden="true" />
                      <span className="text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
