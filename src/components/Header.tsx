"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { companyInfo, contactNavItem, primaryNavItems } from "@/data/company";

const navLinkClass =
  "relative pb-1.5 text-[13px] font-medium tracking-[0.04em] text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-strong after:transition-all after:duration-300 hover:text-foreground-strong hover:after:w-full";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between sm:h-24">
          <Link
            href="/"
            className="text-[15px] font-bold tracking-[0.02em] text-foreground-strong sm:text-base"
          >
            {companyInfo.name}
          </Link>

          <nav aria-label="メインメニュー" className="hidden items-center gap-10 md:flex">
            {primaryNavItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
            <Link
              href={contactNavItem.href}
              className="border border-foreground-strong bg-foreground-strong px-6 py-2.5 text-[13px] font-medium tracking-[0.04em] text-white transition-colors hover:border-accent-strong hover:bg-accent-strong"
            >
              {contactNavItem.label}
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground-strong md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">{isMenuOpen ? "メニューを閉じる" : "メニューを開く"}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isMenuOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="18" y2="5" />
                  <line x1="2" y1="10" x2="18" y2="10" />
                  <line x1="2" y1="15" x2="18" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="モバイルメニュー"
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <ul className="flex flex-col divide-y divide-border py-2">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-base font-medium tracking-[0.02em] text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href={contactNavItem.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full border border-foreground-strong bg-foreground-strong px-5 py-3 text-center text-base font-medium tracking-[0.02em] text-white"
                >
                  {contactNavItem.label}
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
