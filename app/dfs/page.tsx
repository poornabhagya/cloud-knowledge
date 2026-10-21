"use client";

import { useState } from "react";
import Link from "next/link";

const basePath = "";

export default function DfsLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "9f1efe04-8883-42c6-9198-421c83444200";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Inquiry - CKS Dubai FinTech Summit",
          from_name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: "Dubai FinTech Summit Landing Page",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Failed to submit your message. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or reach out directly via WhatsApp."
      );
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#F4F1E8] text-[#15201E] relative overflow-x-clip overflow-y-visible">
      {/* ------------------------------------------------------------- */}
      {/* 1. Header / Hero Section */}
      {/* ------------------------------------------------------------- */}
      <header className="bg-[#043D3B] text-[#F3EFEA] relative overflow-x-clip">
        {/* Subtle decorative glow */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#489D96]/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Top Bar */}
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 border-b border-[#489D96]/20 gap-4">
            <Link href="/" className="flex items-center no-underline transition-opacity hover:opacity-90">
              <img
                src={`${basePath}/images/logos/cks-logo.png`}
                alt="Ceylon Knowledge Services"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <span className="bg-[#489D96] text-[#043D3B] font-semibold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
              Dubai FinTech Summit 2026
            </span>
          </div>

          {/* Hero Content */}
          <div className="pt-12 sm:pt-16 pb-16 sm:pb-20">
            <p className="text-[#489D96] font-medium text-[18px] mb-4 tracking-wide">
              Good to meet you.
            </p>
            <br/>

            {/* Layout Wrapping: Left Content & Right-aligned Founder Card */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              
              {/* Left Column: Heading, Subtitle, Buttons */}
              <div className="flex-[999_1_520px] w-full max-w-5xl">
                <h1 className="font-poppins font-semibold text-[34px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.01em] text-[#F3EFEA] mb-8">
                  Dedicated analytics,<br />
                  modelling and<br />
                  compliance teams for<br />
                  fintechs, run from<br />
                  Colombo.
                </h1>
                <br/>

                <p className="text-[17px] md:text-[19px] leading-[1.55] opacity-92 mb-8 max-w-[620px]">
                  We build and run the teams behind your numbers, data and controls, so<br className="hidden md:inline" />
                  your people can focus on growing the business.
                </p>
                <br/>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://calendly.com/krishanth-ceylonknowledge/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F3EFEA] text-[#043D3B] hover:bg-white font-semibold rounded-lg px-6 py-3.5 text-[16px] inline-flex items-center gap-2 transition-all duration-150 shadow-sm"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Book a 30 minute call</span>
                  </a>

                  <a
                    href="https://wa.me/971568619983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/60 text-[#F3EFEA] rounded-lg px-5 py-3.5 text-[16px] inline-flex items-center gap-2 bg-transparent hover:bg-white/5 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`${basePath}/krishanth-jayarajah.vcf`}
                    download="krishanth-jayarajah.vcf"
                    className="border border-white/60 text-[#F3EFEA] rounded-lg px-5 py-3.5 text-[16px] inline-flex items-center gap-2 bg-transparent hover:bg-white/5 transition-colors"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      <line x1="19" y1="8" x2="19" y2="14" strokeLinecap="round" />
                      <line x1="22" y1="11" x2="16" y2="11" strokeLinecap="round" />
                    </svg>
                    <span>Save contact</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Founder Biography Card (Lower Right Align) */}
              <div className="flex-[1_1_380px] self-end max-w-[380px] w-full mt-8 md:mt-0">
                <div className="bg-[#2D2D27] rounded-xl p-5 flex items-center gap-4 max-w-[380px] w-full mt-8 md:mt-0 shadow-lg border border-white/5">
                  <img
                    src={`${basePath}/images/dfs/krishanth.jpg`}
                    alt="Krishanth Jayarajah"
                    className="w-[72px] h-[72px] rounded-full object-cover border-2 border-[#489D96] flex-shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-poppins font-semibold text-[18px] leading-tight text-[#F3EFEA]">
                      Krishanth Jayarajah
                    </span>
                    <span className="text-[14px] text-white/80 font-medium mt-0.5">
                      Founder and CEO, CKS
                    </span>
                    <a href="mailto:krishanth@ceylonknowledge.com" className="text-[14px] text-[#489D96] hover:underline break-all mt-1">
                      krishanth@ceylonknowledge.com
                    </a>
                    <a href="tel:+971568619983" className="text-[14px] text-white/80 hover:underline">
                      +971 56 861 9983 (UAE, WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. Four Ways Fintechs Can Use a CKS Team */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#F4F1E8] py-20 border-b border-neutral-200/60">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-poppins text-xs font-semibold uppercase tracking-[0.08em] text-[#043D3B] mb-3">
            WHAT WE WOULD DO FOR YOU
          </p>
          <br/>
          <h2 className="font-poppins font-semibold text-[28px] sm:text-[34px] md:text-[38px] leading-[1.2] text-[#15201E] mb-10 max-w-[720px]">
            Four ways fintechs can use a CKS<br className="hidden sm:inline" /> team
          </h2>
          <br/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {/* Card 1 */}
            <article className="bg-white rounded-[16px] p-7 flex flex-col border border-neutral-200/50 shadow-sm h-full">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#043D3B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 15l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] text-[#15201E] leading-snug min-h-[56px] flex items-start mb-3">
                Financial modelling and planning
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#625D57] font-normal flex-grow">
                Board and investor models, unit economics, budgets and scenario planning, maintained month to month.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-[16px] p-7 flex flex-col border border-neutral-200/50 shadow-sm h-full">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#043D3B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                  <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] text-[#15201E] leading-snug min-h-[56px] flex items-start mb-3">
                Data and AI builds
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#625D57] font-normal flex-grow">
                Data pipelines, reporting and LLM systems with guardrails, input and output validation, and testing. You own what we build.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-[16px] p-7 flex flex-col border border-neutral-200/50 shadow-sm h-full">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#043D3B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] text-[#15201E] leading-snug min-h-[56px] flex items-start mb-3">
                Cybersecurity and compliance support
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#625D57] font-normal flex-grow">
                Security operations support, control testing and the documentation regulators and partners ask for.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-white rounded-[16px] p-7 flex flex-col border border-neutral-200/50 shadow-sm h-full">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#043D3B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] text-[#15201E] leading-snug min-h-[56px] flex items-start mb-3">
                Research and strategy
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#625D57] font-normal flex-grow">
                Market sizing, competitor analysis, go to market work and commercial due diligence for new markets and products.
              </p>
            </article>
          </div>
          <br/>

          <p className="mt-8 text-[15px] text-[#043D3B]">
            Engage us by project, on a retainer, or as a dedicated team that grows with you.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. Why CKS, Why Colombo */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <p className="text-xs font-bold tracking-widest text-[#043D3B]/70 uppercase mb-2">
                WHY CKS, WHY COLOMBO
              </p>
              <br/>
              <h2 className="font-[family-name:var(--head)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#043D3B] mb-8 leading-snug">
                Senior oversight, a team that stays, and hours that work for you
              </h2>
              <br/>

              <ul className="m-0 p-0 list-none flex flex-col gap-5 max-w-[540px]">
                <li className="flex gap-[14px] items-start text-left">
                  <svg className="w-[22px] h-[22px] text-[#1D4E4A] shrink-0 mt-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  <span className="text-[15px] sm:text-[16px] leading-[1.6] text-[#15201E] font-inter">
                    <strong className="font-poppins font-semibold text-[#1D4E4A] mr-1">We work your hours.</strong> 
                    <span className="text-[#625D57]">Colombo is ninety minutes ahead of Dubai, so we share your full working day, and we staff to the hours your team keeps, wherever you are.</span>
                  </span>
                </li>

                <li className="flex gap-[14px] items-start text-left">
                  <svg className="w-[22px] h-[22px] text-[#1D4E4A] shrink-0 mt-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.9" />
                    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
                  </svg>
                  <span className="text-[15px] sm:text-[16px] leading-[1.6] text-[#15201E] font-inter">
                    <strong className="font-poppins font-semibold text-[#1D4E4A] mr-1">Teams built to your needs.</strong> 
                    <span className="text-[#625D57]">We assemble the team, then grow it as your work grows.</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column (Stats Grid & Boxes) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* 2 Stats side by side */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#F3EFEA] rounded-xl p-6 border border-neutral-200/80">
                  <div className="font-[family-name:var(--head)] text-4xl sm:text-5xl font-bold text-[#043D3B]">
                    60
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D2D27]/75 mt-2 font-medium">
                    people across six practices
                  </p>
                </div>

                <div className="bg-[#F3EFEA] rounded-xl p-6 border border-neutral-200/80">
                  <div className="font-[family-name:var(--head)] text-4xl sm:text-5xl font-bold text-[#043D3B]">
                    2021
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D2D27]/75 mt-2 font-medium">
                    founded in Colombo
                  </p>
                </div>
              </div>

              {/* Founder Background Box */}
              <div className="bg-[#F3EFEA] rounded-xl p-6 border border-neutral-200/80">
                <h3 className="font-semibold text-[#043D3B] text-base mb-2">
                  Led by a founder from the industry
                </h3>
                <br/>
                <p className="text-sm text-[#2D2D27]/80 leading-relaxed">
                  Krishanth started his career at Morgan Stanley in London and was an Associate Vice President at Acuity Analytics before founding CKS.
                </p>
              </div>

              {/* Client Quote Box */}
              <div className="bg-[#043D3B] text-[#F3EFEA] rounded-xl p-6 sm:p-7 shadow-sm border border-[#489D96]/30">
                <p className="text-sm sm:text-base leading-relaxed italic text-[#F3EFEA]/95">
                  &ldquo;CKS functions as a direct extension of our internal team. The depth of domain knowledge and immediate turnaround gives our executive team complete confidence.&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-[#489D96]/30 flex items-center justify-between text-xs text-[#F3EFEA]/70">
                  <span className="font-semibold text-[#489D96]">FinTech Leadership Partner</span>
                  <span>GCC &amp; UK Client</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. Security & Data Handling */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#2D2D27] text-[#F3EFEA] py-16 sm:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--head)] text-2xl sm:text-3xl font-semibold text-[#F3EFEA] mb-10">
            How we handle your data
          </h2>
          <br/>
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="border-t-2 border-[#489D96] pt-5">
              <h3 className="font-semibold text-lg text-[#F3EFEA] mb-2">
                ISO 27001 aligned controls
              </h3>
              
              <p className="text-sm sm:text-base text-[#F3EFEA]/75 leading-relaxed">
                Controls in place today. Certification is in progress.
              </p>
            </div>

            {/* Item 2 */}
            <div className="border-t-2 border-[#489D96] pt-5">
              <h3 className="font-semibold text-lg text-[#F3EFEA] mb-2">
                We sign your DPA
              </h3>
              <p className="text-sm sm:text-base text-[#F3EFEA]/75 leading-relaxed">
                Your data processing terms, not ours.
              </p>
            </div>

            {/* Item 3 */}
            <div className="border-t-2 border-[#489D96] pt-5">
              <h3 className="font-semibold text-lg text-[#F3EFEA] mb-2">
                Your data stays where you keep it
              </h3>
              <p className="text-sm sm:text-base text-[#F3EFEA]/75 leading-relaxed">
                We work in your environment, or store data to your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. Pick Up Where We Left Off & Contact Form */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#F3EFEA] py-20 lg:py-24">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 2-Column Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            
            {/* Left Side */}
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--head)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#043D3B] mb-4">
                Pick up where we left off
              </h2>
              <p className="text-[#2D2D27]/80 text-base sm:text-lg leading-relaxed mb-8">
                Book a 30 minute call straight into my calendar, or leave a note and I will reply within one working day.
              </p>

<br/>
              <div className="space-y-5">
                <div>
                  <a
                    href="https://calendly.com/krishanth-ceylonknowledge/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1D4E4A] hover:opacity-90 text-[#F4F1E8] font-semibold px-6 py-3.5 rounded-[4px] inline-flex items-center text-[16px] transition-all shadow-sm"
                  >
                    Open my calendar
                  </a>
                </div>

                <div>
                  <a
                    href={`${basePath}/cks-one-pager.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="cks-one-pager.pdf"
                    className="inline-block text-[#1D4E4A] hover:underline font-semibold text-sm underline underline-offset-4 transition-colors"
                  >
                    Download the one page overview (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side (Form Card) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[16px] p-8 sm:p-9 shadow-sm border border-neutral-200/80">
                {status === "success" ? (
                  <div className="py-8 text-center">
                    <div className="w-12 h-12 bg-[#489D96]/20 text-[#043D3B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--head)] text-xl font-semibold text-[#043D3B] mb-2">
                      Note received.
                    </h3>
                    <p className="text-sm text-[#2D2D27]/80 max-w-sm mx-auto mb-6">
                      Thank you. We have received your message and will reply within one working day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", company: "", email: "", message: "" });
                      }}
                      className="text-xs font-semibold text-[#043D3B] underline underline-offset-4 hover:text-[#489D96] cursor-pointer"
                    >
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="dfs-name" className="block text-[15px] font-semibold text-[#1D4E4A] mb-1.5">
                          Name <span className="text-[#489D96]">*</span>
                        </label>
                        <input
                          id="dfs-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={status === "submitting"}
                          className="w-full border border-neutral-400 bg-transparent px-4 py-2.5 rounded-[4px] focus:outline-none focus:border-[#1D4E4A] text-[#15201E] disabled:opacity-60"
                        />
                      </div>

                      <div>
                        <label htmlFor="dfs-company" className="block text-[15px] font-semibold text-[#1D4E4A] mb-1.5">
                          Company
                        </label>
                        <input
                          id="dfs-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          disabled={status === "submitting"}
                          className="w-full border border-neutral-400 bg-transparent px-4 py-2.5 rounded-[4px] focus:outline-none focus:border-[#1D4E4A] text-[#15201E] disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dfs-email" className="block text-[15px] font-semibold text-[#1D4E4A] mb-1.5">
                        Work email <span className="text-[#489D96]">*</span>
                      </label>
                      <input
                        id="dfs-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === "submitting"}
                        className="w-full border border-neutral-400 bg-transparent px-4 py-2.5 rounded-[4px] focus:outline-none focus:border-[#1D4E4A] text-[#15201E] disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label htmlFor="dfs-message" className="block text-[15px] font-semibold text-[#1D4E4A] mb-1.5">
                        What would you want help with?
                      </label>
                      <textarea
                        id="dfs-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === "submitting"}
                        className="w-full border border-neutral-400 bg-transparent px-4 py-2.5 rounded-[4px] focus:outline-none focus:border-[#1D4E4A] text-[#15201E] resize-y disabled:opacity-60"
                      />
                    </div>

                    {status === "error" && (
                      <div
                        className="p-3.5 rounded-[4px] bg-[#FDEDED] border border-[#F5C2C7] text-[#842029] text-sm"
                        role="alert"
                      >
                        {errorMessage ||
                          "Failed to send your message. Please check the fields and try again."}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`bg-[#1D4E4A] text-[#F4F1E8] font-semibold py-3.5 rounded-[4px] w-full text-center transition-all shadow-sm ${
                        status === "submitting"
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:opacity-90 cursor-pointer"
                      }`}
                    >
                      {status === "submitting" ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-[#F4F1E8]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Sri Lanka Operation Callout Banner */}
          <div className="bg-white rounded-[16px] p-8 sm:p-10 border border-neutral-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--head)] text-xl sm:text-2xl font-semibold text-[#043D3B]">
                Thinking about operating in Sri Lanka?
              </h2>
              <p className="text-[#2D2D27]/80 text-sm sm:text-base mt-1.5 leading-relaxed">
                We can help you test the case, and run the team on the ground while you decide.
              </p>
            </div>
            <a
              href="mailto:krishanth@ceylonknowledge.com?subject=Setting%20up%20in%20Sri%20Lanka"
              className="inline-flex items-center justify-center bg-transparent border border-[#1D4E4A] text-[#1D4E4A] hover:bg-[#1D4E4A]/5 font-semibold px-6 py-3 rounded-[4px] text-sm transition-colors whitespace-nowrap shadow-sm"
            >
              Talk about setting up
            </a>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. Footer */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#043D3B] text-[#F3EFEA] py-12 border-t border-[#489D96]/20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#489D96]/20">
            {/* Logo */}
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <img
                src={`${basePath}/images/logos/cks-logo.png`}
                alt="Ceylon Knowledge Services"
                className="h-7 sm:h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-[#F3EFEA]/80">
              <a
                href="https://ceylonknowledge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ceylonknowledge.com
              </a>
              <span className="text-[#489D96]/40 hidden sm:inline">•</span>
              <a
                href="https://www.linkedin.com/company/ceylon-knowledge-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#489D96]/40 hidden sm:inline">•</span>
              <a
                href="https://wa.me/971568619983"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                UAE: +971 56 861 9983
              </a>
              <span className="text-[#489D96]/40 hidden sm:inline">•</span>
              <a
                href="https://wa.me/94777544988"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Sri Lanka: +94 77 754 4988
              </a>
              <span className="text-[#489D96]/40 hidden sm:inline">•</span>
              <span className="text-[#F3EFEA]/60">
                Colombo, Sri Lanka
              </span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EFEA]/60">
            <p>&copy; 2026 Ceylon Knowledge Services. All rights reserved.</p>
            <p className="text-[#489D96]">Dubai FinTech Summit Campaign</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
