import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Digital Audit | Earthly Technologies",
  description:
    "Strategic Digital Growth Proposal prepared exclusively for Dr. Ankit Kochhar by Earthly Technologies.",
};

export default function ExecutiveAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
