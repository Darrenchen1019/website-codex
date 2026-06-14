import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BELO | Wireless Doorbell & Mechanical Chime OEM Manufacturer",
  description:
    "BELO manufactures wireless AC/DC doorbells, self-powered doorbells, sensor doorbells and mechanical chimes with OEM/ODM service, ISO-9001 quality control and export support for 60+ countries.",
  keywords: [
    "electronic doorbell manufacturer",
    "wireless doorbell wholesale",
    "wireless RF doorbell",
    "doorbell OEM",
    "wired mechanical doorbell",
    "self powered doorbell",
    "motion sensor doorbell",
    "doorbell supplier China"
  ],
  openGraph: {
    title: "BELO Wireless Doorbell & Mechanical Chime Manufacturer",
    description:
      "Wireless AC/DC, mechanical, self-powered and sensor doorbell sourcing for importers, wholesalers, brand owners and chain retailers.",
    type: "website"
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en/",
      es: "/es/",
      pt: "/pt/",
      fr: "/fr/",
      pl: "/pl/",
      ru: "/ru/",
      ar: "/ar/",
      tr: "/tr/",
      de: "/de/",
      "x-default": "/en/"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
