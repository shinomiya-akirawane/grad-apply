import type { Metadata } from "next";
import localFont from "next/font/local";
import { dmSans } from "./ui/font";
import Providers from "./providers"

import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.className}`}>
      <body className={`bg-indigo-50 ${dmSans.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
