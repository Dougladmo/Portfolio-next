"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium transition-all hover:bg-white/10 hover:border-white/30"
      aria-label="Toggle language"
    >
      <span className={locale === "pt-BR" ? "text-white" : "text-white/40"}>
        PT
      </span>
      <span className="text-white/30">|</span>
      <span className={locale === "en" ? "text-white" : "text-white/40"}>
        EN
      </span>
    </button>
  );
}
