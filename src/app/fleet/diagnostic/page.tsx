import { redirect } from "next/navigation";

export default function FleetDiagnosticRedirect() {
  redirect("/fleet/assessment");
}
