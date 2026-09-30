import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ceylon Knowledge Services",
  description:
    "We extend your team’s capabilities so you can focus on what matters most. Discover our mission, approach, and core values.",
};

export default function AboutPage() {
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
              About Us
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            About Ceylon Knowledge Services (CKS)
          </h1>
          <br />
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            We extend your team’s capabilities so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* 1. What Drives Us (Three Ruled Columns) */}
      <section className="py-24" id="what-drives-us">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.22]">
              What Drives Us
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0 m-0">
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <span className="block font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] mb-2">01</span>
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">Mission Statement</h3>
              <br />
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                To serve as the operational backbone for ambitious organisations—taking complex strategic, analytical, and operational challenges off your plate so your team can focus entirely on building great products, serving clients, and hitting your goals.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <span className="block font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] mb-2">02</span>
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">The Problem We Solve</h3>
              <br />
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                High-performing teams are stretched thin. When your best people are bogged down by data validation, financial modelling, or back-end retail ops, they aren't focusing on what truly matters: your product, your service, and your clients. That's where we come in—handling the operational load thus freeing up your bandwidth for things that matter the most.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <span className="block font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] mb-2">03</span>
              <h3 className="text-[1.3rem] font-medium text-[var(--teal)]">How We Help</h3>
              <br />
              <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--ink)]">
                We don't just deliver reports. We are your capability multiplier. We become an extension of your team, working with the rigor and context that only insiders understand. We hum efficiently without the noise—delivering clean outputs, clear insights, and actionable recommendations that your team can implement immediately.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Why We Do This (Heading & Pull Quote Left, Body Right) */}
      <section className="py-24 bg-white" id="why-we-do-this">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              Why We Do This
            </h2>
            <blockquote className="mt-8 pl-6 border-l-[3px] border-[var(--teal)] font-[family-name:var(--head)] font-medium text-[1.35rem] leading-[1.4] text-[var(--teal)]">
              <p>
                "You're not outsourcing a task; you're gaining a strategic partner. We're invested in your success and take ownership of outcomes, not just deliverables."
              </p>
              <footer className="mt-4 font-[family-name:var(--body)] font-normal text-[0.95rem] text-[var(--grey-text)]">
                Ceylon Knowledge Services
              </footer>
            </blockquote>
          </div>
          <div className="space-y-6 text-[1.1rem] leading-[1.6] text-[var(--ink)]">
            <div>
              <h3 className="text-[1.25rem] font-medium text-[var(--teal)] mb-2">Context Matters</h3>
              <p>
                Nothing we deliver is templated every engagement starts from your context. We take time to understand your business, your competitive position, and your strategic priorities so every recommendation lands.
              </p>
            </div>
            <br />
            <div>
              <h3 className="text-[1.25rem] font-medium text-[var(--teal)] mb-2">Quality Over Volume</h3>
              <p>
                We believe in depth over speed. Rigorous analysis, validated data, and well-considered recommendations—the kind of work that actually moves the needle on decisions.
              </p>
            </div>
            <div>
              <h3 className="text-[1.25rem] font-medium text-[var(--teal)] mb-2">Partnership Mindset</h3>
              <p>
                You're not outsourcing a task; you're gaining a strategic partner. We're invested in your success and take ownership of outcomes, not just deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work (Five Steps with Counter) */}
      <section className="py-24" id="how-we-work">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              How We Work
            </h2>
            <br />
            <p className="mt-4 max-w-[34rem] text-[var(--ink)]">
              A structured operational cadence that ensures precision, alignment, and actionable outcomes.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 list-none p-0 m-0 [counter-reset:step]">
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                01
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Focused Scope</h3>
              <br />
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                We start with crystal clarity on what you need and why. No gold-plating, no unnecessary scope creep—just what matters for your decision.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                02
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Rigorous Execution</h3>
              <br />
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Whether it's data validation, market research, or financial modelling, we sweat the details. Your insights are only as good as the foundations beneath them.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                03
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Human Expertise</h3>
              <br />
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Modern tools and technology governed by human ingenuity, oversight, and judgement.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                04
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Clear Communication</h3>
              <br />
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Complex analysis shouldn't be opaque. We translate findings into plain language and actionable recommendations your team can run with immediately.
              </p>
            </li>
            <li className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] p-6 relative [counter-increment:step]">
              <span className="block font-[family-name:var(--head)] font-semibold text-[1.6rem] text-[var(--teal)] leading-none mb-4">
                05
              </span>
              <h3 className="text-[1.1rem] font-medium text-[var(--ink)]">Scalable Partnership</h3>
              <br />
              <p className="mt-2 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                Start with one project or become a strategic partner. We grow with your needs and maintain continuity as priorities shift.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. How You Can Work With Us (Three Models) */}
      <section className="py-24 bg-white" id="how-you-can-work-with-us">
        <div className="wrap">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              How You Can Work With Us
            </h2>
            <br />
            <p className="mt-4 max-w-[34rem] text-[var(--ink)]">
              Flexible engagement structures tailored to your operational velocity and resourcing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F7F4] border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-3">Project - Based</h3>
                <p className="text-[1rem] leading-[1.6] text-[var(--ink)]">
                  Single engagement for a specific challenge. Clean deliverables, defined timeline, focused scope.
                </p>
              </div>
            </div>

            <div className="bg-[#F8F7F4] border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-3">Retainer</h3>
                <p className="text-[1rem] leading-[1.6] text-[var(--ink)]">
                  Ongoing research and operations support. Regular deliverables, flexible scope, evolving partnership.
                </p>
              </div>
            </div>

            <div className="bg-[#F8F7F4] border border-[rgba(45,45,39,0.1)] rounded-[16px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[1.3rem] font-medium text-[var(--teal)] mb-3">Dedicated Team</h3>
                <p className="text-[1rem] leading-[1.6] text-[var(--ink)]">
                  Extended team model. Our analysts working as part of your organisation with deep continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values (Four Teal Tiles) */}
      <section className="py-24" id="core-values">
        <div className="wrap">
          <div className="mb-12">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              Core Values
            </h2>
            <br />
            <p className="mt-4 max-w-[34rem] text-[var(--ink)]">
              The foundational principles that guide every analysis, model, and client deliverable.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Rigour</h3>
                <br />
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  We don't cut corners on analysis. Every recommendation is backed by solid evidence and thorough validation.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Impact</h3>
                <br />
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  We measure success by outcomes—whether our work actually moves decisions and drives results for your business.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Clarity</h3>
                <br />
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  Complexity hidden is complexity wasted. We make findings accessible and insights actionable for your whole team.
                </p>
              </div>
            </li>

            <li className="bg-[var(--teal)] text-[var(--cream)] rounded-[16px] p-8 md:p-9 flex flex-col justify-between">
              <div>
                <span className="w-11 h-11 rounded-[10px] bg-[rgba(243,239,234,0.12)] grid place-items-center mb-5">
                  <svg className="w-5.5 h-5.5 stroke-[var(--cream)] fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
                  </svg>
                </span>
                <h3 className="text-[1.2rem] font-medium text-[var(--cream)]">Trust</h3>
                <br />
                <p className="mt-3 text-[0.95rem] text-[var(--teal-quiet)] leading-relaxed">
                  We earn your confidence through quality, consistency, and genuine partnership. Your success is our success.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Our Team & Statistics */}
      <section className="py-24 bg-white" id="our-team">
        <div className="wrap">
          <div className="max-w-[44rem] mb-16">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] leading-[1.22]">
              Our Team
            </h2>
            <br />
            <p className="mt-4 text-[1.15rem] leading-[1.65] text-[var(--ink)]">
              We're a team of experienced strategists, analysts, and operators drawn from leading consulting firms, financial institutions, and growth-stage companies. We combine deep domain expertise with practical business experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[rgba(45,45,39,0.14)] pt-12">
            <div>
              <div className="font-[family-name:var(--head)] text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-[var(--teal)] leading-none mb-3">
                60+
              </div>
              <p className="text-[1rem] font-medium text-[var(--ink)]">Members Strong</p>
            </div>
            <div>
              <div className="font-[family-name:var(--head)] text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-[var(--teal)] leading-none mb-3">
                51:49
              </div>
              <p className="text-[1rem] font-medium text-[var(--ink)]">F:M Ratio</p>
            </div>
            <div>
              <div className="font-[family-name:var(--head)] text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-[var(--teal)] leading-none mb-3">
                50+
              </div>
              <p className="text-[1rem] font-medium text-[var(--ink)]">Years of Collective Experience</p>
            </div>
            <div>
              <div className="font-[family-name:var(--head)] text-[clamp(2.4rem,4vw,3.4rem)] font-bold text-[var(--teal)] leading-none mb-3">
                15+
              </div>
              <p className="text-[1rem] font-medium text-[var(--ink)]">Academic Backgrounds</p>
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