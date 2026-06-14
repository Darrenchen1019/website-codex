import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

const productCategories = [
  {
    name: "Wireless Doorbell",
    url: "/products/wireless-doorbell-ag-m017f15/",
    image: localAsset("wireless-m017f15-angle.webp"),
    summary: "RF wireless chimes",
    keywords: ["433.92MHz RF signal", "36 melodies", "100-120m open-air range"]
  },
  {
    name: "Wired Mechanical Doorbell",
    url: "/products/#categories",
    image: asset("menu-wired-doorbell.png"),
    summary: "Wired ding-dong chimes",
    keywords: ["110V / 220V options", "pure copper coil", "fire-retardant ABS"]
  },
  {
    name: "Self-Powered Doorbell",
    url: "/products/#categories",
    image: localAsset("self-powered-9711t.webp"),
    summary: "Battery-free transmitters",
    keywords: ["no transmitter battery", "kinetic doorbell", "-20C to 60C option"]
  },
  {
    name: "Motion Sensor Doorbell",
    url: "/products/#categories",
    image: asset("menu-sensor-doorbell.png"),
    summary: "Sensor entrance chimes",
    keywords: ["shop entrance chime", "sensor alarm mode", "commercial doorbell"]
  }
];

const proofPoints = [
  ["Since", "1990"],
  ["Countries", "60+"],
  ["Models", "100+"],
  ["QC", "ISO-9001"]
];

const strengths = [
  "Own mold and injection workshop",
  "Private label, custom PCB and packaging",
  "CE, RoHS, LVD, R&TTE and EMC support",
  "Export-ready inspection and sourcing support"
];

const markets = ["Asia", "Europe", "Latin America", "Middle East", "Mexico", "UAE", "Saudi Arabia", "Turkey", "Pakistan", "Nigeria"];

const seoPages = [
  ["/products/", "Doorbell Product Center"],
  ["/products/wireless-doorbell-ag-m017f15/", "Wireless RF Doorbell Model"],
  ["/about/", "Doorbell OEM Factory"],
  ["/news/rf-doorbell-buying-guide/", "RF Doorbell Buying Guide"],
  ["/contact/", "Contact BELO"],
  ["/inquiry/", "Doorbell RFQ Form"]
];

