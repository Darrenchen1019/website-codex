import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import {
  getDictionary,
  getLanguage,
  hreflangLanguages,
  isLocale,
  localeCodes,
  type Locale
} from "../../lib/i18n";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

const categoryImages = [
  localAsset("wireless-m017f15-angle.webp"),
  asset("menu-wired-doorbell.png"),
  localAsset("self-powered-9711t.webp"),
  asset("menu-sensor-doorbell.png")
];

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical: `/${localeParam}/`,
      languages: {
        ...hreflangLanguages,
        "x-default": "/en/"
      }
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      type: "website"
    }
  };
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h13m-5-5 5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const language = getLanguage(locale);
  const localizedRoot = `/${locale}/`;
  const productLinks = ["/products/wireless-doorbell-ag-m017f15/", "/products/#categories", "/products/#categories", "/products/#categories"];

  return (
    <div lang={locale} dir={language.dir} className="localized-page">
      <SiteHeader
        currentLocale={locale}
        languageLabel={dictionary.language.label}
        homeHref={localizedRoot}
        productsHref="/products/"
        aboutHref="/about/"
        newsHref="/news/"
        contactHref="/contact/"
        quoteHref="/inquiry/"
        labels={{
          home: dictionary.header.home,
          products: dictionary.header.products,
          about: dictionary.header.about,
          news: dictionary.header.news,
          contact: dictionary.header.contact,
          quote: dictionary.header.quote
        }}
      />

      <main>
        <section className="hero localized-hero">
          <div className="hero-copy">
            <p className="eyebrow">{dictionary.hero.eyebrow}</p>
            <h1>{dictionary.hero.title}</h1>
            <p className="hero-lead">{dictionary.hero.lead}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                {dictionary.hero.primary}
                <ArrowIcon />
              </a>
              <a className="secondary-button" href="#products">
                {dictionary.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hero-media" aria-label="BELO wireless doorbell application visual">
            <div className="hero-product-cutout">
              <Image
                src={localAsset("wireless-m017f15-front-cutout.webp")}
                alt="BELO wireless doorbell product"
                fill
                priority
              />
            </div>
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="section-heading">
            <p className="section-label">{dictionary.products.label}</p>
            <h2>{dictionary.products.title}</h2>
            <p>{dictionary.products.intro}</p>
          </div>
          <div className="product-grid">
            {dictionary.products.items.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a className="product-image" href={productLinks[index]} aria-label={product.name}>
                  <Image src={categoryImages[index]} alt={product.name} fill sizes="(max-width: 900px) 100vw, 25vw" />
                </a>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <a className="text-link" href="#contact">
                    {dictionary.header.quote}
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section factory-section" id="about">
          <div className="factory-copy">
            <p className="section-label">{dictionary.about.label}</p>
            <h2>{dictionary.about.title}</h2>
            <p>{dictionary.about.text}</p>
            <div className="strength-list">
              {dictionary.sellingPoints.map((item) => (
                <span key={item}>
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="factory-gallery">
            <div>
              <Image
                src={localAsset("factory-workshop.webp")}
                alt="BELO factory workshop"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div>
              <Image
                src={localAsset("factory-warehouse.webp")}
                alt="BELO factory warehouse"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </section>

        <section className="section oem-section" id="oem">
          <div className="oem-panel">
            <div>
              <p className="section-label">{dictionary.header.oem}</p>
              <h2>{dictionary.about.title}</h2>
              <p>{dictionary.about.text}</p>
            </div>
            <div className="oem-steps">
              {dictionary.sellingPoints.map((item, index) => (
                <span key={item}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-contact" id="contact">
          <div className="faq-block">
            <p className="section-label">{dictionary.contact.label}</p>
            <h2>{dictionary.contact.title}</h2>
            <p>{dictionary.contact.text}</p>
            <a className="primary-button" href="/inquiry/">
              {dictionary.header.quote}
              <ArrowIcon />
            </a>
          </div>
          <div className="contact-support localized-contact-card">
            <div>
              <CheckIcon />
              <strong>{dictionary.footer.company}</strong>
              <p>{dictionary.footer.tagline}</p>
              <a href={`mailto:${dictionary.contact.email}`}>{dictionary.contact.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Image src={asset("logo-belo-white-crop.png")} alt="BELO logo" width={1465} height={383} />
          <p>{dictionary.footer.company}</p>
          <span>{dictionary.footer.tagline}</span>
        </div>
        <div>
          <strong>{dictionary.footer.corePages}</strong>
          <a href={localizedRoot}>{dictionary.header.home}</a>
          <a href="/products/">{dictionary.header.products}</a>
          <a href="/about/">{dictionary.header.about}</a>
          <a href="/news/">{dictionary.header.news}</a>
          <a href="/contact/">{dictionary.header.contact}</a>
        </div>
        <div>
          <strong>{dictionary.header.contact}</strong>
          <a href="/inquiry/">{dictionary.header.quote}</a>
          <a href={`mailto:${dictionary.contact.email}`}>{dictionary.contact.email}</a>
          <a href="tel:+8613702375287">+86 137 0237 5287</a>
        </div>
      </footer>
    </div>
  );
}
