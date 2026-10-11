import astraLogo from "../../components/assets/clients/astra-dental-logo.png";
import astraSite from "../../components/assets/clients/astra-dental-site.jpg";
import lcsLogo from "../../components/assets/clients/lcs-logo.svg";
import lcsSite from "../../components/assets/clients/lcs-site.jpg";

/**
 * Delivered client projects. A testimonial is shown only when `approved` is true, i.e. the
 * client has confirmed the wording; testimonial sections stay hidden until at least one is.
 */
export const CLIENTS = [
  {
    id: "astra-dental",
    name: "Astra Dental Clinic",
    logo: astraLogo,
    screenshot: astraSite,
    url: "https://astradental.co.in/",
    domain: "astradental.co.in",
    industry: "Healthcare — Dental Clinic",
    summary:
      "Website for a cosmetic and restorative dental clinic in Chembur, Mumbai — treatments, gallery, appointment booking, and one-tap WhatsApp consultation.",
    outcome: "Patients can book an appointment or start a WhatsApp consultation straight from the site",
    testimonial: {
      quote:
        "We wanted our website to reflect the same care patients experience in the clinic, and Justonclick delivered exactly that. Booking an appointment or reaching us on WhatsApp is now effortless for patients, and the team was responsive and thoughtful throughout the project.",
      author: "Dr Amit Pawar",
      role: "Founder",
      approved: true,
    },
  },
  {
    id: "local-credit-solutions",
    name: "Local Credit Solutions",
    logo: lcsLogo,
    screenshot: lcsSite,
    url: "https://lcsolution.in/",
    domain: "lcsolution.in",
    industry: "Financial Services — KYC Verification & Fraud Prevention",
    summary:
      "Website for a digital KYC verification and fraud-prevention provider, structured to earn trust before a visitor shares any personal or financial data.",
    outcome: "A trust-first web presence explaining KYC and fraud-prevention services in plain language",
    testimonial: {
      quote:
        "In KYC and fraud prevention, credibility is everything. Justonclick took the time to understand our services and presented them clearly and professionally, giving us a website we confidently share with every new client.",
      author: "Santosh",
      role: "Founder",
      approved: true,
    },
  },
];

export const TESTIMONIALS = CLIENTS.filter((c) => c.testimonial.approved && c.testimonial.quote);
