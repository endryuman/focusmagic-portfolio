import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPhotos } from "@/lib/portfolio";
import type { SiteMessages } from "@/lib/i18n/types";

type AboutSectionProps = {
  messages: SiteMessages;
};

export function AboutSection({ messages }: AboutSectionProps) {
  const descriptionParagraphs = messages.hero.description.split("\n\n");

  return (
    <section id="about" className="section-shell scroll-mt-20 pb-6 pt-4 md:py-14">
      <div className="grid gap-1 md:grid-cols-[1.2fr_1fr] md:gap-10">
        <Reveal className="space-y-5">
          <h1 className="text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
            {messages.hero.title}
          </h1>
          <div className="max-w-2xl space-y-2.5 sm:space-y-4">
            {descriptionParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-sm leading-6 text-zinc-700 sm:text-base sm:leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {messages.hero.city.trim() && <p className="text-sm font-medium text-zinc-500">{messages.hero.city}</p>}

          <div className="hidden flex-wrap gap-3 pt-2 md:flex">
            <a
              href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
              aria-label="Instagram focusmagic.q"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.63-.88a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
              </svg>
              <span>focusmagic.q</span>
            </a>
            <a
              href="https://www.tiktok.com/@focusmagic.q5?_r=1&_t=ZS-95pfSLHEDcV"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              aria-label="TikTok focusmagic.q"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M14.5 3h2.22c.44 1.66 1.78 2.98 3.44 3.34v2.27a7.24 7.24 0 0 1-3.42-1.16v7.16a5.74 5.74 0 1 1-5.74-5.74c.3 0 .6.03.88.08v2.34a3.4 3.4 0 0 0-.88-.11 3.43 3.43 0 1 0 3.43 3.43V3Z" />
              </svg>
              <span>focusmagic.q</span>
            </a>
            <a href="mailto:focusmagic.q@gmail.com" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              focusmagic.q@gmail.com
            </a>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-3 sm:gap-4" delayMs={120}>
          {aboutPhotos.map((photo, idx) => (
            <div key={photo} className="overflow-hidden rounded-2xl bg-zinc-200">
              <Image
                src={photo}
                alt={`Photographer portrait ${idx + 1}`}
                width={600}
                height={800}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                priority={idx < 2}
              />
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-3 flex w-full min-w-0 flex-col gap-3 md:hidden" delayMs={140}>
          <a
            href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700"
            aria-label="Instagram focusmagic.q"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.63-.88a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
            </svg>
            <span className="truncate">focusmagic.q</span>
          </a>
          <a
            href="https://www.tiktok.com/@focusmagic.q5?_r=1&_t=ZS-95pfSLHEDcV"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            aria-label="TikTok focusmagic.q"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M14.5 3h2.22c.44 1.66 1.78 2.98 3.44 3.34v2.27a7.24 7.24 0 0 1-3.42-1.16v7.16a5.74 5.74 0 1 1-5.74-5.74c.3 0 .6.03.88.08v2.34a3.4 3.4 0 0 0-.88-.11 3.43 3.43 0 1 0 3.43 3.43V3Z" />
            </svg>
            <span className="truncate">focusmagic.q</span>
          </a>
          <a
            href="mailto:focusmagic.q@gmail.com"
            className="flex w-full min-w-0 items-center justify-center rounded-full border border-zinc-300 px-4 py-2.5 text-center text-sm font-medium break-all text-zinc-700 hover:bg-zinc-100"
          >
            focusmagic.q@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
