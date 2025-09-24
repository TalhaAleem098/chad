import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const druk = localFont({
  src: "./fonts/fonnts.com-Druk_Wide_Medium.ttf",
  variable: "--font-druk-wide",
  display: "swap",
});


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${druk.variable} ${poppins.className} antialiased`} style={{ fontFamily: 'var(--font-druk-wide), Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
