"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteMessages } from "@/lib/i18n/types";

type PortfolioSectionProps = {
  messages: SiteMessages;
};

const INITIAL_SETS = 2;
const PHOTOS_PER_SET = 2;

type PortfolioPhoto = {
  publicId: string;
  url: string;
  width: number;
  height: number;
};

function chunkPhotos(photos: PortfolioPhoto[], size: number): PortfolioPhoto[][] {
  const chunks: PortfolioPhoto[][] = [];

  for (let i = 0; i < photos.length; i += size) {
    chunks.push(photos.slice(i, i + size));
  }

  return chunks;
}

export function PortfolioSection({ messages }: PortfolioSectionProps) {
  const [cloudinarySets, setCloudinarySets] = useState<PortfolioPhoto[][]>([]);
  const [visibleSetCount, setVisibleSetCount] = useState(INITIAL_SETS);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const renderedSets = useMemo(() => cloudinarySets.slice(0, visibleSetCount), [cloudinarySets, visibleSetCount]);
  const canLoadMore = visibleSetCount < cloudinarySets.length;

  useEffect(() => {
    let isCancelled = false;

    async function loadCloudinaryPhotos() {
      try {
        const response = await fetch("/api/portfolio-photos", { cache: "no-store" });
        if (!response.ok || isCancelled) return;

        const data = (await response.json()) as { photos?: PortfolioPhoto[] };
        const photos = Array.isArray(data.photos) ? data.photos : [];

        setCloudinarySets(chunkPhotos(photos, PHOTOS_PER_SET));
        setVisibleSetCount(INITIAL_SETS);
      } catch (error) {
        console.error("Failed to load Cloudinary portfolio photos", error);
      }
    }

    loadCloudinaryPhotos();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !canLoadMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSetCount((prev) => Math.min(prev + 1, cloudinarySets.length));
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [canLoadMore, cloudinarySets.length]);

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
                <div key={photo.publicId} className="overflow-hidden rounded-2xl bg-zinc-200">
                  <Image
                    src={photo.url}
                    alt={`Portfolio photo ${setIndex + 1}-${imageIdx + 1}`}
                    width={photo.width}
                    height={photo.height}
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
