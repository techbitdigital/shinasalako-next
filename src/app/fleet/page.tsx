import { buildMetadata } from "@/lib/metadata";
import FleetHero from "@/components/fleet/FleetHero";
import DepotScene from "@/components/fleet/DepotScene";
import WhoItsFor from "@/components/fleet/WhoItsFor";
import WhatsInside from "@/components/fleet/WhatsInside";
import FleetQuotes from "@/components/fleet/FleetQuotes";
import FirstLookPromo from "@/components/fleet/FirstLookPromo";
import FleetAuthor from "@/components/fleet/FleetAuthor";
import OperatingModel from "@/components/fleet/OperatingModel";
import AssessmentPromo from "@/components/fleet/AssessmentPromo";
import FleetServices from "@/components/fleet/FleetServices";
import FleetFinalCta from "@/components/fleet/FleetFinalCta";

export const metadata = buildMetadata({
  title: "Telematics & Fleet Management",
  description:
    "The operating playbook for fleet leaders in emerging markets. Built on the seven-layer Fleet Operating System and twelve years embedded at Guinness Nigeria. By Shina Salako.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <main>
      <FleetHero />
      <DepotScene />
      <WhoItsFor />
      <WhatsInside />
      <FleetQuotes />
      <FirstLookPromo />
      <FleetAuthor />
      <OperatingModel />
      <AssessmentPromo />
      <FleetServices />
      <FleetFinalCta />
    </main>
  );
}
