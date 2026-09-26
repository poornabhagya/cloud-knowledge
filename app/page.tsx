"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanPrev(scrollLeft > 2);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 2);
  };

  const scrollTestimonials = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const firstItem = trackRef.current.querySelector("li");
    if (!firstItem) return;
    const step = firstItem.getBoundingClientRect().width + 48; // 3rem gap
    trackRef.current.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="wrap w-full max-w-full">
          <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.28] tracking-[-0.015em] font-semibold">
            Focus on your core.
            <br />
            We'll handle the rest.
          </h1>
          <br />
          <p className="mt-9 text-[1.2rem] leading-[1.7] max-w-[36rem] text-[var(--ink)]">
            Ceylon Knowledge Services works alongside your in-house leadership as a specialist execution partner—delivering research, financial modelling, analytics, and operational capacity without the delay of hiring.
          </p>
          <a
            href="#what-we-do"
            className="inline-block mt-10 font-[family-name:var(--head)] font-medium text-[1.05rem] text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)]"
          >
            What We Do
          </a>
        </div>
      </section>

      {/* ===== Capabilities Section ===== */}
      <section className="py-20 md:py-28" id="what-we-do">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-18 items-center">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[15ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              Our current stack
              <br />
              of capabilities
            </h2>
            <br />
            <p className="mt-6 text-[var(--ink)] max-w-[30rem] text-[1.0625rem] leading-[1.65]">
              Six dedicated service lines designed to integrate around your core team without friction or lock-in.
            </p>
            <div className="mt-9 flex flex-col gap-3 text-[0.9rem] text-[var(--grey-text)]">
              <span className="inline-flex items-center gap-2.5">
                <i className="w-[14px] h-[14px] rounded-[2px] border-[1.5px] border-[#8B8B83] inline-block" />
                Your team keeps the core
              </span>
              <span className="inline-flex items-center gap-2.5">
                <i className="w-[14px] h-[14px] rounded-[2px] bg-[var(--teal)] inline-block" />
                CKS covers the specialist work around it
              </span>
            </div>
          </div>

          {/* 3x3 Grid of Tiles */}
          <div className="grid w-full max-w-full grid-cols-3 gap-[10px] overflow-hidden">
            <div className="aspect-[1.25/1] rounded-[3px] border-[1.5px] border-[#8B8B83] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 text-[var(--grey-text)]">
              Leadership
            </div>
            <Link
              href="/solutions/strategy-research"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex min-w-0 flex-wrap items-end gap-1.5 break-words">
                Strategy and research
                <svg className="w-3.5 h-3.5 mb-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
            <div className="aspect-[1.25/1] rounded-[3px] border-[1.5px] border-[#8B8B83] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 text-[var(--grey-text)]">
              Sales
            </div>
            <Link
              href="/solutions/financial-modelling-planning"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex min-w-0 flex-wrap items-end gap-1.5 break-words">
                Financial modelling
                <svg className="w-3.5 h-3.5 mb-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
            <div className="aspect-[1.25/1] rounded-[3px] border-[1.5px] border-[#8B8B83] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 text-[var(--grey-text)]">
              Product
            </div>
            <Link
              href="/solutions/data-driven-insights"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex min-w-0 flex-wrap items-end gap-1.5 break-words">
                Data driven insights
                <svg className="w-3.5 h-3.5 mb-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/solutions/marketing"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex min-w-0 flex-wrap items-end gap-1.5 break-words">
                Marketing
                <svg className="w-3.5 h-3.5 mb-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/solutions/retail-operations"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-2.5 sm:p-4 flex items-end font-[family-name:var(--head)] font-medium text-[0.82rem] sm:text-[1rem] leading-[1.15] break-words hyphens-auto min-w-0 hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex min-w-0 flex-wrap items-end gap-1.5 break-words">
                Retail operations
                <svg className="w-3.5 h-3.5 mb-0.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/solutions/cybersecurity"
              className="aspect-[1.25/1] rounded-[3px] bg-[var(--teal)] text-[var(--cream)] p-4 flex items-end font-[family-name:var(--head)] font-medium text-[1rem] leading-[1.2] hover:bg-[#022B2A] transition-colors no-underline group"
            >
              <span className="flex items-end gap-1.5">
                Cybersecurity
                <svg className="w-3.5 h-3.5 mb-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Testimonials (Native Scroll-Snap) ===== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="wrap w-full max-w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end mb-14">
            <div>
              <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
                Trusted by growth
                <br />
                focused organisations
              </h2>
              <br />
              <p className="mt-5 max-w-[34rem] text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
                See how CKS acts as an operational backbone so global leadership teams can focus on growth.
              </p>
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => scrollTestimonials("prev")}
                disabled={!canPrev}
                aria-label="Previous testimonials"
                className="w-11 h-11 rounded-full border-[1.5px] border-[var(--teal)] flex items-center justify-center text-[var(--teal)] disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[var(--teal)] hover:enabled:text-[var(--cream)] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("next")}
                disabled={!canNext}
                aria-label="Next testimonials"
                className="w-11 h-11 rounded-full border-[1.5px] border-[var(--teal)] flex items-center justify-center text-[var(--teal)] disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[var(--teal)] hover:enabled:text-[var(--cream)] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <ul
            ref={trackRef}
            onScroll={checkScroll}
            className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-3rem)/2)] gap-12 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden list-none p-0 m-0"
          >
            <li className="snap-start">
              <blockquote className="m-0 pl-6 border-l-[3px] border-[var(--teal-muted)]">
                <p className="text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                  "CKS delivered an investor-ready five-year financial model that gave us the confidence to defend our numbers in every room."
                </p>
                <footer className="mt-5 text-[0.95rem] text-[var(--grey-text)] leading-[1.6]">
                  <cite className="not-italic font-semibold text-[var(--ink)] block">Managing Director</cite>
                  Apparel Start-up, New Zealand
                </footer>
              </blockquote>
            </li>
            <li className="snap-start">
              <blockquote className="m-0 pl-6 border-l-[3px] border-[var(--teal-muted)]">
                <p className="text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                  "The independent valuation and cash flow analysis allowed our family business to resolve a major shareholder buy-out smoothly."
                </p>
                <footer className="mt-5 text-[0.95rem] text-[var(--grey-text)] leading-[1.6]">
                  <cite className="not-italic font-semibold text-[var(--ink)] block">Director</cite>
                  Construction Services, Australia
                </footer>
              </blockquote>
            </li>
            <li className="snap-start">
              <blockquote className="m-0 pl-6 border-l-[3px] border-[var(--teal-muted)]">
                <p className="text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                  "Their household income segmentation model gave our institution a realistic addressable market that published mobility data missed entirely."
                </p>
                <footer className="mt-5 text-[0.95rem] text-[var(--grey-text)] leading-[1.6]">
                  <cite className="not-italic font-semibold text-[var(--ink)] block">Strategic Lead</cite>
                  Higher Education Advisory, UK
                </footer>
              </blockquote>
            </li>
          </ul>

          <Link
            href="/testimonials"
            className="inline-block mt-14 font-[family-name:var(--head)] font-medium text-[1.05rem] text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)]"
          >
            Read all testimonials
          </Link>
        </div>
      </section>

      {/* ===== Engagement Models ===== */}
      <section className="py-24">
        <div className="wrap">
          <div className="mb-14">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              How you can work with us
            </h2>
            <br/>
            <p className="mt-5 max-w-[34rem] text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
              Choose the delivery model that fits your operational rhythm and internal capacity.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0 m-0">
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link href="/engagement#projects" className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group">
                  Projects
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                A defined question, clear scope, and fixed timeline. Ideal for standalone valuations, audits, or market briefs.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link href="/engagement#retainer" className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group">
                  Retainer
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                Recurring monthly capacity that flexes across evolving priorities without renegotiating scope each time.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link href="/engagement#dedicated-team" className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group">
                  Dedicated Team
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                Specialist analysts embedded directly inside your day-to-day workflows, operating as a true extension of your business.
              </p>
            </li>
          </ul>

          <Link
            href="/engagement"
            className="inline-block mt-14 font-[family-name:var(--head)] font-medium text-[1.05rem] text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)]"
          >
            How you can work with us
          </Link>
        </div>
      </section>

      {/* ===== CKS in Numbers ===== */}
      <section className="py-24 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap">
          <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--cream)] mb-16 leading-[1.3] tracking-[-0.015em] font-semibold">
            CKS in numbers
          </h2>
          <br/>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 list-none p-0 m-0">
            <li className="text-center">
              <svg className="w-10 h-10 mx-auto stroke-[var(--teal-quiet)] fill-none stroke-[1.4] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 40 40"><path d="M4 9h32v22H4z" /><path d="M14 9V6h12v3M4 18h32" /></svg>
              <span className="block mt-5 font-[family-name:var(--head)] font-semibold text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-[var(--cream)] [font-variant-numeric:tabular-nums]">
                15+
              </span>
              <span className="block mt-3 text-[0.95rem] text-[var(--teal-quiet)]">
                Client engagements
              </span>
            </li>
            <li className="text-center">
              <svg className="w-10 h-10 mx-auto stroke-[var(--teal-quiet)] fill-none stroke-[1.4] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 40 40"><path d="M20 8 4 15l16 7 16-7-16-7z" /><path d="M10 18v8c0 2 5 5 10 5s10-3 10-5v-8M36 15v9" /></svg>
              <span className="block mt-5 font-[family-name:var(--head)] font-semibold text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-[var(--cream)] [font-variant-numeric:tabular-nums]">
                15+
              </span>
              <span className="block mt-3 text-[0.95rem] text-[var(--teal-quiet)]">
                Academic backgrounds
              </span>
            </li>
            <li className="text-center">
              <svg className="w-10 h-10 mx-auto stroke-[var(--teal-quiet)] fill-none stroke-[1.4] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 40 40"><circle cx="14" cy="13" r="5" /><circle cx="27" cy="14" r="4" /><path d="M4 32c0-6 4-9 10-9s10 3 10 9M24 30c1-3 3-5 7-5 4 0 6 2 6 6" /></svg>
              <span className="block mt-5 font-[family-name:var(--head)] font-semibold text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-[var(--cream)] [font-variant-numeric:tabular-nums]">
                50+
              </span>
              <span className="block mt-3 text-[0.95rem] text-[var(--teal-quiet)]">
                Team strength
              </span>
            </li>
            <li className="text-center">
              <svg className="w-10 h-10 mx-auto stroke-[var(--teal-quiet)] fill-none stroke-[1.4] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 40 40"><path d="M20 6v28M8 34h24"/><path d="M20 10 8 14M20 10l12 4"/><path d="M4 22 8 14l4 8c0 3-2 4-4 4s-4-1-4-4zM28 22l4-8 4 8c0 3-2 4-4 4s-4-1-4-4z"/></svg>
              <span className="block mt-5 font-[family-name:var(--head)] font-semibold text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-[var(--cream)] [font-variant-numeric:tabular-nums]">
                51:49
              </span>
              <span className="block mt-3 text-[0.95rem] text-[var(--teal-quiet)]">
                Female to male ratio
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-24" id="contact">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[14ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              Contact Us
            </h2>
            <br/>
            <p className="mt-6 max-w-[26rem] text-[var(--ink)] text-[1.0625rem] leading-[1.7]">
              Discuss your specialist capacity needs with our team and discover how CKS integrates around your organization.
            </p>
            <br/>
            <br/>
            <p className="mt-12 text-[0.95rem] text-[var(--grey-text)] leading-[2.1]">
              <a href="mailto:hello@ceylonknowledge.com" className="text-[var(--teal)] hover:underline underline-offset-4">hello@ceylonknowledge.com</a><br />
              <a href="tel:+94777544988" className="text-[var(--teal)] hover:underline underline-offset-4">+94 77 754 4988</a><br />
              Colombo, Sri Lanka
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12" action="#" method="post" noValidate>
            <div className="field">
              <input type="text" id="first-name" name="first-name" required placeholder=" " />
              <label htmlFor="first-name">First Name <span className="req" aria-hidden="true">*</span></label>
            </div>
            <div className="field">
              <input type="text" id="last-name" name="last-name" required placeholder=" " />
              <label htmlFor="last-name">Last Name <span className="req" aria-hidden="true">*</span></label>
            </div>
            <div className="field">
              <input type="text" id="organisation" name="organisation" placeholder=" " />
              <label htmlFor="organisation">Organisation</label>
            </div>
            <div className="field">
              <input type="text" id="job-title" name="job-title" placeholder=" " />
              <label htmlFor="job-title">Job Title</label>
            </div>
            <div className="field">
              <input type="text" id="country" name="country" placeholder=" " />
              <label htmlFor="country">Country / Region</label>
            </div>
            <div className="field">
              <input type="text" id="business-type" name="business-type" placeholder=" " />
              <label htmlFor="business-type">Business Type</label>
            </div>
            <div className="field sm:col-span-2">
              <textarea placeholder=" " id="message" name="message"></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-5 flex-wrap mt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 bg-[var(--teal)] text-[var(--cream)] px-7 py-4 text-[1rem] rounded-full hover:bg-[#022B2A] transition-colors cursor-pointer border-none font-[family-name:var(--head)] font-medium group"
              >
                Let's Talk
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span className="text-[0.85rem] text-[var(--grey-text)]">Required fields marked *</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
