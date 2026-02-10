"use client";
import React from "react";
import { HeroParallax, Product } from "./ui/hero-parallax";
import { useLanguage } from "@/components/LanguageContext";

// Thumbnails dos projetos reais (ordem correspondente ao i18n)
const productThumbnails = [
  "/portfolio/nobuggy-thumb.png",          // 1. NoBuggy
  "/portfolio/acomportamental-thumb.png",  // 2. AComportamental
  "/portfolio/befest-thumb.png",           // 3. BeFest
  "/portfolio/pepperlawUI-thumb.png",      // 4. Pepperlaw UI
  "/portfolio/recicle-aqui-thumb.png",     // 5. Recicle Aqui
  "/portfolio/sofempire-thumb.png",        // 6. SofEmpire
  "/portfolio/solar-energy-thumb.jpeg",    // 7. SolarKit
  "/portfolio/meu-prefeito-thumb.jpg",     // 8. Meu Prefeito
  "/portfolio/farmfy-thumb.jpg",           // 9. Farmfy
];

export function HeroParallaxDemo() {
  const { t } = useLanguage();

  // Mesclar dados do i18n com thumbnails
  const products: Product[] = t.projects.cards.map((card, index) => ({
    title: card.title,
    link: "#", // Pode ser adicionado no i18n depois
    thumbnail: productThumbnails[index] || productThumbnails[0],
    description: card.description,
    stack: card.stack,
    category: card.category,
    images: [productThumbnails[index] || productThumbnails[0]], // Usar thumbnail como imagem única por enquanto
  }));

  return <HeroParallax products={products} />;
}
