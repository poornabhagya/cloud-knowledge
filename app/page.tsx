"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { testimonialsList } from "@/data/testimonials";

export default function Home() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Testimonials page se pehle 4 real items connect kiye gaye hain
  const homeTestimonials = testimonialsList.slice(0, 4);

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
          <span className="block font-[family-name:var(--head)] font-medium text-[0.95rem] text-[var(--teal)] mb-3 tracking-wide uppercase">
            Your Knowledge Process Outsourcing Partner
          </span>
          <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.28] tracking-[-0.015em] font-semibold">
            Focus on your core.
            <br />
            We'll handle the rest.
          </h1>
          <br />
          <p className="mt-4 text-[1.2rem] leading-[1.7] max-w-[38rem] text-[var(--ink)]">
            Tailored Solutions, Global Impact. Ceylon Knowledge Services works alongside your in-house leadership as a specialist execution partner—delivering research, financial modelling, analytics, and operational capacity without the delay of hiring.
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
            <p className="mt-4 text-[var(--ink)] max-w-[32rem] text-[1.05rem] leading-[1.65]">
              Ceylon Knowledge Services specialises in delivering meticulously tailored, world-class solutions across a spectrum of critical business functions, all powered by our highly skilled talent pool. Each capability is considered a plug-in, designed to integrate seamlessly with your operations and function as an extension of them to drive value and achieve measurable results.
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

      {/* ===== Testimonials (Native Scroll-Snap with Real Imported Testimonials) ===== */}
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
                We work with some of the most ambitious companies and executives. Here's what they have to say about working with us.
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("next")}
                disabled={!canNext}
                aria-label="Next testimonials"
                className="w-11 h-11 rounded-full border-[1.5px] border-[var(--teal)] flex items-center justify-center text-[var(--teal)] disabled:opacity-30 disabled:cursor-default hover:enabled:bg-[var(--teal)] hover:enabled:text-[var(--cream)] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <ul
            ref={trackRef}
            onScroll={checkScroll}
            className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-3rem)/2)] gap-12 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden list-none p-0 m-0"
          >
            {homeTestimonials.map((item, index) => (
              <li key={index} className="snap-start">
                <blockquote className="m-0 pl-6 border-l-[3px] border-[var(--teal-muted)]">
                  <p className="text-[1.1rem] leading-[1.7] text-[var(--ink)]">
                    "{item.quote}"
                  </p>
                  <footer className="mt-5 text-[0.95rem] text-[var(--grey-text)] leading-[1.6]">
                    <cite className="not-italic font-semibold text-[var(--ink)] block">
                      {item.author}
                    </cite>
                    {item.company}, {item.country}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>

          <Link
            href="/testimonials"
            className="inline-block mt-14 font-[family-name:var(--head)] font-medium text-[1.05rem] text-[var(--teal)] underline underline-offset-[6px] decoration-[1.5px] hover:decoration-[var(--teal-muted)]"
          >
            Read all testimonials
          </Link>
        </div>
      </section>

      {/* ===== How You Can Work With Us (Centered Icons & Content) ===== */}
      <section className="py-24 bg-[#053835] text-[var(--cream)]" id="engagement-models">
        <div className="wrap">
          <div className="mb-16 text-center">
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold tracking-tight text-white mb-4">
              How You Can Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Based */}
            <div className="border border-[rgba(255,255,255,0.18)] bg-[#042C2A]/60 rounded-[18px] p-8 md:p-10 flex flex-col items-center text-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[1.35rem] font-bold text-white mb-4 text-center">
                  Project Based
                </h3>
                <p className="text-[0.95rem] text-[#C0D4D2] leading-relaxed text-center">
                  Single engagement for a specific challenge. Clean deliverables, defined timeline, focused scope.
                </p>
              </div>
              <div className="mt-8 flex justify-center w-full">
                <Link
                  href="/engagement#projects"
                  className="font-[family-name:var(--head)] font-semibold text-[0.98rem] text-white hover:text-[#88C0BA] transition-colors inline-flex items-center gap-1.5"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Retainer */}
            <div className="border border-[rgba(255,255,255,0.18)] bg-[#042C2A]/60 rounded-[18px] p-8 md:p-10 flex flex-col items-center text-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[1.35rem] font-bold text-white mb-4 text-center">
                  Retainer
                </h3>
                <p className="text-[0.95rem] text-[#C0D4D2] leading-relaxed text-center">
                  Ongoing research and operations support. Regular deliverables, flexible scope, evolving partnership.
                </p>
              </div>
              <div className="mt-8 flex justify-center w-full">
                <Link
                  href="/engagement#retainer"
                  className="font-[family-name:var(--head)] font-semibold text-[0.98rem] text-white hover:text-[#88C0BA] transition-colors inline-flex items-center gap-1.5"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Dedicated Team */}
            <div className="border border-[rgba(255,255,255,0.18)] bg-[#042C2A]/60 rounded-[18px] p-8 md:p-10 flex flex-col items-center text-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-[1.35rem] font-bold text-white mb-4 text-center">
                  Dedicated Team
                </h3>
                <p className="text-[0.95rem] text-[#C0D4D2] leading-relaxed text-center">
                  Extended team model. Our analysts working as part of your organisation with deep continuity.
                </p>
              </div>
              <div className="mt-8 flex justify-center w-full">
                <Link
                  href="/engagement#dedicated-team"
                  className="font-[family-name:var(--head)] font-semibold text-[0.98rem] text-white hover:text-[#88C0BA] transition-colors inline-flex items-center gap-1.5"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CKS in Numbers ===== */}
      <section className="py-24 bg-[var(--teal)] text-[var(--cream)] border-t border-[rgba(255,255,255,0.08)]">
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