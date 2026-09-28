import { FAQS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  return (
    <section id="faq" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="Common questions" title="Things people ask us *before* they book." />
        <div className="max-w-[52rem]">
          {FAQS.map((faq, i) => (
            <details key={faq.q} className="faq border-b border-line" open={i === 0}>
              <summary className="text-[1.02rem] font-semibold text-ink">{faq.q}</summary>
              <p className="max-w-[64ch] pr-10 pb-5 text-[0.96rem] text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
