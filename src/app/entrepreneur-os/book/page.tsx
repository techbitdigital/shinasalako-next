import { buildMetadata } from "@/lib/metadata";
import EosBookClient from "@/components/eos/EosBookClient";

export const metadata = buildMetadata({
  title: "Buy the Book — The Entrepreneur Operating System",
  description:
    "The Entrepreneur Operating System — twenty-five chapters across five operating systems, with a companion workbook. By Shina Salako.",
  path: "/entrepreneur-os/book",
});

export default function EosBookPage() {
  return <EosBookClient />;
}
