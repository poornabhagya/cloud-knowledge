import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/caseStudies";

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export default async function SingleCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudiesData[slug];

  if (!cs) {
    notFound();
  }

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
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link href="/case-studies" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Case studies
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)] truncate max-w-[240px]">
              {cs.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap max-w-[1180px]">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--cream)] bg-[var(--teal)] py-1 px-3 rounded-full">
              {cs.serviceLine}
            </span>
            <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
              {cs.engagementModel}
            </span>
          </div>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] text-[var(--teal)] max-w-[24ch] leading-[1.2]">
            {cs.title}
          </h1>
          <br />
          <p className="mt-5 text-[1.2rem] leading-[1.65] max-w-[36rem] text-[var(--ink)]">
            {cs.standfirst}
          </p>
        </div>
      </section>

      {/* Facts Bar */}
      <div className="border-y border-[rgba(45,45,39,0.14)]">
        <div className="wrap">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none m-0 py-6 p-0">
            <li>
              <h3 className="text-[0.85rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)] uppercase">
                Client
              </h3>
              <br />
              <p className="mt-1 text-[1rem] text-[var(--ink)]">{cs.client}</p>
            </li>
            <li>
              <h3 className="text-[0.85rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)] uppercase">
                Industry
              </h3>
              <br />
              <p className="mt-1 text-[1rem] text-[var(--ink)]">{cs.industry}</p>
            </li>
            <li>
              <h3 className="text-[0.85rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)] uppercase">
                Duration
              </h3>
              <br />
              <p className="mt-1 text-[1rem] text-[var(--ink)]">{cs.duration}</p>
            </li>
            <li>
              <h3 className="text-[0.85rem] font-medium text-[var(--teal-muted)] font-[family-name:var(--head)] uppercase">
                Location
              </h3>
              <br />
              <p className="mt-1 text-[1rem] text-[var(--ink)]">{cs.location}</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Results at a Glance */}
      <section className="py-16 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap">
          <h2 className="text-[1.1rem] font-medium text-[var(--teal-quiet)] mb-8 font-[family-name:var(--head)]">
            Results at a glance
          </h2>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {cs.results.map((res) => (
              <li key={res.lbl}>
                <b className="block font-[family-name:var(--head)] font-semibold text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-[var(--cream)]">
                  {res.val}
                </b>
                <span className="block mt-2 text-[0.95rem] text-[var(--teal-quiet)]">{res.lbl}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Body with Sticky TOC */}
      <div className="py-20">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20 items-start">
          <aside className="hidden lg:block sticky top-8 border-l border-[rgba(45,45,39,0.14)] pl-5 space-y-3">
            <p className="font-[family-name:var(--head)] text-xs uppercase tracking-wider text-[var(--teal-muted)] font-semibold">
              On this page
            </p>
            <nav className="flex flex-col space-y-2 text-[0.95rem]">
              <a href="#overview" className="text-[var(--grey-text)] hover:text-[var(--teal)]">Overview</a>
              <a href="#what-we-did" className="text-[var(--grey-text)] hover:text-[var(--teal)]">What we did</a>
              <a href="#deliverables" className="text-[var(--grey-text)] hover:text-[var(--teal)]">Deliverables</a>
              <a href="#impact" className="text-[var(--grey-text)] hover:text-[var(--teal)]">Business impact</a>
            </nav>
          </aside>

          <article className="space-y-14">
            <section id="overview" className="scroll-mt-8">
              <h2 className="text-[1.7rem] text-[var(--teal)] font-medium mb-4">Overview</h2>
              <br />
              {cs.overview.map((para, i) => (
                <p key={i} className="text-[1.1rem] leading-[1.6] text-[var(--ink)] mb-4">{para}</p>
              ))}
            </section>

            <section id="what-we-did" className="scroll-mt-8">
              <h2 className="text-[1.7rem] text-[var(--teal)] font-medium mb-4">What we did</h2>
              <br />
              <ul className="grid gap-4 list-none p-0 m-0">
                {cs.whatWeDid.map((w) => (
                  <li key={w.title} className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[12px] p-6">
                    <h3 className="text-[1.15rem] font-medium text-[var(--ink)]">{w.title}</h3>
                    <br />
                    <p className="mt-2 text-[1rem] text-[var(--grey-text)] leading-relaxed">{w.desc}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="deliverables" className="scroll-mt-8">
              <h2 className="text-[1.7rem] text-[var(--teal)] font-medium mb-4">Deliverables</h2>
              <br />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0">
                {cs.deliverables.map((deliv) => (
                  <li key={deliv} className="relative pl-5 text-[1rem] text-[var(--ink)] before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--teal)]">
                    {deliv}
                  </li>
                ))}
              </ul>
            </section>

            {/* Mid-CTA Prompt */}
            <div className="border border-[rgba(45,45,39,0.1)] bg-white rounded-[12px] p-7 flex items-center justify-between gap-6 flex-wrap">
              <p className="font-[family-name:var(--head)] font-medium text-[var(--teal)] text-[1.1rem]">
                Need similar specialist capability for your business?
              </p>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[5px]"
              >
                Explore our solutions
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </Link>
            </div>

            <section id="impact" className="scroll-mt-8">
              <h2 className="text-[1.7rem] text-[var(--teal)] font-medium mb-4">Business impact</h2>
              <br />
              <ul className="grid gap-4 list-none p-0 m-0">
                {cs.impact.map((imp) => (
                  <li key={imp.title} className="border-l-[3px] border-[var(--teal-muted)] pl-5">
                    <h3 className="text-[1.15rem] font-medium text-[var(--ink)]">{imp.title}</h3>
                    <br />
                    <p className="mt-1 text-[1.05rem] text-[var(--ink)] leading-relaxed">{imp.desc}</p>
                  </li>
                ))}
              </ul>
            </section>

            <p className="pt-6 border-t border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)]">
              Confidentiality Note: Client identity withheld upon request; commercial context and metrics shared with authorization.
            </p>
          </article>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to extend your execution capacity?
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
