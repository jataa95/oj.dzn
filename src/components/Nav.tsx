"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BoltMark } from "./Logo";
import { Arrow, CtaButton } from "./ui";
import { projects, site } from "@/content/site";

const links = [
  { href: "#work", label: "Work", note: `${projects.length} live launches`, img: "blocsmith" },
  { href: "#services", label: "Services", note: "Strategy → Design → Build → Growth", img: "oseyi" },
  { href: "#process", label: "Process", note: "Call, design, build, launch", img: "olawale" },
  { href: "#packages", label: "Packages", note: "Pick a starting point", img: "fourdtruth" },
  { href: "#faq", label: "FAQ", note: "Good questions, straight answers", img: "celesta" },
  { href: "#contact", label: "Contact", note: "Book a free 30-min call", img: "lovesquad" },
];

function LagosTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" });
    const tick = () => setTime(fmt.format(new Date()));
    const first = setTimeout(tick, 0);
    const t = setInterval(tick, 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(t);
    };
  }, []);
  return <span suppressHydrationWarning>{time ? `Lagos ${time} WAT` : "Lagos, Nigeria"}</span>;
}

export { LagosTime };

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const markRef = useRef<HTMLAnchorElement>(null);

  // Scroll-linked mark (shrinks + rotates) and dock visibility.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const p = Math.min(1, y / 320);
      setScrolled(y > window.innerHeight * 0.55);
      const el = markRef.current;
      if (el) {
        el.style.setProperty("--p", String(p));
        el.style.setProperty("--rot", reduced ? "0deg" : `${(y * 0.06) % 360}deg`);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const showDock = scrolled || open;

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <a ref={markRef} href="#top" className="nav__mark" aria-label="oj.dzn — back to top" onClick={() => setOpen(false)}>
        <BoltMark size={88} />
      </a>

      <div className={`dock ${showDock ? "is-visible" : ""}`} inert={!showDock}>
        <span className="dock__cta">
          <CtaButton>Book a call</CtaButton>
        </span>
        <button className="dock__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="dock__label" aria-hidden="true">
            {open ? "Close" : "Menu"}
          </span>
          <span className="dock__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className="menu" id="menu" aria-hidden={!open} inert={!open}>
        <span className="menu__watermark" aria-hidden="true">
          oj.dzn
        </span>
        <div className="menu__inner wrap">
          <nav className="menu__links" aria-label="Main" onMouseLeave={() => setActive(0)}>
            <p className="menu__eyebrow">Navigate</p>
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={i === active ? "is-active" : ""}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${150 + i * 55}ms` : "0ms" }}
              >
                <span className="menu__n">0{i + 1}</span>
                <span className="menu__label">{l.label}</span>
                <Arrow className="menu__arrow" />
              </a>
            ))}
          </nav>

          <div className="menu__preview" aria-hidden="true">
            <div className="menu__frame">
              {links.map((l, i) => (
                <Image key={l.img} src={`/work/${l.img}-mockup.webp`} alt="" fill sizes="40vw" className={i === active ? "is-active" : ""} />
              ))}
            </div>
            <p className="menu__note">
              <span>{links[active].label}</span>
              {links[active].note}
            </p>
          </div>
        </div>

        <div className="menu__foot wrap">
          <p className="menu__status">
            <span className="badge__dot" /> Taking new projects · <LagosTime />
          </p>
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
