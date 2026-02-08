import { Locale, Translations } from "./types";
import { ptBR } from "./pt-BR";
import { en } from "./en";

export type { Locale, Translations };

export const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en: en,
};

export const defaultLocale: Locale = "pt-BR";
