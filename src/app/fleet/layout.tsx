import FleetNav from "@/components/layout/FleetNav";
import FleetFooter from "@/components/layout/FleetFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Telematics & Fleet Management — Shina Salako",
    template: "%s | Fleet & Telematics — Shina Salako",
  },
  description:
    "The operating playbook for fleet leaders in emerging markets. A practitioner book by Shina Salako, MD/CEO of SALCOMMS KWIK XTRA LIMITED.",
};

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FleetNav />
      {children}
      <FleetFooter />
    </>
  );
}
