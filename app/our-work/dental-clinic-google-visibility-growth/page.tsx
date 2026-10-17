import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How a Dental Clinic in Australia Grew Their Google Visibility by 193% in 30 Days | Ceylon Knowledge Services",
  description:
    "Delivering a 400% increase in contact page conversions, +193% growth in impressions, and primary AI Overview citations for Aminya St Dental in Brisbane within 30 days.",
};

export default function DentalClinicGrowthCaseStudyPage() {
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
              Dental Clinic Google Visibility Growth
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
              <span className="text-neutral-500 mr-1.5">Industry:</span> Healthcare
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Duration:</span> 1 month
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Client:</span> Aminya St Dental
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            How a Dental Clinic in Australia Grew Their Google Visibility by 193% in 30 Days
          </h1>
        </header>

        {/* Hero Banner Image */}
        <img
          src="/images/case-studies/3/1.png"
          alt="Dental Clinic 30-Day Visibility Growth"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            Aminya St dental is a local dentist based in Mansfield, Brisbane Australia who was looking to grow their online presence to attract more local patients through organic search. Despite having over 40 years of experience offering quality dental care they had untapped potential in search visibility.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Ancore Partners was engaged to deliver three things: provide AI search Optimization and website optimization, SEO and content writing.
          </p>

          {/* Results At A Glance (4 Metric Cards Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-5 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                +57%
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Increase in CTR to the website
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-5 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                AI Cited
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Became a trusted source cited by Google AI Overview
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-5 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                +193%
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Increased growth in impressions
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-5 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                +400%
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Increase in clicks to the contact-us page
              </div>
            </div>
          </div>
        </section>

        {/* Contact Page Performance & Data Table */}
        <section className="mt-12" aria-label="Contact Page Performance">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Contact Page Performance &amp; Conversion Growth
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            More people found and clicked on the dental clinic&apos;s contact page on Google. Compared to the month of April, clicks went up by 400%, meaning that 5x more potential patients reached out. The page is also showing up more in search results and is ranking higher, which is a positive for the clinic&apos;s online growth.
          </p>

          {/* Responsive Data Table */}
          <div className="overflow-x-auto my-6 rounded-xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B3B36] text-white">
                  <th className="p-3.5 font-semibold">Metric</th>
                  <th className="p-3.5 font-semibold">Apr 13 – May 13 (before)</th>
                  <th className="p-3.5 font-semibold">May 13 – Jun 13 (after)</th>
                  <th className="p-3.5 font-semibold">% Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-800">
                <tr>
                  <td className="p-3.5 font-medium">Clicks</td>
                  <td className="p-3.5">4</td>
                  <td className="p-3.5">20</td>
                  <td className="p-3.5 font-bold text-emerald-700">+400%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium">Impressions</td>
                  <td className="p-3.5">238</td>
                  <td className="p-3.5">469</td>
                  <td className="p-3.5 font-bold text-emerald-700">+97%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium">CTR</td>
                  <td className="p-3.5">1.7%</td>
                  <td className="p-3.5">4.3%</td>
                  <td className="p-3.5 font-bold text-emerald-700">+153%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium">Avg. Position</td>
                  <td className="p-3.5">5.3</td>
                  <td className="p-3.5">4.1</td>
                  <td className="p-3.5 font-bold text-emerald-700">+23%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Screenshot 2 */}
          <figure className="my-6">
            <img
              src="/images/case-studies/3/2.png"
              alt="Contact us page CTR analytics"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              Contact us page CTR improvement for Aminya St Dental.
            </figcaption>
          </figure>
        </section>

        {/* What We Did Section (3 Pillars) */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            What We Did
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
            Ancore was engaged to increase the visibility of Aminya St Dental under our website optimization, SEO and AEO product. The work was structured across three phases:
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  1
                </span>
                SEO Fundamentals Audit &amp; Fixes
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Comprehensive on-page and technical SEO overhaul: corrected meta titles, descriptions, heading structure (H1/H2/H3 hierarchy), canonical tags, and fixed crawl &amp; indexing errors across key service URLs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  2
                </span>
                Keyword Research
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Mapped out patient search intents and targeted high-intent local search terms commonly used by Australian dental patients, prioritizing treatment-specific, emergency, and localized suburb queries.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  3
                </span>
                Content Optimization
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Published SEO-optimised informative blog content structured specifically for search engine crawlers and patient conversion, backed by strong contextual internal linking to primary treatment pages.
              </p>
            </div>
          </div>
        </section>

        {/* Business Impact Section & Matrix Table */}
        <section className="mt-14" aria-label="Business Impact">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-6">
            Business Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
                Cited by Google AI overview
              </h3>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                Articles written by Ancore Partners for Aminya St dental was cited by Google&apos;s AI Overview for the search query for one of the most competitive local keywords.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
                Impressions for the website
              </h3>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                Over 5,370 impressions were generated, meaning they appeared in search results more than 187% in a single month.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
                Improved Click Through Rates
              </h3>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                Click-through rate improved to 4.3%, well above the typical healthcare industry average, showing that the optimised meta content was compelling searchers to click.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
                Ranking for a broader set of keywords
              </h3>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                The site began ranking for a broader set of keywords, expanding its overall search footprint.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Evidence Showcase */}
        <section className="mt-14 space-y-12" aria-label="Visual Evidence Showcase">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-6">
            Visual Evidence &amp; Analytics Showcase
          </h2>

          {/* Subheading 01 */}
          <div>
            <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
              01. Organic Search Impressions Comparison (Before vs After)
            </h3>
            <figure className="my-6">
              <img
                src="/images/case-studies/3/3.png"
                alt="Organic Search Impressions Comparison"
                className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                loading="eager"
              />
              <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                Comparison of growth in CTR and impressions for the month of April to May (before) and May to June (After)
              </figcaption>
            </figure>
          </div>

          {/* Subheading 02 */}
          <div>
            <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
              02. Steady Organic Growth After SEO Implementation
            </h3>
            <figure className="my-6">
              <img
                src="/images/case-studies/3/4.png"
                alt="Growth in impressions"
                className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                loading="eager"
              />
              <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                Growth in impressions
              </figcaption>
            </figure>
          </div>

          {/* Subheading 03 */}
          <div>
            <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2">
              03. AI Search Citation &amp; Brand Visibility Achievement (in &lt;2 weeks)
            </h3>
            <figure className="my-6">
              <img
                src="/images/case-studies/3/5.png"
                alt="AI Overview Citation"
                className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                loading="eager"
              />
              <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                An example screenshot how Aminya St Dental is being cited by the AI overview
              </figcaption>
            </figure>

            <figure className="my-6">
              <img
                src="/images/case-studies/3/6.png"
                alt="Competitive ranking keywords"
                className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                loading="eager"
              />
              <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                How Aminya St Dental is now ranking for high-intent and competitive keywords like &lsquo;Gum disease treatment in Brisbane&rsquo; and &lsquo;Highly rated dental clinics in Brisbane&rsquo;
              </figcaption>
            </figure>
          </div>
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
            Ready to see results like these?
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
