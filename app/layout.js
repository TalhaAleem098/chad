import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

// Poppins Font - Available as utility class
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// Druk Wide Medium - Primary/Default Font
const drukWide = localFont({
  src: [
    {
      path: "../public/font/fonnts.com-Druk_Wide_Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-druk-wide",
  display: "block",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

// DrukXCond Super - Secondary Font
const drukXCond = localFont({
  src: [
    {
      path: "../public/font/DrukXCond-Super-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-druk-xcond",
  display: "block",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

// Enhanced Metadata for Better SEO
export const metadata = {
  metadataBase: new URL("https://www.chadmathew.com"),
  title: {
    default: "Chad Mathew | Professional Actor, Model & Content Creator",
    template: "%s | Chad Mathew",
  },
  description:
    "Chad Mathew is a professional Actor, Model, Presenter, and Content Creator based in Sydney, Australia, with over 20 years of international entertainment industry experience. Featured in Cleverman, Crownies, and campaigns for Qantas, BMW, and more. Website developed by Talha Aleem.",
  keywords: [
    "Chad Mathew",
    "Chad Mathew actor",
    "Chad Mathew model",
    "Chad Mathew presenter",
    "Sydney actor",
    "Australian actor",
    "content creator Sydney",
    "NIDA graduate",
    "professional model Australia",
    "television presenter",
    "Cleverman cast",
    "Crownies actor",
    "commercial actor",
    "Qantas campaigns",
    "BMW brand ambassador",
    "RSPCA ambassador",
    "fitness model",
    "LGBTQIA+ presenter",
    "JOY 96.9FM host",
    "Talha Aleem developer",
    "AleemTalha.com",
    "Next.js portfolio",
    "professional website development",
  ],
  authors: [{ name: "Talha Aleem", url: "https://aleemtalha.com" }],
  creator: "Talha Aleem",
  publisher: "Chad Mathew",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.chadmathew.com",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.chadmathew.com",
    siteName: "Chad Mathew Official",
    title: "Chad Mathew | Professional Actor, Model & Content Creator",
    description:
      "Professional Actor, Model, Presenter & Content Creator based in Sydney with 20+ years of experience. Featured in major TV productions and brand campaigns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chad Mathew - Professional Actor and Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chad Mathew | Professional Actor, Model & Content Creator",
    description:
      "Professional Actor, Model, Presenter & Content Creator based in Sydney with 20+ years of experience.",
    images: ["/og-image.jpg"],
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "entertainment",
  classification: "Professional Portfolio",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.chadmathew.com/#person",
        name: "Chad Mathew",
        url: "https://www.chadmathew.com",
        image: {
          "@type": "ImageObject",
          url: "https://www.chadmathew.com/profile-image.jpg",
        },
        jobTitle: ["Actor", "Model", "Presenter", "Content Creator"],
        worksFor: {
          "@type": "Organization",
          name: "Self-Employed",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          addressCountry: "Australia",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "National Institute of Dramatic Art (NIDA)",
          },
          {
            "@type": "EducationalOrganization",
            name: "Australian Film and Television Academy (TAFTA)",
          },
          {
            "@type": "EducationalOrganization",
            name: "Royal Academy of Dramatic Art (RADA)",
          },
        ],
        hasCredential: [
          "Cleverman",
          "Crownies",
          "Behind Mansion Walls",
          "Deadly Women",
          "The Wedge",
          "Satisfaction",
          "The Librarians",
        ],
        brand: [
          "Qantas",
          "Jetstar",
          "BMW",
          "RSPCA",
          "Cancer Council",
          "DiDi",
          "ING",
          "Chemist Warehouse",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.chadmathew.com/#website",
        url: "https://www.chadmathew.com",
        name: "Chad Mathew Official Website",
        description:
          "Professional Actor, Model, Presenter & Content Creator portfolio",
        publisher: {
          "@id": "https://www.chadmathew.com/#person",
        },
        inLanguage: "en-AU",
        creator: {
          "@type": "Person",
          name: "Talha Aleem",
          url: "https://aleemtalha.com",
          jobTitle: "Full Stack Web Developer",
          sameAs: [
            "https://aleemtalha.com",
            "https://www.linkedin.com/in/talha-aleem-a275a72a6/",
            "https://github.com/aleemtalha",
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.chadmathew.com/#webpage",
        url: "https://www.chadmathew.com",
        name: "Chad Mathew | Professional Actor, Model & Content Creator",
        isPartOf: {
          "@id": "https://www.chadmathew.com/#website",
        },
        about: {
          "@id": "https://www.chadmathew.com/#person",
        },
        description:
          "Professional Actor, Model, Presenter & Content Creator based in Sydney with over 20 years of international entertainment industry experience.",
        inLanguage: "en-AU",
      },
    ],
  };

  return (
    <html
      lang="en-AU"
      className={`${poppins.variable} ${drukWide.variable} ${drukXCond.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/font/fonnts.com-Druk_Wide_Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/DrukXCond-Super-Trial.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${drukWide.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}