import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Ceylon Knowledge Services",
  description:
    "Meet the leadership behind Ceylon Knowledge Services and learn about our focus on specialist execution.",
};

export default function LeadershipPage() {
  const basePath = "";

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
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link
                href="/about"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                About Us
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Leadership
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="pt-16 md:pt-20">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B3B36]">
              Leadership
            </h1>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Led by experienced practitioners committed to building a reliable specialist execution backbone for global enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="pb-24">
        <div className="wrap">
          {/* Founder & Chief Executive */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Sticky Photo Container (4:5 Aspect Ratio) */}
            <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden bg-neutral-100 shadow-sm lg:sticky lg:top-8 max-w-[22rem]">
              <img
                src={`${basePath}/images/Krishanth.jpg`}
                alt="Krishanth Jayarajah"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Bio & Details */}
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--teal)] font-[family-name:var(--head)] font-semibold leading-[1.22]">
                Krishanth Jayarajah
              </h2>
              <p className="mt-1 font-[family-name:var(--head)] font-medium text-[var(--teal)] text-[1.15rem]">
                Founder & Chief Executive
              </p>
              <p className="mt-0.5 font-[family-name:var(--head)] font-normal text-[var(--grey-text)] text-[1.05rem]">
                Ceylon Knowledge Services
              </p>

              <div className="mt-8 space-y-5 text-[1.1rem] leading-[1.6] text-[var(--ink)] max-w-[36rem]">
                <p>
                  Krishanth Jayarajah is the Founder and CEO of Ceylon Knowledge Services, with 15 years of experience across consulting, market intelligence, corporate finance and equity research. He began his career at Morgan Stanley and Acuity Analytics (formerly Copal Amba). Before founding CKS, he led corporate finance engagements, operational restructuring programmes and data strategy advisory for mid-market and enterprise clients in Western and regional markets.
                </p>
                <p>
                  He founded CKS after recognising the persistent bottlenecks companies faced to secure agile, high calibre specialist talent without taking on long term overhead. CKS connects Sri Lanka’s highly qualified professional talent pool directly into global enterprise workflows. He has grown the firm to 60 people across six verticals and previously built a 30 analyst captive research operation delivering over $1m in work.
                </p>
                <p>
                  He advises startups, family businesses, corporates and development institutions across the UK, Australia, the US and Sri Lanka on go-to-market strategy, valuations and financial advisory. His specialisms include mergers, spinoffs, reverse mergers and divestments.
                </p>
              </div>

              {/* Credentials Grid */}
              <ul className="mt-10 pt-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[36rem] p-0 m-0">
                <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                  <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                    Education
                  </h3>
                  <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm text-neutral-700">
                    <li>MSc Strategy and International Business – Aston Business School</li>
                    <li>BA (Hons) International Business Management – University of Nottingham</li>
                  </ul>
                </li>
                <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                  <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                    Based In
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Colombo, Sri Lanka
                  </p>
                </li>
              </ul>

              {/* Links */}
              <div className="mt-6 flex gap-6 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/krishanthj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
                >
                  LinkedIn
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Chief Operating Officer */}
          <div className="mt-24 pt-16 border-t border-[rgba(45,45,39,0.14)] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            {/* Sticky Photo Container (4:5 Aspect Ratio) */}
            <div
              className="aspect-[4/5] rounded-[16px] bg-[#E4E0D8] grid place-items-center text-[var(--grey-text)] text-[0.9rem] text-center p-4 lg:sticky lg:top-8 max-w-[22rem] w-full"
              aria-label="Kanishka Perera photograph placeholder"
            >
              Kanishka Perera photograph
              <br />
              Portrait, 4:5, minimum 1200px wide
            </div>

            {/* Bio & Details */}
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--teal)] font-[family-name:var(--head)] font-semibold leading-[1.22]">
                Kanishka Perera
              </h2>
              <p className="mt-1 font-[family-name:var(--head)] font-medium text-[var(--teal)] text-[1.15rem]">
                Chief Operating Officer
              </p>
              <p className="mt-0.5 font-[family-name:var(--head)] font-normal text-[var(--grey-text)] text-[1.05rem]">
                Ceylon Knowledge Services
              </p>

              <div className="mt-8 space-y-5 text-[1.1rem] leading-[1.6] text-[var(--ink)] max-w-[36rem]">
                <p>
                  Kanishka Perera is a senior business leader with 18 years of experience across investment management, private equity, corporate finance, wealth management, equity research and business operations. His career spans Oceans Talent, Asia Securities Wealth Management, NDB Zephyr Partners Lanka, Asia Securities and Acuity Analytics. He has built new business verticals, scaled teams and revenue generating operations, and set up finance and operational functions. He advises startups, private equity backed businesses, corporates and institutions, including US based companies, on growth, governance, fundraising, go to market strategy and performance. He has managed investment portfolios across fixed income and equities, and has supported major corporate transactions and acquisitions.
                </p>
              </div>

              {/* Credentials Grid */}
              <ul className="mt-10 pt-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[36rem] p-0 m-0">
                <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                  <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                    Education
                  </h3>
                  <ul className="mt-2 list-disc list-inside space-y-1.5 text-sm text-neutral-700">
                    <li>Bachelor of Commerce, University of Melbourne</li>
                    <li>Professional Graduate Diploma, British Computer Society</li>
                  </ul>
                </li>
                <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                  <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                    Based In
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Colombo, Sri Lanka
                  </p>
                </li>
              </ul>

              {/* Links */}
              <div className="mt-6 flex gap-6 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/kanishka-perera-04158611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
                >
                  LinkedIn
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)] group"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
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
              Speak directly with our leadership team to understand how our specialist teams integrate into your organisation.
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
