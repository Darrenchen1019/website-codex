import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

export const metadata: Metadata = {
  title: "About BELO | Doorbell Manufacturer and OEM/ODM Factory",
  description:
    "Learn about Zhongshan BELO Electronics Technology Co., Ltd., a doorbell manufacturer supporting wireless, mechanical, self-powered and sensor doorbell OEM/ODM projects.",
  alternates: {
    canonical: "/about/"
  }
};

const proof = [
  ["Since", "1990"],
  ["Export markets", "60+"],
  ["Factory area", "6000+ m2"],
  ["Doorbell models", "100+"]
];

const capabilities = [
  "Mold tooling and plastic injection support",
  "Wireless RF, wired mechanical, self-powered and sensor doorbell lines",
  "Private label logo, packaging and carton marking",
  "PCB function, melody, voltage and plug type coordination",
  "Export quality control and certification document support",
  "Sample preparation for importers, wholesalers and retail channels"
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <span>About BELO</span>
            <h1>A real doorbell factory for export-ready OEM programs.</h1>
            <p>
              Zhongshan BELO Electronics Technology Co., Ltd. supports global B2B buyers with doorbell product
              development, mold tooling, private label packaging, quality control and export sourcing service.
            </p>
          </div>
          <div className="contact-quick-card">
            <Image src={asset("logo-belo-blue-crop.png")} alt="BELO logo" width={1465} height={383} />
            <strong>Zhongshan BELO Electronics Technology Co., Ltd.</strong>
            <p>No. 2, Yucheng 3rd Road, Xiaolan Town, Zhongshan, Guangdong, China</p>
            <a href="/contact/">Contact the factory</a>
            <a href="/inquiry/">Start an RFQ</a>
          </div>
        </section>

        <section className="products-trust-strip about-proof-strip" aria-label="BELO factory proof">
          {proof.map(([label, value]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section factory-section">
          <div className="factory-copy">
            <p className="section-label">Manufacturing capability</p>
            <h2>From tooling and assembly to OEM packaging and export inspection.</h2>
            <div className="strength-list">
              {capabilities.map((item) => (
                <span key={item}>
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="factory-gallery">
            <div>
              <Image src={localAsset("factory-exterior.webp")} alt="BELO factory exterior" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
            <div>
              <Image src={localAsset("factory-workshop.webp")} alt="BELO workshop" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </div>
          </div>
        </section>

        <section className="section seo-section">
          <div className="section-heading">
            <p className="section-label">Internal links</p>
            <h2>Continue exploring BELO sourcing pages.</h2>
          </div>
          <div className="seo-grid">
            <a href="/products/">
              <span>Doorbell Products</span>
              <code>/products/</code>
            </a>
            <a href="/news/">
              <span>News & Buying Guides</span>
              <code>/news/</code>
            </a>
            <a href="/contact/">
              <span>Contact BELO</span>
              <code>/contact/</code>
            </a>
            <a href="/inquiry/">
              <span>Submit RFQ</span>
              <code>/inquiry/</code>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
