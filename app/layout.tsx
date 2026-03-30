import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FullHeart Limited LLC | Software Intake",
  description:
    "FullHeart Limited LLC builds and deploys websites, dashboards, portals, and business software with a fast intake process built for QR-driven conversions.",
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
