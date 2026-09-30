import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData } from "@/data/articles";

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#F8F7F4] min-h-screen text-[var(--ink)]">
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
      <section className="pt-16 pb-6">
        <div className="wrap max-w-[54rem] mx-auto px-6">
          <div className="flex items-center gap-2 text-[0.95rem] text-[var(--grey-text)] mb-3">
            <time dateTime={article.datetime}>{article.date}</time>
            <span>|</span>
            <span className="text-[var(--teal)] font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-[clamp(2.2rem,4.4vw,3.2rem)] font-bold text-[var(--ink)] leading-[1.2] mt-3">
            {article.title}
          </h1>
          <br />

          <p className="mt-3 text-[1.18rem] leading-[1.65] text-[#2D2D27]">
            {article.standfirst}
          </p>
          <br />
        </div>
      </section>

      {/* Article Content */}
      <div className="pb-12">
        <div className="wrap max-w-[54rem] mx-auto px-6">
          <article className="prose max-w-none text-[#2D2D27]">
            {article.paragraphsBeforeQuote.map((para, i) => (
              <div key={i}>
                <p className="text-[1.12rem] leading-[1.75] text-[#2D2D27]">
                  {para}
                </p>
                <br />
              </div>
            ))}

            <blockquote className="my-6 pl-6 border-l-[3px] border-[var(--teal)] font-[family-name:var(--head)] font-medium text-[1.3rem] leading-[1.45] text-[var(--teal)] italic">
              "{article.pullQuote}"
            </blockquote>
            <br />

            {article.paragraphsAfterQuote.map((para, i) => (
              <div key={i}>
                <p className="text-[1.12rem] leading-[1.75] text-[#2D2D27]">
                  {para}
                </p>
                <br />
              </div>
            ))}

            <h2 className="text-[1.8rem] font-bold text-[var(--ink)] mt-8">
              {article.subheading}
            </h2>
            <br />

            {article.paragraphsSection2.map((para, i) => (
              <div key={i}>
                <p className="text-[1.12rem] leading-[1.75] text-[#2D2D27]">
                  {para}
                </p>
                <br />
              </div>
            ))}

            {article.bulletPoints && article.bulletPoints.length > 0 && (
              <>
                <ul className="my-4 pl-6 list-disc space-y-2.5 text-[1.1rem] leading-[1.65]">
                  {article.bulletPoints.map((bp, i) => (
                    <li key={i}>{bp}</li>
                  ))}
                </ul>
                <br />
              </>
            )}

            {/* Mid-CTA Banner */}
            <div className="my-8 border border-[rgba(45,45,39,0.12)] bg-white rounded-[12px] p-6 md:p-8 flex items-center justify-between gap-6 flex-wrap">
              <p className="font-[family-name:var(--head)] font-medium text-[var(--teal)] text-[1.05rem]">
                {article.midCtaText}
              </p>
              <Link
                href={article.midCtaHref}
                className="inline-flex items-center gap-2 font-[family-name:var(--head)] font-semibold text-[var(--teal)] underline underline-offset-[5px] hover:text-[#022B2A]"
              >
                {article.midCtaLinkText}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12 12 4M6 4h6v6" />
                </svg>
              </Link>
            </div>
            <br />

            <p className="text-[1.12rem] leading-[1.75] text-[#2D2D27]">
              {article.closingParagraph}
            </p>
            <br />

            {/* Share, Socials and Comment counter bar */}
            <div className="mt-10 pt-6 flex justify-end items-center gap-4 text-[0.95rem] text-[var(--ink)]">
              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://ceylonknowledge.com/insights/${article.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] hover:text-[var(--teal)] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://ceylonknowledge.com/insights/${article.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] hover:text-[var(--teal)] transition-colors font-bold text-[1.05rem]"
                aria-label="Share on Facebook"
              >
                f
              </a>

              {/* Share Icon */}
              <div className="relative group inline-flex items-center gap-1.5 cursor-pointer">
                <span className="font-normal text-[0.95rem]">Share</span>
                <svg className="w-4 h-4 text-[var(--ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>

              <span>|</span>
              <span className="text-[0.95rem]">0 Comments</span>
            </div>

            {/* Prev Navigation */}
            <div className="mt-8 border-t border-[rgba(45,45,39,0.12)] pt-6">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[0.95rem] text-[var(--ink)] hover:text-[var(--teal)] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Prev
              </Link>
            </div>

            {/* Leave a Reply Section */}
            <section className="mt-14 pt-8">
              <h2 className="text-[2.2rem] font-bold text-[var(--ink)] mb-2">
                Leave a Reply
              </h2>
              <br />

              <p className="text-[0.95rem] text-[#555] mb-6">
                Your email address will not be published. Required fields are marked *
              </p>
              <br />

              <form className="space-y-6">
                <div>
                  <textarea
                    rows={7}
                    placeholder="Your Comment *"
                    required
                    className="w-full bg-transparent border border-[rgba(45,45,39,0.2)] rounded-none p-4 text-[1rem] focus:outline-none focus:border-[var(--teal)] transition-colors"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="w-full bg-transparent border-b border-[rgba(45,45,39,0.2)] py-2 text-[1rem] focus:outline-none focus:border-[var(--teal)] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      required
                      className="w-full bg-transparent border-b border-[rgba(45,45,39,0.2)] py-2 text-[1rem] focus:outline-none focus:border-[var(--teal)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="url"
                    placeholder="Website"
                    className="w-full bg-transparent border-b border-[rgba(45,45,39,0.2)] py-2 text-[1rem] focus:outline-none focus:border-[var(--teal)] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 rounded border-gray-400 text-[var(--teal)] focus:ring-[var(--teal)] cursor-pointer"
                  />
                  <label htmlFor="save-info" className="text-[0.88rem] text-[#555] cursor-pointer">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    className="bg-[#023330] hover:bg-[#012523] text-white px-7 py-3 rounded-lg font-medium text-[0.95rem] transition-colors cursor-pointer"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}