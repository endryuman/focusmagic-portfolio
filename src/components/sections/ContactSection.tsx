import { Reveal } from "@/components/ui/Reveal";
import type { SiteMessages } from "@/lib/i18n/types";

type ContactSectionProps = {
  messages: SiteMessages;
};

export function ContactSection({ messages }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell scroll-mt-20 py-6 md:py-14">
      <Reveal className="rounded-3xl bg-zinc-900 px-6 py-8 text-white md:px-10 md:py-10">
        <h2 className="text-2xl font-semibold">{messages.contact.title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-200 md:text-base">{messages.contact.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/focusmagic.q?igsh=MTh2M3gxcndmemg2dw=="
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900"
          >
            {messages.contact.cta}
          </a>
          <a href="mailto:focusmagic.q@gmail.com" className="rounded-full border border-zinc-500 px-5 py-2 text-sm font-semibold text-white">
            focusmagic.q@gmail.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
