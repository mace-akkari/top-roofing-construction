import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROOFING & CONSTRUCTION",
  description: "TOP ROOFING AND CONSTRUCTION LTD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
