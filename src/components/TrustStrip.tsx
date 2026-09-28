import { TRUST } from "@/data/content";

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <dl className="site-wrap grid grid-cols-2 gap-px bg-line md:grid-cols-4">
        {TRUST.map((stat) => (
          <div key={stat.caption} className="flex flex-col-reverse items-center bg-surface px-2 py-6 text-center">
            <dt className="mt-1.5 text-[0.78rem] text-ink-soft">{stat.caption}</dt>
            <dd className="font-display text-[clamp(1.6rem,3.4vw,2.2rem)] leading-none text-plum tabular-nums">
              {stat.figure}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
