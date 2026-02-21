import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, FileText, Shield, Clock, MessageSquare, Scale } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactStrip } from "@/components/ContactStrip";
import { FIRM } from "@/lib/constants";
import { getRecentPosts } from "@/content/posts";

const credibilityPillars = [
  {
    icon: Building2,
    title: "Transactional Focus",
    description: "Dedicated practice in commercial real estate and corporate transactions, providing the depth your deal requires.",
  },
  {
    icon: Shield,
    title: "Practical Risk Management",
    description: "Identifying and addressing issues before they become problems—structured advice that protects your position.",
  },
  {
    icon: Clock,
    title: "Clear Timelines",
    description: "Defined milestones and transparent communication at every stage, so you always know where your matter stands.",
  },
  {
    icon: FileText,
    title: "Business-First Drafting",
    description: "Documentation that reflects your commercial objectives—precise, enforceable, and built for practical outcomes.",
  },
  {
    icon: MessageSquare,
    title: "Responsive Counsel",
    description: "Accessible, timely advice when you need it. Complex matters move quickly, and so do we.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake",
    description: "We review the details of your matter, understand your objectives, and identify key considerations.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a clear approach—outlining the structure, timeline, risks, and resources required.",
  },
  {
    step: "03",
    title: "Documentation",
    description: "We prepare, review, and negotiate the necessary agreements and instruments with precision.",
  },
  {
    step: "04",
    title: "Closing & Follow-Through",
    description: "We manage closing logistics, ensure conditions are met, and remain available for post-closing matters.",
  },
];

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] flex items-center" aria-label="Introduction">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-skyline.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-navy/75" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
          {/* Bottom gradient for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/80 to-transparent" />
        </div>

        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-firm relative z-10 py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-slate-light text-sm font-sans font-medium tracking-widest uppercase mb-6 animate-fade-in">
              {FIRM.name}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6 animate-fade-in-up">
              Commercial Real Estate &amp; Corporate-Commercial Counsel
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-100">
              Focused legal counsel for commercial real estate transactions, corporate structuring,
              and business agreements. Practical advice built around your objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-navy text-sm font-semibold rounded-sm hover:bg-gray-100 transition-colors duration-200"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 md:py-28" aria-label="Meet the founder">
        <div className="container-firm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="relative rounded-sm overflow-hidden aspect-[3/4] bg-navy max-w-xs mx-auto md:max-w-none">
                <Image
                  src="/images/yash-mehrotra.jpg"
                  alt="Yash Mehrotra, Founder & Principal Lawyer at Mehrotra Law"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 25vw"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <SectionHeading
                label="Principal"
                title={FIRM.lawyer.name}
              />
              <p className="mt-4 text-navy font-serif text-xl font-semibold">
                {FIRM.lawyer.title}
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Yash Mehrotra founded Mehrotra Law to provide the quality and depth of
                service associated with larger firms, delivered with the attentiveness and
                direct access that only a focused practice can offer. With experience as
                General Counsel at BVD Group and as an associate at Bennett Jones LLP and
                other respected firms, Yash brings a distinctive combination of Bay Street
                private practice and in-house counsel perspective to every engagement.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors duration-200"
              >
                Read More
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Pillars */}
      <section className="py-20 md:py-28 bg-gray-50" aria-label="Why Mehrotra Law">
        <div className="container-firm">
          <SectionHeading
            label="Our Approach"
            title="Counsel You Can Count On"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 lg:gap-x-12 lg:gap-y-10">
            {credibilityPillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center bg-navy/5 rounded-sm">
                  <pillar.icon className="w-5 h-5 text-slate" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 md:py-28" aria-label="Practice areas">
        <div className="container-firm">
          <SectionHeading
            label="Practice Areas"
            title="Focused Expertise"
            description="Our practice is built around two complementary disciplines—commercial real estate and corporate-commercial counsel—enabling us to support transactions from every angle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <Link
              href="/services/commercial-real-estate"
              className="group block p-8 md:p-10 border border-gray-200 rounded-sm hover:border-navy/20 hover:shadow-lg transition-all duration-300"
            >
              <Building2 className="w-8 h-8 text-slate mb-5" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-navy mb-3 group-hover:text-slate transition-colors">
                Commercial Real Estate
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                From acquisitions and dispositions to complex leasing and financing arrangements,
                we support commercial real estate matters with thoroughness and practical judgment.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate group-hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/services/corporate-commercial"
              className="group block p-8 md:p-10 border border-gray-200 rounded-sm hover:border-navy/20 hover:shadow-lg transition-all duration-300"
            >
              <Scale className="w-8 h-8 text-slate mb-5" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-navy mb-3 group-hover:text-slate transition-colors">
                Corporate-Commercial Counsel
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Structuring businesses, negotiating agreements, and advising on governance and
                commercial relationships—practical counsel built for growing companies.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate group-hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28 bg-gray-50" aria-label="Experience">
        <div className="container-firm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Experience"
                title="Depth Across Transactions"
              />
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                With [X]+ years advising on commercial real estate and corporate-commercial matters,
                we bring a depth of experience to every engagement. Our practice has supported
                a broad range of transactions—acquisitions, dispositions, financings, lease
                negotiations, corporate reorganizations, and commercial agreements—for clients
                across industries and at various stages of growth.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We understand the practical realities of business transactions and structure our
                advice accordingly. Every engagement is handled with the same level of care,
                thoroughness, and attention to commercial objectives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Commercial Leases", detail: "Negotiated & Reviewed" },
                { label: "Transactions", detail: "Acquisitions & Dispositions" },
                { label: "Corporate Structures", detail: "Formed & Reorganized" },
                { label: "Commercial Agreements", detail: "Drafted & Negotiated" },
              ].map((item) => (
                <div key={item.label} className="p-6 bg-white border border-gray-200 rounded-sm">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28" aria-label="Our process">
        <div className="container-firm">
          <SectionHeading
            label="Process"
            title="How We Work"
            description="A structured, transparent approach that keeps your matter moving forward efficiently."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <span className="block font-serif text-4xl font-bold text-navy/10 mb-3">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-20 md:py-28 bg-gray-50" aria-label="Recent insights">
        <div className="container-firm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <SectionHeading
              label="Insights"
              title="Recent Articles"
            />
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              View All Insights <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-navy/20 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <span className="text-xs font-sans font-medium text-slate tracking-wider uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-navy mt-2 mb-3 group-hover:text-slate transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <span className="text-sm font-medium text-slate group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
