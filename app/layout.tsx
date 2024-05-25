import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import type { Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

const victorMono = Victor_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: "JSLab / JSExperiments - Flatline",
  description: "Personal Portfoliop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={victorMono.className}>{children}</body>
      <GoogleAnalytics gaId="G-CXZSD19VNH" />
    </html>
  );
}
