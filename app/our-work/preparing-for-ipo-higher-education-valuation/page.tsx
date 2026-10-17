import Link from "next/link";
import type { Metadata } from "next";
import { basePath } from "@/data/caseStudies";

export const metadata: Metadata = {
  title:
    "Preparing for IPO: Valuing a Higher Education Data and Analytics Company | Ceylon Knowledge Services",
  description:
    "How CKS delivered an indicative pre-IPO company valuation, dual peer-group multiple segmentation, and multi-scenario early investor return models.",
};

export default function HigherEducationValuationCaseStudyPage() {
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
              Higher Education Data &amp; Analytics Valuation
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
              <span className="text-neutral-500 mr-1.5">Industry:</span> Higher Education
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Duration:</span> 1 Month
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Location:</span> UK
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            Preparing for IPO: Valuing a Higher Education Data and Analytics Company
          </h1>
        </header>

        {/* Hero Banner Image */}
        <img
          src={`${basePath}/images/case-studies/5/1.png`}
          alt="Preparing for IPO: Valuing a Higher Education Data and Analytics Company"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            The client is a data analytics and information services business focused on the higher education sector. With an IPO under consideration, the leadership team engaged Ancore to deliver two things: an indicative valuation of the company, and a clear calculation of the total return generated for early investors since their initial investment.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            The engagement required Ancore to evaluate the client&apos;s financial profile, benchmark it against a carefully selected peer group, and produce a detailed valuation alongside a comprehensive investor return analysis.
          </p>

          {/* Results At A Glance (4 Numbered Metric Cards Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                1
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Company</div>
              <div className="text-xs text-neutral-600 mt-0.5">Valuation Delivered</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                2
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Peer Groups</div>
              <div className="text-xs text-neutral-600 mt-0.5">Defined &amp; Evaluated</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                3
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Investor Return</div>
              <div className="text-xs text-neutral-600 mt-0.5">Scenarios Modelled</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                5
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Deliverables</div>
              <div className="text-xs text-neutral-600 mt-0.5">Provided to Client</div>
            </div>
          </div>
        </section>

        {/* What We Did Section */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            What We Did
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
            Ancore was engaged to deliver a full company valuation and investor return analysis through our Corporate Finance vertical. The engagement was structured across several workstreams:
          </p>

          <div className="space-y-6">
            {/* Workstream 1 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-3">
                Financial Review &amp; Data Gathering
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                The client shared their financial data, key operating metrics, and an initial set of peers they benchmark themselves against. Ancore reviewed the financial data in detail and identified additional information required to complete the investor return analysis, including investment dates, shareholding structures, purchase prices, and dividends paid to early investors.
              </p>
            </div>

            {/* Workstream 2 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-3">
                Peer Group Evaluation &amp; Segmentation
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                Ancore evaluated the client-provided peer set to determine whether each company was an appropriate competitor. Following this review, peers were segmented into two distinct groups:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-neutral-700 mb-4 ml-1">
                <li>
                  <strong className="text-[#0B3B36]">Education Sector Peers</strong> — companies with primary exposure to the higher education market.
                </li>
                <li>
                  <strong className="text-[#0B3B36]">Data Analytics &amp; Information Services Peers</strong> — companies with a broader data and information services profile.
                </li>
              </ul>
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 text-sm text-neutral-700 space-y-1.5">
                <p className="font-semibold text-[#0B3B36]">Rationale breakdown:</p>
                <p>&bull; Each group carried materially different median valuation multiples.</p>
                <p>&bull; The two groups exhibited different levels of business scalability.</p>
                <p>&bull; Margin profiles differed meaningfully between the groups.</p>
              </div>
              <p className="text-base text-neutral-700 leading-relaxed mt-4">
                By separating the peer universe in this way, Ancore was able to identify which group the client&apos;s business model was more closely aligned with - and use that as the basis for selecting appropriate valuation multiples.
              </p>
            </div>

            {/* Workstream 3 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-3">
                Relative Valuation &amp; Multiple Selection
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                Based on the peer analysis and the client&apos;s specific business characteristics, including scalability and margin profile - Ancore determined that the client should trade at a premium to one peer group and at a discount to the other. The capital structure of the business was also assessed to evaluate whether there was scope for optimisation that could support a further expansion in the valuation multiple.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                The company was valued primarily on a P/E basis, with implied EV/EBITDA multiples detailed alongside. The valuation output included a clear rationale for the selected multiples and specific guidance on which business factors, if improved, would justify a higher multiple.
              </p>
            </div>

            {/* Workstream 4 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-3">
                Investor Return Calculation
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-3">
                To calculate total returns for early investors, Ancore factored in the original investment value, all dividends received over the holding period, and the implied current value of each investor&apos;s stake based on the overall company valuation.
              </p>
              <p className="text-sm font-semibold text-[#0B3B36] mb-2">
                Returns were annualised and benchmarked against two comparators:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-base text-neutral-700 ml-1">
                <li>
                  <strong className="text-[#0B3B36]">Equity market returns</strong>, to assess performance relative to a public market alternative.
                </li>
                <li>
                  <strong className="text-[#0B3B36]">Government bond returns</strong>, to assess performance relative to a risk-free, liquid alternative.
                </li>
              </ul>
            </div>

            {/* Workstream 5: Deliverables */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-3">
                Deliverables
              </h3>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0B3B36] font-bold text-lg leading-none mt-0.5">&bull;</span>
                  <span>
                    <strong className="text-[#0B3B36]">Google Sheets Model:</strong> A structured workbook containing the full comparables table, relative valuation analysis, and investor return calculations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0B3B36] font-bold text-lg leading-none mt-0.5">&bull;</span>
                  <span>
                    <strong className="text-[#0B3B36]">Leadership Report:</strong> A written report summarising the valuation, the rationale behind the multiples selected, investor returns, and key business comparisons formatted for review by senior leadership.
                  </span>
                </li>
              </ul>
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
                    Indicative Valuation
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The client received a rigorous, data-driven valuation of the company as it stands today - giving the leadership team a clear, independent view of business value ahead of any IPO process.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Peer Benchmarking
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Peers were evaluated and segmented into two distinct groups - education-sector players and data analytics &amp; information services businesses, enabling a more precise and defensible multiple selection.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Valuation Uplift Roadmap
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The engagement identified specific operational and structural improvement points which, if executed, would justify an expansion in the valuation multiple - giving the leadership team a practical roadmap to increase value.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Investor Return Analysis
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Early investor returns were calculated in full, factoring in investment value, dividends received, and implied stake value. Returns were annualised and benchmarked against public equity markets and government bonds.
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
            Do you know what your company is worth before you go to market?
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
