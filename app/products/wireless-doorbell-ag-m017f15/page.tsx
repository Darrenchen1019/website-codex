import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

const product = {
  model: "AG-M017F15 DC",
  name: "Wireless AC/DC Doorbell",
  category: "Wireless RF Doorbell",
  summary:
    "A non-video 433.92MHz wireless doorbell series for importers, wholesalers and retail private-label programs.",
  images: [
    localAsset("wireless-m017f15-front.webp"),
    localAsset("wireless-m017f15-dc.webp"),
    localAsset("wireless-m017f15-angle.webp"),
    localAsset("wireless-m024f15.webp")
  ],
  highlights: [
    ["Frequency", "433.92MHz"],
    ["Melodies", "36 musics"],
    ["Range", "100-120m open air"],
    ["Receiver", "DC 3 x 1.5V AA"],
    ["Transmitter", "12V 23A battery"],
    ["Volume", "Low / Middle / High"]
  ],
  specs: [
    ["Model", "AG-M017F15 DC"],
    ["Product type", "Wireless RF doorbell"],
    ["Working radio frequency", "433.92MHz"],
    ["Operating range", "100-120 meters in open air"],
    ["Music", "36 musics"],
    ["Volume", "Low / Middle / High"],
    ["Receiver working voltage", "DC 3 x 1.5V AA battery"],
    ["Transmitter power", "12V 23A battery attached"],
    ["Installation", "Plug-in / wall-mounted receiver, adhesive or screw-mounted transmitter"],
    ["Button options", "Multiple transmitter styles available"],
    ["Plug options", "EU, UK, US, Argentina and other market plug types"],
    ["OEM/ODM", "Logo, color, packaging, melody and function customization"]
  ],
  modelOptions: [
    ["AG-M011K AC", "AC 110V/60Hz or 220V/50Hz receiver"],
    ["AG-M013Y DC", "DC battery receiver"],
    ["AG-M015F15 DC", "DC battery receiver"],
    ["AG-M017F15 DC", "DC battery receiver with F15 transmitter"]
  ],
  certifications: ["CE", "RoHS", "LVD", "R&TTE", "EMC"]
};

const oemOptions = [
  ["Logo & Brand", "Silk-screen logo, label and private-label packaging."],
  ["Housing & Button", "Custom color, button style and market-specific casing."],
  ["PCB & Function", "Pairing, melody, volume and receiver configuration support."],
  ["Packaging", "Gift box, color box, blister pack and carton marking."],
  ["Certification", "Support for CE, RoHS and market compliance documents."]
];

const applications = ["Importers", "Brand wholesalers", "Retail chains", "Supermarkets", "DIY stores", "Apartment entrances"];

const relatedProducts = [
  ["Wired Mechanical Doorbell", asset("menu-wired-doorbell.png"), "Classic 110V/220V ding-dong chime"],
  ["Self-Powered Doorbell", localAsset("self-powered-9711t.webp"), "Battery-free kinetic transmitter series"],
  ["Motion Sensor Doorbell", asset("menu-sensor-doorbell.png"), "Sensor chime for shops and service counters"]
];

export const metadata: Metadata = {
  title: "AG-M017F15 DC Wireless Doorbell | BELO OEM/ODM Manufacturer",
  description:
    "AG-M017F15 DC wireless RF doorbell product template with 433.92MHz frequency, 36 melodies, 100-120m open-air range and OEM/ODM customization support.",
  openGraph: {
    title: "BELO AG-M017F15 DC Wireless Doorbell",
    description:
      "433.92MHz non-video wireless doorbell for importers, wholesalers and private-label retail programs.",
    type: "website"
  }
};

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

