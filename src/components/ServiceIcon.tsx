import type { ServiceIcon as IconName } from "@/data/content";

const paths: Record<IconName, React.ReactNode> = {
  tooth: (
    <path
      d="M12 3c2.4 0 3.4 1.2 5.2 1.2 2.7 0 4.5 1.8 4.5 5 0 5-2.6 13.3-5 13.3-1.5 0-2-2.7-4.7-2.7s-3.2 2.7-4.7 2.7c-2.4 0-5-8.3-5-13.3 0-3.2 1.8-5 4.5-5C8.6 4.2 9.6 3 12 3z"
      strokeLinejoin="round"
    />
  ),
  star: <path d="M12 2.5 14.6 8l6 .9-4.3 4.2 1 6-5.3-2.8L6.7 19l1-6L3.4 8.9 9.4 8z" strokeLinejoin="round" />,
  pulse: (
    <>
      <path d="M5 12h3l2-5 3 10 2.5-6 1.5 3h3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
    </>
  ),
  aligner: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 9.5h7M8.5 14.5h7M12 6v12" strokeLinecap="round" />
    </>
  ),
  implant: (
    <>
      <path d="M12 21V11M9 21h6" strokeLinecap="round" />
      <path d="M12 11c0-4 3-4 3-6.5A3 3 0 0 0 12 2a3 3 0 0 0-3 2.5C9 7 12 7 12 11z" strokeLinejoin="round" />
    </>
  ),
  child: (
    <>
      <path d="M7 15c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z" />
      <path d="M12 10V5M9 5h6" strokeLinecap="round" />
    </>
  ),
};

export default function ServiceIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
