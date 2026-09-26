import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[rgba(243,239,234,0.78)] pt-20 pb-12 text-[0.95rem]">
      <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-12 gap-y-12">
        
        {/* Brand & Address Column */}
        <div className="flex flex-col">
          <Link href="/" className="inline-flex items-center gap-3 no-underline">
            <b className="font-[family-name:var(--head)] font-semibold text-2xl text-[var(--cream)] tracking-[0.02em]">
              CKS
            </b>
            <span className="border-l border-[rgba(243,239,234,0.25)] pl-3 text-[rgba(243,239,234,0.6)] text-[0.9rem] leading-[1.3]">
              Ceylon Knowledge
              <br />
              Services
            </span>
          </Link>
          <br/>
          <p className="mt-8 text-[rgba(243,239,234,0.6)] max-w-[20rem] text-[0.95rem] leading-[1.7]">
            Tagline placeholder. One line, around 12 words.
          </p>
          
          <address className="not-italic mt-7 leading-[1.8] text-[rgba(243,239,234,0.78)]">
            Floor 21, Mireka Tower
            <br />
            Havelock City, Colombo 5
            <br />
            Sri Lanka
          </address>

          {/* Social Icons */}
          <div className="flex gap-3.5 mt-8">
            <a
              href="https://www.linkedin.com/company/ceylon-knowledge-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[38px] h-[38px] border border-[rgba(243,239,234,0.25)] rounded-full grid place-items-center text-[rgba(243,239,234,0.78)] hover:border-[var(--cream)] hover:text-[var(--cream)] transition-colors no-underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[38px] h-[38px] border border-[rgba(243,239,234,0.25)] rounded-full grid place-items-center text-[rgba(243,239,234,0.78)] hover:border-[var(--cream)] hover:text-[var(--cream)] transition-colors no-underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div>
          <h3 className="font-[family-name:var(--head)] text-[1rem] font-medium text-[var(--cream)] mb-8">
            Solutions
          </h3>
          <br/>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <Link href="/solutions/strategy-research" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Strategy and research
              </Link>
            </li>
            <li>
              <Link href="/solutions/financial-modelling-planning" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Financial modelling
              </Link>
            </li>
            <li>
              <Link href="/solutions/data-driven-insights" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Data driven insights
              </Link>
            </li>
            <li>
              <Link href="/solutions/marketing" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="/solutions/retail-operations" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Retail operations
              </Link>
            </li>
            <li>
              <Link href="/solutions/cybersecurity" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Cybersecurity
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-[family-name:var(--head)] text-[1rem] font-medium text-[var(--cream)] mb-8">
            Company
          </h3>
          <br/>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <Link href="/" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Case studies
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/insights" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/partner-with-us" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                Partner with Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-[family-name:var(--head)] text-[1rem] font-medium text-[var(--cream)] mb-8">
            Contact
          </h3>
          <br/>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            <li>
              <a href="mailto:hello@ceylonknowledge.com" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                hello@ceylonknowledge.com
              </a>
            </li>
            <li>
              <a href="tel:+94777544988" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                +94 77 754 4988
              </a>
            </li>
            <li>
              <a href="https://wa.me/94777544988" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[var(--cream)] hover:underline underline-offset-4 leading-relaxed">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Legal Bar */}
        <div className="col-span-full border-t border-[rgba(243,239,234,0.2)] mt-12 pt-7 flex flex-wrap justify-between items-center gap-4 text-[0.85rem] text-[rgba(243,239,234,0.55)]">
          <span>&copy; 2026 Ceylon Knowledge Services (Pvt) Ltd. All rights reserved.</span>
          <ul className="flex gap-6 list-none p-0 m-0">
            <li>
              <Link href="/privacy" className="hover:text-[var(--cream)] hover:underline underline-offset-4">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--cream)] hover:underline underline-offset-4">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}