import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Ceylon Knowledge Services",
  description:
    "Information on how Ceylon Knowledge Services collects, processes, and protects client data in accordance with international standards.",
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Breadcrumb Navigation */}
      <nav
        className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)]"
        aria-label="Breadcrumb"
      >
        <div className="wrap">
          <ol className="flex gap-2 list-none m-0 py-4 p-0">
            <li>
              <Link
                href="/"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Privacy Notice
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-20 border-b border-[rgba(45,45,39,0.14)]">
        <div className="wrap max-w-[52rem]">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Privacy Notice
          </h1>
          <p className="mt-5 text-[1.2rem] leading-[1.65] text-[var(--ink)]">
            How Ceylon Knowledge Services (Pvt) Ltd handles commercial intelligence, proprietary client records, and personal information across our engagements.
          </p>
          <p className="mt-4 text-[0.9rem] text-[var(--grey-text)]">
            Last updated: 14 September 2026
          </p>
        </div>
      </section>

      {/* Legal Prose Content */}
      <section className="py-16 md:py-24">
        <div className="wrap max-w-[52rem] space-y-12 text-[var(--ink)]">
          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              1. Overview and Scope
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              Ceylon Knowledge Services (&quot;CKS&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides specialized execution across research, financial modelling, data analytics, and operational capabilities to growth-focused enterprises globally.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              This Privacy Notice explains the principles and security measures governing how we collect, store, process, and safeguard information received through our website (ceylonknowledge.com), partner inquiries, and active client engagements.
            </p>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              2. Data We Collect
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              We collect information strictly necessary to scope, administer, and execute professional service engagements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[1.05rem] leading-[1.6]">
              <li>
                <strong>Inquiry & Contact Details:</strong> Name, professional email, organisation, job title, country/region, and message descriptions submitted via web forms.
              </li>
              <li>
                <strong>Commercial & Operational Inputs:</strong> Financial reports, business data sets, internal metrics, and strategic documentation shared under non-disclosure agreements (NDAs).
              </li>
              <li>
                <strong>Technical Telemetry:</strong> Minimal server logs, IP addresses, and anonymized browser session analytics to verify site security and performance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              3. Strict Confidentiality & GDPR Alignment
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              We recognise that our work involves high-stakes commercial information, funding figures, and proprietary operational workflows. All client data is treated under strict bilateral confidentiality covenants.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              Where engagements involve European Union or UK subjects, CKS adheres to the standards set out under the EU General Data Protection Regulation (GDPR) and UK GDPR, processing data under legitimate commercial interest and contractual necessity.
            </p>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              4. Data Handling & Security Protocols
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              Our infrastructure enforces multi-tier security standards designed by our senior cybersecurity practitioners:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[1.05rem] leading-[1.6]">
              <li>End-to-end encryption in transit (TLS 1.3) and at rest (AES-256).</li>
              <li>Role-based access controls isolating client project data to assigned engagement analysts only.</li>
              <li>Zero retention of client raw datasets beyond the agreed archival or post-engagement handover window.</li>
              <li>No third-party data selling, commercial licensing, or unauthorized secondary aggregation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              5. Your Rights and Contact Information
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              You maintain the right to inspect, correct, or request deletion of any personal information or business contact records held in our systems.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              For all data protection inquiries or to request confirmation of data deletion post-engagement, contact our governance team at:{" "}
              <a
                href="mailto:hello@ceylonknowledge.com"
                className="text-[var(--teal)] underline underline-offset-4 font-medium"
              >
                hello@ceylonknowledge.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
