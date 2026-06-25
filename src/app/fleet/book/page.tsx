import { buildMetadata } from "@/lib/metadata";
import FleetBookClient from "@/components/fleet/FleetBookClient";

export const metadata = buildMetadata({
  title: "Buy the Book \u2014 Telematics & Fleet Management",
  description:
    "Telematics & Fleet Management \u2014 the operating playbook for fleet leaders in emerging markets. Buy the paperback or eBook.",
  path: "/fleet/book",
});

export default function FleetBookPage() {
  return <FleetBookClient />;
}
