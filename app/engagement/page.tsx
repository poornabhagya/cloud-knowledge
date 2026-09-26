import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How you can work with us | Ceylon Knowledge Services",
  description:
    "Three flexible engagement models: Project-Based, Retainer, and Dedicated Team tailored to your operational rhythm.",
};

export default function EngagementPage() {
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
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link
                href="/about"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                About Us
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              How you can work with us
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            How you can work with us
          </h1>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Every organisation operates differently. Choose between a focused standalone project, flexible recurring retainer capacity, or an embedded dedicated team.
          </p>
        </div>
      </section>

      {/* Model 01: Projects */}
      <section className="py-24 border-t border-[rgba(45,45,39,0.08)] scroll-mt-4" id="projects">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal-muted)]">
              Model 01
            </span>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[14ch] mt-2 leading-[1.22]">
              Projects
            </h2>
            <br/>
            <p className="mt-4 text-[1.15rem] leading-[1.65] max-w-[26rem] text-[var(--ink)]">
              A single, focused engagement built around one specific challenge or deliverable. Defined scope, clear timeline, and clean handoff.
            </p>
            <div className="mt-8 p-5 border-l-[3px] border-[var(--teal)] bg-[rgba(4,61,59,0.06)] rounded-r-lg text-[0.95rem] text-[var(--ink)]">
              <b className="block font-[family-name:var(--head)] font-medium text-[var(--teal)] mb-1">
                Best for
              </b>
              Organisations with a specific question to answer or decision to support, without an ongoing need for research or analytics capacity.
            </div>
          </div>

          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 list-none p-0 m-0">
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it starts</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  We scope the commercial challenge together, establish inputs and constraints, and agree upfront on deliverable formats and milestones.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it runs</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  A single point of contact manages the delivery team from kickoff to completion, running structured weekly status touchpoints.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">What you get</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Clean, audit-ready deliverables (models, reports, dashboards) packaged for executive presentation and independent long-term use.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Commercials</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Fixed project fee tied strictly to the agreed deliverables and timeline, with no unexpected hourly overages.
                </p>
              </li>
              <li className="sm:col-span-2 border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Typical engagements</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Fundraising financial models, market entry regulatory mapping, M&A diligence support, total addressable market analysis, and web penetration testing.
                </p>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
            >
              Discuss a projects engagement
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12 12 4M6 4h6v6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Model 02: Retainer */}
      <section className="py-24 bg-white scroll-mt-4" id="retainer">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal-muted)]">
              Model 02
            </span>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[14ch] mt-2 leading-[1.22]">
              Retainer
            </h2>
            <br/>
            <p className="mt-4 text-[1.15rem] leading-[1.65] max-w-[26rem] text-[var(--ink)]">
              Ongoing research, finance, and operations support on a recurring basis with regular deliverables and capacity that adapts as priorities shift.
            </p>
            <div className="mt-8 p-5 border-l-[3px] border-[var(--teal)] bg-[rgba(4,61,59,0.06)] rounded-r-lg text-[0.95rem] text-[var(--ink)]">
              <b className="block font-[family-name:var(--head)] font-medium text-[var(--teal)] mb-1">
                Best for
              </b>
              Companies with steady analytical and operational needs where priorities change month to month and standalone scoping overhead slows execution down.
            </div>
          </div>

          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 list-none p-0 m-0">
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it starts</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  We baseline your recurring monthly needs, allocate dedicated analyst hours, and establish a rolling backlog of high-impact tasks.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it runs</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  A dedicated engagement lead coordinates workflow priorities on a weekly or bi-weekly sync, ensuring capacity is directed where it matters most.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">What you get</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Consistent delivery cadences (e.g., monthly budget variance updates, weekly KPI refreshes, competitor tracking briefs).
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Commercials</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Predictable monthly retainer fee corresponding to an agreed capacity tier, with flexible rollover options across project types.
                </p>
              </li>
              <li className="sm:col-span-2 border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Typical engagements</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Ongoing FP&A variance tracking, monthly executive dashboards, recurring sector market outlooks, continuous vendor risk monitoring, and marketing execution.
                </p>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
            >
              Discuss a retainer engagement
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12 12 4M6 4h6v6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Model 03: Dedicated Team */}
      <section className="py-24 scroll-mt-4" id="dedicated-team">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal-muted)]">
              Model 03
            </span>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[14ch] mt-2 leading-[1.22]">
              Dedicated Team
            </h2>
            <br/>
            <p className="mt-4 text-[1.15rem] leading-[1.65] max-w-[26rem] text-[var(--ink)]">
              An extended team model. Our specialists embed directly into your internal organization, joining your meetings, tools, and daily workflows.
            </p>
            <div className="mt-8 p-5 border-l-[3px] border-[var(--teal)] bg-[rgba(4,61,59,0.06)] rounded-r-lg text-[0.95rem] text-[var(--ink)]">
              <b className="block font-[family-name:var(--head)] font-medium text-[var(--teal)] mb-1">
                Best for
              </b>
              Companies requiring sustained, integrated analytical horsepower that functions like an in-house department without hiring or infrastructure overhead.
            </div>
          </div>

          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 list-none p-0 m-0">
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it starts</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  We match full-time professionals specifically vetted for your tech stack, domain, and time zone requirements, followed by an onboarding sprint.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">How it runs</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Analysts work exclusively on your accounts, joining your Slack/Teams channels, Jira/Asana boards, and standup meetings directly.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">What you get</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Deep contextual knowledge, institutional memory, and continuous real-time execution across all operational and strategic workstreams.
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Commercials</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Straightforward FTE monthly pricing tier per specialist, saving up to 60% compared to local Western or Gulf in-house hires.
                </p>
              </li>
              <li className="sm:col-span-2 border-t border-[rgba(45,45,39,0.14)] pt-4">
                <h3 className="text-[1.05rem] font-medium text-[var(--teal)]">Typical engagements</h3>
                <br/>
                <p className="mt-1.5 text-[1rem] text-[var(--grey-text)] leading-relaxed">
                  Full embedded FP&A support teams, dedicated business intelligence units, continuous 24/7 SOC monitoring rotations, and white-label consulting delivery pods.
                </p>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
            >
              Discuss a dedicated team engagement
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12 12 4M6 4h6v6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to structure the right engagement model?
            </h2>
            <br/>
            <p className="mt-4 text-[var(--teal-quiet)] max-w-[30rem] text-[1.1rem]">
              Talk with our specialists to scope your requirements and determine whether a project, retainer, or dedicated team fits best.
            </p>
          </div>
          <div className="justify-self-start md:justify-self-end flex items-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-[var(--cream)] text-[var(--teal)] hover:bg-white text-[1rem] px-7 py-4 rounded-full font-[family-name:var(--head)] font-medium inline-flex items-center gap-2.5 transition-colors no-underline group"
            >
              Partner with Us
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}