"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { CtaButton, CtaInner, Corners, whatsappLink } from "./ui";

const budgets = ["Not sure yet", "Under ₦500k", "₦500k – ₦1.5m", "₦1.5m – ₦3m", "₦3m+"];
const types = ["New website", "Redesign", "Online shop", "Portfolio", "Landing page", "Graphics"];

export function Contact() {
  const [type, setType] = useState(types[0]);
  const [sent, setSent] = useState(false);
  const wa = whatsappLink("Hi oj.dzn, I'd like to talk about a website.");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Business: ${d.get("business") || "-"}`,
      `Project: ${type}`,
      `Budget: ${d.get("budget")}`,
      `Reply to: ${d.get("reply")}`,
      "",
      `${d.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New project: ${type} — ${d.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__card">
        <div className="contact__main">
          <Corners />
          <div className="contact__intro">
            <h2 id="contact-title" className="h2">Let&apos;s build yours.</h2>
            <p className="contact__sub">One call, a clear plan, a site you&apos;re proud to share.</p>
            <div className="contact__ctas">
              <CtaButton>Book a free 30-min call</CtaButton>
              {wa && (
                <CtaButton href={wa} variant="light">
                  Chat on WhatsApp
                </CtaButton>
              )}
            </div>
            <p className="contact__or">or send a quick brief</p>
          </div>

          <form className="brief" onSubmit={onSubmit}>
            <fieldset className="brief__types">
              <legend>What do you need?</legend>
              {types.map((t) => (
                <button type="button" key={t} className={t === type ? "is-on" : ""} aria-pressed={t === type} onClick={() => setType(t)}>
                  {t}
                </button>
              ))}
            </fieldset>
            <div className="brief__grid">
              <label>
                <span>Your name</span>
                <input name="name" required autoComplete="name" placeholder="Ada Okafor" />
              </label>
              <label>
                <span>Business / brand</span>
                <input name="business" autoComplete="organization" placeholder="Ada Studio" />
              </label>
              <label>
                <span>Email or WhatsApp</span>
                <input name="reply" required placeholder="you@brand.com" />
              </label>
              <label>
                <span>Budget</span>
                <select name="budget" defaultValue={budgets[0]}>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
              <label className="brief__full">
                <span>Tell us about the project</span>
                <textarea name="message" rows={3} placeholder="What you do, who it's for, and what the website should achieve." />
              </label>
            </div>
            <button className="cta cta--solid brief__send" type="submit">
              <CtaInner>{sent ? "Opening your email app…" : "Send brief"}</CtaInner>
            </button>
          </form>
        </div>
        <footer className="footer">
          <Logo />
          <ul>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <p>
            © 2026 {site.name} · {site.location}
          </p>
        </footer>
      </div>
    </section>
  );
}
