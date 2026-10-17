import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Scaling a B2B Tech Brand Through Content | Ceylon Knowledge Services",
  description:
    "Driving a 50x LinkedIn follower growth, 3.2x organic traffic surge, and industry-leading newsletter engagement via multi-subsidiary content marketing.",
};

export default function ScalingB2BTechBrandCaseStudyPage() {
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
              Scaling a B2B Tech Brand Through Content
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
              <span className="text-neutral-500 mr-1.5">Industry:</span> Technology
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Market:</span> B2B
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Duration:</span> 18 Months
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            Scaling a B2B Tech Brand Through Content
          </h1>
        </header>

        {/* Hero Banner Graphic */}
        <img
          src="/images/case-studies/8/1.png"
          alt="Scaling a B2B Tech Brand Through Content"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            A fast-scaling technology startup was gaining strong momentum in the B2B space and recognised that their next phase of growth required a more structured content and brand presence. With a lean internal team and no dedicated marketing function, the company needed a structured approach to establish brand authority and build a tech community brand without a large paid media budget.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Our team took full ownership of the content marketing function, designing and executing a multi-channel strategy from the ground up across an 18-month engagement. The scope spanned multiple subsidiaries as well as the product marketing function.
          </p>

          {/* Results At A Glance (4 Metric Cards Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                50x
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">LinkedIn Growth</div>
              <div className="text-xs text-neutral-600 mt-0.5">1,000 &rarr; 50,000 followers</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                6.8%
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Avg. Post Engagement</div>
              <div className="text-xs text-neutral-600 mt-0.5">vs. 2% industry avg.</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                3.2x
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Organic Traffic Increase</div>
              <div className="text-xs text-neutral-600 mt-0.5">over 18 months</div>
            </div>
            <div className="bg-[#54B689]/20 rounded-xl border border-[#54B689]/40 p-5 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#0B3B36] font-[family-name:var(--head)]">
                42%
              </div>
              <div className="text-sm font-bold text-[#0B3B36] mt-1">Newsletter Open Rate</div>
              <div className="text-xs text-neutral-600 mt-0.5">vs. 21% industry avg.</div>
            </div>
          </div>
        </section>

        {/* What We Did Section */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            What We Did
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
            The engagement was structured across four core service areas, each running concurrently and feeding into a unified brand narrative:
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  1
                </span>
                Content Marketing and Social Media Operations
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We produced and managed all content across the company and its subsidiaries, covering their engineering, UI/UX, and AI arms. This included flyers, brochures, blog articles, and thought leadership pieces written specifically for and in the voice of the leadership team. We advised leadership on which topics to address based on audience trends, industry conversations, and search demand. Weekly content calendars were maintained for each subsidiary independently, ensuring each arm had a distinct but aligned presence.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  2
                </span>
                Product Marketing
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We took on the product marketing function for the company, translating technical capabilities into clear, audience-ready messaging. This meant positioning each product and service offering in a way that spoke to prospective clients and partners rather than internal teams. This included generating lead magnets, product brochures, writing website content and more.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  3
                </span>
                Website, SEO, and Performance Content
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We wrote and restructured core website content across all digital properties, managed ongoing SEO, and produced keyword-driven articles to support organic search rankings. Where requested, we also wrote ad landing pages and handed them off directly to the client&apos;s team for deployment.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-2 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#0B3B36] text-[var(--cream)] text-sm font-semibold flex items-center justify-center">
                  4
                </span>
                AEO and GEO (Answer and Generative Engine Optimisation)
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                We audited and restructured website content to be optimised for answer-based and AI-driven search. This included writing FAQs across all digital sites, implementing structured schema markup, and running community engagement on behalf of the brand to build topical authority and presence beyond owned channels.
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
                    Brand Authority
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Became a recognised voice in the regional tech ecosystem. Leadership posts gained traction organically with significant increase in impressions.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Talent Acquisition
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Inbound job applications increased significantly. Employer branding content consistently outperformed the page average, reducing dependency on paid recruitment channels.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Inbound Interest
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Organic content drove measurable website traffic growth, with prospective clients and partners reaching out directly via LinkedIn and email as a result of the thought leadership programme.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Execution Model
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    Fully managed by our experts. The client&apos;s internal team was not required to produce or manage any content, freeing up their bandwidth entirely while maintaining a consistent publishing cadence.
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
            How different would your growth look with the right marketing behind it?
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
