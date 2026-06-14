import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const logoAsset = "/assets/china-belo/logo-belo-blue-crop.png";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h13m-5-5 5 5-5 5" />
    </svg>
  );
}

type SiteHeaderProps = {
  homeHref?: string;
  productsHref?: string;
  aboutHref?: string;
  newsHref?: string;
  contactHref?: string;
  quoteHref?: string;
  labels?: {
    home?: string;
    products?: string;
    about?: string;
    news?: string;
    contact?: string;
    quote?: string;
  };
  currentLocale?: "en" | "es" | "pt" | "fr" | "pl" | "ru" | "ar" | "tr" | "de";
  languageLabel?: string;
};

export default function SiteHeader({
  homeHref = "/",
  productsHref = "/products/",
  aboutHref = "/about/",
  newsHref = "/news/",
  contactHref = "/contact/",
  quoteHref = "/inquiry/",
  labels,
  currentLocale,
  languageLabel
}: SiteHeaderProps) {
  const nav = [
    [labels?.home || "Home", homeHref],
    [labels?.products || "Products", productsHref],
    [labels?.about || "About Us", aboutHref],
    [labels?.news || "News", newsHref],
    [labels?.contact || "Contact", contactHref]
  ];

  return (
    <header className="site-header">
      <a className="brand" href={homeHref} aria-label="BELO home">
        <Image src={logoAsset} alt="BELO logo" width={1465} height={383} priority />
      </a>
      <nav aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher currentLocale={currentLocale} label={languageLabel} />
        <a className="header-cta" href={quoteHref}>
          {labels?.quote || "Get a Quote"}
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}
