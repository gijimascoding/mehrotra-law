import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieNotice } from "@/components/CookieNotice";
import { FIRM } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(FIRM.url),
  title: {
    default: `${FIRM.name} | ${FIRM.tagline}`,
    template: `%s | ${FIRM.name}`,
  },
  description:
    "Mehrotra Law provides focused legal counsel in commercial real estate and corporate-commercial matters for businesses, landlords, developers, and investors in Toronto and Ontario.",
  keywords: [
    "Toronto commercial real estate lawyer",
    "commercial lease lawyer Toronto",
    "corporate commercial lawyer Ontario",
    "commercial real estate counsel",
    "business lawyer Toronto",
    "commercial lease review",
    "real estate transactions lawyer",
    "corporate counsel Toronto",
  ],
  authors: [{ name: FIRM.lawyer.fullName }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: FIRM.url,
    siteName: FIRM.name,
    title: `${FIRM.name} | ${FIRM.tagline}`,
    description:
      "Focused legal counsel in commercial real estate and corporate-commercial matters for businesses in Toronto and Ontario.",
  },
  twitter: {
    card: "summary",
    title: `${FIRM.name} | ${FIRM.tagline}`,
    description:
      "Focused legal counsel in commercial real estate and corporate-commercial matters for businesses in Toronto and Ontario.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: FIRM.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: FIRM.name,
              description: FIRM.tagline,
              url: FIRM.url,
              telephone: FIRM.contact.phone,
              email: FIRM.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${FIRM.contact.address.street}, ${FIRM.contact.address.suite}`,
                addressLocality: FIRM.contact.address.city,
                addressRegion: FIRM.contact.address.province,
                postalCode: FIRM.contact.address.postalCode,
                addressCountry: FIRM.contact.address.country,
              },
              founder: {
                "@type": "Person",
                name: FIRM.lawyer.name,
                jobTitle: FIRM.lawyer.title,
              },
              areaServed: [
                { "@type": "City", name: "Toronto" },
                { "@type": "AdministrativeArea", name: "Ontario" },
              ],
              serviceType: [
                "Commercial Real Estate Law",
                "Corporate Commercial Law",
                "Commercial Leasing",
                "Real Estate Transactions",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content" className="min-h-screen pt-18 md:pt-20">
          {children}
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
