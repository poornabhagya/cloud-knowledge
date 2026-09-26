import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData } from "@/data/articles";

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

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
              <Link href="/" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83]">
              <Link href="/insights" className="text-[var(--grey-text)] hover:underline underline-offset-[3px]">
                Insights
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)] truncate max-w-[240px]">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="wrap max-w-[52rem] mx-auto px-6">
          <div>
            <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-[clamp(2.1rem,4.4vw,3.2rem)] font-semibold text-[var(--teal)] leading-[1.2] mt-4">
            {article.title}
          </h1>
          <br />
          <p className="mt-4 text-[1.2rem] leading-[1.65] text-[var(--ink)]">
            {article.standfirst}
          </p>
          <br />
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.95rem] text-[var(--grey-text)]">
            <b className="text-[var(--ink)] font-semibold">{article.author}</b>
            <span>{article.authorRole}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.datetime}>{article.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Cover Image */}
      <figure className="max-w-[52rem] mx-auto px-6 mb-8">
        <div className="aspect-[16/8] bg-[#E4E0D8] rounded-[16px] grid place-items-center text-[0.85rem] text-[var(--grey-text)]">
          Hero image, 2:1, minimum 1600px wide
        </div>
        <figcaption className="mt-2.5 text-[0.85rem] text-[var(--grey-text)]">
          Analytical frameworks and data segmentation model overview.
        </figcaption>
      </figure>

      {/* Article Body */}
      <div className="py-12 md:py-16">
        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,42rem)_1fr] gap-8 lg:gap-12 items-start max-w-[1180px] mx-auto px-6">
          {/* Sticky Social Share Sidebar */}
          <aside className="lg:sticky lg:top-8 lg:justify-self-end flex lg:flex-col items-center lg:items-start gap-2.5" aria-label="Share">
            <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal-muted)] mb-1">
              Share
            </span>
            <a
              href="#"
              aria-label="Share on LinkedIn"
              className="w-[38px] h-[38px] rounded-full border border-[rgba(4,61,59,0.3)] grid place-items-center text-[var(--teal)] hover:bg-[var(--teal)] hover:text-[var(--cream)] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Share on X"
              className="w-[38px] h-[38px] rounded-full border border-[rgba(4,61,59,0.3)] grid place-items-center text-[var(--teal)] hover:bg-[var(--teal)] hover:text-[var(--cream)] transition-colors"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.9 2H22l-7.2 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.7-8.8L1.6 2h6.8l4.7 6.2L18.9 2zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20z" />
              </svg>
            </a>
            <button
              type="button"
              aria-label="Copy link"
              className="w-[38px] h-[38px] rounded-full border border-[rgba(4,61,59,0.3)] grid place-items-center text-[var(--teal)] hover:bg-[var(--teal)] hover:text-[var(--cream)] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M10.6 13.4a1 1 0 0 1 0 1.4 4 4 0 0 1-5.7 0l-1.4-1.4a4 4 0 0 1 5.7-5.7l.7.7a1 1 0 0 1-1.4 1.4l-.7-.7a2 2 0 0 0-2.9 2.9l1.4 1.4a2 2 0 0 0 2.9 0 1 1 0 0 1 1.4 0zm2.8-2.8a1 1 0 0 1 0-1.4 4 4 0 0 1 5.7 0l1.4 1.4a4 4 0 0 1-5.7 5.7l-.7-.7a1 1 0 0 1 1.4-1.4l.7.7a2 2 0 0 0 2.9-2.9l-1.4-1.4a2 2 0 0 0-2.9 0 1 1 0 0 1-1.4 0z" />
              </svg>
            </button>
          </aside>

          {/* Reading Column */}
          <article className="prose max-w-none">
            <p className="font-[family-name:var(--head)] font-normal text-[1.3rem] leading-[1.55] text-[var(--teal)] mb-6">
              {article.lede}
            </p>

            {article.paragraphsBeforeQuote.map((para, i) => (
              <p key={i} className="text-[1.15rem] leading-[1.7] text-[var(--ink)] mb-5">
                {para}
              </p>
            ))}

            <blockquote className="my-9 pl-6 border-l-[3px] border-[var(--teal)] font-[family-name:var(--head)] font-medium text-[1.35rem] leading-[1.4] text-[var(--teal)]">
              "{article.pullQuote}"
            </blockquote>

            {article.paragraphsAfterQuote.map((para, i) => (
              <p key={i} className="text-[1.15rem] leading-[1.7] text-[var(--ink)] mb-5">
                {para}
              </p>
            ))}

            <figure className="my-9">
              <div className="aspect-[16/9] bg-[#E4E0D8] rounded-[12px] grid place-items-center text-[0.85rem] text-[var(--grey-text)]">
                In-article chart or image, 16:9
              </div>
              <figcaption className="mt-2.5 text-[0.85rem] text-[var(--grey-text)]">
                {article.figureCaption}
              </figcaption>
            </figure>

            <h2 className="text-[1.6rem] font-semibold text-[var(--teal)] mt-11 mb-4">
              {article.subheading}
            </h2>
            <br />
            {article.paragraphsSection2.map((para, i) => (
              <p key={i} className="text-[1.15rem] leading-[1.7] text-[var(--ink)] mb-5">
                {para}
              </p>
            ))}

            <ul className="my-5 pl-5 list-disc space-y-2 text-[1.1rem] leading-[1.6] text-[var(--ink)]">
              {article.bulletPoints.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>

            {/* Mid-CTA Prompt */}
            <div className="my-11 border border-[rgba(45,45,39,0.1)] bg-white rounded-[12px] p-7 flex items-center justify-between gap-6 flex-wrap">
              <p className="font-[family-name:var(--head)] font-medium text-[var(--teal)] text-[1.05rem]">
                {article.midCtaText}
              </p>
              <Link
                href={article.midCtaHref}
                className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-medium text-[var(--teal)] underline underline-offset-[6px] whitespace-nowrap hover:text-[#022B2A]"
              >
                {article.midCtaLinkText}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </Link>
            </div>

            <h2 className="text-[1.6rem] font-semibold text-[var(--teal)] mt-11 mb-4">
              {article.closingHeading}
            </h2>
            <br />
            <p className="text-[1.15rem] leading-[1.7] text-[var(--ink)] mb-8">
              {article.closingParagraph}
            </p>

            {/* Author Box */}
            <div className="mt-14 pt-8 border-t border-[rgba(45,45,39,0.14)] grid grid-cols-[72px_1fr] gap-6 items-start">
              <div className="w-[72px] h-[72px] rounded-full bg-[#E4E0D8]" aria-hidden="true"></div>
              <div>
                <h3 className="text-[1.05rem] font-medium text-[var(--ink)]">
                  {article.author}
                </h3>
                <br />
                <p className="mt-1 text-[0.95rem] text-[var(--grey-text)] leading-relaxed">
                  {article.authorBio}
                </p>
              </div>
            </div>
          </article>

          <div></div>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="py-20 bg-white">
        <div className="wrap max-w-[1180px] mx-auto px-6">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-[var(--teal)] mb-8">
            More insights
          </h2>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            {article.relatedArticles.map((rel, idx) => (
              <li
                key={idx}
                className="bg-[var(--cream)] border border-[rgba(45,45,39,0.1)] rounded-[16px] p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                    {rel.category}
                  </span>
                  <h3 className="text-[1.1rem] font-medium mt-3.5 text-[var(--ink)]">
                    <Link href={rel.href} className="hover:text-[var(--teal)] no-underline text-inherit">
                      {rel.title}
                    </Link>
                  </h3>
                  <br />
                </div>
                <div className="mt-4 text-[0.85rem] text-[var(--grey-text)]">
                  {rel.readTime}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-22 bg-[var(--teal)] text-[var(--cream)]">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center max-w-[1180px] mx-auto px-6">
          <div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] text-[var(--cream)] max-w-[18ch] leading-[1.22]">
              Ready to extend your team's execution capacity?
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