import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARC Assembly Simulator - Rivan Jarjes",
  description: "ARC Assembly Simulator - A web-based simulator for ARC assembly language"
};

export default function ArcToolsWebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#1A1A1A' }}>
        {children}
      </body>
    </html>
  );
} 
