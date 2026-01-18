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
  title: "Cloudify | Advanced Eye & Dental Practice Management Software",
  description: "Comprehensive practice management solution for Eye and Dental clinics. Streamline your operations with our AI-powered, secure, and cloud-based platform.",
  keywords: ["eye care software", "dental care software", "practice management system", "clinic software", "EMR", "EHR", "optical software", "dental charting", "Cloudify"],
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
    title: "Cloudify | Advanced Eye & Dental Practice Management Software",
    description: "Comprehensive practice management solution for Eye and Dental clinics. Streamline your operations with our AI-powered, secure, and cloud-based platform.",
    url: 'https://cloudify.care',
    siteName: 'Cloudify',
    images: [
      {
        url: '/eye-care-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Cloudify Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cloudify | Advanced Eye & Dental Practice Management Software",
    description: "Comprehensive practice management solution for Eye and Dental clinics.",
    images: ['/eye-care-dashboard.png'],
  },
};

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
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
