"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { useEffect } from "react";
import Head from "next/head";

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
      <Head>
      <title>lantern learning</title>
      <meta name="description" content="let's make learning simple" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.js" />
      </Head>
      <body className={inter.className}>
      <Script src="https://cdn.jsdelivr.net/npm/aos@next/dist/aos.js" defer></Script>
      <div className="bg-[#fffbf3]">
        {children}
        </div>
      </body>
    </html>
  );
}
