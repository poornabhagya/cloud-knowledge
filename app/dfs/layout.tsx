import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dubai FinTech Summit 2026 | Ceylon Knowledge Services",
  description:
    "Dedicated analytics, modelling and compliance teams for fintechs, run from Colombo.",
};

export default function DfsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
