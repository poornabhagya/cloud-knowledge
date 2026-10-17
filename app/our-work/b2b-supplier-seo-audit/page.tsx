import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "179 problems were affecting the ranking ability of a B2B supplier. A SEO audit found it all. | Ceylon Knowledge Services",
  description:
    "How CKS uncovered 179 missing title tags, orphan URLs, and JavaScript rendering bottlenecks for a B2B wholesale water treatment supplier.",
};

export default function B2BSupplierCaseStudyPage() {
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
              B2B Supplier SEO Audit
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
              <span className="text-neutral-500 mr-1.5">Industry:</span> Manufacturing
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Duration:</span> 2 weeks (Starter product - SEO)
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Client:</span> B2B Wholesale Supplier
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            179 problems were affecting the ranking ability of a B2B supplier. A SEO audit found it all.
          </h1>
        </header>

        {/* Hero Banner (1.png) */}
        <img
          src="/images/case-studies/2/1.png"
          alt="179 problems affecting ranking ability of B2B supplier - SEO Audit"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-6"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            The client is an established B2B wholesale supplier of industrial water treatment solutions, filtration systems, and chemical management equipment. Despite serving high-value commercial accounts and maintaining an extensive product portfolio, their digital footprint was severely compromised.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Procurement teams, facility engineers, and industrial buyers searching online for specific water treatment components, bulk chemicals, and compliance systems were failing to find the company in organic search results. A thorough technical SEO and architecture audit was initiated to pinpoint the root causes suppressing organic visibility and build an actionable remediation roadmap.
          </p>

          {/* Key Metrics Highlight Grid (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                179+
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Title tag issues identified
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                Orphan Pages
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Multiple pages with no internal links
              </div>
            </div>
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                Sitemap
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                Outdated and unindexed
              </div>
            </div>
          </div>
        </section>

        {/* What We Did Section (4 Steps) */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-6">
            What We Did
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  1
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                  Brand and Local SEO
                </h3>
              </div>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                Conducted an in-depth assessment of the company&apos;s brand authority, corporate footprint, and regional citations. Verified business entity mappings across commercial registries and industry supplier directories to ensure search engines reliably correlate the brand with wholesale water treatment procurement across target geographical markets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  2
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                  Technical SEO (JavaScript Rendering &amp; Missing Title Tags)
                </h3>
              </div>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                Investigated server responses and client-side JavaScript execution. The audit uncovered a critical rendering flaw: because titles were injected dynamically post-load via client-side JavaScript, crawlers inspecting the raw HTML encountered completely empty title tags across 179 core product and category URLs.
              </p>

              {/* Title Missing Proof Image (2.png) */}
              <figure className="my-6">
                <img
                  src="/images/case-studies/2/2.png"
                  alt="Title is missing: 179 pages identified during technical SEO audit"
                  className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                  loading="eager"
                />
                <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                  Title is missing: 179 pages
                </figcaption>
              </figure>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  3
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                  Analytics &amp; Tracking (GSC, GA4 &amp; Orphan URL Discovery)
                </h3>
              </div>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                Configured and verified Google Search Console and GA4 conversion tracking to track wholesale inquiries and spec sheet downloads. Cross-referenced the crawl logs against search engine indexes, uncovering numerous orphan URLs that were listed solely in the sitemap without any internal inbound links from the main navigation or category hierarchy.
              </p>

              {/* Orphan URLs Proof Image (3.png) */}
              <figure className="my-6">
                <img
                  src="/images/case-studies/2/3.png"
                  alt="Orphan URLs — only found via sitemap"
                  className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover"
                  loading="eager"
                />
                <figcaption className="mt-2.5 text-center text-sm text-neutral-600 italic">
                  Orphan URLs — only found via sitemap
                </figcaption>
              </figure>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  4
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                  Content Optimization (E-E-A-T for Wholesale Buyers)
                </h3>
              </div>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                Developed an E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) content blueprint specifically tailored to commercial B2B procurement decision-makers. Mapped technical specifications, safety compliance datasheets, and bulk supply terms directly to buyer search intents, ensuring pages establish clear topical authority.
              </p>
            </div>
          </div>
        </section>

        {/* Key Recommendations for the Business */}
        <section className="mt-14" aria-label="Key Recommendations">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-6">
            Key Recommendations for the Business
          </h2>

          <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-8">
            <ul className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Fix JavaScript rendering for 179 product pages:</strong> Ensure server-side rendering (SSR) or pre-rendering so that HTML title tags and meta descriptions are directly present in the initial DOM response.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Resolve orphan pages through internal linking:</strong> Connect orphaned product and solution URLs directly into the site architecture, main navigation, and relevant category hubs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Implement structured data (schema markup):</strong> Deploy Organization, Product, and B2B wholesale schemas to clarify catalog specifications and business credentials to search engines.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Complete GSC and GA4 configuration:</strong> Finalize conversion funnels, event tracking for quote requests and catalog downloads, and monitor search indexation health.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Rebuild and resubmit XML sitemap:</strong> Cleanse dead and redirected URLs, regenerate the sitemap with canonical URLs, and submit directly to Google Search Console.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Upgrade category page content quality:</strong> Deepen technical product descriptions, integrate FAQs, and highlight certifications to satisfy B2B buyer diligence.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0B3B36] font-bold mt-1 text-lg leading-none">&#10003;</span>
                <span>
                  <strong className="text-[#0B3B36]">Establish recurring monitoring:</strong> Conduct monthly SEO performance tracking and quarterly comprehensive technical content audits to sustain growth.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom Call to Action Banner */}
        <section
          className="bg-[#0B3B36] rounded-2xl p-10 text-white text-center mt-16 shadow-lg"
          aria-label="Call to action"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--head)] mb-4 text-[var(--cream)]">
            How different would your growth look with the right marketing behind it?
          </h2>
          <p className="text-base md:text-lg text-[var(--cream)]/80 max-w-xl mx-auto mb-8">
            Identify hidden technical roadblocks and turn search visibility into predictable wholesale demand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--cream)] text-[#0B3B36] hover:bg-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-150 shadow-sm hover:shadow group"
          >
            Schedule a call
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </section>
      </article>
    </main>
  );
}
