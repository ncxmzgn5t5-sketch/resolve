import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.resolveadvisoryservices.com"),
  title: {
    default: "Resolve Advisory & Services",
    template: "%s | Resolve Advisory & Services",
  },
  description:
    "Resolve Advisory & Services helps organisations with strategy, capability development, and commercial growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-stone-100 text-stone-950 antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
