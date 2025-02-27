import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ARC Assembly Simulator - Rivan Jarjes",
  description: "ARC Assembly Simulator - A web-based simulator for ARC assembly language"
};

// This tells Next.js that this layout should not inherit from the root layout
export const dynamic = 'force-static';

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #1A1A1A;
          }
        `}</style>
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
} 
