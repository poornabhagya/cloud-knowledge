import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Strategy and Research | Ceylon Knowledge Services",
  description:
    "Validate the opportunity before you commit the capital. CKS combines primary and secondary research with rigorous analysis to answer the questions that decide outcomes.",
};

export default function StrategyResearchPage() {
  const service = servicesData["strategy-research"];

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
              <Link href="/" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link href="/solutions" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Solutions
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Strategy and research
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero Section */}
      <section className="pt-20 pb-22 border-b border-[rgba(45,45,39,0.14)] mb-18">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
          <div>
            <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.28] tracking-[-0.015em] font-semibold">
              {service.headline}
            </h1>
          </div>
          <div className="text-[1.15rem] leading-[1.7] max-w-[34rem] text-[var(--ink)] space-y-5">
            <p>
               Every big decision needs a clear strategy and the evidence behind it. CKS helps leadership decide where to compete, how to enter and whether the numbers stack up. Our work spans sector deep dives, market intelligence, market sizing, commercial due diligence, go to market strategy and feasibility studies, all ending in recommendations you can act on.
            </p>
            <br/>
            
          </div>
        </div>
      </section>

      {/* What we offer (6 Services Grid Cards) */}
      <section className="pb-24" aria-label="What we offer">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              What we offer
            </h2>
            <br />
            <p className="max-w-[34rem] mt-4 text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
              {service.offerIntro}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {service.subProducts.map((prod) => (
              <li
                key={prod.title}
                className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 md:p-9 flex flex-col justify-start transition-[border-color,transform] duration-150 hover:border-[var(--teal-muted)] hover:-translate-y-0.5"
              >
                <span
                  className="w-11 h-11 rounded-[10px] bg-[rgba(4,61,59,0.08)] grid place-items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5.5 h-5.5 stroke-[var(--teal)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </span>
                <br />
                <h3 className="text-[1.22rem] font-medium mt-6 mb-3.5 text-[var(--ink)] leading-[1.35] tracking-[-0.01em]">
                  <Link
                    href={`/solutions/strategy-research/${prod.slug || "#"}`}
                    className="hover:text-[var(--teal)] no-underline text-inherit"
                  >
                    {prod.title}
                  </Link>
                </h3>
                <br />
                <p className="text-[0.98rem] text-[var(--grey-text)] leading-[1.65]">
                  {prod.desc}
                </p>
                <Link
                  href={`/solutions/strategy-research/${prod.slug || "#"}`}
                  className="mt-auto pt-8 inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] no-underline self-start hover:underline underline-offset-[5px] group"
                >
                  Learn more
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why CKS Section (Cards Grid) */}
      {service.whyCks && (
        <section className="py-24 bg-[rgba(4,61,59,0.03)] border-t border-[rgba(45,45,39,0.08)]">
          <div className="wrap">
            <div className="mb-14 text-center max-w-[40rem] mx-auto">
              <h2 className="text-[clamp(2rem,3vw,2.6rem)] text-[var(--teal)] leading-[1.3] font-semibold">
                Why Choose CKS
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {service.whyCks.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 shadow-sm"
                >
                  <h3 className="text-[1.2rem] font-medium text-[var(--teal)] mb-3">
                    {item.title}
                  </h3>
                  <br />
                  <p className="text-[1.05rem] text-[var(--ink)] leading-[1.65]">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Why Choose Sri Lanka for Your Outsourcing? Section */}
      {service.whySriLanka && (
        <section className="py-24 bg-white border-t border-[rgba(45,45,39,0.08)]">
          <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22] font-semibold">
                Why Choose Sri Lanka for Your Outsourcing?
              </h2>
            </div>
            <div>
              <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
                {service.whySriLanka}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Built on Trust and Security Section (Cards Grid) */}
      {service.trustSecurity && (
        <section className="py-24 bg-[rgba(4,61,59,0.03)] border-t border-[rgba(45,45,39,0.08)]">
          <div className="wrap">
            <div className="mb-14 max-w-[48rem]">
              <h2 className="text-[clamp(2rem,3vw,2.6rem)] text-[var(--teal)] leading-[1.3] font-semibold mb-6">
                Built on Trust and Security
              </h2>
              <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)]">
                {service.trustIntro}
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {service.trustSecurity.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 shadow-sm border-t-[3px] border-t-[var(--teal-muted)]"
                >
                  <h3 className="text-[1.15rem] font-medium text-[var(--teal)] mb-3">
                    {item.title}
                  </h3>
                  <br />
                  <p className="text-[1rem] text-[var(--grey-text)] leading-[1.65]">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="py-20 md:py-24 bg-[#0B3B36]" aria-label="Call to Action">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div>
            <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-[1.28] tracking-[-0.015em] text-left">
              Need extra strategy capacity, or a clear answer on your next move?
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="rounded-full bg-white text-[#0B3B36] font-medium px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition-colors no-underline whitespace-nowrap group"
            >
              <span>Talk to an expert</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
