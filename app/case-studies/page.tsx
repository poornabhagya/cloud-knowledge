import Link from "next/link";
import type { Metadata } from "next";
import { caseStudiesData } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Ceylon Knowledge Services",
  description: "Explore how CKS delivers specialist execution across corporate finance, research, and analytics.",
};

const filterTags = [
  "All",
  "Strategy and research",
  "Financial modelling",
  "Data driven insights",
  "Marketing",
  "Retail operations",
  "Cybersecurity",
];

export default function CaseStudiesPage() {
  const cases = Object.values(caseStudiesData);

  return (
    <main>
      {/* Breadcrumb Navigation */}
      <nav className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)]" aria-label="Breadcrumb">
        <div className="wrap">
          <ol className="flex gap-2 list-none m-0 py-4 p-0">
            <li>
              <Link href="/" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Our work
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Case studies
          </h1>
          <br/>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            A selection of recent specialist engagements. Client identities are withheld where requested under binding confidentiality.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24" aria-label="Case studies">
        <div className="wrap">
          {/* Filters */}
          <nav className="pb-10 flex flex-wrap gap-2" aria-label="Filter by service line">
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

          {/* Cards 2-column grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
            {cases.map((item) => (
              <li
                key={item.slug}
                className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] overflow-hidden flex flex-col transition-[border-color,transform] duration-150 hover:border-[var(--teal-muted)] hover:-translate-y-0.5"
              >
                <div className="aspect-[16/7] bg-[#E4E0D8] grid place-items-center text-[0.85rem] text-[var(--grey-text)]">
                  Cover image or graphic, 16:7
                </div>
                <div className="p-8 md:p-9 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2">
                    <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--cream)] bg-[var(--teal)] py-1 px-3 rounded-full">
                      {item.serviceLine}
                    </span>
                    <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                      {item.engagementModel}
                    </span>
                    <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                      {item.country}
                    </span>
                  </div>
                  <br/>

                  <h2 className="text-[1.35rem] font-medium mt-5 text-[var(--ink)] leading-[1.3]">
                    <Link href={`/case-studies/${item.slug}`} className="hover:text-[var(--teal)] no-underline text-inherit">
                      {item.title}
                    </Link>
                  </h2>
                  <br/>
                  <p className="mt-2 text-[0.95rem] text-[var(--grey-text)]">{item.client}</p>
                  <p className="mt-4 text-[1.05rem] text-[var(--ink)] leading-relaxed">{item.standfirst}</p>

                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[rgba(45,45,39,0.1)] pt-5">
                    {item.results.map((res) => (
                      <div key={res.lbl}>
                        <b className="block font-[family-name:var(--head)] font-semibold text-[1.4rem] text-[var(--teal)] leading-none">
                          {res.val}
                        </b>
                        <span className="block mt-1 text-[0.8rem] text-[var(--grey-text)] leading-tight">{res.lbl}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="mt-auto pt-7 inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] no-underline self-start hover:underline underline-offset-[5px] group"
                  >
                    Read case study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12 12 4M6 4h6v6" />
                    </svg>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to execute with senior analytical rigour?
            </h2>
            <br/>
            <p className="mt-4 text-[var(--teal-quiet)] max-w-[30rem] text-[1.1rem]">
              Talk to our team about scoping a project or ongoing specialist capability for your business.
            </p>
          </div>
          <div className="justify-self-start md:justify-self-end flex items-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-[var(--cream)] text-[var(--teal)] hover:bg-white text-[1rem] px-7 py-4 rounded-full font-[family-name:var(--head)] font-medium inline-flex items-center gap-2.5 transition-colors no-underline group"
            >
              Partner with Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}