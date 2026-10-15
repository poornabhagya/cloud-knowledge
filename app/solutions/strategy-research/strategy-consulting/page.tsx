import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Consulting | Ceylon Knowledge Services",
  description:
    "Rigorous strategy work, under your brand or ours. CKS provides market sizing, commercial due diligence, go to market strategy, competitor analysis and feasibility studies.",
};

const whatCksDoes = [
  {
    title: "Size your total addressable market",
    desc: "estimate the full revenue opportunity, then narrow it to the share that can realistically be served and captured",
  },
  {
    title: "Commercial due diligence",
    desc: "assess a target’s market, customers, competitive position and growth assumptions before an investment or acquisition",
  },
  {
    title: "Go to market strategy",
    desc: "define target segments, positioning, pricing, channels and the sequence for entering a market or launching an offer",
  },
  {
    title: "Competitor analysis",
    desc: "map who you compete with, how they position, price and perform, and where the gaps are",
  },
  {
    title: "Feasibility studies",
    desc: "test whether a project, venture or expansion stands up commercially, operationally and financially before resources are committed",
  },
];

const benefitsFirms = [
  {
    title: "Scale delivery without hiring",
    desc: "take on more engagements, or larger ones, without adding permanent headcount",
  },
  {
    title: "Your brand, your client relationship",
    desc: "work is delivered in your format where required and under your name, and we stay behind the scenes",
  },
  {
    title: "Capacity that fits the engagement",
    desc: "a team assembled around what the project needs, from a single workstream to the full analysis",
  },
];

const benefitsOrganisations = [
  {
    title: "Know the size of the prize",
    desc: "understand the real opportunity and your realistic share of it before you invest",
  },
  {
    title: "Test the deal before you sign",
    desc: "validate the growth story and assumptions behind a valuation, not just the headline numbers",
  },
  {
    title: "Strategy capability without the overhead",
    desc: "senior analytical support for a specific decision, without building a strategy team in house",
  },
];

const howItWorks = [
  {
    step: "01",
    shortTitle: "Scope",
    title: "Scope the engagement",
    desc: "we agree the questions to be answered, the services required and, for firms, which workstreams we take on",
  },
  {
    step: "02",
    shortTitle: "Research",
    title: "Research and analyse",
    desc: "we gather market, customer, competitor and financial data and test it against the decision",
  },
  {
    step: "03",
    shortTitle: "Build",
    title: "Build the recommendation",
    desc: "we turn the findings into a clear answer, with the evidence and numbers behind it",
  },
  {
    step: "04",
    shortTitle: "Deliver",
    title: "Deliver",
    desc: "for firms, we hand over finished work in your format, ready for your client; for organisations, we present the findings directly to your team or board",
  },
];

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "Primarily professional services firms, such as consultancies and advisory firms, that need additional research and analysis capacity on client engagements. We also work directly with SMEs and corporates across sectors.",
  },
  {
    question: "Do you work white label?",
    answer:
      "Yes. For professional services firms, we deliver work in your templates and branding, and the client relationship remains entirely yours.",
  },
  {
    question: "Can you take on part of an engagement rather than the whole thing?",
    answer:
      "Yes. We can deliver a single workstream, such as the market sizing within a wider due diligence, or the full analysis.",
  },
  {
    question: "Can services be combined?",
    answer:
      "Yes, and they often are. Market sizing and competitor analysis typically feed directly into a go to market strategy or feasibility study.",
  },
  {
    question: "What do we receive at the end?",
    answer:
      "A written report, a presentation or both, with supporting models such as market sizing or financial projections where the engagement requires them.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "It depends on scope. A focused market sizing exercise can be completed much faster than a full feasibility study or due diligence engagement. We confirm timelines at the scoping stage.",
  },
];

