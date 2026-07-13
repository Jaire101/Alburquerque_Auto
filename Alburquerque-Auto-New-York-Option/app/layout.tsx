import type { Metadata } from "next";
import "./globals.css";

const title = "Alburquerque Auto New York | Diagnostics & Repair";

const description =
  "Honest automotive diagnostics, repair, maintenance, tire, A/C, and performance service for New York drivers.";

const websiteUrl =
  "https://jaire101.github.io/Alburquerque_Auto";

export const metadata: Metadata = {
  title,
  description,

  icons: {
    icon: "/Alburquerque_Auto/logo.png",
    shortcut: "/Alburquerque_Auto/logo.png",
  },

  openGraph: {
    title,
    description,
    url: websiteUrl,
    images: [
      {
        url: `${websiteUrl}/og.png`,
        width: 1792,
        height: 924,
        alt: "Alburquerque Auto — The issue stops here.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${websiteUrl}/og.png`],
  },
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