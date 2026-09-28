"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { BOOKING } from "@/data/content";

const fieldClass =
  "w-full min-w-0 rounded-[2px] border border-line bg-blush px-3 py-2.5 text-base text-ink focus:border-brass focus:bg-surface focus:outline-none";
const labelClass = "text-[0.82rem] font-semibold tracking-[0.01em] text-ink";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  // Sample site: confirms in place. For a live client, POST to a route handler —
  // see pzaideletrato/src/app/api/contact/route.ts for the nodemailer pattern.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-0 border border-line bg-surface p-[clamp(1.25rem,3vw,2.2rem)]">
      {sent && (
        <div role="status" className="mb-4 border border-ok bg-[#EAF3EE] px-4 py-3.5 text-[0.93rem] text-[#22503E]">
          <b>Request received.</b> Thanks — we&rsquo;ll email you a confirmed time {SITE.replyPromise}. If it&rsquo;s
          urgent, ring {SITE.phone.display}.
        </div>
      )}

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>First name</span>
          <input name="firstName" type="text" autoComplete="given-name" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Last name</span>
          <input name="lastName" type="text" autoComplete="family-name" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Email</span>
          <input name="email" type="email" autoComplete="email" required className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
        </label>
      </div>

      <label className="mb-4 flex flex-col gap-1.5">
        <span className={labelClass}>What do you need?</span>
        <select name="reason" className={fieldClass}>
          {BOOKING.reasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>

      <div className="grid gap-x-4 sm:grid-cols-2">
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Preferred date</span>
          <input name="date" type="date" className={fieldClass} />
        </label>
        <label className="mb-4 flex flex-col gap-1.5">
          <span className={labelClass}>Preferred time</span>
          <select name="time" className={fieldClass}>
            {BOOKING.times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mb-4 flex flex-col gap-1.5">
        <span className={labelClass}>Anything we should know?</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Nervous patient, existing treatment, insurance provider…"
          className={fieldClass}
        />
      </label>

      <button type="submit" className="btn btn-brass w-full">
        Request this appointment
      </button>
      <p className="mt-3 text-[0.8rem] text-ink-faint">
        We&rsquo;ll only ever use your details to arrange your care. No marketing, no list-sharing.
      </p>
    </form>
  );
}
