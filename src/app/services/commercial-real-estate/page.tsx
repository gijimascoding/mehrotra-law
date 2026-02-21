import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { ContactStrip } from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Commercial Real Estate",
  description:
    "Mehrotra Law advises on commercial real estate acquisitions, dispositions, leasing, financing, due diligence, and closing support for clients across Toronto and Ontario.",
  openGraph: {
    title: "Commercial Real Estate | Mehrotra Law",
    description:
      "Legal counsel for commercial real estate transactions including acquisitions, leasing, financing, and due diligence in Toronto and Ontario.",
  },
};

const serviceAreas = [
  {
    title: "Acquisitions & Dispositions",
    description:
      "We act for purchasers and vendors on the acquisition and disposition of commercial properties, including office, retail, industrial, and mixed-use assets. Our involvement spans from letter of intent through closing—reviewing and negotiating purchase agreements, managing conditions, coordinating due diligence, and ensuring a smooth transfer of title. The objective is to protect your position while keeping the transaction on track.",
  },
  {
    title: "Leasing — Landlord & Tenant",
    description:
      "We advise both landlords and tenants on the negotiation and documentation of commercial leases, including offers to lease, net leases, gross leases, ground leases, and lease amendments. Our focus is on the provisions that materially affect your business—rent structure, operating costs, renewal and expansion options, exclusivity, permitted use, assignment and subletting, and landlord obligations. We aim for lease terms that are commercially balanced and clearly drafted.",
  },
  {
    title: "Financing & Secured Lending Support",
    description:
      "We assist borrowers and lenders with the legal documentation involved in commercial real estate financing. This includes reviewing and preparing mortgage documents, general security agreements, assignments of rents and leases, priority and postponement agreements, and borrower representations and covenants. Our role is to ensure your security documentation is thorough, enforceable, and aligned with the terms of the financing commitment.",
  },
  {
    title: "Due Diligence Coordination",
    description:
      "Effective due diligence reduces risk and supports informed decision-making. We coordinate and review title searches, off-title inquiries, survey matters, existing lease and contract review, corporate authorization, and compliance matters. Where issues arise, we work to identify practical solutions and provide clear reporting so you can proceed with confidence.",
  },
  {
    title: "Title & Closing Support",
    description:
      "We manage the closing process for commercial real estate transactions, including document preparation, title registration, holdback arrangements, and post-closing adjustments. Our attention to closing logistics helps ensure that conditions are satisfied, documents are properly executed and registered, and funds are distributed in accordance with the agreed terms.",
  },
  {
    title: "Development Support",
    description:
      "For clients involved in commercial development, we provide legal support in connection with site acquisition, development agreements, construction-related documentation, and project financing arrangements. We work within the scope of our expertise and coordinate with other professionals as appropriate to support your development objectives.",
  },
];

export default function CommercialRealEstatePage() {
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
              <span className="text-sm text-navy font-medium">Commercial Real Estate</span>
            </div>
            <Building2 className="w-10 h-10 text-slate mb-5" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              Commercial Real Estate
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide legal counsel across the full range of commercial real estate matters—from
              acquisitions and dispositions through leasing, financing, and closing. Our approach
              emphasizes thorough documentation, practical risk management, and clear communication
              at every stage of the transaction.
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
            Discuss Your Transaction
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are acquiring, leasing, financing, or developing commercial property,
            we are here to provide the legal support your transaction requires.
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
