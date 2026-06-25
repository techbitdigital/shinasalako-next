import { buildMetadata } from "@/lib/metadata";
import EosHero from "@/components/eos/EosHero";
import EosThesis from "@/components/eos/EosThesis";
import FiveOperatingSystems from "@/components/eos/FiveOperatingSystems";
import EosBookTeaser from "@/components/eos/EosBookTeaser";
import EosWorkshopTeaser from "@/components/eos/EosWorkshopTeaser";
import EosDiagnosticPromo from "@/components/eos/EosDiagnosticPromo";
import EosAuthor from "@/components/eos/EosAuthor";
import EosFinalCta from "@/components/eos/EosFinalCta";

export const metadata = buildMetadata({
  title: "The Entrepreneur Operating System",
  description:
    "Your business runs on five operating systems. One of them is leaking. Find out which one in 12 minutes. The book, the workshop, and the diagnostic by Shina Salako.",
  path: "/entrepreneur-os",
});

export default function EosPage() {
  return (
    <main>
      <EosHero />
      <EosThesis />
      <FiveOperatingSystems />
      <EosBookTeaser />
      <EosWorkshopTeaser />
      <EosDiagnosticPromo />
      <EosAuthor />
      <EosFinalCta />
    </main>
  );
}
