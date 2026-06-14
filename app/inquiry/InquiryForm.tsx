"use client";

import { useMemo, useState } from "react";

type InquiryFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productNeeds: string;
  message: string;
  website: string;
};

type InquiryFormErrors = Partial<Record<keyof InquiryFormValues, string>>;

type SubmitState =
  | { status: "idle"; message: string }
  | { status: "submitting"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialValues: InquiryFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productNeeds: "",
  message: "",
  website: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,25}$/;

function validate(values: InquiryFormValues): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid international phone number.";
  }

  return errors;
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h13m-5-5 5 5-5 5" />
    </svg>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <span className="field-error" id={id} role="alert">
      {message}
    </span>
  );
}

export default function InquiryForm() {
  const [values, setValues] = useState<InquiryFormValues>(initialValues);
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "Required fields are marked with an asterisk."
  });

  const requiredMissing = useMemo(() => Object.keys(validate(values)).length > 0, [values]);

  function updateField(field: keyof InquiryFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        status: "error",
        message: "Please complete all required fields before submitting."
      });
      return;
    }

    setSubmitState({ status: "submitting", message: "Sending your inquiry..." });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const result = (await response.json()) as { message?: string; errors?: InquiryFormErrors };

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }
        throw new Error(result.message || "Unable to send your inquiry. Please try again.");
      }

      setValues(initialValues);
      setErrors({});
      setSubmitState({
        status: "success",
        message: result.message || "Thank you. Your inquiry has been submitted successfully."
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error instanceof Error ? error.message : "Unable to send your inquiry. Please try again."
      });
    }
  }

  return (
    <form className="inquiry-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>B2B inquiry form</span>
        <h2>Tell us what doorbell range you need.</h2>
        <p>Our export team will review your market, product requirements and OEM details before quotation.</p>
      </div>

      <label>
        <span>
          Name <em>*</em>
        </span>
        <input
          name="name"
          autoComplete="name"
          value={values.name}
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby="name-error"
          onChange={(event) => updateField("name", event.target.value)}
        />
        <FieldError id="name-error" message={errors.name} />
      </label>

      <label>
        <span>
          Email <em>*</em>
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          placeholder="name@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby="email-error"
          onChange={(event) => updateField("email", event.target.value)}
        />
        <FieldError id="email-error" message={errors.email} />
      </label>

      <label>
        <span>
          Phone <em>*</em>
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          placeholder="+1 555 0188 2048"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby="phone-error"
          onChange={(event) => updateField("phone", event.target.value)}
        />
        <FieldError id="phone-error" message={errors.phone} />
      </label>

      <label>
        <span>Company Name</span>
        <input
          name="company"
          autoComplete="organization"
          value={values.company}
          placeholder="Your company or brand name"
          onChange={(event) => updateField("company", event.target.value)}
        />
      </label>

      <label>
        <span>Country / Region</span>
        <input
          name="country"
          autoComplete="country-name"
          value={values.country}
          placeholder="United States, Germany, UAE..."
          onChange={(event) => updateField("country", event.target.value)}
        />
      </label>

      <label>
        <span>Product Needs</span>
        <select
          name="productNeeds"
          value={values.productNeeds}
          onChange={(event) => updateField("productNeeds", event.target.value)}
        >
          <option value="">Select a doorbell range</option>
          <option value="Wireless RF doorbells">Wireless RF doorbells</option>
          <option value="Wired mechanical doorbells">Wired mechanical doorbells</option>
          <option value="Self-powered doorbells">Self-powered doorbells</option>
          <option value="Motion sensor doorbells">Motion sensor doorbells</option>
          <option value="OEM / ODM private label project">OEM / ODM private label project</option>
          <option value="Mixed catalog sourcing">Mixed catalog sourcing</option>
        </select>
      </label>

      <label className="inquiry-message-field">
        <span>Message</span>
        <textarea
          name="message"
          value={values.message}
          placeholder="Tell us your quantity, target market, voltage, plug type, logo, packaging, certification or sample requirements."
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>

      <label className="inquiry-honeypot" aria-hidden="true">
        Website
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      <div className={`form-status form-status-${submitState.status}`} role="status" aria-live="polite">
        {submitState.message}
      </div>

      <button type="submit" disabled={submitState.status === "submitting"}>
        {submitState.status === "submitting" ? "Sending..." : requiredMissing ? "Complete Required Fields" : "Submit Inquiry"}
        <ArrowIcon />
      </button>
    </form>
  );
}
