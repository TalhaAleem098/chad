import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Head from "next/head";

const druk = localFont({
  src: "./fonts/fonnts.com-Druk_Wide_Medium.ttf",
  variable: "--font-druk-wide",
  display: "swap",
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Chad Mathew | Official Website</title>
        <meta
          name="description"
          content="Chad Mathew is a talented personality known as a model, anchor, and rising star. His work and presence reflect creativity and style. This website is designed and developed by Talha Aleem from AleemTalha.com, showcasing professional and modern web development."
        />
        <meta
          name="keywords"
          content="Chad Mathew, Chad Mathew model, Chad Mathew anchor, Chad Mathew official, Chad Mathew star, Chad Mathew portfolio, Talha Aleem developer, AleemTalha.com, React developer, Next.js developer, full stack developer, professional website development"
        />
        <meta name="author" content="https://aleemtalha.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.chadmathew.com",
              "name": "Chad Mathew",
              "creator": {
                "@type": "Person",
                "name": "Talha Aleem",
                "url": "https://aleemtalha.com",
                "jobTitle": "Web Developer",
                "sameAs": [
                  "https://aleemtalha.com",
                  "https://www.linkedin.com/in/talha-aleem-a275a72a6/",
                  "https://github.com/aleemtalha"
                ]
              }
            })
          }}
        />
      </Head>
      <body
        className={`${druk.variable} ${poppins.className} antialiased`}
        style={{ fontFamily: 'var(--font-druk-wide), Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
