"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Target,
  TrendingUp,
  PieChart,
  Layers,
  Database,
  Megaphone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { testimonialsList } from "@/data/testimonials";
import ContactForm from "../components/ContactForm";

const capabilities = [
  {
    title: "Leadership",
    icon: Users,
    href: null,
    hasArrow: false,
    isCore: true,
  },
  {
    title: "Strategy",
    icon: Target,
    href: "/solutions/strategy-research",
    hasArrow: true,
    isCore: false,
  },
  {
    title: "Sales",
    icon: TrendingUp,
    href: null,
    hasArrow: false,
    isCore: true,
  },
  {
    title: "Finance",
    icon: PieChart,
    href: "/solutions/financial-modelling-planning",
    hasArrow: true,
    isCore: false,
  },
  {
    title: "Product",
    icon: Layers,
    href: null,
    hasArrow: false,
    isCore: true,
  },
  {
    title: "Data",
    icon: Database,
    href: "/solutions/data-driven-insights",
    hasArrow: true,
    isCore: false,
  },
  {
    title: "Marketing",
    icon: Megaphone,
    href: "/solutions/marketing",
    hasArrow: true,
    isCore: false,
  },
  {
    title: "Operations",
    icon: Settings,
    href: "/solutions/retail-operations",
    hasArrow: true,
    isCore: false,
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    href: "/solutions/cybersecurity",
    hasArrow: true,
    isCore: false,
  },
];

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

          {/* Responsive Grid of Tiles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-full">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const cardContent = (
                <>
                  <div className="w-full flex items-center justify-start mb-4 sm:mb-6">
                    <Icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 ${
                        item.isCore ? "text-[#0B3B36]" : "text-white/95"
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="w-full flex items-center justify-between gap-2 mt-auto">
                    <span className="font-poppins font-[family-name:var(--head)] font-medium text-[15px] sm:text-[16px] leading-tight break-words">
                      {item.title}
                    </span>
                    {item.hasArrow && (
                      <span className="text-xs opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                        ↗
                      </span>
                    )}
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex flex-col justify-between items-start text-left p-4 sm:p-6 rounded-[16px] bg-[var(--teal)] text-[var(--cream)] hover:bg-[#022B2A] transition-colors no-underline group w-full min-h-[110px] sm:min-h-[140px] sm:aspect-[1.15/1] overflow-hidden"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between items-start text-left p-4 sm:p-6 rounded-[16px] border-[1.5px] border-[#8B8B83] text-[var(--grey-text)] bg-transparent w-full min-h-[110px] sm:min-h-[140px] sm:aspect-[1.15/1] overflow-hidden"
                >
                  {cardContent}
                </div>
              );
            })}
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

      {/* ===== Engagement Models ===== */}
      <section className="py-24" id="engagement-models">
        <div className="wrap">
          <div className="mb-14">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] text-[var(--teal)] max-w-[20ch] leading-[1.3] tracking-[-0.015em] font-semibold">
              How you can work with us
            </h2>
            <br />
            <p className="mt-5 max-w-[34rem] text-[var(--ink)] text-[1.0625rem] leading-[1.65]">
              Choose the delivery model that fits your operational rhythm and internal capacity.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 list-none p-0 m-0">
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link
                  href="/engagement#project-based"
                  className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group"
                >
                  Projects
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-[var(--ink)]">
                A defined question, clear scope, and fixed timeline. Ideal for standalone valuations, audits, or market briefs.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link
                  href="/engagement#retainer"
                  className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group"
                >
                  Retainer
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-[var(--ink)]">
                Ongoing support for work that recurs each month. Seamlessly adjusts to shifting priorities and ad-hoc requirements.
              </p>
            </li>
            <li className="pl-6 border-l-[3px] border-[var(--teal-muted)]">
              <h3 className="text-[1.3rem] font-medium leading-[1.35]">
                <Link
                  href="/engagement#dedicated-team"
                  className="inline-flex items-center gap-2 text-[var(--teal)] no-underline hover:underline underline-offset-[5px] group"
                >
                  Dedicated Team
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 12 12 4M6 4h6v6" />
                  </svg>
                </Link>
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-[var(--ink)]">
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
          <ContactForm
            formSubject="New Inquiry - CKS Homepage"
            source="Home Page"
          />
        </div>
      </section>
    </main>
  );
}