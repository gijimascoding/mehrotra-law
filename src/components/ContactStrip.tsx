import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { FIRM } from "@/lib/constants";

export function ContactStrip() {
  return (
    <section className="bg-navy" aria-label="Contact information">
      <div className="container-firm py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
              Ready to discuss your matter?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We respond promptly. Reach out to schedule a consultation and learn how we can
              support your transaction or business needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 lg:items-end xl:items-center lg:justify-end">
            <div className="space-y-3">
              <a
                href={FIRM.contact.phoneHref}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-sm">{FIRM.contact.phone}</span>
              </a>
              <a
                href={FIRM.contact.emailHref}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-sm">{FIRM.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm">{FIRM.contact.address.full}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy text-sm font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200 shrink-0"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
