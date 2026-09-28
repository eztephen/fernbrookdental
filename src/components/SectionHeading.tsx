import Emphasis from "./Emphasis";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  lede?: React.ReactNode;
  onDark?: boolean;
}

export default function SectionHeading({ kicker, title, lede, onDark = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex max-w-[56ch] flex-col gap-3">
      <span className={`kicker ${onDark ? "text-brass-lift" : ""}`}>{kicker}</span>
      <h2
        className={`font-display text-[clamp(1.85rem,4.2vw,2.75rem)] font-light leading-[1.12] tracking-[-0.018em] text-balance ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        <Emphasis text={title} className={onDark ? "text-brass-lift" : "text-brass"} />
      </h2>
      {lede && (
        <p className={`max-w-[64ch] text-[1.06rem] ${onDark ? "text-[#D3BDCD]" : "text-ink-soft"}`}>{lede}</p>
      )}
    </div>
  );
}
