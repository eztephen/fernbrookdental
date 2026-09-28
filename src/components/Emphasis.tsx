import { Fragment } from "react";

// Renders "*word*" segments of a content string as italic emphasis.
export default function Emphasis({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className={className}>
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
