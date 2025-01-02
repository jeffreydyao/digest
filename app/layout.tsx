import type { Metadata } from "next";
import "./globals.css";
import getFriendlyDate from "@/lib/utils/getFriendlyDate";
import Head from "next/head";

// Get current date in human readable format, i.e. '2 Jan 2025'
const date = getFriendlyDate();

export const metadata: Metadata = {
  title: `Digest | ${date}`,
  description: `Sydney weather and news for ${date}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📰</text></svg>"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
