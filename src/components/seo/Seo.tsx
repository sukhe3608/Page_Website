import { useEffect } from "react";
import { site } from "@/config/site";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  schema?: Record<string, unknown>[];
  noindex?: boolean;
}

function setMeta(attributes: Record<string, string>, content: string, created: Element[]) {
  const el = document.createElement("meta");
  for (const [key, value] of Object.entries(attributes)) el.setAttribute(key, value);
  el.setAttribute("content", content);
  document.head.appendChild(el);
  created.push(el);
}

function setLink(rel: string, href: string, created: Element[]) {
  const el = document.createElement("link");
  el.setAttribute("rel", rel);
  el.setAttribute("href", href);
  document.head.appendChild(el);
  created.push(el);
}

function setSchema(schemas: Record<string, unknown>[], created: Element[]) {
  for (const schema of schemas) {
    const el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    created.push(el);
  }
}

/**
 * Sets page-level metadata (title, description, canonical, Open Graph, Twitter)
 * and injects JSON-LD structured data. Compatible with react-snap prerendering.
 */
export default function Seo({ title, description, path = "/", type = "website", image, schema, noindex = false }: SeoProps) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const url = `${site.url}${path}`;
  const ogImage = image ?? `${site.url}/og-default.svg`;
  const descriptionText = description ?? site.description;
  const schemaKey = JSON.stringify(schema ?? null);

  useEffect(() => {
    const created: Element[] = [];
    document.title = fullTitle;

    setMeta({ name: "description" }, descriptionText, created);
    setMeta({ name: "robots" }, noindex ? "noindex, nofollow" : "index, follow", created);
    setMeta({ property: "og:type" }, type, created);
    setMeta({ property: "og:site_name" }, site.name, created);
    setMeta({ property: "og:title" }, fullTitle, created);
    setMeta({ property: "og:description" }, descriptionText, created);
    setMeta({ property: "og:url" }, url, created);
    setMeta({ property: "og:image" }, ogImage, created);
    setMeta({ name: "twitter:card" }, "summary_large_image", created);
    setMeta({ name: "twitter:title" }, fullTitle, created);
    setMeta({ name: "twitter:description" }, descriptionText, created);
    setMeta({ name: "twitter:image" }, ogImage, created);
    setLink("canonical", url, created);

    if (schema) setSchema(schema, created);

    return () => created.forEach((el) => el.remove());
  }, [fullTitle, descriptionText, url, ogImage, type, schemaKey, schema, noindex]);

  return null;
}