import Link from "next/link";
import type { Metadata } from "next";
import { basePath } from "@/data/caseStudies";

export const metadata: Metadata = {
  title:
    "Securing the Client Portal of a Global EdTech Intelligence Platform | Ceylon Knowledge Services",
  description:
    "How CKS conducted an independent penetration test, identified critical vulnerabilities, and secured the client portal of a leading global intelligence platform.",
};

export default function CybersecurityPortalCaseStudyPage() {
  return (
    <main suppressHydrationWarning className="bg-[#F9F7F2] min-h-screen text-[#1A1A18]">
      {/* Breadcrumb Navigation */}
      <nav
        className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)]"
        aria-label="Breadcrumb"
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex flex-wrap items-center gap-2 list-none m-0 p-0 text-sm">
            <li>
              <Link
                href="/"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link
                href="/case-studies"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Our Work
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link
                href="/case-studies"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Case Studies
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[#0B3B36] font-medium truncate max-w-[280px] sm:max-w-none">
              Global EdTech Intelligence Platform Security
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Container */}
      <article suppressHydrationWarning className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header>
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              Market Intelligence
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Sector:</span> Education
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Location:</span> US, UK, Australia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            Securing the Client Portal of a Global EdTech Intelligence Platform
          </h1>
        </header>

        {/* Hero Banner Graphic */}
        <img
          src={`${basePath}/images/case-studies/6/1.png`}
          alt="Securing the Client Portal of a Global EdTech Intelligence Platform"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            The client is one of the world&apos;s leading intelligence platforms, providing research, analytics and AI-powered tools to organisations across education, climate and health.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            As a data-driven business handling sensitive client information through a dedicated client portal, the security of that portal is mission critical. A breach would not only expose client data but would directly undermine the trust that sits at the core of their business model.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Before engaging Ancore, the client portal had not been formally stress-tested against external attack. The client wanted an independent, expert-led assessment of where vulnerabilities existed and how exposed they truly were.
          </p>

          {/* Results At A Glance (4 Cards Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                1
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Critical Issue</div>
              <div className="text-xs text-neutral-600 mt-1 leading-snug">
                Would have led to substantial financial losses if exploited
              </div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                4
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">High Risk Issues</div>
              <div className="text-xs text-neutral-600 mt-1 leading-snug">
                Each capable of being leveraged into critical vulnerabilities
              </div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                2
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Medium Risk Issues</div>
              <div className="text-xs text-neutral-600 mt-1 leading-snug">
                Identified and documented with remediation guidance
              </div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                3
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Medium/Low Risk Issues</div>
              <div className="text-xs text-neutral-600 mt-1 leading-snug">
                Surfaced and included in the full findings report
              </div>
            </div>
          </div>
        </section>

        {/* What We Did Section */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            What We Did
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
            Ancore was engaged to carry out a full penetration test of the client&apos;s portal through our Cybersecurity vertical.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  1
                </span>
                Scoping and Approach
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We began by aligning with the client&apos;s team on the scope of the engagement - defining the boundaries of the test, the systems in scope, and the methodology we would follow. This ensured the test was thorough, focused and relevant to their specific threat landscape.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  2
                </span>
                Penetration Testing
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Our team systematically tested the client portal for vulnerabilities across authentication, access controls, data exposure, session management and other attack vectors. Every potential weakness was documented, categorised by severity, and assessed for real-world exploitability.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  3
                </span>
                Detailed Findings Report
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Following the test, the client received a comprehensive written report covering every vulnerability identified - what it was, how it could be exploited, the business impact, and a clear remediation roadmap.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  4
                </span>
                Live Walkthrough Session
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                In addition to the report, we conducted a live walkthrough session with the client&apos;s team to answer questions, explain risk, and establish correct remediation order.
              </p>
            </div>
          </div>
        </section>

        {/* Business Impact Section & Structured Matrix Table */}
        <section className="mt-14" aria-label="Business Impact">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-6">
            Business Impact
          </h2>

          <div className="overflow-x-auto my-8 rounded-xl border border-neutral-300 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <tbody className="divide-y divide-neutral-200">
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Risk Averted
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The critical vulnerability identified would have exposed client data and created significant financial and reputational damage had it been discovered and exploited by a malicious actor.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Full Visibility
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Client received a complete picture of their security posture and a prioritised roadmap of exactly what to fix, how to fix it, and how to prevent recurrence.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Team Enablement
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The live walkthrough session ensured the internal team understood every finding in context, leaving them equipped to act immediately rather than working through a report in isolation.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Proactive Protection
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    By identifying and addressing vulnerabilities before they could be exploited, client team was able to strengthen their client portal without any disruption to their platform or their end users.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs italic text-neutral-500 mt-3">
            Client name withheld for confidentiality. Metrics verified internally. Available to discuss on request.
          </p>
        </section>

        {/* Bottom Call to Action Banner */}
        <section
          className="bg-[#0B3B36] rounded-2xl p-10 text-white text-center mt-16 shadow-lg"
          aria-label="Call to action"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--head)] mb-3 text-[var(--cream)]">
            The right fractional expertise can change everything.
          </h2>
          <p className="text-base md:text-lg text-[var(--cream)]/80 max-w-xl mx-auto mb-8">
            How many critical vulnerabilities is your organisation sitting on right now?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--cream)] text-[#0B3B36] hover:bg-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-150 shadow-sm hover:shadow group"
          >
            Let&apos;s get started
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </section>
      </article>
    </main>
  );
}
