import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-slate-500 text-white",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
      
    </html>
  );
}
