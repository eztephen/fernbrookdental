import { SITE } from "@/config/site";
import SectionHeading from "./SectionHeading";
import OpeningHours from "./OpeningHours";
import BookingForm from "./BookingForm";

export default function Booking() {
  return (
    <section id="book" className="bg-blush-deep py-[clamp(3.2rem,7vw,5.5rem)]">
      <div className="site-wrap grid items-start gap-[clamp(2rem,5vw,3.5rem)] md:grid-cols-[0.85fr_1.15fr]">
        <div className="min-w-0">
          <SectionHeading
            kicker="Book an appointment"
            title={`Request a time and we'll *confirm ${SITE.replyPromise}*.`}
            lede={
              <>
                During opening hours we reply to every request {SITE.replyPromise}. For same-day emergencies, please ring
                us on <b className="text-ink">{SITE.phone.display}</b> — it&rsquo;s faster.
              </>
            }
          />
          <OpeningHours />
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
