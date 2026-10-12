import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quote Request",
  description:
    "Request a quote for custom furniture manufacturing, contract production or OEM/ODM services from Barkajaya Indonesia.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}