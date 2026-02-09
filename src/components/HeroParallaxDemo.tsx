"use client";
import React from "react";
import { HeroParallax, Product } from "./ui/hero-parallax";
import { useLanguage } from "@/components/LanguageContext";

// Thumbnails dos projetos (mantendo os existentes)
const productThumbnails = [
  "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
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
