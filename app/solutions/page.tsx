import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Ceylon Knowledge Services",
  description:
    "Six dedicated service lines designed to integrate around your core team without friction.",
};

const solutionsList = [
  {
    title: "Strategy and research",
    href: "/solutions/strategy-research",
    lead: "Validate market opportunities before capital is committed with deep sector research.",
    inc: "Deep-Dive Sector Reports, Emerging Trends, Regulatory Analyses, Benchmarking Studies",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      </svg>
    ),
  },
  {
    title: "Financial modelling and planning",
    href: "/solutions/financial-modelling-planning",
    lead: "Build the forecasts, budgets, and scenario models that underpin capital decisions.",
    inc: "Valuations, Budget Development, Capex Planning, Margin Optimisation, Cash Flow Stress Testing",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 20h18" />
        <path d="M5 16l4-5 4 3 6-8" />
        <path d="M15 6h4v4" />
      </svg>
    ),
  },
  {
    title: "Data driven insights",
    href: "/solutions/data-driven-insights",
    lead: "Convert complex raw data into predictive models and actionable decision engines.",
    inc: "Predictive Analytics, Customer Segmentation, Performance Dashboards, Quality Audits",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    href: "/solutions/marketing",
    lead: "Turn marketing into measurable pipeline and authority with structured execution.",
    inc: "AI Search Optimisation, Brand Narrative, Thought Leadership, SEO, Web Development",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z" />
        <path d="M17 9a4 4 0 0 1 0 6" />
      </svg>
    ),
  },
{
    title: "Operations & performance",
    href: "/solutions/retail-operations",
    lead: "Enhance retail and business operations through inventory optimisation, customer analytics, and data-driven management.",
    inc: "Inventory Systems, KPI Dashboards, Customer Analytics, Discount Effectiveness, Process Audits",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l1.5-4h15L21 9" />
        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
        <path d="M5 12v8h14v-8M10 20v-5h4v5" />
      </svg>
    ),
  },
{
    title: "Cybersecurity",
    href: "/solutions/cybersecurity",
    lead: "Risk assessments, controls, policies, penetration testing, and incident preparedness, delivered by senior cybersecurity specialists.",
    inc: "Penetration Testing, AI Security, Blueprint, Vendor Audits, SOC, Red Team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)]" aria-label="Breadcrumb">
        <div className="wrap">
          <ol className="flex gap-2 list-none m-0 py-4 p-0">
            <li>
              <Link href="/" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Solutions
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.28] tracking-[-0.015em] font-semibold">
            Specialist execution across six key disciplines
          </h1>
          <p className="text-[1.2rem] leading-[1.7] max-w-[32rem] text-[var(--ink)]">
            Designed to fit around your in-house teams. We take on the specialist research, financial, analytics, and operational work so your core leadership stays focused.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24" aria-label="Our solutions">
        <div className="wrap">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
            {solutionsList.map((item) => (
              <li
                key={item.title}
                className="flex flex-col bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 md:p-10 transition-[border-color,transform] duration-150 hover:border-[var(--teal-muted)] hover:-translate-y-0.5"
              >
                <span
                  className="w-[52px] h-[52px] rounded-[12px] bg-[rgba(4,61,59,0.08)] grid place-items-center [&_svg]:w-[26px] [&_svg]:h-[26px] [&_svg]:stroke-[var(--teal)] [&_svg]:fill-none [&_svg]:stroke-[1.6] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <br/>

                <h2 className="text-[1.4rem] font-medium mt-6 mb-3 text-[var(--ink)] leading-[1.3]">
                  <Link href={item.href} className="hover:text-[var(--teal)] no-underline text-inherit">
                    {item.title}
                  </Link>
                </h2>
                <br/>

                <div className="mt-1 flex flex-col gap-4">
                  <p className="text-[1.08rem] text-[var(--ink)] max-w-[34rem] leading-[1.65]">
                    {item.lead}
                  </p>
                  
                  {/* Includes section with clear spacing */}
                  <div className="text-[var(--grey-text)] text-[0.95rem] max-w-[34rem]">
                    <span className="font-semibold text-[var(--ink)] block mb-1">Includes:</span>
                    <span className="leading-[1.65] block">{item.inc}</span>
                  </div>
                </div>

                <Link
                  href={item.href}
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
                For start ups and growing companies that need capability they do not yet have. We build it with you, from financial models and market research to proprietary tools, and hand it over as yours.
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