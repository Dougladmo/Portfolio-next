"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { translations, defaultLocale } from "@/i18n";
import type { Locale, Translations } from "@/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: translations[defaultLocale],
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Read from localStorage on mount (SSR-safe)
  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "pt-BR") {
      setLocale(stored);
    }
  }, []);

  // Persist to localStorage and update document lang/title
  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.title = translations[locale].meta.title;
  }, [locale]);

  const t = useMemo(() => translations[locale], [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
