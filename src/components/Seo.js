import { useEffect } from "react";

export const SITE_URL = "https://justonclick.in";
export const SITE_NAME = "Justonclick";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data) {
  let el = document.getElementById("page-jsonld");
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Per-page title, description, canonical URL, Open Graph / Twitter tags and JSON-LD.
 * Updates the tags already in public/index.html, so the prerendered HTML carries them too.
 */
function Seo({ title, description, path = "/", image, type = "website", published, jsonLd, noindex }) {
  useEffect(() => {
    const url = SITE_URL + path;
    const img = image ? SITE_URL + image : DEFAULT_IMAGE;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
    setMeta("property", "article:published_time", published);

    setJsonLd(jsonLd);
  }, [title, description, path, image, type, published, jsonLd, noindex]);

  return null;
}

export default Seo;
