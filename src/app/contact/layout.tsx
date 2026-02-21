import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mehrotra Law to schedule a consultation on commercial real estate or corporate-commercial matters. Located at 130 King Street West, Suite 1900, Toronto.",
  openGraph: {
    title: "Contact | Mehrotra Law",
    description:
      "Schedule a consultation with Mehrotra Law for commercial real estate or corporate-commercial legal matters in Toronto.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
