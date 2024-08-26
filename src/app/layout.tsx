"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Radio_Canada } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Dynamically import AOS to ensure it loads on the client-side
    import("aos").then(AOS => {
      AOS.init();
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-[#fffbf3]">
        {children}
        </div>
      <Script src="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.js" defer></Script>
      </body>
    </html>
  );
}
