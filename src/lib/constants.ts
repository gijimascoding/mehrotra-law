export const FIRM = {
  name: "Mehrotra Law",
  tagline: "Commercial Real Estate & Corporate-Commercial Counsel",
  lawyer: {
    name: "Yash Mehrotra",
    credentials: "B.A., JD",
    title: "Founder & Principal Lawyer",
    fullName: "Yash Mehrotra, B.A., JD",
  },
  contact: {
    phone: "(416) 262-3102",
    phoneHref: "tel:+14162623102",
    email: "yash@mehrotralaw.com",
    emailHref: "mailto:yash@mehrotralaw.com",
    address: {
      street: "130 King Street West",
      suite: "Suite 1900",
      city: "Toronto",
      province: "ON",
      postalCode: "M5X 2A2",
      country: "Canada",
      full: "130 King Street West, Suite 1900, Toronto, ON M5X 2A2",
      mapQuery: "130+King+Street+West+Suite+1900+Toronto+ON+M5X+2A2",
    },
  },
  website: "www.mehrotralaw.com",
  url: "https://www.mehrotralaw.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: [
    { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
    { label: "Corporate-Commercial Counsel", href: "/services/corporate-commercial" },
  ]},
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const INQUIRY_TYPES = [
  "Commercial Lease Review",
  "Property Acquisition or Sale",
  "Commercial Financing",
  "Corporate Incorporation or Reorganization",
  "Shareholder Agreement",
  "Commercial Contract Review",
  "General Corporate Counsel",
  "Other",
] as const;
