import { SITE } from "@/config/site";
import { HERO } from "@/data/content";
import Emphasis from "./Emphasis";

export default function Hero() {
  return (
    <section className="py-[clamp(3rem,7vw,5.5rem)]">
      <div className="site-wrap grid items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-5">
          <span className="kicker">{SITE.tagline}</span>
          <h1 className="font-display text-[clamp(2.5rem,5.6vw,4.05rem)] leading-[1.08] font-light tracking-[-0.018em] text-balance">
            <Emphasis text={HERO.headline} className="font-normal text-brass" />
          </h1>
          <p className="max-w-[64ch] text-[1.06rem] text-ink-soft">{HERO.lede}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#book" className="btn btn-primary">
              Book an appointment
            </a>
            <a href="#fees" className="btn btn-ghost">
              See our fees
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-[0.87rem] text-ink-soft">
            {HERO.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg className="size-[15px] shrink-0 text-ok" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M8 13.2 4.8 10l-1.3 1.3L8 15.8l8.5-8.5-1.3-1.3z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="plate plate-hero -order-1 aspect-[4/3] md:order-none md:aspect-[4/5]">
          <div className="absolute bottom-0 left-0 z-10 max-w-[74%] bg-surface px-4 py-3.5">
            <b className="block font-display text-[1.05rem] font-medium text-plum">{HERO.story.quote}</b>
            <span className="text-[0.82rem] text-ink-soft">{HERO.story.caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
