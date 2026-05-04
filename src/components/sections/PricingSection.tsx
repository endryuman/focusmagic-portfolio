import { Reveal } from "@/components/ui/Reveal";
import type { SiteMessages } from "@/lib/i18n/types";

const INSTAGRAM_BOOKING =
  "https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw==";

type PricingSectionProps = {
  messages: SiteMessages;
};

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PricingSection({ messages }: PricingSectionProps) {
  const { plans } = messages.pricing;

  return (
    <section id="pricing" className="section-shell scroll-mt-20 py-8 md:py-16">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {messages.pricing.title}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            {messages.pricing.subtitle}
          </p>
        </div>
      </Reveal>

      <div
        className={classNames(
          "isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-14",
          "lg:mx-0 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:gap-y-0",
        )}
      >
        {plans.map((plan, tierIdx) => {
          const featured = plan.featured === true;
          const planId = `plan-${tierIdx}-${plan.name.replace(/\s+/g, "-").toLowerCase()}`;
          const isFirst = tierIdx === 0;
          const isLast = tierIdx === plans.length - 1;
          const isMiddle = !isFirst && !isLast;

          return (
            <Reveal key={plan.name} delayMs={tierIdx * 100}>
              <article
                className={classNames(
                  featured
                    ? "lg:z-10 lg:-mt-1 lg:shadow-[0_28px_70px_-28px_rgba(24,24,27,0.45)]"
                    : "lg:mt-10",
                  isFirst && "-mr-px",
                  isLast && "-ml-px",
                  "pricing-card group relative flex min-h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-white via-white to-zinc-50/80 p-8 shadow-sm ring-1 ring-zinc-950/[0.04] transition duration-300 ease-out will-change-transform xl:p-10",
                  isFirst && "lg:rounded-none lg:rounded-tl-3xl",
                  isLast && "lg:rounded-none lg:rounded-tr-3xl",
                  isMiddle && "lg:rounded-none lg:rounded-tl-3xl lg:rounded-tr-3xl",
                  featured
                    ? "border-zinc-900/15 ring-2 ring-zinc-900/10"
                    : "hover:border-zinc-300 hover:shadow-md",
                  !featured &&
                    "hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgba(24,24,27,0.25)]",
                  featured &&
                    "hover:-translate-y-1 hover:shadow-[0_32px_70px_-28px_rgba(24,24,27,0.5)]",
                )}
              >
                <div
                  aria-hidden="true"
                  className={classNames(
                    "pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition duration-500 group-hover:opacity-100",
                    featured
                      ? "bg-gradient-to-r from-transparent via-zinc-400/50 to-transparent"
                      : "bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent",
                  )}
                />

                <div>
                  <div className="min-w-0">
                    <h3
                      id={planId}
                      className={classNames(
                        "text-lg font-semibold leading-snug",
                        featured ? "text-zinc-950" : "text-zinc-900",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">{plan.details}</p>
                  </div>

                  <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-4xl font-semibold tracking-tight text-zinc-950">{plan.price}</span>
                  </p>

                  <ul role="list" className="pricing-features mt-8 space-y-3 text-sm leading-relaxed text-zinc-600">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-x-3">
                        <CheckIcon
                          className={classNames(
                            "mt-0.5 h-5 w-5 shrink-0",
                            featured ? "text-zinc-900" : "text-zinc-500",
                          )}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={INSTAGRAM_BOOKING}
                  target="_blank"
                  rel="noreferrer"
                  aria-describedby={planId}
                  className={classNames(
                    "mt-10 block rounded-2xl px-4 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
                    featured
                      ? "bg-zinc-900 text-white shadow-sm hover:bg-zinc-800 active:scale-[0.99]"
                      : "border border-zinc-200 bg-white/80 text-zinc-900 ring-1 ring-zinc-950/5 hover:border-zinc-300 hover:bg-white active:scale-[0.99]",
                  )}
                >
                  {messages.pricing.cta}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
