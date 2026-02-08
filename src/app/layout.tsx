import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ParticlesBackground from "@/components/ParticlesBackground";
import { TransitionProvider } from "@/components/TransitionContext";
import { LanguageProvider } from "@/components/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
}); // Primary font
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
}); // Heading font

export const metadata: Metadata = {
  title: "Douglas Oliveira | Full Stack Developer",
  description: "Portfolio de Douglas Oliveira",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.className} ${oswald.variable} ${outfit.variable} h-screen bg-[#0a0a0a]`}
      >
        <ParticlesBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <TransitionProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Navbar />
          </LanguageProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
