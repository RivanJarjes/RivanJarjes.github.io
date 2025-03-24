import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from './components/ScrollToTop';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rivan Jarjes",
  description: "Software Developer Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
