import { buildMetadata } from "@/lib/metadata";
import FleetAuditClient from "@/components/fleet/FleetAuditClient";

export const metadata = buildMetadata({
  title: "The 15-Minute Fleet Reporting Audit — Free",
  description:
    "A free printable diagnostic that maps the reports your fleet operation produces today, the reports it should produce, and the gap between them. Fifteen minutes, with a 90-day plan at the end.",
  path: "/fleet/audit",
});

export default function AuditPage() {
  return <FleetAuditClient />;
}
