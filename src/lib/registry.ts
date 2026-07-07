/**
 * Server-side product registry.
 * Prices are NEVER trusted from the client.
 * The server always looks up the price from this registry.
 */

export interface Product {
  id: string;
  name: string;
  amountNaira: number; // in naira
  digital: boolean;
}

export const PRODUCTS: Record<string, Product> = {
  // Fleet book
  "fleet-book-paperback": {
    id: "fleet-book-paperback",
    name: "Fleet Book Paperback",
    amountNaira: 25000,
    digital: false,
  },
  "fleet-book-ebook": {
    id: "fleet-book-ebook",
    name: "Fleet Book eBook",
    amountNaira: 20000,
    digital: true,
  },

  // EOS book
  "eos-book-paperback": {
    id: "eos-book-paperback",
    name: "EOS Book Paperback",
    amountNaira: 25000,
    digital: false,
  },
  "eos-book-ebook": {
    id: "eos-book-ebook",
    name: "EOS Book eBook",
    amountNaira: 20000,
    digital: true,
  },

  // Joseph Protocol
  "joseph-book": {
    id: "joseph-book",
    name: "The Joseph Protocol",
    amountNaira: 15000,
    digital: true,
  },
  "joseph-bundle": {
    id: "joseph-bundle",
    name: "The Complete Bundle",
    amountNaira: 25000,
    digital: true,
  },
  "joseph-ebook": {
    id: "joseph-ebook",
    name: "eBook",
    amountNaira: 10000,
    digital: true,
  },

  // Toolkit
  "toolkit-only": {
    id: "toolkit-only",
    name: "The Toolkit.",
    amountNaira: 95000,
    digital: true,
  },
  "toolkit-bundle": {
    id: "toolkit-bundle",
    name: "The Book and the Toolkit.",
    amountNaira: 110000,
    digital: true,
  },

  // Workshop
  "eos-workshop-full": {
    id: "eos-workshop-full",
    name: "EOS Workshop — Full Payment",
    amountNaira: 185000,
    digital: false,
  },
  "eos-workshop-instalment": {
    id: "eos-workshop-instalment",
    name: "EOS Workshop — First Instalment",
    amountNaira: 97500,
    digital: false,
  },
};

export function getProduct(productId: string): Product | null {
  return PRODUCTS[productId] || null;
}
