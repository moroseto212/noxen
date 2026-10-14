import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nama} — ${site.tagline}`,
    template: `%s · ${site.nama}`,
  },
  description: site.deskripsi,
  keywords: [
    "Noxen",
    "fashion",
    "baju",
    "celana",
    "sepatu",
    "aksesoris",
    "toko online",
    "fashion Indonesia",
  ],
  applicationName: site.nama,
  authors: [{ name: site.nama }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.nama,
    title: `${site.nama} — ${site.tagline}`,
    description: site.deskripsi,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nama} — ${site.tagline}`,
    description: site.deskripsi,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={geistSans.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
