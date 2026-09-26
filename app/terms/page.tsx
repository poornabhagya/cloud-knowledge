import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Ceylon Knowledge Services",
  description:
    "Standard terms of service, engagement parameters, intellectual property ownership, and legal governance for Ceylon Knowledge Services.",
};

export default function TermsPage() {
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
              Terms and Conditions
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-20 border-b border-[rgba(45,45,39,0.14)]">
        <div className="wrap max-w-[52rem]">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Terms and Conditions
          </h1>
          <p className="mt-5 text-[1.2rem] leading-[1.65] text-[var(--ink)]">
            Standard terms governing specialist execution engagements, advisory workstreams, and web services provided by Ceylon Knowledge Services (Pvt) Ltd.
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
              1. Engagement & Advisory Scope
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              Ceylon Knowledge Services operates as an execution and analytical support partner delivering corporate research, financial modelling, data analytics, and operational capabilities under designated Statement of Works (SOWs) or recurring retainer agreements.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              All analyses, financial forecasts, and benchmarking reports are engineered for commercial decision support based upon assumptions, historical figures, and parameters supplied by the client or publicly available intelligence. CKS does not provide certified statutory audit or formal legal advisory opinions.
            </p>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              2. Intellectual Property & Deliverable Ownership
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              In accordance with our core operating value of Complete Ownership:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[1.05rem] leading-[1.6]">
              <li>
                <strong>Client Deliverables:</strong> Upon receipt of full settlement, all custom models, presentation decks, bespoke code, and analytical dashboards built specifically for the client become 100% the intellectual property of the client.
              </li>
              <li>
                <strong>Background IP:</strong> CKS retains all rights in pre-existing analytical methodologies, calculation libraries, proprietary templates, and standard execution tooling.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              3. Confidentiality & Non-Disclosure
            </h2>
            <p className="text-[1.1rem] leading-[1.7]">
              Both parties agree to treat all business information, strategic plans, technical frameworks, customer data, and financial records as strictly confidential. CKS binds all participating analysts and contractors under formal non-disclosure covenants and strict security protocols.
            </p>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              While CKS applies rigorous senior-level verification across all workstreams, business decisions, investments, capital allocations, and commercial implementations remain the ultimate responsibility of the client&apos;s executive management.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              To the maximum extent permitted by applicable law, CKS shall not be held liable for indirect, consequential, or speculative commercial losses arising from reliance on model forecasts or market projections. Total cumulative liability under any engagement shall not exceed the fees paid under the applicable Statement of Work.
            </p>
          </div>

          <div>
            <h2 className="text-[1.5rem] font-semibold text-[var(--teal)] mb-4">
              5. Governing Law & Jurisdiction
            </h2>
            <p className="text-[1.1rem] leading-[1.7] mb-4">
              These terms and each individual Statement of Work are governed by and construed in accordance with the laws of Sri Lanka, without prejudice to bilateral arbitration agreements or specific jurisdictional choices negotiated with international enterprise clients.
            </p>
            <p className="text-[1.1rem] leading-[1.7]">
              For contract inquiries, Master Service Agreements (MSAs), or compliance governance, please contact:{" "}
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
