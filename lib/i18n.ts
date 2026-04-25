import { banner as enHomeBanner } from "@/lang/en/home/banner";
import { hero as enHomeHero } from "@/lang/en/home/hero";
import { banner as esHomeBanner } from "@/lang/es/home/banner";
import { hero as esHomeHero } from "@/lang/es/home/hero";
import { banner as frHomeBanner } from "@/lang/fr/home/banner";
import { hero as frHomeHero } from "@/lang/fr/home/hero";

export const supportedLanguages = ["es", "en", "fr"] as const;

export type Language = (typeof supportedLanguages)[number];

export interface HeroCopy {
  subtitle: string;
  title: string;
  scrollLabel: string;
}

export interface HomeDictionary {
  banner: {
    cta: string;
  };
  hero: HeroCopy;
}

export interface Translations {
  home: HomeDictionary;
}

export const translationsByLanguage: Record<Language, Translations> = {
  es: {
    home: {
      banner: esHomeBanner,
      hero: esHomeHero,
    },
  },
  en: {
    home: {
      banner: enHomeBanner,
      hero: enHomeHero,
    },
  },
  fr: {
    home: {
      banner: frHomeBanner,
      hero: frHomeHero,
    },
  },
};

export function isSupportedLanguage(value: string): value is Language {
  return supportedLanguages.includes(value as Language);
}
