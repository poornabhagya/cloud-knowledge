import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ceylon Knowledge Services",
  description:
    "B2B specialist execution partner for global enterprises. Discover our mission, approach, and core values.",
};

export default function AboutPage() {
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
              About Us
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Empowering your growth through specialist execution
          </h1>
          <br/>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Ceylon Knowledge Services works alongside leadership teams to take on high-stakes research, financial modelling, analytics, and operational tasks.
          </p>
        </div>
      </section>

      {/* 1. What Drives Us (Three Ruled Columns) */}
      <section className="py-24" id="what-drives-us">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.22]">
              What drives us
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0 m-0">
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">Mission statement</h3>
              <br/>
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                To serve as a high-trust, specialist execution backbone for growth organisations globally, bridging analytical and strategic capacity gaps without internal hiring overhead.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">The problem we solve</h3>
              <br/>
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                Most companies sit on critical decisions, backlog initiatives, or raw data without the dedicated internal bandwidth to build defensible models, research, or execution systems.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">How we help</h3>
              <br/>
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                We embed specialised talent from Sri Lanka’s top-tier finance and tech workforce into your workflows, delivering consistent, audit-ready outputs from day one.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Why We Do This (Heading & Pull Quote Left, Body Right) */}
      <section className="py-24 bg-white" id="why-we-do-this">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              Why we do this
            </h2>
            <blockquote className="mt-8 pl-6 border-l-[3px] border-[var(--teal)] font-[family-name:var(--head)] font-medium text-[1.35rem] leading-[1.4] text-[var(--teal)]">
              <p>
                "Specialist knowledge execution shouldn't require expanding permanent payroll before you have proven the return."
              </p>
              <footer className="mt-4 font-[family-name:var(--body)] font-normal text-[0.95rem] text-[var(--grey-text)]">
                Founder, Ceylon Knowledge Services
              </footer>
            </blockquote>
          </div>
          <div className="space-y-5 text-[1.1rem] leading-[1.6] text-[var(--ink)]">
            <p>
              CKS was founded after observing global enterprises consistently struggle to resource high-intensity, short-to-medium-term strategic workstreams. Either teams overburdened internal staff, or engaged high-cost advisory firms whose recommendations stopped at slide decks.
            </p>
            <br/>
            <p>
              We established a model focused squarely on specialist delivery. By matching experienced Sri Lankan professionals with international standards across corporate finance, data analytics, market research, and operations, we provide active capacity that does the work.
            </p>
            <p>
              Today, CKS acts as an agile operational arm for companies across the UK, Australia, New Zealand, and beyond—supporting funding rounds, commercial reorganisations, and ongoing analytics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How We Work (Five Steps with Counter) */}
      <section className="py-24" id="how-we-work">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              How we work
            </h2>
            <br/>
            <p className="mt-4 max-w-[34rem] text-[var(--ink)]">
              A structured engagement cadence that ensures complete alignment, transparency, and reliable execution.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 list-none p-0 m-0 [counter-reset:step]">
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                01
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Scoping</h3>
              <br/>
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Define the core commercial question, data inputs, deliverables, and timeline.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                02
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Team matching</h3>
              <br/>
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Assign specialized analysts whose background directly maps to your requirements.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                03
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Integration</h3>
              <br/>
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Connect directly into your communications, tools, and project management cadence.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                04
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Rigorous review</h3>
              <br/>
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Every model, report, and dashboard passes internal senior quality validation.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                05
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Handoff & scale</h3>
              <br/>
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Deliver clean, editable files built for your team to use and maintain independently.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Core Values (Four Teal Tiles) */}
      <section className="py-24 bg-white" id="core-values">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              Core values
            </h2>
            <br/>
            <p className="mt-4 max-w-[34rem] text-[var(--ink)]">
              The operational principles that guide how we engage, build, and deliver.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Rigour over speed</h3>
                <br/>
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  We verify source data, stress-test calculations, and document assumptions so models hold up under scrutiny.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Defensible transparency</h3>
                <br/>
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  No black-box calculations. Outputs are traceable, transparent, and structured for stakeholders to understand.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Seamless continuity</h3>
                <br/>
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  We adopt your rhythms, documentation standards, and communication tools to function as true team members.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Complete ownership</h3>
                <br/>
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  All work, code, models, and intellectual property remain 100% yours, cleanly packaged upon delivery.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to extend your execution capacity?
            </h2>
            <br/>
            <p className="mt-4 text-[var(--teal-quiet)] max-w-[30rem] text-[1.1rem]">
              Talk with our specialists to scope the exact research, model, or analytics engagement you need.
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