import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Mixed in Outfit for headings
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cloudify | #1 Practice Management Software for Eye & Dental Clinics",
    template: "%s | Cloudify"
  },
  description: "Cloud-based practice management software for Eye Clinics and Dental Practices. Features include EMR, scheduling, billing, inventory, and AI-powered insights. Built for healthcare providers in Ghana and Africa.",
  keywords: [
    "eye care software",
    "dental care software",
    "practice management system",
    "clinic software",
    "hospital management system",
    "EMR Ghana",
    "EHR Africa",
    "optical software",
    "dental charting software",
    "Cloudify",
    "medical billing software",
    "inventory management for clinics",
    "patient appointment scheduling",
    "telemedicine platform"
  ],
  alternates: {
    canonical: 'https://cloudify.care',
  },
  verification: {
    google: "vhygepUrILqCfs7sbmLzzMO0sNTIv--6U4TJA1rKiNs",
    other: {
      "msvalidate.01": "[YOUR_BING_VERIFICATION_TOKEN]"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://cloudify.care'),
  openGraph: {
    title: "Cloudify | Advanced Practice Management Software",
    description: "Streamline your Eye or Dental clinic with Cloudify. AI-powered EMR, Billing, and Scheduling. The #1 Choice for modern healthcare practices.",
    url: 'https://cloudify.care',
    siteName: 'Cloudify',
    images: [
      {
        url: '/eye-care-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Cloudify Dashboard - Eye & Dental Care',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cloudify | Advanced Practice Management Software",
    description: "Streamline your Eye or Dental clinic with Cloudify. AI-powered EMR, Billing, and Scheduling.",
    images: ['/eye-care-dashboard.png'],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cloudify",
    url: "https://cloudify.care",
    logo: "https://cloudify.care/favicon-32x32.png",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cloudify",
    url: "https://cloudify.care",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cloudify.care/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          // JSON-LD should be a single line to avoid hydration diff.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
