import type { Metadata } from "next";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${FIRM.name}. This website is for informational purposes only and does not constitute legal advice.`,
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-firm">
        <div className="max-w-3xl">
          <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-8">
            Disclaimer
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: February 2025</p>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                No Legal Advice
              </h2>
              <p>
                The information provided on this website is for general informational purposes only.
                Nothing on this website constitutes legal advice, and no solicitor-client relationship
                is created by your use of this site or by any communication sent through it.
              </p>
              <p className="mt-3">
                The content on this website should not be relied upon as a substitute for legal
                advice from a qualified professional. Legal matters are fact-specific, and the
                information presented here may not reflect the most current legal developments
                or apply to your particular circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                No Solicitor-Client Relationship
              </h2>
              <p>
                Accessing this website, sending an inquiry through the contact form, or
                communicating with {FIRM.name} through any channel does not create a
                solicitor-client relationship. A solicitor-client relationship with {FIRM.name} is
                established only when confirmed in writing through a formal engagement letter
                or retainer agreement.
              </p>
              <p className="mt-3">
                Until such a relationship is formally established, please do not send us any
                confidential, privileged, or sensitive information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Jurisdictional Notice
              </h2>
              <p>
                The legal services described on this website are primarily offered in Ontario,
                Canada, subject to applicable regulatory requirements and professional rules.
                {FIRM.name} does not represent that it is qualified to practise law in any
                jurisdiction other than where its lawyers are duly licensed.
              </p>
              <p className="mt-3">
                Visitors to this website from jurisdictions outside of Ontario should be aware
                that the information presented may not be applicable to their jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Accuracy of Information
              </h2>
              <p>
                While we endeavour to keep the information on this website current and accurate,
                we make no representations or warranties of any kind, express or implied, about
                the completeness, accuracy, reliability, suitability, or availability of the
                information, products, services, or related materials contained on this website
                for any purpose.
              </p>
              <p className="mt-3">
                The law is subject to change, and the information on this website may not reflect
                the most recent legal developments. We recommend consulting with a qualified legal
                professional for advice specific to your circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites. These links are provided
                for convenience and informational purposes only. {FIRM.name} does not endorse or
                assume responsibility for the content, privacy practices, or availability of any
                third-party websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, {FIRM.name} shall not be liable
                for any loss or damage arising from the use of this website or reliance on any
                information provided herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Insights and Articles
              </h2>
              <p>
                Articles, commentary, and other content published in the Insights section of this
                website are intended for general informational purposes only. They do not constitute
                legal advice and should not be treated as such. The views expressed are those of the
                author as of the date of publication and may not reflect current legal developments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-navy mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this disclaimer or require legal advice, please
                contact us:
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
