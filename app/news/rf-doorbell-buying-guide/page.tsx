import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";

const localAsset = (name: string) => `/assets/belo-local/${name}`;

export const metadata: Metadata = {
  title: "RF Doorbell Buying Guide | BELO Wireless Doorbell Sourcing",
  description:
    "A concise RF doorbell buying guide for importers comparing frequency, range, melodies, receiver power and OEM packaging before sourcing wireless doorbells.",
  alternates: {
    canonical: "/news/rf-doorbell-buying-guide/"
  }
};

const points = [
  ["Frequency", "433.92MHz RF models are common for non-video wireless doorbell sourcing."],
  ["Range", "Ask for open-air range and realistic indoor performance expectations."],
  ["Power", "Confirm AC plug-in, DC battery receiver and transmitter battery options."],
  ["OEM", "Prepare logo, color box, carton marking, plug type and certification requirements."]
];

export default function RFDoorbellGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="product-detail">
        <section className="product-hero">
          <div className="product-breadcrumb">Home / News / RF Doorbell Buying Guide</div>
          <div className="product-hero-grid">
            <div className="product-gallery">
              <div className="product-main-image">
                <Image src={localAsset("wireless-m017f15-front-cutout.webp")} alt="BELO RF wireless doorbell" fill priority />
              </div>
            </div>
            <div className="product-summary">
              <span className="product-category">Buying Guide</span>
              <h1>RF Doorbell Buying Guide for Importers</h1>
              <p>
                Use this guide to prepare a clearer wireless doorbell inquiry before comparing models, prices and OEM
                packaging options.
              </p>
              <div className="product-actions">
                <a className="primary-button" href="/inquiry/">Start an RFQ</a>
                <a className="secondary-button" href="/products/">View Products</a>
              </div>
            </div>
          </div>
        </section>

        <section className="product-section product-spec-section">
          <div className="product-section-heading">
            <span>Buyer checklist</span>
            <h2>What to confirm before sourcing wireless RF doorbells.</h2>
          </div>
          <div className="spec-table">
            {points.map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
