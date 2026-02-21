"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Upload, ArrowRight } from "lucide-react";
import { FIRM, INQUIRY_TYPES } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // GA4 event tracking placeholder
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag("event", "form_submission", {
        event_category: "contact",
        event_label: "contact_form",
      });
    }

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("inquiryTypes", selectedTypes.join(", "));

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-firm">
          <div className="max-w-3xl">
            <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We welcome the opportunity to learn about your matter. Reach out by phone, email,
              or through the form below to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28">
        <div className="container-firm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-navy mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={FIRM.contact.phoneHref}
                      className="flex items-start gap-4 group"
                    >
                      <Phone className="w-5 h-5 text-slate mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</span>
                        <span className="text-navy font-medium group-hover:text-slate transition-colors">
                          {FIRM.contact.phone}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={FIRM.contact.emailHref}
                      className="flex items-start gap-4 group"
                    >
                      <Mail className="w-5 h-5 text-slate mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email</span>
                        <span className="text-navy font-medium group-hover:text-slate transition-colors">
                          {FIRM.contact.email}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-slate mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Office</span>
                        <address className="text-navy font-medium not-italic leading-relaxed">
                          {FIRM.contact.address.street}<br />
                          {FIRM.contact.address.suite}<br />
                          {FIRM.contact.address.city}, {FIRM.contact.address.province} {FIRM.contact.address.postalCode}
                        </address>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-sm overflow-hidden aspect-[4/3]">
                <iframe
                  title="Office location — 130 King Street West, Toronto"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-79.3870%2C43.6475%2C-79.3810%2C43.6510&layer=mapnik&marker=43.6493%2C-79.3840"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                <a
                  href="https://www.google.com/maps/search/130+King+Street+West+Suite+1900+Toronto+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate transition-colors"
                >
                  View on Google Maps →
                </a>
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-navy mb-2">
                Inquiry Form
              </h2>

              {/* Confidentiality Notice */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 mb-8">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-navy">Important:</strong> Submitting this form does not
                  create a solicitor-client relationship. Please do not include confidential or
                  sensitive information until a formal engagement has been confirmed in writing.
                  General information about your matter is sufficient at this stage.
                </p>
              </div>

              {formState === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Thank you for your inquiry.
                  </h3>
                  <p className="text-gray-600">
                    We have received your message and will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors"
                    />
                  </div>

                  {/* Inquiry Type Checkboxes */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-navy mb-3">
                      Type of Inquiry <span className="text-gray-400 font-normal">(select all that apply)</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {INQUIRY_TYPES.map((type) => (
                        <label
                          key={type}
                          className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${
                            selectedTypes.includes(type)
                              ? "border-slate bg-navy/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            className="w-4 h-4 text-slate border-gray-300 rounded-sm focus:ring-slate"
                          />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Brief Description of Your Matter <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please provide a general overview of your matter. Avoid including sensitive or confidential details at this stage."
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy focus:outline-none focus:border-slate focus:ring-1 focus:ring-slate transition-colors resize-y"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="document" className="block text-sm font-medium text-navy mb-2">
                      Upload a Document <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative border-2 border-dashed border-gray-200 rounded-sm p-6 text-center hover:border-gray-300 transition-colors">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-sm text-gray-600 mb-1">
                        Drag and drop a file, or click to browse
                      </p>
                      <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
                      <input
                        type="file"
                        id="document"
                        name="document"
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      Please do not upload documents containing sensitive or privileged information
                      until a formal engagement has been confirmed.
                    </p>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-slate border-gray-300 rounded-sm focus:ring-slate"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      I understand that submitting this form does not create a solicitor-client
                      relationship and that I should not include confidential information until
                      an engagement has been confirmed in writing.
                    </span>
                  </label>

                  {formState === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-sm p-4">
                      <p className="text-sm text-red-700">
                        There was an error submitting your inquiry. Please try again or contact us
                        directly at {FIRM.contact.email}.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded-sm hover:bg-navy-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? "Submitting…" : "Submit Inquiry"}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
