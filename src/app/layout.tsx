import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interfaithmediation.org"),
  title: {
    default: "Interfaith Mediation Development Initiative (IMDI) | Peacefully United",
    template: "%s | IMDI - Interfaith Mediation Development Initiative"
  },
  description: "Registered Non-Governmental Organization (CAC BN: 8140662) uniting religious leaders and communities for sustainable peace, youth empowerment, emergency aid, and interfaith farming in Plateau State, Nigeria.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "Interfaith Mediation Development Initiative",
    "IMDI",
    "Peacebuilding Nigeria",
    "Plateau State NGO",
    "CAC 8140662",
    "Interfaith Peace Jos",
    "Youth Farming Initiative Plateau",
    "Christian Muslim Unity Nigeria"
  ],
  authors: [{ name: "IMDI" }],
  creator: "Interfaith Mediation Development Initiative",
  publisher: "IMDI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Interfaith Mediation Development Initiative (IMDI) | Peacefully United",
    description: "Developing peace and socio-economic solutions within global communities to expand possibilities for a better life.",
    url: "https://interfaithmediation.org",
    siteName: "Interfaith Mediation Development Initiative (IMDI)",
    images: [
      {
        url: "https://interfaithmediation.org/images/logo.png",
        width: 800,
        height: 800,
        alt: "IMDI Interfaith Mediation Development Initiative Logo",
      },
      {
        url: "https://interfaithmediation.org/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Interfaith Leaders United for Peace",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interfaith Mediation Development Initiative (IMDI)",
    description: "Developing peace and socio-economic solutions within global communities.",
    images: ["https://interfaithmediation.org/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Interfaith Mediation Development Initiative",
    "alternateName": "IMDI",
    "url": "https://interfaithmediation.org",
    "logo": "https://interfaithmediation.org/images/logo.png",
    "identifier": "BN: 8140662",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 5 Nord Avenue, Tekan Hqters",
      "addressLocality": "Jos",
      "addressRegion": "Plateau State",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "interfaithmedevini@gmail.com",
      "telephone": "+234-803-445-9034",
      "contactType": "General Inquiry"
    },
    "sameAs": [
      "https://interfaithmediation.org"
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body)" }} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
