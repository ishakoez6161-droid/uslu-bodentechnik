import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uslu-estrich.de"),
  title: {
    default: "USLU Estrich & Bodentechnik | Estrich, Sanierung & Fußbodenheizung in Bergkamen",
    template: "%s | USLU Estrich & Bodentechnik",
  },
  description:
    "USLU Estrich & Bodentechnik in Bergkamen: Estricharbeiten, Fußbodenheizung, Haussanierung und persönliche Beratung. 20 Jahre Erfahrung, 500+ Projekte, 98% zufriedene Kunden.",
  keywords: [
    "Estrich Bergkamen",
    "Estrich Legen",
    "Fußbodenheizung",
    "Haussanierung",
    "Bodentechnik",
    "Estrichleger NRW",
    "Ümit Uslu",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: "USLU Estrich & Bodentechnik | Estrich, Sanierung & Fußbodenheizung",
    description:
      "Fachgerechte Estricharbeiten, Fußbodenheizung und Haussanierung in Bergkamen. 20 Jahre Erfahrung – 500+ Projekte – 98% zufriedene Kunden.",
    images: ["/images/hero-worker.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-paper text-ink`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: site.name,
              image: "https://www.uslu-estrich.de/images/hero-worker.jpeg",
              telephone: site.phoneHref.replace("tel:", ""),
              email: site.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: "Bergkamen",
                postalCode: "59192",
                addressCountry: "DE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              founder: site.owner,
              areaServed: "Bergkamen und Umgebung",
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
