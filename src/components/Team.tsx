import { TEAM } from "@/data/content";
import SectionHeading from "./SectionHeading";

const toneClass = { plum: "plate-plum", slate: "plate-slate", sand: "plate-sand" } as const;

export default function Team() {
  return (
    <section id="team" className="py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap">
        <SectionHeading kicker="Our dentists" title="Three dentists, one hygienist, *and nobody in a hurry*." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.name}>
              <div className={`plate ${toneClass[member.tone]} mb-4 aspect-[3/4]`} role="img" aria-label={`Photo of ${member.name}`} />
              <h3 className="font-display text-[1.1rem] font-medium">{member.name}</h3>
              <div className="mt-0.5 text-[0.85rem] font-semibold text-brass">{member.role}</div>
              <p className="mt-2 text-[0.9rem] text-ink-soft">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
