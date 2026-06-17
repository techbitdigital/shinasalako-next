import EosNav from "@/components/layout/EosNav";
import EosFooter from "@/components/layout/EosFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "The Entrepreneur Operating System — Shina Salako",
    template: "%s | Entrepreneur OS — Shina Salako",
  },
  description:
    "Your business runs on five operating systems. One of them is leaking. Find out which one in 12 minutes. The book, the workshop, and the diagnostic by Shina Salako.",
};

export default function EosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EosNav />
      {children}
      <EosFooter />
    </>
  );
}
