import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

const categories = [
  {
    name: "Wireless RF Doorbells",
    href: "/products/wireless-doorbell-ag-m017f15",
    image: localAsset("wireless-m017f15-front.webp"),
    intro: "AC/DC wireless chimes for importers, retail chains and private-label programs.",
    specs: ["433.92MHz", "36 melodies", "100-120m range"],
    fit: "Best for supermarkets, DIY stores and fast-moving wholesale SKUs."
  },
  {
    name: "Wired Mechanical Chimes",
    href: "/products/#categories",
    image: asset("menu-wired-doorbell.png"),
    intro: "Classic ding-dong wired doorbells for stable voltage markets and legacy replacement demand.",
    specs: ["110V / 220V", "Pure copper coil", "ABS housing"],
    fit: "Best for Middle East, Latin America and traditional wired channels."
  },
  {
    name: "Self-Powered Doorbells",
    href: "/products/#categories",
    image: localAsset("self-powered-9711t.webp"),
    intro: "Battery-free transmitter series for low-maintenance and eco-focused product ranges.",
    specs: ["No transmitter battery", "Kinetic button", "Low maintenance"],
    fit: "Best for European-style sustainability programs and premium retail lines."
  },
  {
    name: "Motion Sensor Doorbells",
    href: "/products/#categories",
    image: asset("menu-sensor-doorbell.png"),
    intro: "Sensor chimes and alarm modes for shop entrances, counters and service areas.",
    specs: ["Sensor trigger", "Doorbell mode", "Alarm mode"],
    fit: "Best for shops, service counters and commercial entrances."
  }
];

const featuredProducts = [
  {
    model: "AG-M017F15 DC",
    name: "Wireless AC/DC Doorbell",
    category: "Wireless RF",
    href: "/products/wireless-doorbell-ag-m017f15",
    image: localAsset("wireless-m017f15-angle.webp"),
    text: "433.92MHz wireless doorbell with 36 melodies and 100-120m open-air range.",
    specs: ["DC 3 x 1.5V AA", "12V 23A transmitter", "Low / Middle / High volume"]
  },
  {
    model: "AG-M015F15",
    name: "Wireless Doorbell Set",
    category: "Wireless RF",
    href: "/products/wireless-doorbell-ag-m017f15",
    image: localAsset("wireless-m017f15-dc.webp"),
    text: "Compact RF doorbell set for wholesale programs and brand packaging.",
    specs: ["433.92MHz", "Multiple plug options", "OEM color box"]
  },
  {
    model: "Q301",
    name: "Wired Mechanical Doorbell",
    category: "Mechanical",
    href: "/products/#featured-products",
    image: asset("wired-q301.png"),
    text: "Wired ding-dong chime for voltage-specific housing and retail projects.",
    specs: ["110V / 220V", "Mechanical chime", "Stable wired use"]
  },
  {
    model: "Q302",
    name: "Wired Door Chime",
    category: "Mechanical",
    href: "/products/#featured-products",
    image: asset("wired-q302.png"),
    text: "Classic wired chime option for importers serving replacement and project channels.",
    specs: ["Ding-dong sound", "ABS housing", "Market voltage options"]
  },
  {
    model: "SP9711T",
    name: "Self-Powered Doorbell",
    category: "Kinetic",
    href: "/products/#featured-products",
    image: localAsset("self-powered-9711t.webp"),
    text: "Battery-free transmitter design for low-maintenance doorbell programs.",
    specs: ["Kinetic transmitter", "No button battery", "Private label ready"]
  },
  {
    model: "Sensor Series",
    name: "Motion Sensor Doorbell",
    category: "Sensor",
    href: "/products/#featured-products",
    image: asset("menu-sensor-doorbell.png"),
    text: "Entrance sensor chime for shops, service desks and commercial doors.",
    specs: ["Sensor chime", "Alarm mode", "Commercial entrance"]
  }
];

const sourcingSteps = [
  ["01", "Choose product line", "Select wireless, wired, self-powered or sensor doorbell series by market demand."],
  ["02", "Confirm market specs", "Define voltage, plug type, frequency, certification and packaging requirements."],
  ["03", "Customize OEM details", "Align logo, color, PCB function, melody, carton marking and sample schedule."],
  ["04", "Start RFQ", "Send quantity plan and target market so BELO can quote the right model mix."]
];

