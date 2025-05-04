import cn from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Container from "@/app/_components/container";
import ConsultationForm from "@/app/_components/consultation-form";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senet Estate Sales | Michigan Estate Liquidation Experts",
  description:
    "Discover estate sales in Michigan with Senet Estate Sales. View listings, photos, and details for upcoming sales. Serving Michigan communities with trusted estate liquidation services.",
  keywords: [
    "Michigan estate sales",
    "estate sales near me",
    "Senet Estate Sales",
    "estate liquidation Michigan",
    "estate sale listings",
    "estate auctions Michigan",
    "estate sale company",
    "home liquidation",
    "estate sale services",
  ],
  openGraph: {
    title: "Senet Estate Sales | Michigan Estate Liquidation Experts",
    description:
      "Find local estate sales across Michigan. Browse current listings, image galleries, and more with Senet Estate Sales.",
    url: "https://www.senetestatesales.com",
    siteName: "Senet Estate Sales",
    type: "website",
    locale: "en_US",
    images: [HOME_OG_IMAGE_URL],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senet Estate Sales | Michigan Estate Liquidation Experts",
    description:
      "View upcoming estate sales in Michigan, including photos and contact details. Trust Senet Estate Sales for professional estate liquidation.",
    creator: "@senet_sales", // Update if you have a real Twitter handle
  },
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(inter.variable, "antialiased")}>
        <div className="min-h-screen">
          <Header />
          {children}

          {/* Consultation Form */}
          <div className="bg-platinum">
            <Container>
              <section className="py-16 md:py-20 lg:py-24">
                <ConsultationForm />
              </section>
            </Container>
          </div>
          <Footer />
        </div>
        <SanityLive />
      </body>
    </html>
  );
}
