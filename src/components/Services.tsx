import { SERVICES } from "@/data/content";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading
          kicker="Treatments"
          title="Everything most families need, *under one roof*."
          lede="We refer out when a specialist genuinely serves you better — and we will tell you plainly when that is the case."
        />
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-3 bg-surface px-6 pt-7 pb-7 transition-colors hover:bg-blush"
            >
              <ServiceIcon name={service.icon} className="size-[30px] text-brass" />
              <h3 className="font-display text-[1.2rem] font-medium">{service.title}</h3>
              <p className="text-[0.93rem] leading-relaxed text-ink-soft">{service.body}</p>
              <span className="mt-auto pt-3.5 text-[0.82rem] font-semibold tracking-[0.02em] text-plum">
                {service.price}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
