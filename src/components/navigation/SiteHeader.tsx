"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { localeLabel, locales, type Locale } from "@/lib/i18n/config";
import type { NavItem } from "@/lib/i18n/types";

type SiteHeaderProps = {
  locale: Locale;
  navItems: NavItem[];
};

function localeHref(locale: Locale) {
  if (typeof window === "undefined") return `/${locale}`;
  const hash = window.location.hash ?? "";
  return `/${locale}${hash}`;
}

export function SiteHeader({ locale, navItems }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hashLinks = useMemo(
    () => navItems.map((item) => ({ ...item, href: `#${item.id}` })),
    [navItems],
  );

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="font-logo text-xl tracking-tight text-zinc-900">
          focusmagic
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {hashLinks.map((item) => (
            <a key={item.id} href={item.href} className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950">
              {item.label}
            </a>
          ))}
          <div className="ml-1 flex items-center gap-2">
            {locales.map((item) => (
              <Link
                key={item}
                href={localeHref(item)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  item === locale ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {localeLabel[item]}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
              <path
                d="M7 7L17 17M17 7L7 17"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
              <path
                d="M4.5 7h15M4.5 12h15M4.5 17h15"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute inset-x-3 top-[4.5rem] rounded-2xl border border-zinc-200/80 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {hashLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-base text-zinc-800 hover:bg-white/70"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                {locales.map((item) => (
                  <Link
                    key={item}
                    href={localeHref(item)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      item === locale ? "bg-zinc-900 text-white" : "bg-zinc-100/85 text-zinc-700"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {localeLabel[item]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
