import type { Metadata } from "next";

const SITE_NAME = "Shina Salako";
const SITE_URL = "https://shinasalako.com";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string; // e.g. "/fleet/book"
  image?: string; // optional OG image path, defaults to a site-wide image
}

/**
 * Builds Metadata for a route with correct, page-specific OpenGraph and
 * Twitter tags. Guarantees:
 *  - og:url / canonical always matches the real page path (never the home page)
 *  - title never duplicates "Shina Salako" (checks before appending the suffix)
 *  - raw "&" is used (never "&amp;") since Next.js escapes once automatically
 */
export function buildMetadata({ title, description, path, image }: BuildMetadataArgs): Metadata {
  // Defensive: strip any accidental double-encoding and normalise raw "&"
  const cleanTitle = title.replace(/&amp;/g, "&");
  const cleanDescription = description.replace(/&amp;/g, "&");

  const fullTitle = cleanTitle.includes(SITE_NAME) ? cleanTitle : `${cleanTitle} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/images/og-default.jpg`;

  return {
    title: cleanTitle, // template in layout.tsx appends "| Shina Salako" only if absent — see layout title.template
    description: cleanDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: cleanDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_NG",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: cleanDescription,
      images: [ogImage],
    },
  };
}
