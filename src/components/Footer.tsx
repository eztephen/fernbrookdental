import { SITE } from "@/config/site";
import { NAV, SERVICES } from "@/data/content";

const YEAR = new Date().getFullYear();

const headingClass = "mb-3.5 text-[0.74rem] font-bold tracking-[0.16em] text-brass-lift uppercase";
const linkClass = "block py-1 text-[#C9B4C3] transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-plum-deep pt-14 pb-6 text-[0.92rem] text-[#C9B4C3]">
      <div className="site-wrap">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div>
            <div className="mb-2.5 font-display text-[1.35rem] text-white">{SITE.name}</div>
            <p>
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>
            <p className="mt-3">
              <a href={SITE.phone.href} className="inline-block py-1.5 font-semibold text-white">
                {SITE.phone.display}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="inline-block py-1.5 break-all hover:text-white">
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <h4 className={headingClass}>Treatments</h4>
            {SERVICES.slice(0, 5).map((s) => (
              <a key={s.title} href="#services" className={linkClass}>
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h4 className={headingClass}>Practice</h4>
            {NAV.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
            <a href="#book" className={linkClass}>
              Book online
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-5 text-[0.8rem] text-[#9A8195]">
          <span>
            © {YEAR} {SITE.name}. A fictional practice, built as a design sample.
          </span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
