"use client";

import { useState } from "react";
import Link from "next/link";
import { articlesData } from "@/data/articles";

const filterTags = [
  "All",
  "Strategy and research",
  "Financial modelling",
  "Data and AI",
  "Marketing",
  "Retail operations",
  "Cybersecurity",
];

const ITEMS_PER_PAGE = 9;

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const allArticles = Object.values(articlesData);

  // Filter logic
  const filteredArticles =
    activeFilter === "All"
      ? allArticles
      : allArticles.filter((item) => {
          const itemCat = item.category.toLowerCase().replace(/[^a-z0-9]/g, "");
          const filterCat = activeFilter.toLowerCase().replace(/[^a-z0-9]/g, "");
          return itemCat.includes(filterCat) || filterCat.includes(itemCat);
        });

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    setCurrentPage(1); // Filter එක මාරු කරද්දි පළමු පිටුවට යවන්න
  };

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
              <Link href="/" className="text-[var(--grey-text)] hover:underline">
                Home
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2 before:text-[#8B8B83] text-[var(--ink)]">
              Insights
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="py-16 md:py-20">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end">
          <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] text-[var(--teal)] max-w-[16ch] leading-[1.2]">
            Insights
          </h1>
          <br />
          <p className="text-[1.2rem] leading-[1.65] max-w-[32rem] text-[var(--ink)]">
            Perspectives, analytical frameworks, and research on high-stakes execution for growth-focused leadership.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="pb-24" aria-label="Articles">
        <div className="wrap">
          {/* Topic Filters */}
          <nav className="pb-10 flex flex-wrap gap-2" aria-label="Filter by topic">
            {filterTags.map((tag) => {
              const isActive = activeFilter === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleFilterChange(tag)}
                  className={`font-[family-name:var(--head)] font-medium text-[0.85rem] py-1.5 px-3.5 rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[var(--teal)] text-[var(--cream)] border-[var(--teal)] shadow-sm"
                      : "text-[var(--teal)] border-[rgba(4,61,59,0.3)] hover:bg-[var(--teal)] hover:text-[var(--cream)] hover:border-[var(--teal)]"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </nav>

          {/* Articles Grid (9 Items per page) */}
          {currentArticles.length > 0 ? (
            <>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
                {currentArticles.map((item) => (
                  <li
                    key={item.slug}
                    className="bg-white border border-[rgba(45,45,39,0.1)] rounded-[16px] overflow-hidden flex flex-col transition-[border-color,transform] duration-150 hover:border-[var(--teal-muted)] hover:-translate-y-0.5"
                  >
                    <div className="aspect-[16/9] bg-[#E4E0D8] grid place-items-center text-[0.85rem] text-[var(--grey-text)]">
                      Cover image, 16:9
                    </div>
                    <div className="p-6 md:p-7 flex flex-col flex-1 items-start">
                      <span className="font-[family-name:var(--head)] font-medium text-[0.8rem] text-[var(--teal)] bg-[rgba(4,61,59,0.08)] py-1 px-3 rounded-full">
                        {item.category}
                      </span>
                      <br />
                      <h2 className="text-[1.2rem] font-medium mt-3.5 text-[var(--ink)] w-full">
                        <Link
                          href={`/insights/${item.slug}`}
                          className="hover:text-[var(--teal)] no-underline text-inherit"
                        >
                          {item.title}
                        </Link>
                      </h2>
                      <br />
                      <p className="mt-2.5 text-[0.95rem] text-[var(--grey-text)] leading-relaxed w-full">
                        {item.standfirst}
                      </p>
                      <div className="mt-auto pt-5 flex items-center gap-2.5 text-[0.85rem] text-[var(--grey-text)] w-full">
                        <span>{item.author}</span>
                        <span aria-hidden="true">&middot;</span>
                        <time dateTime={item.datetime}>{item.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Minimal Pagination: 01 02 03 -> */}
              <nav
                className="mt-16 flex items-center justify-center gap-4 text-[1rem] font-[family-name:var(--head)]"
                aria-label="Pagination"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  const formattedNum = pageNum < 10 ? `0${pageNum}` : `${pageNum}`;

                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`cursor-pointer transition-colors px-1 py-0.5 ${
                        isActive
                          ? "text-[var(--ink)] font-bold border-b-2 border-[var(--ink)]"
                          : "text-[#A3A39C] hover:text-[var(--ink)]"
                      }`}
                    >
                      {formattedNum}
                    </button>
                  );
                })}

                {/* Next Page Arrow (->) */}
                {currentPage < totalPages && (
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="cursor-pointer text-[#A3A39C] hover:text-[var(--ink)] transition-colors pl-2"
                    aria-label="Next page"
                  >
                    &rarr;
                  </button>
                )}
              </nav>
            </>
          ) : (
            <div className="py-16 text-center bg-white border border-[rgba(45,45,39,0.08)] rounded-[16px]">
              <p className="text-[1.1rem] text-[var(--grey-text)]">
                No insights available under this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}