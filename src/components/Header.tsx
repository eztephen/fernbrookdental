"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { NAV } from "@/data/content";
import ToothMark from "./ToothMark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="bg-plum-deep text-[0.82rem] text-[#EBDDE7]">
        <div className="site-wrap flex flex-wrap justify-between gap-x-4 gap-y-1 py-2">
          <span className="hidden sm:inline">{SITE.address.short}</span>
          <span>{SITE.hoursSummary}</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-blush/95 backdrop-blur-md">
        <div className="site-wrap flex items-center justify-between gap-3 py-3.5 sm:gap-6">
          <a href="#top" onClick={closeMobile} className="flex items-center gap-2.5">
            <ToothMark className="size-[34px] shrink-0" />
            <span className="font-display text-[1.18rem] leading-none text-plum">
              {SITE.shortName}
              <small className="mt-1 block font-sans text-[0.6rem] font-bold tracking-[0.2em] text-brass uppercase">
                {SITE.descriptor}
              </small>
            </span>
          </a>

          <nav
            id="site-nav"
            className={`${
              mobileOpen ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col shadow-[0_14px_28px_rgb(0_0_0/0.12)] lg:shadow-none border-b border-line bg-surface px-5 pt-2 pb-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="border-b border-line py-3 text-[0.92rem] font-medium text-ink-soft transition-colors hover:text-plum lg:border-0 lg:py-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <a href={SITE.phone.href} className="hidden font-bold whitespace-nowrap text-plum sm:inline">
              {SITE.phone.display}
            </a>
            <a href="#book" className="btn btn-primary max-[379px]:hidden">
              Book online
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[3.5px] rounded-[2px] border border-line px-2.5 py-2.5 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="site-nav"
            >
              <span className="block h-[1.5px] w-[19px] bg-plum" />
              <span className="block h-[1.5px] w-[19px] bg-plum" />
              <span className="block h-[1.5px] w-[19px] bg-plum" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
