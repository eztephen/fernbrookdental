import { VISIT_STEPS } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function FirstVisit() {
  return (
    <section id="visit" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="Your first visit" title="No surprises — *not on the chair, not on the bill*." />
        <ol className="steps grid gap-[clamp(1.25rem,3vw,2.5rem)] md:grid-cols-3">
          {VISIT_STEPS.map((step) => (
            <li key={step.title} className="step flex flex-col gap-2.5">
              <h3 className="font-display text-[1.14rem] font-medium">{step.title}</h3>
              <p className="text-[0.93rem] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
