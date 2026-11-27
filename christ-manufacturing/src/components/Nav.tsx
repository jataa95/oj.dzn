"use client";

import { useEffect, useState } from "react";
import { nav, wa } from "@/content/site";
import { Wordmark } from "./Mark";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const left = nav.slice(0, 2);
  const right = nav.slice(2);

  return (
    <>
      <header className={`nav ${solid ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
        <nav className="nav__inner" aria-label="Main">
          <ul className="nav__links">
            {left.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#top" className="nav__brand" aria-label="CHRIST Manufacturing — back to top">
            <Wordmark />
          </a>
          <ul className="nav__links nav__links--right">
            {right.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav__cta" href={wa()} target="_blank" rel="noopener noreferrer">
                Start a sample
              </a>
            </li>
          </ul>
          <button className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="nav__burger" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div id="menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        <ul>
          {nav.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
              <a href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--light" href={wa()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
          Start a sample on WhatsApp
        </a>
      </div>
    </>
  );
}
