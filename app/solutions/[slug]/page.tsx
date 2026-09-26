import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

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
              {service.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="pt-20 pb-22 border-b border-[rgba(45,45,39,0.14)] mb-18">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.28] tracking-[-0.015em] font-semibold">
            {service.title}
          </h1>
          <p className="text-[1.2rem] leading-[1.7] max-w-[32rem] text-[var(--ink)]">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Sub-products (3 x 2 Card Grid) */}
      <section className="pb-24" aria-label="What we offer">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              What we offer
            </h2>
            <br/>
            <p className="max-w-[34rem] mt-4 text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
              {service.offerIntro}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {service.subProducts.map((prod) => (
              <li
                key={prod.title}
                className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 md:p-9 flex flex-col justify-start"
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
                <br/>
                {/* Heading ke neeche clean spacing */}
                <h3 className="text-[1.22rem] font-medium mt-6 mb-3.5 text-[var(--ink)] leading-[1.35] tracking-[-0.01em]">
                  {prod.title}
                </h3>
                <br/>
                {/* Paragraph copy text line-height adjustment */}
                <p className="text-[0.98rem] text-[var(--grey-text)] leading-[1.65]">
                  {prod.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-white">
        <div className="wrap">
          <div className="mb-14">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              How we fit into your team
            </h2>
            <br/>
            <p className="mt-5 max-w-[34rem] text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
              We play one of three roles depending on the client. The service lines are the same; what changes is how we fit around your team.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0 m-0">
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)] leading-[1.3]">Delivery partner</h3>
              <br/>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                For professional services firms that need an adjacent capability inside their own deliverable. We work under your brand, to your standards and timelines, so you can take on the full scope without building the team for it.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)] leading-[1.3]">Outsourced partner</h3>
              <br/>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                For established companies that want ongoing back end support, from reporting and analysis to research and operations. We take the recurring work off your desk so your people can stay on product, sales and customer retention.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)] leading-[1.3]">Strategic partner</h3>
              <br/>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                For start ups and growing companies that need capability they do not yet have. We build it with you, from financial models and market research to the proprietary data and tools your growth depends on, and hand it over as yours.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.28] tracking-[-0.015em] font-semibold">
              Ready to extend your team's execution capacity?
            </h2>
            <br/>
            <p className="mt-5 text-[var(--teal-quiet)] max-w-[30rem] text-[1.1rem] leading-[1.65]">
              Talk with our specialists to scope the exact model and expertise your business needs today.
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