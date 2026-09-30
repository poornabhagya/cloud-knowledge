import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Ceylon Knowledge Services",
  description:
    "Client perspectives on CKS specialist execution across corporate finance, research, analytics, and operations.",
};

const testimonialsList = [
  {
    quote:
      "That is the single most important piece of information we haven't been able to find anywhere else.",
    author: "Senior Strategy Executive",
    department: "Strategic Planning",
    company: "TAM Analysis Engagement",
    engagementType: "Strategic Insight",
    serviceLine: "Strategy and research",
    country: "Global",
    outcomes: [
      "Identified precise household-level TAM data",
      "Filled critical market intelligence gap",
      "Enabled confident market entry decisions",
    ],
  },
  {
    quote:
      "CKS has streamlined all of our retail operations down to the t. We know where exactly our inventory is and how exactly they are performing.",
    author: "CFO",
    department: "Finance & Operations Leadership",
    company: "Multi-Store Menswear Brand",
    engagementType: "Strategic Insight",
    serviceLine: "Retail operations",
    country: "Singapore",
    outcomes: [
      "Complete inventory visibility across stores",
      "Real-time performance tracking",
      "Optimised operational efficiency",
    ],
  },
  {
    quote:
      "The valuation engagement with CKS was very helpful in evaluating our strategic options which eventually led to buying out the stake of our external investor.",
    author: "CEO",
    department: "Executive Leadership",
    company: "Family-Owned Construction Business",
    engagementType: "Strategic Decision",
    serviceLine: "Financial modelling",
    country: "Australia",
    outcomes: [
      "Accurate company valuation framework",
      "Clear financial options analysis",
      "Successful investor buyout execution",
    ],
  },
  {
    quote:
      "The briefings contain a wealth of information in one place.",
    author: "Strategy Executive",
    department: "Strategic Planning",
    company: "Growth Stage Startup",
    engagementType: "Research",
    serviceLine: "Strategy and research",
    country: "United Kingdom",
    outcomes: [
      "Consolidated industry intelligence",
      "Time saved on research compilation",
      "Better informed strategic decisions",
    ],
  },
  {
    quote:
      "The budgeting and valuation exercise was extremely valuable in planning our product roadmap and fundraising requirements.",
    author: "CEO",
    department: "Executive Leadership",
    company: "Active Wear Startup",
    engagementType: "Fundraising",
    serviceLine: "Financial modelling",
    country: "New Zealand",
    outcomes: [
      "Clear financial roadmap developed",
      "Product investment prioritisation",
      "Informed fundraising strategy",
    ],
  },
];

export default function TestimonialsPage() {
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
                href="/case-studies"
                className="text-[var(--grey-text)] hover:underline underline-offset-[3px]"
              >
                Our work
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Testimonials
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Testimonials
          </h1>
          <br/>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            What leaders say about partnering with CKS on high-stakes models, research, and operational execution.
          </p>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="pb-24" aria-label="Client testimonials">
        <div className="wrap">
          <ul className="list-none m-0 p-0 grid gap-6">
            {testimonialsList.map((item, index) => (
              <li
                key={index}
                className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14"
              >
                {/* Left: Quote & Meta */}
                <blockquote className="m-0 flex flex-col justify-between">
                  <p className="font-[family-name:var(--head)] font-medium text-[1.25rem] md:text-[1.3rem] leading-[1.45] text-[var(--teal)]">
                    "{item.quote}"
                  </p>
                  <div>
                    <footer className="mt-6 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                      <cite className="not-italic font-semibold text-[var(--ink)] block text-[1.05rem]">
                        {item.author}
                      </cite>
                      {item.department}
                      <br />
                      {item.company}
                    </footer>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--cream)] bg-[var(--teal)] py-1 px-3 rounded-full">
                        {item.engagementType}
                      </span>
                      <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                        {item.serviceLine}
                      </span>
                      <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                        {item.country}
                      </span>
                    </div>
                  </div>
                </blockquote>

                {/* Right: Outcomes Bullets */}
                <div className="border-t lg:border-t-0 lg:border-l border-[rgba(45,45,39,0.14)] pt-6 lg:pt-0 lg:pl-10">
                  <h3 className="font-[family-name:var(--head)] font-medium text-[0.9rem] text-[var(--teal-muted)] uppercase tracking-wider">
                    Outcomes
                  </h3>
                  <ul className="list-none m-0 p-0 mt-4 space-y-3">
                    {item.outcomes.map((outcome, oIdx) => (
                      <li
                        key={oIdx}
                        className="relative pl-5 text-[1rem] text-[var(--ink)] leading-normal before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--teal)]"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
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
              Ready to extend your execution capacity?
            </h2>
            <br/>
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