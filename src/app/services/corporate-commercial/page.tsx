import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Corporate-Commercial Counsel",
  description:
    "Mehrotra Law provides corporate-commercial counsel including incorporations, shareholder agreements, commercial contracts, joint ventures, and general counsel support for SMEs in Ontario.",
  openGraph: {
    title: "Corporate-Commercial Counsel | Mehrotra Law",
    description:
      "Corporate and commercial legal services including incorporations, governance, contracts, and business advisory for companies in Toronto and Ontario.",
  },
};

const serviceAreas = [
  {
    title: "Incorporations & Reorganizations",
    description:
      "We assist with the formation of corporations under federal and provincial legislation, as well as corporate reorganizations including amalgamations, continuances, and dissolutions. Our work encompasses articles of incorporation, initial organizational resolutions, by-laws, and ancillary documents. When restructuring is appropriate, we help evaluate options and implement the chosen structure with attention to regulatory compliance and tax efficiency, coordinating with your accountant or tax advisor as needed.",
  },
  {
    title: "Shareholder Agreements & Governance",
    description:
      "A well-drafted shareholder agreement is foundational to any private company. We prepare and negotiate shareholder agreements, unanimous shareholder agreements, and related governance documents that address decision-making, voting rights, transfer restrictions, pre-emptive rights, drag-along and tag-along provisions, exit mechanisms, and dispute resolution. The goal is a governance framework that reflects the commercial understanding among the owners and reduces the risk of future disputes.",
  },
  {
    title: "Commercial Contracts",
    description:
      "We draft, review, and negotiate a broad range of commercial agreements—including master services agreements, statements of work, supply and distribution agreements, vendor contracts, licensing agreements, and non-disclosure agreements. Our focus is on ensuring clear terms, appropriate risk allocation, practical enforcement mechanisms, and alignment with your commercial objectives. We aim for contracts that protect your interests while enabling productive business relationships.",
  },
  {
    title: "Joint Ventures & Strategic Partnerships",
    description:
      "When businesses collaborate on shared objectives, clear documentation is essential. We advise on the structuring and documentation of joint ventures, strategic partnerships, and co-development arrangements. This includes joint venture agreements, partnership agreements, co-ownership arrangements, contribution and distribution terms, governance structures, and exit provisions. We help ensure the arrangement is clearly defined and that each party's rights and obligations are properly documented.",
  },
  {
    title: "Private Financing Support",
    description:
      "We provide legal support in connection with private financing transactions, including private placements, shareholder loans, convertible instruments, and promissory notes. Our role encompasses preparing and reviewing subscription agreements, loan documentation, security instruments, and ancillary closing documents. We assist both issuers and investors in ensuring the documentation accurately reflects the negotiated terms and complies with applicable securities and corporate law requirements.",
  },
  {
    title: "General Counsel Support for SMEs",
    description:
      "Many growing businesses need regular access to legal counsel without the overhead of in-house resources. We provide ongoing general counsel support to small and mid-sized enterprises, acting as an accessible legal resource for day-to-day matters—contract review, employment-related questions, regulatory compliance, vendor negotiations, and corporate maintenance. Our role is to be a practical, responsive extension of your team, providing guidance that helps you make sound business decisions.",
  },
];

export default function CorporateCommercialPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-firm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/services"
                className="text-sm text-gray-500 hover:text-navy transition-colors"
              >
                Services
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-navy font-medium">Corporate-Commercial Counsel</span>
            </div>
            <Scale className="w-10 h-10 text-slate mb-5" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              Corporate-Commercial Counsel
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We advise businesses on the corporate structures, governance frameworks, and commercial
              agreements that support sound operations and sustainable growth. Our counsel is
              practical, responsive, and designed to help you make informed decisions at every
              stage of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28">
        <div className="container-firm">
          <div className="max-w-4xl">
            <div className="space-y-16">
              {serviceAreas.map((area, i) => (
                <div
                  key={area.title}
                  className={i > 0 ? "pt-16 border-t border-gray-100" : ""}
                >
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-4">
                    {area.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-firm text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-4">
            Support for Your Business
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            From incorporation through growth, restructuring, and beyond—we provide the
            corporate-commercial counsel your business needs to operate with clarity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors duration-200"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
