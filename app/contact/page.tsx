import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const asset = (name: string) => `/assets/china-belo/${name}`;

const company = {
  name: "Zhongshan Belo Electronics Technology Co., Ltd.",
  address: "No. 2, Yucheng 3rd Road, Xiaolan Town, Zhongshan, Guangdong, China",
  email: "xinhui@allight.com.cn",
  phone: "+86 137 0237 5287"
};

const mapQuery = encodeURIComponent(`${company.name}, ${company.address}`);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const metadata: Metadata = {
  title: "Contact BELO | Doorbell OEM/ODM Manufacturer in Zhongshan, China",
  description:
    "Contact Zhongshan Belo Electronics Technology Co., Ltd. for wireless doorbells, wired mechanical chimes, self-powered doorbells and sensor doorbell OEM/ODM projects.",
  openGraph: {
    title: "Contact BELO Doorbell Manufacturer",
    description: `${company.name}, ${company.address}`,
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

export default function ContactPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    alternateName: "BELO",
    url: "https://china-belo.com",
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 2, Yucheng 3rd Road",
      addressLocality: "Xiaolan Town, Zhongshan",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <SiteHeader />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <span>Contact BELO</span>
            <h1>Talk to our doorbell OEM/ODM team in Zhongshan.</h1>
            <p>
              Send your product range, target market, voltage, plug type, quantity plan and private-label requirements.
              BELO will help you match the right wireless, mechanical, self-powered or sensor doorbell series.
            </p>
          </div>
          <div className="contact-quick-card">
            <Image src={asset("logo-belo-blue-crop.png")} alt="BELO logo" width={1465} height={383} />
            <strong>{company.name}</strong>
            <p>{company.address}</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
          </div>
        </section>

        <section className="contact-main" id="contact-form">
          <form className="contact-form">
            <div className="contact-form-heading">
              <span>Product inquiry</span>
              <h2>Request a quotation or catalog recommendation.</h2>
            </div>
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
              <input name="country" placeholder="Europe, UAE, Mexico..." />
            </label>
            <label>
              Product Range
              <select name="productRange" defaultValue="">
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
              Quantity Plan
              <input name="quantity" placeholder="1000 pcs, 5000 pcs..." />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Voltage, plug type, target price, OEM logo, packaging, certification and sample requirements..."
              />
            </label>
            <button type="submit">
              Submit Inquiry
              <ArrowIcon />
            </button>
          </form>

          <aside className="contact-support">
            <div>
              <CheckIcon />
              <strong>RFQ response focus</strong>
              <p>Share model, quantity, target market and customization details for faster quotation.</p>
            </div>
            <div>
              <CheckIcon />
              <strong>OEM/ODM support</strong>
              <p>Logo, color, PCB function, packaging, carton marking and certification documents.</p>
            </div>
            <div>
              <CheckIcon />
              <strong>Product lines</strong>
              <p>Wireless RF, wired mechanical, self-powered kinetic and motion sensor doorbells.</p>
            </div>
          </aside>
        </section>

        <section className="contact-map-section" id="map">
          <div className="contact-map-copy">
            <span>Factory location</span>
            <h2>{company.name}</h2>
            <p>{company.address}</p>
          </div>
          <div className="contact-map-frame">
            <div className="map-address-overlay">
              <strong>{company.name}</strong>
              <span>{company.address}</span>
            </div>
            <iframe
              title={`${company.name} Google Map`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=16&hl=en&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a className="contact-map-link" href={googleMapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
            <ArrowIcon />
          </a>
        </section>
      </main>
    </>
  );
}
