import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { subServicesData } from "@/data/subServices";

export async function generateStaticParams() {
  const paths: { slug: string; sub: string }[] = [];

  Object.entries(servicesData).forEach(([slug, service]) => {
    service.subProducts.forEach((prod) => {
      if (prod.slug) {
        paths.push({
          slug: slug,
          sub: prod.slug,
        });
      }
    });
  });

  return paths;
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) {
  const { slug, sub } = await params;
  
  const mainService = servicesData[slug];
  const subService = subServicesData[sub];

  if (!mainService || !subService) {
    notFound();
  }

  const overTitle = subService.overTitle || sub.replace(/-/g, " ").toUpperCase();

  return (
    <main>
      {/* Breadcrumb Navigation */}
      <nav
        className="border-b border-[rgba(45,45,39,0.14)] text-[0.9rem] text-[var(--grey-text)] bg-white"
        aria-label="Breadcrumb"
      >
        <div className="wrap">
          <ol className="flex gap-2 list-none m-0 py-4 p-0 items-center flex-wrap">
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
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link href={`/solutions/${slug}`} className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                {mainService.title}
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              {subService.intro.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[var(--teal)] text-[var(--cream)] text-center flex flex-col items-center">
        <div className="wrap flex flex-col items-center">
          <h1 className="text-[clamp(2.3rem,4.5vw,3.6rem)] leading-[1.2] font-semibold text-white max-w-[28ch] mx-auto">
            {subService.hero.title}
          </h1>
          <br />
          <p className="text-[1.15rem] leading-[1.7] text-[#D1E0DF] max-w-[42rem] mx-auto mt-2">
            {subService.hero.subtitle}
          </p>
          <br />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="bg-[#5CB39F] text-[var(--ink)] hover:bg-[#4ea08d] text-[1rem] px-8 py-3.5 rounded-md font-[family-name:var(--head)] font-medium inline-flex items-center gap-2 transition-colors no-underline"
            >
              {subService.hero.btn1 || "Book a scoping call"}
            </Link>
            <Link
              href="/contact"
              className="border border-[#5CB39F] text-white hover:bg-[rgba(92,179,159,0.1)] text-[1rem] px-8 py-3.5 rounded-md font-[family-name:var(--head)] font-medium inline-flex items-center gap-2 transition-colors no-underline"
            >
              {subService.hero.btn2 || "Request a data readiness check"}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white border-b border-[rgba(45,45,39,0.08)]">
        <div className="wrap text-center max-w-[50rem] mx-auto">
          <span className="text-[0.85rem] font-bold text-[#5CB39F] uppercase tracking-wider block mb-4">
            {overTitle}
          </span>
          <br />
          <h2 className="text-[clamp(2rem,3vw,2.6rem)] text-[var(--teal)] leading-[1.3] font-semibold mb-6">
            {subService.intro.title}
          </h2>
          <br />
          <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)] whitespace-pre-wrap">
            {subService.intro.desc}
          </p>
        </div>
      </section>

      {/* What we can do for you - Cream Bg, White Cards */}
      {subService.whatWeDo && subService.whatWeDo.length > 0 && (
        <section className="py-24 bg-[#F8F7F3]">
          <div className="wrap">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">What we can do for you</h2>
            <br />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {subService.whatWeDo.map((item: any, idx: number) => (
                <li key={idx} className="bg-white border border-[#E5E7EB] rounded-[12px] p-8 shadow-sm">
                  <span className="w-10 h-10 rounded-[8px] bg-[rgba(4,61,59,0.08)] grid place-items-center mb-5">
                    <svg className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  <h3 className="text-[1.15rem] font-medium text-[var(--teal)] mb-3">{item.title}</h3>
                  <br />
                  <p className="text-[1rem] text-[var(--grey-text)] leading-[1.65]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* How the model is built - White Bg, Cream Cards */}
      {subService.howModelIsBuilt && subService.howModelIsBuilt.length > 0 && (
        <section className="py-24 bg-white">
          <div className="wrap">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">How the model is built</h2>
            <br />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {subService.howModelIsBuilt.map((item: any, idx: number) => (
                <li key={idx} className="bg-[#F8F7F3] rounded-[12px] p-8">
                  <span className="w-10 h-10 rounded-[8px] bg-white grid place-items-center mb-5 shadow-sm">
                    <svg className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                  </span>
                  <h3 className="text-[1.15rem] font-medium text-[var(--teal)] mb-3">{item.title}</h3>
                  <br />
                  <p className="text-[1rem] text-[var(--grey-text)] leading-[1.65]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* The value you get from CKS - White Bg, Cream Cards */}
      {subService.valueFromCks && subService.valueFromCks.length > 0 && (
        <section className="py-24 bg-white">
          <div className="wrap">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">The value you get from CKS</h2>
            <br />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
              {subService.valueFromCks.map((item: any, idx: number) => (
                <li key={idx} className="bg-[#F8F7F3] rounded-[12px] p-8">
                  <span className="w-10 h-10 rounded-[8px] bg-white grid place-items-center mb-5 shadow-sm">
                    <svg className="w-5 h-5 stroke-[var(--teal)] fill-none stroke-[1.8]" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </span>
                  <h3 className="text-[1.15rem] font-medium text-[var(--teal)] mb-3">{item.title}</h3>
                  <br />
                  <p className="text-[1rem] text-[var(--grey-text)] leading-[1.65]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* How it works (Process) - Cream Bg, White Cards */}
      {subService.howItWorks && subService.howItWorks.length > 0 && (
        <section className="py-24 bg-[#F8F7F3]">
          <div className="wrap">
            <div className="text-center mb-14">
              <span className="text-[0.85rem] font-bold text-[#5CB39F] tracking-wider uppercase block">HOW IT WORKS</span>
              <h2 className="text-[2rem] text-[var(--teal)] font-semibold mt-2">A clear path from data to decisions</h2>
              <br />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subService.howItWorks.map((item: any, idx: number) => (
                <div key={idx} className="bg-white border border-[#E5E7EB] rounded-[12px] p-6 relative shadow-sm">
                  <span className="text-[0.85rem] font-bold text-[#5CB39F] mb-2 block uppercase tracking-wider">
                    {item.step} - {item.title.split(' ')[0]}
                  </span>
                  <br />
                  <h3 className="text-[1.1rem] font-medium text-[var(--teal)] mb-2">{item.title}</h3>
                  <br />
                  <p className="text-[0.95rem] text-[var(--ink)] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - White Bg, Cream Cards (Only renders if faqs exist and length > 0) */}
      {subService.faqs && subService.faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="wrap max-w-[50rem] mx-auto">
            <h2 className="text-[2rem] text-[var(--teal)] font-semibold mb-10 text-center">Frequently asked questions</h2>
            <br />
            <div className="flex flex-col gap-4">
              {subService.faqs.map((faq: any, idx: number) => (
                <details key={idx} className="group bg-[#F8F7F3] rounded-[8px] p-6 cursor-pointer [&::-webkit-details-marker]:hidden">
                  <summary className="font-medium text-[1.05rem] text-[var(--teal)] flex justify-between items-center outline-none">
                    {faq.question}
                    <span className="text-[#5CB39F] transition-transform duration-300 group-open:rotate-45 ml-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[0.95rem] text-[var(--grey-text)] leading-relaxed pt-4 border-t border-[rgba(45,45,39,0.05)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="py-24 bg-[#5CB39F] text-center flex flex-col items-center">
        <div className="wrap flex flex-col items-center">
          <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--ink)] max-w-[22ch] leading-[1.28] font-semibold mx-auto">
            {subService.cta ? subService.cta.title : "Ready to plan with confidence instead of guesswork?"}
          </h2>
          <br />
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="bg-[var(--teal)] text-white hover:bg-[#032a28] text-[1.05rem] px-8 py-4 rounded-md font-[family-name:var(--head)] font-medium inline-flex items-center gap-2.5 transition-colors no-underline"
            >
              {subService.cta ? subService.cta.btnText : "Talk with an expert"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}