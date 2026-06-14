import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const localAsset = (name: string) => `/assets/belo-local/${name}`;

export const metadata: Metadata = {
  title: "BELO News | Doorbell Buying Guides and OEM Sourcing Insights",
  description:
    "Read BELO doorbell buying guides, OEM sourcing notes and product selection insights for wireless, mechanical, self-powered and sensor doorbell importers.",
  alternates: {
    canonical: "/news/"
  }
};

const posts = [
  {
    title: "RF Doorbell Buying Guide for Importers",
    href: "/news/rf-doorbell-buying-guide/",
    category: "Buying Guide",
    image: localAsset("wireless-m017f15-front-cutout.webp"),
    summary:
      "How to compare 433.92MHz RF doorbells by range, melodies, receiver power, transmitter battery and OEM packaging."
  },
  {
    title: "How to Choose Doorbell Products for Retail Channels",
    href: "/products/",
    category: "Product Selection",
    image: localAsset("wireless-m024f15.webp"),
    summary:
      "A practical path from product category to SKU mix for supermarkets, wholesalers, DIY stores and brand owners."
  },
  {
    title: "What Buyers Should Prepare Before an OEM Doorbell RFQ",
    href: "/inquiry/",
    category: "OEM/ODM",
    image: localAsset("factory-workshop.webp"),
    summary:
      "Confirm voltage, plug type, frequency, market certification, packaging and quantity before requesting a quotation."
  }
];

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="products-page">
        <section className="products-hero news-hero">
          <div className="products-hero-copy">
            <span>News & buying guides</span>
            <h1>Doorbell sourcing insights for global B2B buyers.</h1>
            <p>
              Practical articles for importers, wholesalers, private-label brands and retail chains comparing BELO
              wireless RF, wired mechanical, self-powered and sensor doorbell lines.
            </p>
          </div>
          <div className="products-hero-visual">
            <Image src={localAsset("factory-warehouse.webp")} alt="BELO doorbell product and factory news" fill priority />
          </div>
        </section>

        <section className="products-section">
          <div className="products-section-heading">
            <span>Latest articles</span>
            <h2>Build product understanding before you send an RFQ.</h2>
          </div>
          <div className="featured-product-grid news-grid">
            {posts.map((post) => (
              <article className="featured-product-card" key={post.title}>
                <a className="featured-product-image" href={post.href} aria-label={post.title}>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </a>
                <div className="featured-product-copy">
                  <span>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <a className="text-link" href={post.href}>
                    Read more
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
                      <path d="M5 12h13m-5-5 5 5-5 5" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
