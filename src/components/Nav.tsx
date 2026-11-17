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
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__bar">
        <a href="#top" className="nav__logo" aria-label="OJ.DZN home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__cta">
          <CtaButton>Book a call</CtaButton>
        </div>
        <button className="nav__toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i />
          <i />
        </button>
      </div>
      <div className="nav__sheet" id="mobile-menu" hidden={!open}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ transitionDelay: `${i * 40}ms` }}>
            <span>0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <div className="nav__sheet-foot">
          <CtaButton>Book a free 30-min call</CtaButton>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </header>
  );
}
