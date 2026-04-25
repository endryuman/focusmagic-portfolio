"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioSets } from "@/lib/portfolio";
import type { SiteMessages } from "@/lib/i18n/types";

type PortfolioSectionProps = {
  messages: SiteMessages;
};

const INITIAL_SETS = 2;

export function PortfolioSection({ messages }: PortfolioSectionProps) {
  const [visibleSetCount, setVisibleSetCount] = useState(INITIAL_SETS);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const renderedSets = useMemo(() => portfolioSets.slice(0, visibleSetCount), [visibleSetCount]);
  const canLoadMore = visibleSetCount < portfolioSets.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !canLoadMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSetCount((prev) => Math.min(prev + 1, portfolioSets.length));
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [canLoadMore]);

  return (
    <section id="works" className="section-shell scroll-mt-20 py-6 md:py-14">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-950">{messages.portfolio.title}</h2>
        <p className="mt-2 text-zinc-600">{messages.portfolio.description}</p>
      </Reveal>

      <div className="mt-6 space-y-8">
        {renderedSets.map((set, setIndex) => (
          <Reveal key={setIndex} delayMs={setIndex * 50}>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {set.map((photo, imageIdx) => (
                <div key={photo} className="overflow-hidden rounded-2xl bg-zinc-200">
                  <Image
                    src={photo}
                    alt={`Portfolio photo ${setIndex + 1}-${imageIdx + 1}`}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {canLoadMore && (
        <div className="mt-8 flex justify-center">
          <div ref={sentinelRef} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-500">
            {messages.portfolio.loadMore}
          </div>
        </div>
      )}
    </section>
  );
}
