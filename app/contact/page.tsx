import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Partner with Us | Ceylon Knowledge Services",
  description:
    "Get in touch with Ceylon Knowledge Services to discuss specialist research, financial modelling, analytics, and operational capabilities.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Ìtọ́sọ́nà Breadcrumb */}
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
              Partner with Us
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Partner with Us
          </h1>
          <br/>
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Discuss your specialist capacity needs with our team and discover how CKS integrates around your organization.
          </p>
        </div>
      </section>

      {/* Ìpín Ìbánisọ̀rọ̀ àti Fọ́ọ̀mù */}
      <section className="py-12 md:py-16" id="contact">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-24 items-start">
          {/* Àwọn Ẹ̀kúnrẹ́rẹ́ Ọ́fíìsì */}
          <div className="grid gap-7">
            <div className="detail">
              <h3 className="font-[family-name:var(--head)] font-medium text-[0.85rem] text-[var(--teal-muted)] uppercase tracking-wide">
                Email
              </h3>
              <a
                href="mailto:hello@ceylonknowledge.com"
                className="mt-1 text-[1.1rem] text-[var(--ink)] block leading-normal hover:text-[var(--teal)] hover:underline underline-offset-4"
              >
                hello@ceylonknowledge.com
              </a>
            </div>

            <div className="detail">
              <h3 className="font-[family-name:var(--head)] font-medium text-[0.85rem] text-[var(--teal-muted)] uppercase tracking-wide">
                Phone
              </h3>
              <a
                href="tel:+94777544988"
                className="mt-1 text-[1.1rem] text-[var(--ink)] block leading-normal hover:text-[var(--teal)] hover:underline underline-offset-4"
              >
                +94 77 754 4988
              </a>
              <p className="text-[0.9rem] text-[var(--grey-text)] mt-1">
                Also on WhatsApp
              </p>
            </div>

            <div className="detail">
              <h3 className="font-[family-name:var(--head)] font-medium text-[0.85rem] text-[var(--teal-muted)] uppercase tracking-wide">
                Office
              </h3>
              <p className="mt-1 text-[1.1rem] text-[var(--ink)] leading-relaxed">
                Floor 21, Mireka Tower<br />
                Havelock City, Colombo 5<br />
                Sri Lanka
              </p>
            </div>

            <div className="detail">
              <h3 className="font-[family-name:var(--head)] font-medium text-[0.85rem] text-[var(--teal-muted)] uppercase tracking-wide">
                Hours
              </h3>
              <p className="mt-1 text-[1.1rem] text-[var(--ink)] leading-relaxed">
                Monday to Friday, 8:00 to 16:00
              </p>
              <p className="text-[0.9rem] text-[var(--grey-text)] mt-1">
                Sri Lanka time (UTC+5:30)
              </p>
            </div>
          </div>

          {/* Fọ́ọ̀mù */}
          <ContactForm
            formSubject="New Inquiry - CKS Partner with Us"
            source="Partner with Us Page"
          />
        </div>
      </section>

      {/* Ìpín Àwòrán Ilẹ̀ Google Maps */}
      <section className="pb-24" aria-label="Map">
        <div className="wrap">
          <div className="rounded-[16px] overflow-hidden border border-[rgba(45,45,39,0.1)] aspect-[4/3] md:aspect-[21/8] bg-[#E4E0D8] relative">
            <iframe
              title="Map showing the CKS office at Mireka Tower, Havelock City, Colombo"
              src="https://maps.google.com/maps?q=Mireka+Tower,+Havelock+City,+Colombo+5,+Sri+Lanka&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-full border-0 block grayscale-[0.35]"
            ></iframe>
          </div>
          <div className="mt-4 flex justify-between flex-wrap gap-4 text-[0.95rem] text-[var(--grey-text)]">
            <span>Floor 21, Mireka Tower, Havelock City, Colombo 5, Sri Lanka</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mireka+Tower,+Havelock+City,+Colombo+5,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--teal)] hover:underline underline-offset-4"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}