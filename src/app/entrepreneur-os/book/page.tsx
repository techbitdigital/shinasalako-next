import { buildMetadata } from "@/lib/metadata";
import EosBookClient from "@/components/eos/EosBookClient";

export const metadata = buildMetadata({
  title: "Buy the Book \u2014 The Entrepreneur Operating System",
  description:
    "The Entrepreneur Operating System \u2014 eighteen years of building, distilled into twenty-five chapters and five named frameworks. Buy the paperback or eBook.",
  path: "/entrepreneur-os/book",
});

export default function EosBookPage() {
  return <EosBookClient />;
}
