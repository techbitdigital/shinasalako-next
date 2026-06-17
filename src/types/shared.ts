// Shared types used across all three sub-sites

export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface CredentialBadge {
  label: string;
  value: string;
}

export interface BookCard {
  slug: string;
  label: string;
  title: string;
  who: string;
  description: string;
  href: string;
  accentColor: string;
}

export interface DiagnosticLink {
  title: string;
  description: string;
  href: string;
}

export interface ServiceCard {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface StatBlock {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}
