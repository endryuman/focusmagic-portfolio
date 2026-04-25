import { Reveal } from "@/components/ui/Reveal";
import type { SiteMessages } from "@/lib/i18n/types";

type ProcessSectionProps = {
  messages: SiteMessages;
};

export function ProcessSection({ messages }: ProcessSectionProps) {
  return (
    <section className="section-shell py-8 md:py-12">
      <Reveal>
        <h2 className="text-2xl font-semibold text-zinc-950">{messages.process.title}</h2>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {messages.process.items.map((item, idx) => (
          <Reveal key={item} delayMs={idx * 90}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-sm font-semibold text-zinc-500">0{idx + 1}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
