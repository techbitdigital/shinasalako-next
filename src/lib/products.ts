/**
 * Maps a Paystack metadata product key to the R2 file key for that product.
 * File keys must match exactly what is in the R2 bucket (case-sensitive).
 */
export const PRODUCT_FILE_MAP: Record<string, string> = {
  // Fleet book
  "Fleet Book Paperback": "", // physical — no PDF delivery
  "Fleet Book eBook": "fleet/telematics-fleet-management-ebook/Telematics & Fleet Management -Operating Playbook for fleet Leaders.pdf",

  // EOS book
  "EOS Book Paperback": "", // physical — no PDF delivery
  "EOS Book eBook": "eos/entrepreneur-operating-system-ebook/THE ENTREPRENEUR OPERATING SYSTEM .pdf",

  // Joseph Protocol
  "The Joseph Protocol": "joseph/joseph-protocol-book/THE JOSEPH PROTOCOL.pdf",
  "The Complete Bundle": "joseph/joseph-protocol-book/THE JOSEPH PROTOCOL.pdf",
  "eBook": "joseph/joseph-protocol-book/THE JOSEPH PROTOCOL.pdf",

  // Toolkit
  "The Toolkit.": "toolkit/practitioner-toolkit.zip/SALCOMMS_Practitioners_Toolkit.zip",
  "The Book and the Toolkit.": "toolkit/practitioner-toolkit.zip/SALCOMMS_Practitioners_Toolkit.zip",
};

/**
 * Returns true if this product requires digital delivery (has a file key).
 */
export function requiresDigitalDelivery(product: string): boolean {
  return !!PRODUCT_FILE_MAP[product];
}
