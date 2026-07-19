import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Michael Donaldson | Full-Stack Software Engineer";
const siteDescription =
  "Michael Donaldson is an Orlando-based, product-minded full-stack software engineer building accessible web applications, interactive 3D experiences, data systems, commerce flows, and desktop tools.";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Donaldson",
  jobTitle: "Full-Stack Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/Michael-Blake-Donaldson",
    "https://www.linkedin.com/in/mikedonaldson1/",
  ],
  knowsAbout: [
    "Full-stack software engineering",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Java",
    "Interactive 3D",
    "Accessibility",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Michael Donaldson Portfolio",
  authors: [{ name: "Michael Donaldson" }],
  creator: "Michael Donaldson",
  keywords: [
    "Michael Donaldson",
    "full-stack software engineer",
    "React developer",
    "Next.js developer",
    "Orlando software engineer",
    "frontend engineer",
    "product engineer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: `${siteUrl}/`,
    siteName: "Michael Donaldson Portfolio",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1744,
        height: 900,
        alt: "Michael Donaldson software engineering project atlas preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    icon: `${siteUrl}/favicon.svg`,
    shortcut: `${siteUrl}/favicon.svg`,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
