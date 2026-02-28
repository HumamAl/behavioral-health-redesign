import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { TabNavigation } from "@/components/layout/tab-navigation";
import { APP_CONFIG } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// DM Sans — humanist, calming body font for nature-wellness aesthetic
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Behavioral Health Redesign | Demo by Humam",
  description: "Website redesign demo for behavioral health company — Squarespace to WordPress migration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme activates the CSS theme system — Layout Builder sets APP_CONFIG.aesthetic
    // which flows through here to drive all visual treatment via CSS variables.
    <html lang="en" data-theme={APP_CONFIG.aesthetic}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm-sans, var(--font-geist-sans))" }}
      >
        <TabNavigation />
        {children}
      </body>
    </html>
  );
}
