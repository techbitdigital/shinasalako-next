import { buildMetadata } from "@/lib/metadata";
import GlobalBar from "@/components/global/GlobalBar";
import HubHero from "@/components/hub/HubHero";
import ThreeBooks from "@/components/hub/ThreeBooks";
import DiagnosticsStrip from "@/components/hub/DiagnosticsStrip";
import WorkWith from "@/components/hub/WorkWith";
import HubAuthor from "@/components/hub/HubAuthor";
import HubFinalCta from "@/components/hub/HubFinalCta";
import HubFooter from "@/components/hub/HubFooter";

export const metadata = buildMetadata({
  title: "Shina Salako — Books, Programmes & Diagnostics for Operators",
  description:
    "Three books, three operating systems: for founders, for fleet leaders, and for the season you are building through. Each with a free diagnostic that tells you where you actually stand.",
  path: "/",
});

export default function HubPage() {
  return (
    <main>
      <GlobalBar />
      <HubHero />
      <ThreeBooks />
      <DiagnosticsStrip />
      <WorkWith />
      <HubAuthor />
      <HubFinalCta />
      <HubFooter />
    </main>
  );
}
