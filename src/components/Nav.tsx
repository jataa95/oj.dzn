"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CtaButton } from "./ui";
import { site } from "@/content/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__bar wrap">
        <a href="#top" className="nav__logo" aria-label="oj.dzn home" onClick={() => setOpen(false)}>
          <Logo dark={open} />
        </a>
        <button className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i />
          <i />
        </button>
      </div>

      <div className="menu" id="menu" aria-hidden={!open} inert={!open}>
        <nav className="menu__links wrap" aria-label="Main">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}>
              <span>0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="menu__foot wrap">
          <CtaButton variant="light">Book a free 30-min call</CtaButton>
          <div className="menu__contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
