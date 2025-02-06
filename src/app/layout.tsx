import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import Footer2 from "@/components/customComponents/Footer2";
import Footer3 from "@/components/Footer3";
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const khandFont = localFont(
  {
    src: './fonts/Khand-SemiBold.woff',
    weight: '100 900',
  }

)


export const metadata: Metadata = {
  title: "The Creator",
  description: "Linux World by Mr Vimal Daga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${khandFont.className}  bg-black overflow-x-hidden antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Footer3/>
        {/* <Footer2/> */}
      </body>
    </html>
  );
}
