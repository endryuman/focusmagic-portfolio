import { Reveal } from "@/components/ui/Reveal";
import type { SiteMessages } from "@/lib/i18n/types";

type PricingSectionProps = {
  messages: SiteMessages;
};

export function PricingSection({ messages }: PricingSectionProps) {
  const iconByPlan = [
    <svg key="camera" aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M9.2 4.5a1 1 0 0 0-.87.5l-.8 1.4H6A3.25 3.25 0 0 0 2.75 9.65v6.6A3.25 3.25 0 0 0 6 19.5h12a3.25 3.25 0 0 0 3.25-3.25v-6.6A3.25 3.25 0 0 0 18 6.4h-1.52l-.8-1.4a1 1 0 0 0-.87-.5H9.2Zm2.8 3.15a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.2-.9a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z" />
    </svg>,
    <svg key="heart" aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M12 20.5a.75.75 0 0 1-.45-.15C6.75 16.78 4 13.98 4 10.75 4 8.13 6.13 6 8.75 6c1.45 0 2.8.66 3.7 1.79A4.66 4.66 0 0 1 16.15 6C18.77 6 20.9 8.13 20.9 10.75c0 3.23-2.75 6.03-7.55 9.6a.75.75 0 0 1-.45.15Z" />
    </svg>,
    <svg key="event" aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
      <path d="M7 2.75a.75.75 0 0 1 .75.75V5h8.5V3.5a.75.75 0 0 1 1.5 0V5h.25A3 3 0 0 1 21 8v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h.25V3.5A.75.75 0 0 1 7 2.75ZM4.5 10v8A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-8h-15Zm7.5 2.1.66 1.33 1.47.21a.75.75 0 0 1 .42 1.28l-1.06 1.03.25 1.46a.75.75 0 0 1-1.09.79L12 17.5l-1.32.7a.75.75 0 0 1-1.09-.79l.25-1.46-1.06-1.03a.75.75 0 0 1 .42-1.28l1.47-.21.66-1.33a.75.75 0 0 1 1.34 0Z" />
    </svg>,
  ];

  return (
    <section id="pricing" className="section-shell scroll-mt-20 py-6 md:py-14">
      <Reveal>
        <h2 className="text-3xl font-semibold text-zinc-950">{messages.pricing.title}</h2>
        <p className="mt-2 text-zinc-600">{messages.pricing.subtitle}</p>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {messages.pricing.plans.map((plan, idx) => (
          <Reveal key={plan.name} delayMs={idx * 90}>
            <article className="h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-zinc-800">
                {iconByPlan[idx] ?? iconByPlan[0]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.details}</p>
              <p className="mt-3 text-2xl font-bold text-zinc-900">{plan.price}</p>
              <ul className="mt-3 space-y-2">
                {plan.points.map((point) => (
                  <li key={point} className="text-sm text-zinc-700">
                    • {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={140}>
        <a
          href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw=="
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full min-w-0 items-center justify-center rounded-2xl bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-700 md:w-auto"
        >
          {messages.pricing.cta}
        </a>
      </Reveal>
    </section>
  );
}
