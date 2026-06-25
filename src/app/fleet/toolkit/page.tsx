import { buildMetadata } from "@/lib/metadata";
import FleetToolkitClient from "@/components/fleet/FleetToolkitClient";

export const metadata = buildMetadata({
  title: "The Practitioner's Toolkit \u2014 19 templates from the playbook",
  description:
    "The 19 appendices from the book as a working toolkit \u2014 KPI dictionary, transporter scorecard, control-tower routine, ROI calculator, sample SOPs, the maturity workbook, the six-month practice plan, the extended Guinness case study, and more. Editable templates for cargo-owner and transporter operations.",
  path: "/fleet/toolkit",
});

export default function ToolkitPage() {
  return <FleetToolkitClient />;
}
