import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import InquiryForm from "./InquiryForm";

const asset = (name: string) => `/assets/china-belo/${name}`;
const localAsset = (name: string) => `/assets/belo-local/${name}`;

export const metadata: Metadata = {
  title: "B2B Doorbell Inquiry Form | BELO OEM/ODM Manufacturer",
  description:
    "Send a B2B inquiry to BELO for wireless RF doorbells, wired mechanical chimes, self-powered doorbells, motion sensor doorbells and OEM/ODM sourcing.",
  openGraph: {
    title: "BELO B2B Doorbell Inquiry Form",
    description: "Request quotation, catalog recommendation and OEM/ODM support from BELO.",
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

export default function InquiryPage() {
  return (
    <>
      <SiteHeader quoteHref="#inquiry-form" />

      <main className="inquiry-page">
        <section className="inquiry-hero">
          <div className="inquiry-hero-copy">
            <span>Doorbell sourcing request</span>
            <h1>Send BELO your B2B doorbell inquiry.</h1>
            <p>
              Share your buyer profile, product range, target market and OEM requirements. Our export team will help
              match wireless RF, mechanical, self-powered or sensor doorbell solutions for your sales channel.
            </p>
          </div>
          <div className="inquiry-hero-visual">
            <Image
              src={localAsset("wireless-m017f15-front-cutout.webp")}
              alt="BELO wireless RF doorbell set"
              fill
              priority
            />
          </div>
        </section>

        <section className="inquiry-main" id="inquiry-form">
          <InquiryForm />

          <aside className="inquiry-side-panel">
            <div className="inquiry-side-card">
              <span>Send to</span>
              <strong>xinhui@allight.com</strong>
              <p>
                The form is prepared for direct email delivery through the website API route. Add your email service key
                before production launch.
              </p>
            </div>
            <div className="inquiry-checklist">
              <div>
                <CheckIcon />
                <strong>Required buyer fields</strong>
                <p>Name, email and international phone number are checked before submission.</p>
              </div>
              <div>
                <CheckIcon />
                <strong>Better RFQ context</strong>
                <p>Company, country, product needs and message help us quote faster.</p>
              </div>
              <div>
                <CheckIcon />
                <strong>Anti-spam ready</strong>
                <p>A hidden honeypot field is included. CAPTCHA can be added later if traffic quality requires it.</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