export const metadata: Metadata = {
  title: "BELO Doorbell Products | Wireless, Mechanical, Self-Powered & Sensor Doorbells",
  description:
    "Explore BELO doorbell product categories including wireless RF doorbells, wired mechanical chimes, self-powered doorbells and motion sensor doorbells for OEM/ODM sourcing.",
  openGraph: {
    title: "BELO Doorbell Products",
    description:
      "Wireless, wired mechanical, self-powered and sensor doorbell product center for global B2B buyers.",
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

export default function ProductsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "BELO Doorbell Products",
    description:
      "Doorbell product center for wireless RF, wired mechanical, self-powered and sensor doorbell sourcing.",
    url: "https://china-belo.com/products/",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: featuredProducts.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${item.model} ${item.name}`,
        url: `https://china-belo.com${item.href}`
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <SiteHeader />

      <main className="products-page">
        <section className="products-hero">
          <div className="products-hero-copy">
            <span>Doorbell product center</span>
            <h1>Source the right BELO doorbell series for your market.</h1>
            <p>
              Compare wireless RF, wired mechanical, self-powered and sensor doorbell lines with clear product
              positioning, catalog parameters and OEM/ODM sourcing paths.
            </p>
            <div className="products-hero-actions">
              <a className="primary-button" href="#featured-products">
                View Product Models
                <ArrowIcon />
              </a>
              <a className="secondary-button" href="/inquiry/">
                Start an RFQ
              </a>
            </div>
          </div>
          <div className="products-hero-visual">
            <Image src={localAsset("wireless-m017f15-front-cutout.webp")} alt="BELO wireless doorbell product system" fill priority />
          </div>
        </section>

        <section className="products-trust-strip" aria-label="BELO product sourcing proof">
          <div>
            <strong>4</strong>
            <span>Main doorbell lines</span>
          </div>
          <div>
            <strong>433.92MHz</strong>
            <span>RF wireless options</span>
          </div>
          <div>
            <strong>OEM/ODM</strong>
            <span>Logo, PCB and packaging</span>
          </div>
          <div>
            <strong>CE / RoHS</strong>
            <span>Export compliance support</span>
          </div>
        </section>

        <section className="products-section" id="categories">
          <div className="products-section-heading">
            <span>Product categories</span>
            <h2>Start with the buyer's first sourcing decision.</h2>
            <p>
              Each category is structured as an SEO entry point and a sales qualification path, helping buyers move
              from product type to model selection and RFQ.
            </p>
          </div>
          <div className="category-showcase">
            {categories.map((item) => (
              <a className="category-panel" href={item.href} key={item.name}>
                <div className="category-image">
                  <Image src={item.image} alt={item.name} fill loading="eager" sizes="(max-width: 900px) 100vw, 25vw" />
                </div>
                <div className="category-copy">
                  <h3>{item.name}</h3>
                  <p>{item.intro}</p>
                  <ul>
                    {item.specs.map((spec) => (
                      <li key={spec}>
                        <CheckIcon />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <span>{item.fit}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="products-section featured-product-section" id="featured-products">
          <div className="products-section-heading">
            <span>Featured models</span>
            <h2>Representative models for catalog pages and paid landing pages.</h2>
            <p>
              Use this grid as the product summary layer. Each card can link to a detailed model page with datasheet,
              images, related categories and inquiry form.
            </p>
          </div>
          <div className="featured-product-grid">
            {featuredProducts.map((item) => (
              <article className="featured-product-card" key={`${item.model}-${item.name}`}>
                <a className="featured-product-image" href={item.href} aria-label={item.name}>
                  <Image
                    src={item.image}
                    alt={`${item.model} ${item.name}`}
                    fill
                    loading="eager"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </a>
                <div className="featured-product-copy">
                  <span>{item.category}</span>
                  <h3>{item.model}</h3>
                  <strong>{item.name}</strong>
                  <p>{item.text}</p>
                  <div>
                    {item.specs.map((spec) => (
                      <em key={spec}>{spec}</em>
                    ))}
                  </div>
                  <a className="text-link" href={item.href}>
                    View product
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="products-section sourcing-guide" id="sourcing-guide">
          <div className="products-section-heading">
            <span>OEM / ODM sourcing flow</span>
            <h2>Help buyers move from product range to quotation faster.</h2>
          </div>
          <div className="sourcing-step-grid">
            {sourcingSteps.map(([step, title, text]) => (
              <article key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="products-section products-rfq" id="products-rfq">
          <div>
            <span>Need help choosing models?</span>
            <h2>Send your target market and BELO can recommend a product mix.</h2>
            <p>
              Tell us the country, quantity plan, voltage, plug type, price range and packaging requirement. We will
              match wireless, mechanical, self-powered or sensor series for your channel.
            </p>
          </div>
          <form className="products-rfq-form">
            <label>
              Name
              <input name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="name@company.com" />
            </label>
            <label>
              Target Market
              <input name="market" placeholder="Europe, UAE, Mexico..." />
            </label>
            <label>
              Product Range
              <select name="range" defaultValue="">
                <option value="" disabled>
                  Select product range
                </option>
                <option>Wireless RF Doorbells</option>
                <option>Wired Mechanical Chimes</option>
                <option>Self-Powered Doorbells</option>
                <option>Motion Sensor Doorbells</option>
                <option>Mixed catalog sourcing</option>
              </select>
            </label>
            <label>
              Requirement
              <textarea name="message" placeholder="Quantity, voltage, plug type, OEM logo, packaging, certification..." />
            </label>
            <button type="submit">
              Submit Product Inquiry
              <ArrowIcon />
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
