import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FireParticles from "@/components/main/starBcakground";
import Navbar from "@/components/main/Navbar";
import Chatbot from "@/components/main/chatbot";
import ConvexClientProvider from "@/components/main/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIT startup",
  description: "website for rit startup club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-y-scrool overflow-x-hidden`}
      >
        <FireParticles isHovered={false}/>
        <Navbar/>

        {children}
        
      </body>
    </html>
    </ConvexClientProvider>
  );
}