const faqs = [
  {
    q: "What doorbell series does BELO manufacture?",
    a: "BELO focuses on non-video electronic doorbells, including wireless AC/DC RF doorbells, wired mechanical chimes, self-powered kinetic doorbells, sensor doorbells, transmitters and related accessories."
  },
  {
    q: "Can BELO support private-label OEM/ODM projects?",
    a: "Yes. BELO supports ID design, mold opening, private label packaging, custom PCB requirements and export-ready sampling for importers, wholesalers, brand owners and retail channel buyers."
  },
  {
    q: "What should buyers confirm before requesting a quote?",
    a: "Please share target market, voltage, plug type, quantity plan, product series, RF range expectation, melody requirement, certification needs and whether logo, packaging or PCB customization is required."
  }
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZHONGSHAN BELO ELECTRONICS TECHNOLOGY CO.,LTD",
  alternateName: "BELO",
  foundingDate: "1990",
  url: "https://china-belo.com",
  brand: "BELO",
  description:
    "Wireless doorbell and mechanical chime OEM/ODM manufacturer for RF wireless doorbells, wired mechanical doorbells, self-powered doorbells and sensor doorbells.",
  areaServed: ["Middle East", "Africa", "Latin America", "Asia", "Europe"]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">OEM/ODM manufacturer since 1990</p>
            <h1>Precision Doorbells Engineered for Global Brands</h1>
            <p className="hero-lead">
              From Zhongshan, BELO supplies wireless, self-powered, sensor and mechanical
              doorbells to importers, wholesalers and retail channels in 60+ countries with
              ISO-9001 quality control and OEM/ODM support.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/inquiry/">
                Start OEM Project
                <ArrowIcon />
              </a>
              <a className="secondary-button" href="#products">
                View Product Range
              </a>
            </div>
            <dl className="proof-row" aria-label="Company proof points">
              {proofPoints.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-media" aria-label="BELO wireless doorbell application visual">
            <div className="hero-product-cutout">
              <Image
                src={localAsset("wireless-m017f15-front-cutout.webp")}
                alt="BELO wireless doorbell transparent product cutout"
                fill
                priority
              />
            </div>
          </div>
        </section>

        <section className="strategy-strip" aria-label="BELO core supply advantages">
          <div>
            <strong>Wireless Series</strong>
            <span>Long-range RF chimes with AC/DC models, waterproof button options and 36 melodies.</span>
          </div>
          <div>
            <strong>Mechanical Chimes</strong>
            <span>Classic ding-dong sound with 110V/220V solutions for wired doorbell markets.</span>
          </div>
          <div>
            <strong>OEM/ODM Service</strong>
            <span>ID design, mold opening, private label packaging and custom PCB support.</span>
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="section-heading">
            <p className="section-label">Core competencies</p>
            <h2>What BELO supplies to retail chains, importers and private-label brands.</h2>
            <p>
              Cover the full spectrum from budget-friendly RF wireless models to eco-friendly
              self-powered doorbells, sensor chimes and heavy-duty mechanical doorbells for
              different voltage standards.
            </p>
          </div>
          <div className="product-grid">
            {productCategories.map((product) => (
              <article className="product-card" key={product.name}>
                <a className="product-image" href={product.url} aria-label={product.name}>
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 100vw, 25vw" />
                </a>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <ul>
                    {product.keywords.map((keyword) => (
                      <li key={keyword}>
                        <CheckIcon />
                        {keyword}
                      </li>
                    ))}
                  </ul>
                  <a className="text-link" href={product.url}>
                    Explore category
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section oem-section" id="oem">
          <div className="oem-panel">
            <div>
              <p className="section-label">OEM / ODM service</p>
              <h2>From ID design to mold opening, BELO supports private-label doorbell programs.</h2>
              <p>
                With an in-house mold workshop, injection production and export experience, BELO
                helps buyers customize housing design, buttons, logo, packaging, PCB functions and
                certification requirements before bulk production.
              </p>
            </div>
            <div className="oem-steps">
              {["Define SKU mix", "Confirm voltage / plug", "Customize ID / PCB", "Quote and sample"].map(
                (item, index) => (
                  <span key={item}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="section factory-section" id="factory">
          <div className="factory-copy">
            <p className="section-label">Manufacturing excellence</p>
            <h2>Real factory, real quality, from tooling to finished goods.</h2>
            <div className="strength-list">
              {strengths.map((item) => (
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
                alt="BELO production and factory environment"
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div>
              <Image
                src={localAsset("factory-warehouse.webp")}
                alt="BELO factory operation"
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
          </div>
        </section>

        <section className="section market-section">
          <div className="section-heading">
            <p className="section-label">Markets and product fit</p>
            <h2>Doorbell programs for Asia, Europe, Latin America and the Middle East.</h2>
            <p>
              Match each market with the right product line: budget-friendly RF wireless models,
              eco-focused self-powered transmitters, 110V/220V mechanical chimes and plug types for
              local retail channels.
            </p>
          </div>
          <div className="market-grid">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </section>

        <section className="section seo-section" id="seo">
          <div className="section-heading">
            <p className="section-label">SEO / catalog entry pages</p>
            <h2>Turn the catalog into searchable product-category pages.</h2>
            <p>
              Each category page should combine model photos, specifications, applications,
              certifications, FAQ and quote forms so Google, ads traffic and AI search can
              understand the same sourcing intent.
            </p>
          </div>
          <div className="seo-grid">
            {seoPages.map(([url, title]) => (
              <a href={url} key={url}>
                <span>{title}</span>
                <code>{url}</code>
              </a>
            ))}
          </div>
        </section>

        <section className="section faq-contact" id="faq">
          <div className="faq-block">
            <p className="section-label">FAQ for buyers and AI search</p>
            <h2>Answer the sourcing questions before buyers leave the page.</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q} open={item.q.includes("series")}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <form className="quote-form" id="contact">
            <h2>Start your OEM doorbell project</h2>
            <p>Send your target market, voltage, plug type, quantity and private-label requirements.</p>
            <label>
              Name
              <input name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="name@company.com" />
            </label>
            <label>
              WhatsApp
              <input name="whatsapp" placeholder="+971 / +52 / +86 ..." />
            </label>
            <label>
              Country
              <input name="country" placeholder="Mexico, UAE, Saudi Arabia..." />
            </label>
            <label>
              Product Requirement
              <textarea name="message" placeholder="433.92MHz wireless AC/DC doorbell, mechanical chime, self-powered series, sensor doorbell, OEM packaging..." />
            </label>
            <button type="submit">
              Submit Inquiry
              <ArrowIcon />
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer" id="download">
        <div>
          <Image src={asset("logo-belo-white-crop.png")} alt="BELO logo" width={1465} height={383} />
          <p>ZHONGSHAN BELO ELECTRONICS TECHNOLOGY CO.,LTD</p>
          <span>Premium doorbell and electronics manufacturer since 1990.</span>
        </div>
        <div>
          <strong>Core Pages</strong>
          <a href="/">Home</a>
          <a href="/products/">Products</a>
          <a href="/about/">About Us</a>
          <a href="/news/">News</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="/contact/">Contact Us</a>
          <a href="/inquiry/">Get a Quote</a>
          <a href="mailto:xinhui@allight.com.cn">xinhui@allight.com.cn</a>
          <a href="tel:+8613702375287">+86 137 0237 5287</a>
        </div>
      </footer>
    </>
  );
}
