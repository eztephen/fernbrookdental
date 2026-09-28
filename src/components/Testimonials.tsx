import { TESTIMONIALS } from "@/data/content";
import SectionHeading from "./SectionHeading";

function Stars() {
  return (
    <div className="flex gap-0.5 text-brass" role="img" aria-label="Five out of five stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="size-[15px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5 12.4 7l5.6.5-4.3 3.9 1.3 5.6L10 14l-5 3 1.3-5.6L2 7.5 7.6 7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="What patients say" title="The reviews we're *proudest* of." />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col gap-4 border border-line bg-blush px-6 py-6">
              <Stars />
              <blockquote className="font-display text-[1.06rem] leading-normal font-light text-ink">{t.quote}</blockquote>
              <figcaption className="mt-auto text-[0.85rem] text-ink-soft">
                <b className="block text-[0.9rem] font-semibold text-ink">{t.name}</b>
                {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
