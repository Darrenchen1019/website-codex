import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  productNeeds?: string;
  message?: string;
  website?: string;
};

const fallbackRecipientEmail = "xinhui@allight.com.cn";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,25}$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: InquiryPayload) {
  const errors: Record<string, string> = {};
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);

  if (clean(payload.website)) {
    errors.website = "Spam submission blocked.";
  }

  if (!name) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(phone)) {
    errors.phone = "Please enter a valid international phone number.";
  }

  return errors;
}

function formatEmailText(payload: InquiryPayload) {
  return [
    "New BELO B2B Inquiry",
    "",
    `Name: ${clean(payload.name)}`,
    `Email: ${clean(payload.email)}`,
    `Phone: ${clean(payload.phone)}`,
    `Company: ${clean(payload.company) || "-"}`,
    `Country / Region: ${clean(payload.country) || "-"}`,
    `Product Needs: ${clean(payload.productNeeds) || "-"}`,
    "",
    "Message:",
    clean(payload.message) || "-"
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        message: "Please complete all required fields before submitting.",
        errors
      },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL || "BELO Website <onboarding@resend.dev>";
  const recipientEmail = process.env.INQUIRY_TO_EMAIL || fallbackRecipientEmail;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured yet. Add RESEND_API_KEY, INQUIRY_FROM_EMAIL and INQUIRY_TO_EMAIL to enable delivery."
      },
      { status: 503 }
    );
  }

  const emailText = formatEmailText(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipientEmail,
      reply_to: clean(payload.email),
      subject: `New BELO B2B Inquiry - ${clean(payload.name)}`,
      text: emailText
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message: `Unable to send your inquiry right now. Please email ${recipientEmail} directly.`
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Thank you. Your inquiry has been sent to BELO successfully."
  });
}
