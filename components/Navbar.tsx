"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenu((prev) => (prev === menuName ? null : menuName));
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navLinkStyle = (path: string) =>
    `text-[var(--cream)] hover:underline underline-offset-[5px] decoration-[var(--teal-quiet)] ${
      isActive(path)
        ? "underline underline-offset-[5px] decoration-[var(--teal-quiet)]"
        : ""
    }`;

  return (
    <header className="bg-[var(--teal)] text-[var(--cream)] relative z-50">
      <div className="wrap flex items-center justify-between h-[76px] gap-4">
        {/* Wordmark */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3 no-underline">
          <b className="font-[family-name:var(--head)] font-semibold text-2xl tracking-[0.02em] text-[var(--cream)]">
            CKS
          </b>
          <span className="hidden sm:inline-block border-l border-[var(--teal-muted)] pl-3 text-[var(--teal-quiet)] text-[0.9rem] leading-[1.2]">
            Ceylon Knowledge<br />Services
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (isOpen) setOpenSubMenu(null);
          }}
          className="md:hidden border border-[var(--teal-muted)] rounded-[var(--radius)] px-3 py-1 text-[0.9rem] text-[var(--cream)] cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 absolute md:static top-[76px] left-0 right-0 bg-[var(--teal)] md:bg-transparent p-6 md:p-0 border-t md:border-0 border-[var(--teal-muted)] max-h-[calc(100vh-76px)] overflow-y-auto md:overflow-visible`}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:gap-7 m-0 p-0 list-none text-[0.95rem] w-full md:w-auto">
            <li>
              <Link href="/" onClick={closeAll} className={navLinkStyle("/")}>
                Home
              </Link>
            </li>

            {/* Solutions Dropdown */}
            <li className="relative group w-full md:w-auto">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link
                  href="/solutions"
                  onClick={closeAll}
                  className={`inline-flex items-center gap-1.5 ${navLinkStyle("/solutions")}`}
                >
                  Solutions
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu("solutions");
                  }}
                  className="p-1.5 md:p-0 md:ml-1 text-[var(--cream)] cursor-pointer"
                  aria-expanded={openSubMenu === "solutions"}
                  aria-label="Toggle Solutions submenu"
                >
                  <svg
                    className={`w-3.5 h-3.5 md:w-3 md:h-3 transition-transform md:group-hover:rotate-180 ${
                      openSubMenu === "solutions" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                  </svg>
                </button>
              </div>
              <ul
                className={`mt-2 md:mt-0 md:absolute top-full left-[-1.25rem] min-w-[17rem] bg-[var(--cream)] text-[var(--ink)] rounded-lg py-2 shadow-[0_12px_32px_rgba(45,45,39,0.18)] z-20 ${
                  openSubMenu === "solutions" ? "block" : "hidden md:group-hover:block"
                }`}
              >
                <li><Link href="/solutions/strategy-research" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Strategy and research</Link></li>
                <li><Link href="/solutions/financial-modelling-planning" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Financial modelling and planning</Link></li>
                <li><Link href="/solutions/data-driven-insights" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Data driven insights</Link></li>
                <li><Link href="/solutions/marketing" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Marketing</Link></li>
                <li><Link href="/solutions/retail-operations" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Retail operations</Link></li>
                <li><Link href="/solutions/cybersecurity" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Cybersecurity</Link></li>
              </ul>
            </li>

            {/* About Us Dropdown */}
            <li className="relative group w-full md:w-auto">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link
                  href="/about"
                  onClick={closeAll}
                  className={`inline-flex items-center gap-1.5 ${navLinkStyle("/about")}`}
                >
                  About Us
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu("about");
                  }}
                  className="p-1.5 md:p-0 md:ml-1 text-[var(--cream)] cursor-pointer"
                  aria-expanded={openSubMenu === "about"}
                  aria-label="Toggle About Us submenu"
                >
                  <svg
                    className={`w-3.5 h-3.5 md:w-3 md:h-3 transition-transform md:group-hover:rotate-180 ${
                      openSubMenu === "about" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                  </svg>
                </button>
              </div>
              <ul
                className={`mt-2 md:mt-0 md:absolute top-full left-[-1.25rem] min-w-[15rem] bg-[var(--cream)] text-[var(--ink)] rounded-lg py-2 shadow-[0_12px_32px_rgba(45,45,39,0.18)] z-20 ${
                  openSubMenu === "about" ? "block" : "hidden md:group-hover:block"
                }`}
              >
                <li><Link href="/about" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Our mission</Link></li>
                <li><Link href="/engagement" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">How you can work with us</Link></li>
                <li><Link href="/leadership" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Leadership</Link></li>
              </ul>
            </li>

            {/* Our Work Dropdown */}
            <li className="relative group w-full md:w-auto">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link
                  href="/case-studies"
                  onClick={closeAll}
                  className={`inline-flex items-center gap-1.5 ${navLinkStyle("/case-studies")}`}
                >
                  Our work
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu("work");
                  }}
                  className="p-1.5 md:p-0 md:ml-1 text-[var(--cream)] cursor-pointer"
                  aria-expanded={openSubMenu === "work"}
                  aria-label="Toggle Our work submenu"
                >
                  <svg
                    className={`w-3.5 h-3.5 md:w-3 md:h-3 transition-transform md:group-hover:rotate-180 ${
                      openSubMenu === "work" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                  </svg>
                </button>
              </div>
              <ul
                className={`mt-2 md:mt-0 md:absolute top-full left-[-1.25rem] min-w-[14rem] bg-[var(--cream)] text-[var(--ink)] rounded-lg py-2 shadow-[0_12px_32px_rgba(45,45,39,0.18)] z-20 ${
                  openSubMenu === "work" ? "block" : "hidden md:group-hover:block"
                }`}
              >
                <li><Link href="/case-studies" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Case studies</Link></li>
                <li><Link href="/testimonials" onClick={closeAll} className="block px-5 py-2.5 text-[0.95rem] hover:bg-[rgba(4,61,59,0.08)] hover:text-[var(--teal)]">Testimonials</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/insights" onClick={closeAll} className={navLinkStyle("/insights")}>
                Insights
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            onClick={closeAll}
            className="bg-[var(--cream)] text-[var(--teal)] hover:bg-white font-[family-name:var(--head)] font-medium text-[0.95rem] px-[1.2rem] py-[0.7rem] rounded-[var(--radius)] transition-colors no-underline whitespace-nowrap"
          >
            Partner with Us
          </Link>
        </nav>
      </div>
    </header>
  );
}