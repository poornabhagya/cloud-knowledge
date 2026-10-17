import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How we grew AI and Search Engine Visibility for a Dental Clinic in Australia | Ceylon Knowledge Services",
  description:
    "Discover how CKS grew organic and AI search visibility for Aminya St Dental in Brisbane, securing Page 1 rankings and ChatGPT citations with +193% impressions.",
};

export default function DentalClinicCaseStudyPage() {
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
              Dental Clinic AI &amp; Search Visibility
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Container */}
      <article suppressHydrationWarning className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header>
          {/* Metadata Badges / Pills */}
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
            How we grew AI and Search Engine Visibility for a Dental Clinic in Australia
          </h1>
        </header>

        {/* Hero Banner (1.png) */}
        <img
          src="/images/case-studies/1/1.png"
          alt="Dental Clinic Case Study Hero"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-6"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Aminya St Dental is a general and family dental clinic serving the community of
            Mansfield, Brisbane for over 40 years. Despite the years of expertise their online
            visibility was limited. The website was not ranking for many of the high-demand
            keywords potential patients were searching for, and it had no visibility in AI search.
            The goal was to increase organic search visibility, secure top positions for the
            clinic&apos;s most valuable keywords, and build authority that would enable AI engines to
            reference and cite the practice.
          </p>

          {/* Key Metrics Highlight Grid (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                +193%
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Impressions Surge
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                +57%
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Organic Clicks Growth
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                Page 1 &amp; AI
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Citing within short period
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mt-12" aria-label="Strategy and Execution">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Target keywords reached page 1 of Google within a short period of the new content going live
          </h2>

          {/* Target Keywords Badges */}
          <div className="mb-6">
            <p className="text-sm font-medium text-neutral-600 mb-2.5">
              High-priority keywords targeted across Mansfield and Brisbane:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Dentist Mansfield",
                "Mansfield dental",
                "Dentist near me",
                "Dentist Brisbane",
                "Emergency Dental",
              ].map((kw) => (
                <span
                  key={kw}
                  className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full bg-[#0B3B36]/10 text-[#0B3B36] border border-[#0B3B36]/20"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <ul className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-[#0B3B36]">
                Search Trend &amp; Patient (Target Audience) Behaviour Analysis:
              </strong>{" "}
              Analyzed how potential patients were searching for dental services across local
              suburbs and metropolitan Brisbane, identifying real question patterns, treatment
              priorities, and seasonal appointment fluctuations.
            </li>
          </ul>

          {/* SERP Proof 1 (2.png) */}
          <figure className="my-6">
            <img
              src="/images/case-studies/1/2.png"
              alt="An example of Aminya St Dental ranking for the keyword 'gum disease treatment Brisbane'"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              An example of Aminya St Dental ranking for the keyword &lsquo;gum disease treatment Brisbane&rsquo;
            </figcaption>
          </figure>

          {/* SERP Proof 2 (3.png) */}
          <figure className="my-6">
            <img
              src="/images/case-studies/1/3.png"
              alt="An example of how Aminya St Dental is ranking for high intent keywords"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              An example of how Aminya St Dental is ranking for high intent keywords
            </figcaption>
          </figure>

          <ul className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed list-disc list-inside mt-6">
            <li>
              <strong className="text-[#0B3B36]">
                Competitor Search Visibility Analysis:
              </strong>{" "}
              Reviewed competing dental practice websites across Queensland to uncover high-value
              keyword gaps, evaluate backlink structures, and map out underserved search territory.
            </li>
            <li>
              <strong className="text-[#0B3B36]">
                Keyword Opportunity Identification:
              </strong>{" "}
              Identified the most valuable target keywords based on active search demand, commercial
              intent, and realistic ranking difficulty.
            </li>
          </ul>

          {/* Keyword Strategy & Trend Graph 1 (4.png) */}
          <div className="my-6 w-full">
            <img
              src="/images/case-studies/1/4.png"
              alt="Search Trend & Keyword Opportunity Analysis"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
          </div>

          <ul className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed list-disc list-inside mt-6">
            <li>
              <strong className="text-[#0B3B36]">
                Search Intent Mapping &amp; Strategic Target Keyword Selection:
              </strong>{" "}
              Systematically grouped queries into treatment-specific services (e.g. gum disease,
              root canals, wisdom teeth), immediate local service terms (dentist near me, dentist
              Mansfield), and informational patient queries, forming a clear structural hierarchy for
              site optimization.
            </li>
          </ul>

          {/* Keyword Engine & Mapping Graph 2 (5.png) */}
          <figure className="my-6">
            <img
              src="/images/case-studies/1/5.png"
              alt="How we mapped high intent keywords, compared it with competitor sites and came up with the ideal content engine"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              How we mapped high intent keywords, compared it with competitor sites and came up with the ideal content engine
            </figcaption>
          </figure>
        </section>

        {/* Section 2 */}
        <section className="mt-12" aria-label="Monitoring and Results">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Monitoring and Rapid Iteration
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            Ongoing data tracking ensured that optimizations immediately translated into patient
            inquiries, rapid indexation, and escalating search engine positions:
          </p>

          <ul className="space-y-3 text-base md:text-lg text-neutral-700 leading-relaxed list-disc list-inside">
            <li>Tracking daily impressions, click-through rates, and average SERP positions.</li>
            <li>Auditing keyword movement across localized Brisbane geo-coordinates.</li>
            <li>Continuous content refinement based on search performance and patient booking inquiries.</li>
          </ul>

          {/* AI Overview & ChatGPT Citations (6.png) */}
          <figure className="my-6">
            <img
              src="/images/case-studies/1/6.png"
              alt="How ChatGPT & AI overviews rank Aminya St Dental after content changes + website optimization"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              How ChatGPT &amp; AI overviews rank Aminya St Dental after content changes + website optimization
            </figcaption>
          </figure>

          {/* Impact & Outcome Highlights */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
              Key Engagement Outcomes:
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed list-disc list-inside">
              <li>
                <strong className="text-[#0B3B36]">
                  More patients discovering clinic at the right moment (+193% impressions):
                </strong>{" "}
                Dramatic surge in visibility capturing patients actively looking for general, family,
                and emergency dental care.
              </li>
              <li>
                <strong className="text-[#0B3B36]">
                  Wider reach across the patient journey:
                </strong>{" "}
                Expanded from simple brand queries to ranking for comprehensive procedural and
                preventative treatment queries.
              </li>
              <li>
                <strong className="text-[#0B3B36]">
                  Stronger competitive position on page 1:
                </strong>{" "}
                Secured durable top-ranking organic spots ahead of larger corporate dental networks in
                the area.
              </li>
              <li>
                <strong className="text-[#0B3B36]">
                  Early-mover advantage in AI search (ChatGPT / AI overviews):
                </strong>{" "}
                Established the clinic as an authoritative medical entity, successfully cited by
                ChatGPT and Google AI Overviews when answering local dental recommendations.
              </li>
              <li>
                <strong className="text-[#0B3B36]">
                  Durable, compounding gains:
                </strong>{" "}
                Built an owned, sustainable patient acquisition engine that continues to generate
                appointments without recurring pay-per-click ad spend.
              </li>
            </ul>
          </div>

          {/* Surge of Impressions & Traffic Chart (7.png) */}
          <figure className="my-6">
            <img
              src="/images/case-studies/1/7.png"
              alt="Surge of impressions to the client's website (+193% impressions, +57% clicks)"
              className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
              loading="eager"
            />
            <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
              Surge of impressions to the client&apos;s website (+193% impressions, +57% clicks)
            </figcaption>
          </figure>
        </section>

        {/* Bottom Call to Action Banner */}
        <section
          className="bg-[#0B3B36] rounded-2xl p-10 text-white text-center mt-16 shadow-lg"
          aria-label="Call to action"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--head)] mb-3 text-[var(--cream)]">
            Ready to scale your search &amp; AI visibility?
          </h2>
          <p className="text-base md:text-lg text-[var(--cream)]/80 max-w-xl mx-auto mb-8">
            The right marketing and strategic expertise can change everything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--cream)] text-[#0B3B36] hover:bg-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-150 shadow-sm hover:shadow group"
          >
            Get started
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </section>
      </article>
    </main>
  );
}
