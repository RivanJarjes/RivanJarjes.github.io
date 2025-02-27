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
