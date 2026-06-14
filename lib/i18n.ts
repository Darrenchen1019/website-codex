import ar from "../locales/ar.json";
import de from "../locales/de.json";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import pl from "../locales/pl.json";
import pt from "../locales/pt.json";
import ru from "../locales/ru.json";
import tr from "../locales/tr.json";

export const languages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" }
] as const;

export type Locale = (typeof languages)[number]["code"];
export type Dictionary = typeof en;

export const defaultLocale: Locale = "en";
export const localeCodes = languages.map((language) => language.code) as Locale[];

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  pt,
  fr,
  pl,
  ru,
  ar,
  tr,
  de
};

export function isLocale(value: string): value is Locale {
  return localeCodes.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function getLanguage(locale: Locale) {
  return languages.find((language) => language.code === locale) || languages[0];
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    return `/${parts.slice(1).join("/")}`;
  }
  return pathname || "/";
}

export function localizePath(locale: Locale, pathname = "/") {
  const cleanPath = stripLocale(pathname);
  if (locale === defaultLocale) {
    return cleanPath === "/" ? "/en/" : `/en${cleanPath}`;
  }
  return cleanPath === "/" ? `/${locale}/` : `/${locale}${cleanPath}`;
}

export const hreflangLanguages = Object.fromEntries(
  languages.map((language) => [language.code, `/${language.code}/`])
) as Record<Locale, string>;
