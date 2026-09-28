import { SITE } from "@/config/site";

// Thumb-reach actions on phones; the page body reserves space for it in globals.css.
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px bg-line shadow-[0_-2px_16px_rgb(33_26_32/0.16)] sm:hidden">
      <a href={SITE.phone.href} className="bg-surface p-4 text-center text-[0.93rem] font-bold text-plum">
        Call the clinic
      </a>
      <a href="#book" className="bg-plum p-4 text-center text-[0.93rem] font-bold text-white">
        Book online
      </a>
    </div>
  );
}
