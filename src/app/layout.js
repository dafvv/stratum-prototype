import { Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata = {
  title: "Stratum Industrial AI Platform",
  description: "Prototype Demo for Stratum Industrial Platform",
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${openSans.variable} ${jetbrainsMono.variable}`}>
      <body style={{ '--font-heading': 'Switzer, sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
