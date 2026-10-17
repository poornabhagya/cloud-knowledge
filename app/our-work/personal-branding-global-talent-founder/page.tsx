import Link from "next/link";
import type { Metadata } from "next";
import { basePath } from "@/data/caseStudies";

export const metadata: Metadata = {
  title:
    "Building the Personal Brand of a Global Talent Search Founder | Ceylon Knowledge Services",
  description:
    "How CKS rebuilt a global recruitment founder's LinkedIn presence from the ground up, coupled with a 6-month bespoke thought leadership and content calendar.",
};

export default function PersonalBrandingCaseStudyPage() {
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
              Personal Branding for Talent Search Founder
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
              <span className="text-neutral-500 mr-1.5">Industry:</span> Talent &amp; Recruitment
            </span>
            <span className="inline-flex items-center text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full border border-[rgba(45,45,39,0.18)] bg-white/70 text-[#0B3B36]">
              <span className="text-neutral-500 mr-1.5">Duration:</span> 1 Month
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3B36] font-[family-name:var(--head)] leading-[1.2] tracking-[-0.015em]">
            Building the Personal Brand of a Global Talent Search Founder
          </h1>
        </header>

        {/* Hero Banner Image */}
        <img
          src={`${basePath}/images/case-studies/4/1.png`}
          alt="Building the Personal Brand of a Global Talent Search Founder"
          className="w-full h-auto rounded-xl border border-neutral-200/80 shadow-sm object-cover my-8"
          loading="eager"
        />

        {/* Overview Section */}
        <section className="mt-10" aria-label="Overview">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            Overview
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            The client is the founder of a global talent search organisation, placing senior professionals across international markets. With a strong track record built over years of hands-on work, the founder had credibility. What he didn&apos;t have was a LinkedIn presence that reflected it.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
            Like many founders who have spent years focused on building their business, his LinkedIn profile hadn&apos;t kept pace with the work. Roles had been added over time without a consistent structure, some experience was undocumented, and the profile as a whole didn&apos;t yet tell the story his track record deserved yet. Outside of the profile itself, he had no regular presence on the platform.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Ancore was engaged to deliver two things: a full LinkedIn profile overhaul, and an ongoing thought leadership content programme built around his voice and areas of expertise.
          </p>

          {/* Results At A Glance (4 Metric / Pillar Cards Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            <div className="bg-[#54B689]/15 rounded-xl border border-[#54B689]/30 p-5 flex flex-col justify-center text-center shadow-sm">
              <div className="text-sm md:text-base font-semibold text-[#0B3B36] leading-snug">
                LinkedIn profile rebuilt from the ground up.
              </div>
            </div>
            <div className="bg-[#54B689]/15 rounded-xl border border-[#54B689]/30 p-5 flex flex-col justify-center text-center shadow-sm">
              <div className="text-sm md:text-base font-semibold text-[#0B3B36] leading-snug">
                Core profile sections restructured and re-written
              </div>
            </div>
            <div className="bg-[#54B689]/15 rounded-xl border border-[#54B689]/30 p-5 flex flex-col justify-center text-center shadow-sm">
              <div className="text-sm md:text-base font-semibold text-[#0B3B36] leading-snug">
                Thought leadership content calendar for 6 months
              </div>
            </div>
            <div className="bg-[#54B689]/15 rounded-xl border border-[#54B689]/30 p-5 flex flex-col justify-center text-center shadow-sm">
              <div className="text-sm md:text-base font-semibold text-[#0B3B36] leading-snug">
                Personalised content framework built around the founder&apos;s voice
              </div>
            </div>
          </div>
        </section>

        {/* What We Did Section (2 Key Phases) */}
        <section className="mt-12" aria-label="What We Did">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4">
            What We Did
          </h2>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
            Ancore was engaged to deliver a full personal branding engagement through our Marketing vertical. The work was structured across two phases:
          </p>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  1
                </span>
                Phase 1: Profile Audit and Rebuild
              </h3>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                We began with a thorough audit of the existing LinkedIn profile, reviewing every section against what the founder&apos;s experience and positioning actually warranted. The audit surfaced several gaps: missing roles, incomplete experience entries, absent skill tags, and a featured section that wasn&apos;t being used effectively.
              </p>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                Following the audit, we rewrote and restructured the profile from top to bottom. This included the headline, about section, individual experience descriptions, skill endorsements, and featured content. Every section was rewritten to clearly communicate who the founder is, what he has built, and the value he brings to the organisations and candidates he works with.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl border border-neutral-200/80 shadow-sm p-7">
              <h3 className="text-xl md:text-2xl font-bold text-[#0B3B36] font-[family-name:var(--head)] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3B36] text-[var(--cream)] font-bold text-sm">
                  2
                </span>
                Phase 2: Content Calendar and Thought Leadership Programme
              </h3>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                The founder had not been active on LinkedIn. Before writing anything on his behalf, we needed to understand how he thinks, what he cares about, and how he naturally communicates.
              </p>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                We started with a structured intake questionnaire covering his areas of expertise, the topics he wanted to be known for, his perspective on the talent and recruitment industry, and his preferred tone of voice. The responses formed the foundation of everything that followed.
              </p>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                Using those inputs, we built a monthly content calendar of thought leadership posts relevant to his industry and audience. For each month, we drafted the posts in full and shared them with the founder for review before anything went live. The process was collaborative by design, so every piece of content felt like his own rather than something written on his behalf.
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
                    A Profile That Reflects the Work
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The founder now has a LinkedIn presence that accurately represents his experience and the calibre of work he has built over the years. The profile is complete, structured, and tells a consistent story from top to bottom.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    A Voice, Not Just Content
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The intake process gave us the foundation to write in the founder&apos;s voice rather than around it. Every post is built on his views and areas of expertise, making the content credible to the audience he is trying to reach.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    A Repeatable System
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    The monthly draft and review process means the founder stays in control of what goes out under his name, without the burden of writing from scratch. The programme is designed to grow his presence consistently without requiring him to become a content writer.
                  </td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="w-1/3 p-5 font-semibold text-[#0B3B36] bg-[#54B689]/20 border-r border-neutral-300">
                    Increased Visibility in the Right Circles
                  </td>
                  <td className="w-2/3 p-5 text-neutral-800 leading-relaxed">
                    With a complete profile and regular thought leadership content, the founder is positioned to be discoverable and credible to the senior professionals, organisations, and partners he wants to reach.
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
            Ready to build a founder presence that reflects your calibre?
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
