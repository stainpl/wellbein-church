// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from './components/SessionWrapper';
import HeaderSwitcher from './components/HeaderSwitcher';

import { Toaster } from 'react-hot-toast';
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "church-website",
  description: "Generated by slas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <HeaderSwitcher /> 
          <Toaster position="top-right" />
          <main className="pt-23">{children}</main>
        </SessionWrapper>
      </body>
    </html>
  );
}
