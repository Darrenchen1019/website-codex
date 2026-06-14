"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, languages, type Locale } from "../lib/i18n";

type LanguageSwitcherProps = {
  currentLocale?: Locale;
  label?: string;
};

function detectLocale(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export default function LanguageSwitcher({ currentLocale, label = "Language" }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const activeLocale = currentLocale || detectLocale(pathname);
  const activeLanguage = languages.find((language) => language.code === activeLocale) || languages[0];

  return (
    <div className="language-switcher">
      <button className="language-trigger" type="button" aria-haspopup="menu" aria-label={label}>
        <span>{activeLanguage.flag}</span>
        <strong>{activeLanguage.nativeName}</strong>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="chevron-icon">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="language-menu" role="menu">
        {languages.map((language) => (
          <Link
            href={`/${language.code}/`}
            hrefLang={language.code}
            className={language.code === activeLocale ? "is-active" : ""}
            key={language.code}
            role="menuitem"
          >
            <span>{language.flag}</span>
            <strong>{language.nativeName}</strong>
            <em>{language.name}</em>
          </Link>
        ))}
      </div>
    </div>
  );
}
