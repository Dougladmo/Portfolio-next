import type { Metadata } from "next";
import { Outfit, Oswald } from "next/font/google"; // Changed Inter to Outfit and added Oswald
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"] }); // Primary font
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-oswald" }); // Heading font

export const metadata: Metadata = {
  title: "Douglas Oliveira | Full Stack Developer", // Updated title
  description: "Portfolio de Douglas Oliveira", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
          <body className={`${outfit.className} ${oswald.variable} flex flex-col min-h-screen bg-[#0a0a0a]`}>
              <Header />
              {children}
              <Navbar />
          </body>
    </html>
  );
}
