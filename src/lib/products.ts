/**
 * Maps a Paystack metadata product key to the R2 file key for that product.
 * Update file keys once PDFs are uploaded to the R2 bucket.
 */
export const PRODUCT_FILE_MAP: Record<string, string> = {
  // Fleet book
  "Fleet Book Paperback": "", // physical — no PDF delivery
  "Fleet Book eBook": "fleet/telematics-fleet-management-ebook.pdf",

  // EOS book
  "EOS Book Paperback": "", // physical — no PDF delivery
  "EOS Book eBook": "eos/entrepreneur-operating-system-ebook.pdf",

  // Joseph Protocol
  "The Joseph Protocol": "joseph/joseph-protocol-book.pdf",
  "The Complete Bundle": "joseph/joseph-protocol-bundle.zip",
  "eBook": "joseph/joseph-protocol-ebook.pdf",

  // Toolkit
  "The Toolkit.": "toolkit/practitioner-toolkit.zip",
  "The Book and the Toolkit.": "toolkit/practitioner-toolkit-bundle.zip",
};

/**
 * Returns true if this product requires digital delivery (has a file key).
 */
export function requiresDigitalDelivery(product: string): boolean {
  return !!PRODUCT_FILE_MAP[product];
}
