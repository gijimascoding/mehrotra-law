import type { Metadata } from "next";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${FIRM.name}, outlining how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-firm">
        <div className="max-w-3xl">
          <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: February 2025</p>

          <div className="prose prose-navy max-w-none space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Introduction</h2>
              <p>
                {FIRM.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the firm&rdquo;) is committed to
                protecting the privacy of individuals who visit our website ({FIRM.website}) and
                who provide personal information through our contact form or other communications.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                personal information in accordance with applicable Canadian privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Information We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
                <li><strong>Professional Information:</strong> Company name, title, and the nature of your inquiry.</li>
                <li><strong>Communications:</strong> Information you provide when you contact us through our website form, by email, or by telephone.</li>
                <li><strong>Website Usage:</strong> Technical information such as browser type, IP address, pages visited, and session duration, collected through essential cookies or analytics tools.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">How We Use Your Information</h2>
              <p>We use the personal information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>To respond to your inquiries and communicate with you about potential or existing legal matters.</li>
                <li>To assess conflicts of interest prior to establishing a solicitor-client relationship.</li>
                <li>To provide legal services once an engagement has been formally established.</li>
                <li>To improve the functionality and content of our website.</li>
                <li>To comply with applicable legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Disclosure of Information</h2>
              <p>
                We do not sell, rent, or trade your personal information. We may disclose personal
                information in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Where required or permitted by law, regulation, or court order.</li>
                <li>To third-party service providers who assist with website hosting, email delivery, or other operational functions, subject to appropriate confidentiality obligations.</li>
                <li>With your express consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Cookies</h2>
              <p>
                Our website uses essential cookies to ensure basic functionality. We do not use
                tracking or marketing cookies. If we implement analytics tools in the future,
                we will update this policy accordingly and provide notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to
                protect the personal information in our custody and control. However, no method of
                transmission over the internet or electronic storage is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes
                for which it was collected, or as required by applicable law. When information is no
                longer needed, we securely dispose of it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Your Rights</h2>
              <p>
                Subject to applicable law, you may have the right to access, correct, or request
                deletion of your personal information held by us. To exercise any of these rights,
                please contact us at the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or applicable law. We will post the updated policy on our website with a
                revised effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your personal
                information, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-sm text-sm">
                <p className="font-semibold text-navy">{FIRM.name}</p>
                <p>{FIRM.contact.address.full}</p>
                <p>Email: <a href={FIRM.contact.emailHref} className="text-slate hover:text-navy">{FIRM.contact.email}</a></p>
                <p>Phone: <a href={FIRM.contact.phoneHref} className="text-slate hover:text-navy">{FIRM.contact.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
