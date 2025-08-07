import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Leading Tensile Structure Manufacturer | Custom Canopy & Shade Solutions",
  description:
    "Discover high-quality tensile structures from the industry’s leading manufacturer. We design, fabricate, and install durable custom canopies, fabric roofs, and architectural shade structures for commercial, residential, and industrial use. Trusted tensile structure solutions across India and beyond.",
  keywords: [
    "tensile structure",
    "tensile fabric structure",
    "custom canopy design",
    "shade structure manufacturer",
    "fabric roof installation",
    "tensile architecture",
    "awning and canopy",
    "outdoor tensile structures",
    "commercial shade structures",
    "tensile structure India",
    "PVC membrane roofing",
    "tensile car parking",
    "tensile membrane systems",
  ],

  openGraph: {
    title: "Premium Tensile Structures | Innovative Shade & Canopy Solutions",
    description:
      "Explore our expert tensile structure services – from design to installation. Durable, stylish, and customized for every need.",
    url: "https://tensilestructures.in/",
    siteName: "Tensile Structure",
    images: [
      {
        url: "https://imgs.search.brave.com/Gd_7Yl_ueLLpb8dX8TS6HPWjB4q8dv4GkqYgZeT1KvU/rs:fit:860:0:0:0/g:ce/aHR0cDovL2Nhbmds/b25nYnVpbGRpbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAzLzIwMjQw/MzI3MDI1MjE2Lmpw/Zw", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "Tensile Structure by DIVINAM STRUCTURAY ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Tensile Structures | Shade, Canopy & Roof Experts",
    description:
      "Design & install tensile structures that combine aesthetics with durability. Serving India & overseas clients.",
    images: [
      "https://imgs.search.brave.com/Gd_7Yl_ueLLpb8dX8TS6HPWjB4q8dv4GkqYgZeT1KvU/rs:fit:860:0:0:0/g:ce/aHR0cDovL2Nhbmds/b25nYnVpbGRpbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAzLzIwMjQw/MzI3MDI1MjE2Lmpw/Zw",
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://tensilestructures.in/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSiteDisabled = process.env.NEXT_PUBLIC_SITE_DISABLED === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isSiteDisabled ? (
          <div className="flex items-center justify-center min-h-screen bg-amber-100 text-red-800 px-4 text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🚫 Site Unavailable</h1>
              <p className="text-lg md:text-xl font-medium">
                This website has been temporarily disabled due to non-payment.
              </p>
              <p className="text-sm mt-4 text-red-600">
                Please contact the developer to restore access.
              </p>
            </div>
          </div>
        ) : (
          <>
            <Header />
            <Providers>{children}</Providers>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
