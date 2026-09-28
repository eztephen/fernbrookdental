"use client";

import { SITE } from "@/config/site";
import { useToday } from "@/lib/useToday";

export default function OpeningHours() {
  const today = useToday();

  return (
    <div className="border border-line bg-surface">
      {SITE.hours.map((row) => {
        const isToday = today !== null && row.days.includes(today);
        return (
          <div
            key={row.label}
            className={`flex justify-between gap-4 border-b border-line px-4 py-3 text-[0.92rem] last:border-b-0 ${
              isToday ? "bg-blush font-semibold" : ""
            }`}
          >
            <span>
              {row.label}
              {isToday && " — today"}
            </span>
            <span className={`tabular-nums ${isToday ? "text-ok" : "text-ink-soft"}`}>{row.time}</span>
          </div>
        );
      })}
    </div>
  );
}
