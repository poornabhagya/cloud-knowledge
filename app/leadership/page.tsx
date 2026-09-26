import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Ceylon Knowledge Services",
  description:
    "Meet the leadership behind Ceylon Knowledge Services and learn about our focus on specialist execution.",
};

export default function LeadershipPage() {
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
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Leadership
          </h1>
          <br/>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Led by experienced practitioners committed to building a reliable specialist execution backbone for global enterprises.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="pb-24">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Sticky Photo Container (4:5 Aspect Ratio) */}
          <div
            className="aspect-[4/5] rounded-[16px] bg-[#E4E0D8] grid place-items-center text-[var(--grey-text)] text-[0.9rem] text-center p-4 lg:sticky lg:top-8 max-w-[22rem] w-full"
            aria-label="Founder photograph placeholder"
          >
            Founder photograph
            <br />
            Portrait, 4:5, minimum 1200px wide
          </div>

          {/* Bio & Details */}
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--teal)] font-[family-name:var(--head)] font-semibold leading-[1.22]">
              Founder & Chief Executive
            </h2>
            <p className="mt-1 font-[family-name:var(--head)] font-medium text-[var(--grey-text)] text-[1.05rem]">
              Ceylon Knowledge Services
            </p>

            <div className="mt-8 space-y-5 text-[1.1rem] leading-[1.6] text-[var(--ink)] max-w-[36rem]">
              <p>
                Prior to founding CKS, our leadership led complex corporate finance engagements, operational restructuring programs, and data strategy advisory for mid-market and enterprise clients across Western and regional markets.
              </p>
              <br/>
              <p>
                Recognising the persistent bottleneck in securing agile, high-calibre specialist talent without long-term overhead, CKS was formed to connect Sri Lanka’s deeply accredited professional talent pool directly into global enterprise workflows.
              </p>
            </div>

            {/* Credentials Grid */}
            <ul className="mt-10 pt-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-[36rem] p-0 m-0">
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                  Education & Qualifications
                </h3>
                <br/>
                <p className="mt-1 text-[1rem] text-[var(--ink)]">
                  Fellow Chartered Management Accountants (FCMA / CGMA), MBA Finance
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                  Previous Roles
                </h3>
                <br/>
                <p className="mt-1 text-[1rem] text-[var(--ink)]">
                  Corporate Advisory Lead, Senior Valuation Specialist, Financial Director
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                  Key Sectors
                </h3>
                <br/>
                <p className="mt-1 text-[1rem] text-[var(--ink)]">
                  Corporate Finance, Retail Analytics, Cybersecurity, Education Strategy
                </p>
              </li>
              <li className="border-t border-[rgba(45,45,39,0.14)] pt-3.5">
                <h3 className="text-[0.9rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)]">
                  Based In
                </h3>
                <br/>
                <p className="mt-1 text-[1rem] text-[var(--ink)]">
                  Colombo, Sri Lanka
                </p>
              </li>
            </ul>

            {/* Founder Quote */}
            <blockquote className="mt-10 p-6 md:p-7 border border-[rgba(45,45,39,0.1)] bg-white rounded-[12px] font-[family-name:var(--head)] font-medium text-[1.2rem] leading-[1.45] text-[var(--teal)] max-w-[36rem]">
              "Our standard is simple: every model, report, and dashboard we touch must be defensible enough to present in front of your board or investors tomorrow."
            </blockquote>

            {/* Links */}
            <div className="mt-10 flex gap-6 flex-wrap">
              <a
                href="#"
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