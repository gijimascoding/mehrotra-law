import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { LawyerPhoto } from "@/components/LawyerPhoto";
import { ContactStrip } from "@/components/ContactStrip";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mehrotra Law, a boutique Toronto law firm focused on commercial real estate and corporate-commercial matters, founded by Yash Mehrotra, B.A., JD.",
  openGraph: {
    title: "About | Mehrotra Law",
    description:
      "Learn about Mehrotra Law and our approach to commercial real estate and corporate-commercial counsel in Toronto and Ontario.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-firm">
          <div className="max-w-3xl">
            <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              About the Firm
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mehrotra Law is a boutique legal practice based in Toronto, focused exclusively on
              commercial real estate and corporate-commercial matters. We provide the quality and
              depth of service associated with larger firms, delivered with the attentiveness and
              direct access that only a focused practice can offer.
            </p>
          </div>
        </div>
      </section>

      {/* Firm Philosophy */}
      <section className="py-20 md:py-28">
        <div className="container-firm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="Philosophy"
                title="How We Practice"
              />
              <div className="mt-8 space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our practice is built on a straightforward premise: that legal counsel should be
                  practical, clear, and organized around the client&apos;s commercial objectives. We
                  believe that the most effective legal advice addresses not only what the law
                  requires, but what makes sense for the business.
                </p>
                <p>
                  We approach every engagement with thoroughness and a commitment to clear
                  communication. Our clients know where their matter stands, what the next steps
                  are, and what decisions require their attention. We work to simplify
                  complexity—not add to it.
                </p>
                <p>
                  As a boutique practice, we are deliberate about the matters we take on. This
                  allows us to maintain the level of attention, responsiveness, and quality that
                  our clients depend on. Every matter receives direct involvement from experienced
                  counsel.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Client-Centred",
                  description: "Our advice is shaped by your objectives. We listen carefully, understand your business context, and tailor our counsel accordingly.",
                },
                {
                  title: "Commercially Practical",
                  description: "We focus on outcomes that work in practice—documentation that serves your commercial goals and risk management that reflects real-world considerations.",
                },
                {
                  title: "Transparent & Responsive",
                  description: "Clear communication is foundational to how we practice. We provide timely updates, set realistic expectations, and remain accessible when matters require attention.",
                },
                {
                  title: "Thorough & Disciplined",
                  description: "We bring consistent diligence to every engagement—reviewing details carefully, anticipating issues, and ensuring nothing material is overlooked.",
                },
              ].map((value) => (
                <div key={value.title} className="p-6 bg-gray-50 rounded-sm border-l-2 border-slate">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lawyer Bio */}
      <section className="py-20 md:py-28 bg-gray-50" aria-label="Lawyer biography">
        <div className="container-firm">
          <div className="max-w-4xl">
            <SectionHeading
              label="Principal"
              title={FIRM.lawyer.name}
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Professional headshot */}
              <LawyerPhoto />

              <div className="md:col-span-2 space-y-5 text-gray-600 text-lg leading-relaxed">
                <p className="text-navy font-serif text-xl font-semibold">
                  {FIRM.lawyer.title}
                </p>
                <p>
                  Yash Mehrotra is the founder and principal lawyer of Mehrotra Law. His practice
                  is focused on commercial real estate and corporate-commercial matters, advising
                  a diverse range of clients including commercial landlords and tenants, property
                  investors, developers, private lenders, brokers, and growth-stage businesses.
                </p>
                <p>
                  Prior to founding Mehrotra Law, Yash served as General Counsel at BVD Group,
                  where he led legal strategy across the organization&apos;s business operations
                  and commercial activities. This in-house experience gives him a distinctive
                  perspective on how legal counsel can most effectively serve business
                  objectives—understanding not only the legal requirements, but the operational
                  and commercial realities that drive client decisions.
                </p>
                <p>
                  Before his role as General Counsel, Yash built a strong foundation in private
                  practice at several respected firms. He practised at Bennett Jones LLP, one
                  of Canada&apos;s leading business law firms, as well as at Owens Wright LLP,
                  Levy Zavet PC, and Elia Associates Professional Corporation, where he began
                  his legal career as an articling student and associate. Across these roles,
                  Yash gained extensive experience advising on commercial property acquisitions
                  and dispositions, lease negotiations, real estate financing transactions,
                  corporate structuring, shareholder agreements, and a broad range of commercial
                  contracts.
                </p>
                <p>
                  Yash&apos;s combination of Bay Street private practice and in-house general
                  counsel experience allows him to deliver advice that is both legally rigorous
                  and commercially practical. He is known for his ability to distill complex
                  legal issues into clear, actionable guidance and for his attentiveness to
                  the details that matter to his clients.
                </p>

                {/* Credentials */}
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h3 className="text-sm font-sans font-semibold text-navy uppercase tracking-wider mb-4">
                    Credentials
                  </h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li><span className="font-medium">Education:</span> JD, University of Windsor (2017); B.A. (Specialized Honours), Political Science, York University (2014)</li>
                    <li><span className="font-medium">Admissions:</span> Law Society of Ontario</li>
                  </ul>
                </div>

                {/* Career highlights */}
                <div className="pt-6 mt-2 border-t border-gray-200">
                  <h3 className="text-sm font-sans font-semibold text-navy uppercase tracking-wider mb-4">
                    Selected Experience
                  </h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li>General Counsel — BVD Group</li>
                    <li>Associate — Bennett Jones LLP</li>
                    <li>Associate — Owens Wright LLP</li>
                    <li>Associate — Levy Zavet PC</li>
                    <li>Associate &amp; Articling Student — Elia Associates Professional Corporation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-firm text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-navy mb-4">
            Work With Us
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            We welcome the opportunity to learn about your matter and discuss how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
