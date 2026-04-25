import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPhotos } from "@/lib/portfolio";
import type { SiteMessages } from "@/lib/i18n/types";

type AboutSectionProps = {
  messages: SiteMessages;
};

export function AboutSection({ messages }: AboutSectionProps) {
  return (
    <section id="about" className="section-shell scroll-mt-20 py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-10">
        <Reveal className="space-y-5">
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700">
            {messages.hero.badge}
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
            {messages.hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-700">{messages.hero.description}</p>
          <p className="text-sm font-medium text-zinc-500">{messages.hero.city}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw==" target="_blank" rel="noreferrer" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700">
              {messages.hero.instagramLabel}
            </a>
            <a href="https://www.tiktok.com/@focusmagic.q5?_r=1&_t=ZS-95pfSLHEDcV" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              {messages.hero.tiktokLabel}
            </a>
            <a href="mailto:focusmagic.q@gmail.com" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100">
              {messages.hero.emailLabel}
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
      </div>
    </section>
  );
}
