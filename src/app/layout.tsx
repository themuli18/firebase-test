import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NavigationBar } from "@/components/navigation-bar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMBG Digital Consulting",
  description:
    "RMBG is a boutique advisory and development firm based in Amsterdam, The Netherlands",
  metadataBase: new URL("https://rmbg-digital-consulting.com"), // Replace with your actual domain
  openGraph: {
    title: "RMBG Digital Consulting",
    description:
      "RMBG is a boutique advisory and development firm based in Amsterdam, The Netherlands",
    url: "https://rmbg-digital-consulting.com", // Replace with your actual domain
    siteName: "RMBG Digital Consulting",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618424154270-47995a6e3819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&quot", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "RMBG Digital Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMBG Digital Consulting",
    description:
      "RMBG is a boutique advisory and development firm based in Amsterdam, The Netherlands",
    images: [
      "https://images.unsplash.com/photo-1618424154270-47995a6e3819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&quot", // Replace with your actual Twitter image
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased bg-grid`}
      >
        <div className="relative flex min-h-screen flex-col">
          <NavigationBar />
          <main className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
