import Link from "next/link";
import type { Metadata } from "next";
import { basePath } from "@/data/caseStudies";

export const metadata: Metadata = {
  title:
    "Financial Modelling for a Private Equity Education Rollup Across Africa | Ceylon Knowledge Services",
  description:
    "Developing a cohort-level bottom-up financial model, 3-stage DCF valuation with exit IRR scenarios, and an executive C-level rollup dashboard for an African educational buyout.",
};

export default function PEFinancialModellingCaseStudyPage() {
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
              Private Equity Education Rollup Financial Modelling
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
              Private Equity
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Sector:</span> Education
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Location:</span> Africa
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Client:</span> Alwin Education
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            Financial Modelling for a Private Equity Education Rollup Across Africa
          </h1>
        </header>

        {/* Hero Banner Graphic */}
        <img
          src={`${basePath}/images/case-studies/7/1.png`}
          alt="Financial Modelling for a Private Equity Education Rollup Across Africa"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            Alwin Education, A UK-based private equity firm with deep roots in the education sector was executing a rollup strategy across a portfolio of African education institutions. The goal was to acquire multiple assets, centralise core functions, and build a lean, scalable organisation capable of generating meaningful economies of scale.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            The client had a basic operational model in place but needed something significantly more sophisticated - one that could withstand external investor due diligence, model individual asset performance with precision, and serve as a living tool for management decision-making.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Ancore was engaged to deliver two core services: financial modelling and company valuation.
          </p>

          {/* Results At A Glance (3 Metric / Milestone Cards Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-6 text-center shadow-sm">
              <div className="text-lg md:text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                3-Stage DCF Model
              </div>
              <div className="text-sm text-neutral-700 mt-2 leading-snug">
                With implied exit multiples &amp; IRR calculations
              </div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-6 text-center shadow-sm">
              <div className="text-lg md:text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                Weekly Research Insights
              </div>
              <div className="text-sm text-neutral-700 mt-2 leading-snug">
                Ongoing intelligence delivered throughout
              </div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-6 text-center shadow-sm">
              <div className="text-lg md:text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                Investor-ready financial models
              </div>
              <div className="text-sm text-neutral-700 mt-2 leading-snug">
                Built to withstand full external due diligence
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
            The engagement was structured across two core service areas, working in close collaboration with the client throughout:
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  1
                </span>
                Deep Industry and Market Research
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Before building a single line of the model, our team conducted extensive research into the education sector across the specific geographies under consideration. This covered enrollment dynamics, tuition pricing benchmarks, student retention patterns, customer acquisition economics, and the regulatory landscape. This research formed the factual foundation of every assumption built into the model.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  2
                </span>
                Collaborative Model Design
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Following our research, we held a detailed scoping call with the client to align our findings with their strategic intent. We walked through how we proposed to structure the model, surfaced gaps between their current assumptions and on-the-ground market dynamics, and agreed on the architecture before any build began. This step alone led to meaningful adjustments to the client&apos;s business model.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  3
                </span>
                Cohort-Level Financial Model
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We built a detailed, bottom-up financial model that broke down performance by individual institutions and by student cohort. Key outputs included revenue by cohort, retention rates, customer acquisition costs, and contribution margins, all linked to centralised shared functions such as management, compliance, and technology. The model was built to be intuitive, with clearly labelled assumption inputs so the client could stress-test scenarios independently.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  4
                </span>
                Three-Stage DCF and Valuation
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We incorporated a full three-stage discounted cash flow model, including implied exit valuation multiples and IRR calculations across multiple scenarios. All three financial statements - P&amp;L, balance sheet, and cash flow were fully integrated and linked throughout.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  5
                </span>
                Weekly Progress Check-ins
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Throughout the engagement we held weekly calls with the client to share progress, present interim findings, and flag any new intelligence surfaced during our ongoing research. This iterative approach meant the model evolved in real time alongside the client&apos;s thinking rather than being delivered as a finished product at the end.
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
                    Investor-Ready Output
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The client received a model built to withstand the scrutiny of external investor due diligence - with clear assumptions, full financial statement integration, and documented methodology.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Independent Business Model Review
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Beyond the model itself, the client gained an independent, research-backed perspective on their business model. Several assumptions were revised as a direct result of our on-the-ground market findings.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    C-Level Dashboard
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Key metrics across all acquired assets were surfaced in a clean executive dashboard, allowing leadership to track performance at a glance without navigating complex spreadsheet infrastructure.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Flexible Assumptions
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The model was deliberately built for longevity with clearly labelled inputs that allow the client to adjust forecasts as market conditions or deal structures evolve.
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
            Hand finance off to experts, so you can build what matters.
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