export default function ProductDetailPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.model} ${product.name}`,
    brand: {
      "@type": "Brand",
      name: "BELO"
    },
    category: product.category,
    description: product.summary,
    image: product.images.map((image) => `https://china-belo.com${image}`),
    additionalProperty: product.highlights.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <SiteHeader quoteHref="#product-inquiry" />

      <main className="product-detail">
        <section className="product-hero">
          <div className="product-breadcrumb">Home / Products / Wireless Doorbell / {product.model}</div>
          <div className="product-hero-grid">
            <div className="product-gallery" aria-label={`${product.model} product gallery`}>
              <div className="product-main-image">
                <Image src={product.images[0]} alt={`${product.model} wireless doorbell`} fill priority />
              </div>
              <div className="product-thumbs">
                {product.images.map((image, index) => (
                  <span key={image} className={index === 0 ? "active" : ""}>
                    <Image src={image} alt="" width={120} height={92} />
                  </span>
                ))}
              </div>
            </div>

            <div className="product-summary">
              <span className="product-category">{product.category}</span>
              <h1>
                {product.model}
                <br />
                {product.name}
              </h1>
              <p>{product.summary}</p>
              <div className="product-highlight-grid">
                {product.highlights.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <a className="primary-button" href="#product-inquiry">
                  Start an RFQ
                  <ArrowIcon />
                </a>
                <a className="secondary-button" href="#specifications">
                  View Datasheet
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="product-spec-strip" aria-label="Key product parameters">
          {product.highlights.slice(0, 5).map(([label, value]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="product-section product-spec-section" id="specifications">
          <div className="product-section-heading">
            <span>Technical datasheet</span>
            <h2>Core parameters from the wireless doorbell catalog.</h2>
            <p>
              Use this section as the repeatable specification table for RFQ, SEO, AIO/GEO answers and downloadable
              product datasheets.
            </p>
          </div>
          <div className="spec-table">
            {product.specs.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="product-section model-option-section">
          <div className="product-section-heading">
            <span>Series options</span>
            <h2>AC and DC receiver options for different markets.</h2>
          </div>
          <div className="model-option-grid">
            {product.modelOptions.map(([model, detail]) => (
              <article key={model}>
                <strong>{model}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section product-oem-section" id="oem-options">
          <div className="product-section-heading">
            <span>OEM / ODM customization</span>
            <h2>Turn the standard model into your private-label doorbell program.</h2>
          </div>
          <div className="oem-option-grid">
            {oemOptions.map(([title, text]) => (
              <article key={title}>
                <CheckIcon />
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section product-market-cert">
          <div>
            <div className="product-section-heading compact">
              <span>Application markets</span>
              <h2>Built for volume sourcing and retail channels.</h2>
              <p>
                Suitable for non-video doorbell programs where simple installation, stable RF signal and lower
                maintenance cost matter.
              </p>
            </div>
            <div className="application-tags">
              {applications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div id="certifications">
            <div className="product-section-heading compact">
              <span>Certifications</span>
              <h2>Export-ready compliance support.</h2>
              <p>Catalog-supported compliance references for global B2B doorbell buyers.</p>
            </div>
            <div className="cert-badges">
              {product.certifications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section related-product-section">
          <div className="product-section-heading">
            <span>Related categories</span>
            <h2>Build internal links from one product page to the full doorbell system.</h2>
          </div>
          <div className="related-product-grid">
            {relatedProducts.map(([title, image, text]) => (
              <article key={title}>
                <Image src={image} alt={title} width={180} height={130} />
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                  <a href="/products/#categories">
                    View category
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="product-section product-inquiry-section" id="product-inquiry">
          <div className="inquiry-contact-card">
            <Image src={asset("logo-belo-blue-crop.png")} alt="BELO logo" width={1465} height={383} />
            <h2>Need a quote for {product.model}?</h2>
            <p>Share your target market, voltage, plug type, quantity and branding requirements.</p>
            <a href="mailto:xinhui@allight.com.cn">xinhui@allight.com.cn</a>
            <a href="tel:+8613702375287">+86 137 0237 5287</a>
          </div>
          <form className="product-inquiry-form">
            <label>
              Name
              <input name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="name@company.com" />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company name" />
            </label>
            <label>
              Country / Market
              <input name="country" placeholder="Mexico, UAE, Europe..." />
            </label>
            <label>
              Quantity Plan
              <input name="quantity" placeholder="1000 pcs, 5000 pcs..." />
            </label>
            <label>
              Product Requirement
              <textarea
                name="message"
                placeholder="AG-M017F15 DC, 433.92MHz, DC battery receiver, OEM packaging, target plug type..."
              />
            </label>
            <button type="submit">
              Submit Inquiry
              <ArrowIcon />
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
