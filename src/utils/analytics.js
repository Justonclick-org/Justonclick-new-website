// GTM dataLayer helpers.
// GTM (GTM-MB4C9W57) is loaded in public/index.html; these only push Custom Events
// that GTM tags translate into GA4 events. Never pass form field values or other PII.

const WEBSITE = "main_website";

export const CTA_LOCATION = {
  HEADER: "header",
  HERO: "hero",
  FOOTER: "footer",
  NAVIGATION: "navigation",
  CONTENT_SECTION: "content_section",
  MOBILE_MENU: "mobile_menu",
};

export const pushAnalyticsEvent = (eventName, parameters = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters, website: WEBSITE });
};

/** type: "contact" | "demo" */
export const trackCtaClick = (type, ctaName, ctaLocation) =>
  pushAnalyticsEvent(type === "demo" ? "demo_cta_click" : "contact_cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });

export const trackFormStart = (formName) =>
  pushAnalyticsEvent("form_start", { form_name: formName });

/** leadType: "contact" | "demo" */
export const trackLeadSuccess = (leadType, formName) =>
  pushAnalyticsEvent("lead_form_success", { lead_type: leadType, form_name: formName });
