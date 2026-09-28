export default function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 3c3.2 0 4.6 1.6 7 1.6 3.6 0 6 2.4 6 6.6 0 6.6-3.4 17.8-6.6 17.8-2 0-2.6-3.6-6.4-3.6s-4.4 3.6-6.4 3.6C6.4 29 3 17.8 3 11.2c0-4.2 2.4-6.6 6-6.6 2.4 0 3.8-1.6 7-1.6z"
        fill="var(--plum)"
      />
      <path
        d="M16 9.5c-1.9 0-3 1.2-3 2.9 0 1.5 1 2.4 1.9 3.3.7.7 1.1 1.3 1.1 2.3"
        stroke="var(--brass)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
