import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Alburquerque Auto New York | Diagnostics & Repair";
const description = "Honest automotive diagnostics, repair, maintenance, tire, A/C, and performance service for New York drivers.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title,
    description,
    icons: { icon: "/logo.png", shortcut: "/logo.png" },
    openGraph: { title, description, images: [{ url: image, width: 1792, height: 924, alt: "Alburquerque Auto — The issue stops here." }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
