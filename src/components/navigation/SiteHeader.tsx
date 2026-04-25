"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="font-logo text-xl tracking-tight text-zinc-900">
          focusmagic.q
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {hashLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-xl px-2 py-2 text-base text-zinc-800 hover:bg-zinc-100"
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
                    item === locale ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {localeLabel[item]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
