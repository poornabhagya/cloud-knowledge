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
          <div>
            <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
              How to partner with us
            </h1>
            <br />
            <h2 className="text-[1.5rem] text-[var(--ink)] font-medium mt-2">
              Three Ways to Work With CKS
            </h2>
          </div>
          <p className="text-[1.15rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Every organisation needs something different; it can be a single sharp answer, ongoing support, or a team that's simply part of yours. Whether you need a focused project, continuous support, or an embedded team, we structure the engagement around how you actually need to work, not a one-size-fits-all contract.
          </p>
        </div>
      </section>

      {/* Model 01: Project-Based */}
      <section className="py-24 border-t border-[rgba(45,45,39,0.08)] scroll-mt-4" id="projects">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal-muted)]">
              Model 01
            </span>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[14ch] mt-2 leading-[1.22]">
              Project-Based
            </h2>
            <br/>
            <p className="mt-4 text-[1.15rem] leading-[1.65] max-w-[26rem] text-[var(--ink)]">
              A single, focused engagement built around one specific challenge or deliverable. Defined scope, clear timeline, clean handoff.
            </p>
            <div className="mt-8 p-6 border-l-[3px] border-[var(--teal)] bg-[rgba(4,61,59,0.06)] rounded-r-lg text-[1rem] text-[var(--ink)] leading-relaxed">
              <b className="block font-[family-name:var(--head)] font-semibold text-[var(--teal)] mb-2 text-[1.1rem]">
                Best for:
              </b>
              Organisations with a specific question to answer or decision to support, without an ongoing need for research or analytics capacity.
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-[rgba(45,45,39,0.1)] rounded-[16px]">
            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-5">What's included:</h3>
            <br/>
            <ul className="list-none p-0 m-0 space-y-4 text-[1.05rem] text-[var(--ink)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                A defined scope and timeline agreed upfront, so there's no ambiguity about what's delivered and when
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                A single point of contact managing the engagement from kickoff to delivery
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Clean, structured deliverables built to be used and presented, not just handed over
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                A fixed cost tied to the defined scope, agreed before work begins
              </li>
            </ul>
            <br/>
            <br/>

            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mt-10 mb-4">How it works:</h3>
            <br/>
            <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
              We scope the challenge together, agree on deliverables and timeline, then execute against that plan with regular check-ins until delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Model 02: Retainer */}
      <section className="py-24 bg-[rgba(4,61,59,0.02)] border-t border-[rgba(45,45,39,0.08)] scroll-mt-4" id="retainer">
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
              Ongoing research and operations support on a recurring basis with regular deliverables, a flexible scope that can shift as your priorities do, and a partnership that deepens over time rather than resetting with every new project.
            </p>
            <div className="mt-8 p-6 border-l-[3px] border-[var(--teal)] bg-white shadow-sm rounded-r-lg text-[1rem] text-[var(--ink)] leading-relaxed">
              <b className="block font-[family-name:var(--head)] font-semibold text-[var(--teal)] mb-2 text-[1.1rem]">
                Best for:
              </b>
              Organisations with a continuous need for research, analysis, or reporting where priorities shift month to month and a single fixed-scope project doesn't fit.
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-[rgba(45,45,39,0.1)] rounded-[16px]">
            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-5">What's included:</h3>
            <br/>
            <ul className="list-none p-0 m-0 space-y-4 text-[1.05rem] text-[var(--ink)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                A recurring block of capacity you can direct across evolving priorities
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Regular deliverables on a cadence that fits how your business operates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Flexible scope that can shift between projects as needs change, without renegotiating a new contract each time
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                A dedicated point of contact who builds context on your business over time
              </li>
            </ul>
            <br/>
            <br/>

            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mt-10 mb-4">How it works:</h3>
            <br/>
            <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
              We agree on a recurring capacity and cadence, then work through a prioritized queue of deliverables each period, adjusting scope as your priorities evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Model 03: Dedicated Team */}
      <section className="py-24 border-t border-[rgba(45,45,39,0.08)] scroll-mt-4" id="dedicated-team">
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
              An extended team model. Our analysts work as part of your organisation, embedded in your workflows and priorities, with the deep continuity that comes from working alongside your team over time rather than in and out on separate projects.
            </p>
            <div className="mt-8 p-6 border-l-[3px] border-[var(--teal)] bg-[rgba(4,61,59,0.06)] rounded-r-lg text-[1rem] text-[var(--ink)] leading-relaxed">
              <b className="block font-[family-name:var(--head)] font-semibold text-[var(--teal)] mb-2 text-[1.1rem]">
                Best for:
              </b>
              Organisations that need sustained analytical or research capacity functioning like an internal team, without the overhead of hiring and building that capability from scratch.
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-[rgba(45,45,39,0.1)] rounded-[16px]">
            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-5">What's included:</h3>
            <br/>
            <ul className="list-none p-0 m-0 space-y-4 text-[1.05rem] text-[var(--ink)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Dedicated analysts working consistently with your team, not rotating between unrelated projects
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Deep familiarity with your business, data, and priorities that builds over time
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Direct integration into your existing workflows, tools, and meeting cadence
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--teal)] mt-1">•</span>
                Flexible capacity that can scale up or down as your needs change
              </li>
            </ul>
            <br/>
            <br/>

            <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mt-10 mb-4">How it works:</h3>
            <br/>
            <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
              We embed dedicated analysts into your team's workflow, with regular integration into your meetings and priorities, functioning as an extension of your organisation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-24 bg-white border-t border-[rgba(45,45,39,0.08)]">
        <div className="wrap">
          <div className="text-center max-w-[40rem] mx-auto mb-14">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              How to Choose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white border border-[rgba(45,45,39,0.14)] p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[1.15rem] font-semibold text-[var(--teal)] mb-3 leading-[1.4]">
                Have one specific question or deliverable?
              </h3>
              <br/>
              <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
                <span className="font-medium text-[var(--teal-muted)]">Project-Based</span> fits it has clean scope, clear timeline, defined cost.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-[rgba(45,45,39,0.14)] p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[1.15rem] font-semibold text-[var(--teal)] mb-3 leading-[1.4]">
                Need ongoing support but priorities shift often?
              </h3>
              <br/>
              <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
                <span className="font-medium text-[var(--teal-muted)]">Retainer</span> gives you flexible, recurring capacity without a new contract each time.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-[rgba(45,45,39,0.14)] p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[1.15rem] font-semibold text-[var(--teal)] mb-3 leading-[1.4]">
                Need sustained capacity that feels like part of your team?
              </h3>
              <br/>
              <p className="text-[1.05rem] text-[var(--ink)] leading-relaxed">
  <span className="font-medium text-[var(--teal-muted)]">Project-Based</span> fits it has clean scope...
</p>
            </div>
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