export default function StrategyConsultingPage() {
  return (
    <main>
      {/* Breadcrumb Navigation */}
      <nav
        className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)] bg-white"
        aria-label="Breadcrumb"
      >
        <div className="wrap">
          <ol className="flex gap-2 list-none m-0 py-4 p-0 items-center flex-wrap">
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
                href="/solutions"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Solutions
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link
                href="/solutions/strategy-research"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Strategy and research
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Strategy Consulting
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="py-20 md:py-28 bg-[var(--teal)] text-[var(--cream)] text-center flex flex-col items-center">
        <div className="wrap flex flex-col items-center">
          <h1 className="text-[clamp(2.3rem,4.5vw,3.6rem)] leading-[1.2] font-semibold text-white max-w-[28ch] mx-auto">
            Rigorous strategy work, under your brand or ours
          </h1>
          <br />
          <p className="text-[1.15rem] leading-[1.7] text-[#D1E0DF] max-w-[42rem] mx-auto mt-2">
            Whether you are a professional services firm that needs extra delivery capacity, or an organisation weighing a major strategic move, CKS provides the market sizing, due diligence and competitive analysis that sound decisions are built on.
          </p>
          <br />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="bg-[#5CB39F] text-[var(--ink)] hover:bg-[#4ea08d] text-[1rem] px-8 py-3.5 rounded-md font-[family-name:var(--head)] font-medium inline-flex items-center gap-2 transition-colors no-underline"
            >
              Book a scoping call
            </Link>
            <Link
              href="/contact"
              className="border border-[#5CB39F] text-white hover:bg-[rgba(92,179,159,0.1)] text-[1rem] px-8 py-3.5 rounded-md font-[family-name:var(--head)] font-medium inline-flex items-center gap-2 transition-colors no-underline"
            >
              Request a data readiness check
            </Link>
          </div>
        </div>
      </section>

      {/* Section After Hero Header */}
      <section className="py-24 bg-white border-b border-[rgba(45,45,39,0.08)]">
        <div className="wrap text-center max-w-[50rem] mx-auto">
          <span className="text-[0.85rem] font-bold text-[#5CB39F] uppercase tracking-wider block mb-4">
            STRATEGY CONSULTING
          </span>
          <br />
          <h2 className="text-[clamp(2rem,3vw,2.6rem)] text-[var(--teal)] leading-[1.3] font-semibold mb-6">
            Extra capacity for firms, clear answers for decision makers
          </h2>
          <br />
          <div className="text-[1.15rem] leading-[1.7] text-[var(--ink)] space-y-5">
            <p>
              CKS Strategy Consulting works in two ways. For consultancies and advisory firms, we act as a white label extension of your team, delivering analysis on your engagements, in your format, under your name. For SMEs and corporates, we work with you directly to answer the questions that come before a major commitment: how big is the opportunity, is the business case sound, who are we up against, and how do we win.
            </p>
            <p>
              Either way, each engagement is scoped around the decision at hand and combines market data, financial analysis and competitive research into clear, evidence based recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* What CKS Does for You Section (Card List) */}
      <section className="py-24 bg-[#F8F7F3]" aria-label="What CKS Does for You">
        <div className="wrap">
          <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">
            What CKS Does for You
          </h2>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {whatCksDoes.map((item, idx) => (
              <li
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[12px] p-8 shadow-sm flex flex-col justify-start transition-transform duration-150 hover:-translate-y-0.5"
              >
                <span
                  className="w-10 h-10 rounded-[8px] bg-[rgba(4,61,59,0.08)] grid place-items-center mb-5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <h3 className="text-[1.15rem] font-medium text-[var(--teal)] mb-3">
                  {item.title}
                </h3>
                <br />
                <p className="text-[1rem] text-[var(--grey-text)] leading-[1.65]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Benefit You Get from CKS Section (Two-Column Comparison Cards) */}
      <section className="py-24 bg-white" aria-label="The Benefit You Get from CKS">
        <div className="wrap">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold">
              The Benefit You Get from CKS
            </h2>
            <br />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Column 1: For professional services firms */}
            <div className="bg-[#F8F7F3] rounded-[16px] p-8 md:p-10 border border-[#E5E7EB] flex flex-col">
              <div className="flex items-center gap-3 pb-5 mb-8 border-b border-[rgba(4,61,59,0.12)]">
                <span
                  className="w-10 h-10 rounded-[8px] bg-white grid place-items-center shadow-xs flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                <h3 className="text-[1.3rem] font-semibold text-[var(--teal)]">
                  For professional services firms
                </h3>
              </div>
              <ul className="space-y-5 list-none p-0 m-0 flex-1 flex flex-col justify-between">
                {benefitsFirms.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white rounded-[12px] p-6 border border-[#E5E7EB]/80 shadow-xs"
                  >
                    <h4 className="text-[1.12rem] font-medium text-[var(--teal)] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-[0.98rem] text-[var(--grey-text)] leading-[1.65]">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: For organisations making a strategic decision */}
            <div className="bg-[#F8F7F3] rounded-[16px] p-8 md:p-10 border border-[#E5E7EB] flex flex-col">
              <div className="flex items-center gap-3 pb-5 mb-8 border-b border-[rgba(4,61,59,0.12)]">
                <span
                  className="w-10 h-10 rounded-[8px] bg-white grid place-items-center shadow-xs flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h3 className="text-[1.3rem] font-semibold text-[var(--teal)]">
                  For organisations making a strategic decision
                </h3>
              </div>
              <ul className="space-y-5 list-none p-0 m-0 flex-1 flex flex-col justify-between">
                {benefitsOrganisations.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white rounded-[12px] p-6 border border-[#E5E7EB]/80 shadow-xs"
                  >
                    <h4 className="text-[1.12rem] font-medium text-[var(--teal)] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-[0.98rem] text-[var(--grey-text)] leading-[1.65]">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section (Numbered Steps 1-4) */}
      <section className="py-24 bg-[#F8F7F3]" aria-label="How It Works">
        <div className="wrap">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold">
              HOW IT WORKS
            </h2>
            <br />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 relative shadow-sm"
              >
                <span className="text-[0.85rem] font-bold text-[#5CB39F] mb-2 block uppercase tracking-wider">
                  {item.step} - {item.shortTitle}
                </span>
                <br />
                <h3 className="text-[1.1rem] font-medium text-[var(--teal)] mb-2">
                  {item.title}
                </h3>
                <br />
                <p className="text-[0.95rem] text-[var(--ink)] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-24 bg-white" aria-label="Frequently asked questions">
        <div className="wrap max-w-[50rem] mx-auto">
          <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">
            Frequently asked questions
          </h2>
          <br />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#F8F7F3] rounded-[8px] p-6 cursor-pointer [&::-webkit-details-marker]:hidden"
              >
                <summary className="font-medium text-[1.05rem] text-[var(--teal)] flex justify-between items-center outline-none">
                  {faq.question}
                  <span className="text-[#5CB39F] transition-transform duration-300 group-open:rotate-45 ml-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[0.95rem] text-[var(--grey-text)] leading-relaxed pt-4 border-t border-[rgba(45,45,39,0.05)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 md:py-24 bg-[#0B3B36]" aria-label="Call to Action">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-[1.28] tracking-[-0.015em] text-left">
              Need extra strategy capacity, or a clear answer on your next move?
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="rounded-full bg-white text-[#0B3B36] font-medium px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors no-underline whitespace-nowrap group"
            >
              <span>Talk to an expert</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
