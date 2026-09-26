import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Ceylon Knowledge Services",
  description:
    "Strategic analysis, sector research, and operational commentary from CKS specialists.",
};

const filterTags = [
  "All",
  "Strategy and research",
  "Financial modelling",
  "Data and AI",
  "Marketing",
  "Retail operations",
  "Cybersecurity",
];

const articlesList = [
  {
    slug: "rethinking-annual-financial-models",
    title: "Why mid-market firms are rethinking annual financial models",
    category: "Financial modelling",
    author: "Corporate Finance Team",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Static annual forecasts fail under volatility. How rolling driver-based models give leadership genuine visibility.",
  },
  {
    slug: "closing-gap-data-executive-action",
    title: "Closing the gap between raw data collection and executive action",
    category: "Data and AI",
    author: "Analytics Practice",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Most organisations sit on surplus data without analytical throughput. How structured validation and dashboards resolve bottlenecks.",
  },
  {
    slug: "third-party-vendor-risks-supply-chains",
    title: "Assessing third-party vendor risks across global supply chains",
    category: "Cybersecurity",
    author: "Cyber Risk Team",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Technical safeguards and contract governance needed to protect core systems against inherited vulnerabilities.",
  },
  {
    slug: "promotional-discounting-retail-margins",
    title: "How promotional discounting quietly erodes retail margins",
    category: "Retail operations",
    author: "Operations Advisory",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Incrementality analysis separates real volume growth from discounted sales that would have completed anyway.",
  },
  {
    slug: "defensible-positioning-institutional-diligence",
    title: "Building defensible positioning ahead of institutional diligence",
    category: "Marketing",
    author: "Strategy & Growth",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Moving beyond consumer-facing narratives to articulate commercial traction to investors and enterprise partners.",
  },
  {
    slug: "cross-jurisdiction-regulatory-mapping",
    title: "Cross-jurisdiction regulatory mapping for emerging markets",
    category: "Strategy and research",
    author: "Research Team",
    date: "1 Sep 2026",
    datetime: "2026-09-01",
    readTime: "6 min read",
    summary:
      "Evaluating policy shifts, trade compliance, and operational exposure before capital commitments are locked.",
  },
];

export default function InsightsPage() {
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
              Insights
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Insights
          </h1>
          <br />
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Perspectives, analytical frameworks, and research on high-stakes execution for growth-focused leadership.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="pb-24" aria-label="Articles">
        <div className="wrap">
          {/* Topic Filters */}
          <nav className="pb-10 flex flex-wrap gap-2" aria-label="Filter by topic">
            {filterTags.map((tag, idx) => (
              <button
                key={tag}
                type="button"
                className={`font-[family-name:var(--head)] font-medium text-[0.85rem] py-1.5 px-3.5 rounded-full border transition-colors cursor-pointer ${
                  idx === 0
                    ? "bg-[var(--teal)] text-[var(--cream)] border-[var(--teal)]"
                    : "text-[var(--teal)] border-[rgba(4,61,59,0.3)] hover:bg-[var(--teal)] hover:text-[var(--cream)] hover:border-[var(--teal)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </nav>

          {/* Featured Article */}
          <article className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-0 md:gap-14 items-center bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] overflow-hidden mb-12">
            <div className="aspect-[4/3] bg-[#E4E0D8] grid place-items-center text-[0.85rem] text-[var(--grey-text)] self-stretch">
              Cover image, 4:3
            </div>
            <div className="p-7 md:py-10 md:pr-12 md:pl-0">
              <span className="font-[family-name:var(--head)] font-medium text-[0.85rem] text-[var(--teal-muted)]">
                Latest
              </span>
              <br/>
              <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium mt-3 text-[var(--ink)]">
                <Link
                  href="/insights/addressable-market-sizing-models"
                  className="hover:text-[var(--teal)] no-underline text-inherit"
                >
                  Sizing genuine addressable markets when public datasets fail
                </Link>
              </h2>
              <br/>
              <p className="mt-4 text-[1.05rem] text-[var(--ink)] leading-relaxed">
                Headline population and national mobility figures routinely overstate commercial opportunity. How household income segmentation isolates viable demand.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.85rem] text-[var(--grey-text)]">
                <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                  Strategy & Research
                </span>
                <span>Advisory Practice</span>
                <span aria-hidden="true">&middot;</span>
                <time dateTime="2026-09-08">8 Sep 2026</time>
                <span aria-hidden="true">&middot;</span>
                <span>8 min read</span>
              </div>
            </div>
          </article>

          {/* Articles Grid (3 Columns) with Working Dynamic Links */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {articlesList.map((item) => (
              <li
                key={item.slug}
                className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] overflow-hidden flex flex-col transition-[border-color,transform] duration-150 hover:border-[var(--teal-muted)] hover:-translate-y-0.5"
              >
                <div className="aspect-[16/9] bg-[#E4E0D8] grid place-items-center text-[0.85rem] text-[var(--grey-text)]">
                  Cover image, 16:9
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1 items-start">
                  <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                    {item.category}
                  </span>
                  <br/>
                  <h2 className="text-[1.2rem] font-medium mt-3.5 text-[var(--ink)] w-full">
                    <Link
                      href={`/insights/${item.slug}`}
                      className="hover:text-[var(--teal)] no-underline text-inherit"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <br/>
                  <p className="mt-2.5 text-[0.95rem] text-[var(--grey-text)] leading-relaxed w-full">
                    {item.summary}
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-2.5 text-[0.85rem] text-[var(--grey-text)] w-full">
                    <span>{item.author}</span>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={item.datetime}>{item.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
            <span
              aria-current="page"
              className="w-10 h-10 grid place-items-center rounded-full font-[family-name:var(--head)] font-medium text-[0.9rem] bg-[var(--teal)] text-[var(--cream)]"
            >
              1
            </span>
            <button
              type="button"
              className="w-10 h-10 grid place-items-center rounded-full font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal)] border border-transparent hover:border-[var(--teal)] cursor-pointer"
            >
              2
            </button>
            <button
              type="button"
              className="w-10 h-10 grid place-items-center rounded-full font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal)] border border-transparent hover:border-[var(--teal)] cursor-pointer"
            >
              3
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter Sub-band */}
      <section className="py-18 bg-white border-t border-[rgba(45,45,39,0.08)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-[var(--teal)] max-w-[18ch]">
              Executive intelligence, straight to your inbox
            </h2>
            <br/>
            <p className="mt-3 text-[var(--ink)] max-w-[30rem]">
              Monthly briefings on market research, financial frameworks, and operations. No filler.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="sub-email" className="sr-only">
              Work email
            </label>
            <input
              type="email"
              id="sub-email"
              name="email"
              placeholder="Work email"
              required
              className="flex-1 text-[1rem] py-3.5 px-5 rounded-full border border-[#8B8B83] bg-[var(--cream)] text-[var(--ink)] focus:outline-none focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20"
            />
            <button
              type="submit"
              className="font-[family-name:var(--head)] font-medium text-[0.95rem] py-3.5 px-6 rounded-full border-0 bg-[var(--teal)] text-[var(--cream)] hover:bg-[#022B2A] transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to extend your team's execution capacity?
            </h2>
            <br />
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