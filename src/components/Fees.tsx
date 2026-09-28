import { FEES, FEES_NOTE } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Fees() {
  return (
    <section id="fees" className="bg-plum py-[clamp(3.2rem,7vw,5.5rem)] text-[#F3E9F0]">
      <div className="site-wrap">
        <SectionHeading
          onDark
          kicker="Fees"
          title="Our prices are on the website *on purpose*."
          lede="Most practices make you ring to find out. We would rather you knew before you walked in."
        />
        <div className="border border-white/15 bg-white/[0.04]">
          {FEES.map((fee) => (
            <div
              key={fee.item}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-white/10 px-5 py-4 last:border-b-0"
            >
              <div>
                <b className="block font-semibold text-white">{fee.item}</b>
                <span className="text-[0.86rem] text-[#C3A9BD]">{fee.detail}</span>
              </div>
              <span className="font-display text-[1.3rem] whitespace-nowrap text-brass-lift tabular-nums">
                {fee.amount}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-[64ch] text-[0.87rem] text-[#C3A9BD]">{FEES_NOTE}</p>
      </div>
    </section>
  );
}
