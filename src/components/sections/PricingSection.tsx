import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cameraPhotos } from "@/lib/portfolio";
import type { SiteMessages } from "@/lib/i18n/types";

type PricingSectionProps = {
  messages: SiteMessages;
};

export function PricingSection({ messages }: PricingSectionProps) {
  return (
    <section id="pricing" className="section-shell scroll-mt-20 py-10 md:py-14">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-950">{messages.pricing.title}</h2>
        <p className="mt-2 text-zinc-600">{messages.pricing.subtitle}</p>
      </Reveal>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {messages.pricing.plans.map((plan, idx) => (
            <Reveal key={plan.name} delayMs={idx * 90}>
              <article className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h3 className="text-xl font-semibold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.details}</p>
                <p className="mt-3 text-2xl font-bold text-zinc-900">{plan.price}</p>
                <ul className="mt-3 space-y-2">
                  {plan.points.map((point) => (
                    <li key={point} className="text-sm text-zinc-700">
                      - {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="grid grid-cols-2 gap-3 lg:grid-cols-1" delayMs={120}>
          {cameraPhotos.map((photo, idx) => (
            <div key={photo} className="overflow-hidden rounded-2xl bg-zinc-200">
              <Image
                src={photo}
                alt={`Camera detail ${idx + 1}`}
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <a
            href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw=="
            target="_blank"
            rel="noreferrer"
            className="col-span-2 rounded-2xl bg-zinc-900 px-5 py-4 text-center text-sm font-semibold text-white hover:bg-zinc-700 lg:col-span-1"
          >
            {messages.pricing.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
