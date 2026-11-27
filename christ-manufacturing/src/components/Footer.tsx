"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { nav, site, wa } from "@/content/site";
import { Arrow } from "./Mark";

const quantities = ["Just a sample", "A small run", "Bulk production", "Not sure yet"];

export function Footer() {
  const [qty, setQty] = useState(quantities[0]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      "Hello CHRIST Manufacturing,",
      `My name is ${f.get("name")}${f.get("brand") ? ` from ${f.get("brand")}` : ""}.`,
      `I'd like to make: ${f.get("item")}.`,
      `Quantity: ${qty}.`,
    ].join("\n");
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer" id="contact">
      <Image src="/media/studio-moodboard.webp" alt="" fill sizes="100vw" className="footer__bg" />
      <div className="footer__shade" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">
            CHRIST <span className="script">Manufacturing</span>
          </p>
          <p className="footer__lede">Tell us what you are making. Your message opens on WhatsApp, ready to send.</p>

          <form className="enquiry" onSubmit={submit}>
            <div className="enquiry__row">
              <label>
                <span className="sr-only">Your name</span>
                <input name="name" required placeholder="Your name" autoComplete="name" />
              </label>
              <label>
                <span className="sr-only">Brand name</span>
                <input name="brand" placeholder="Brand (optional)" autoComplete="organization" />
              </label>
            </div>
            <label>
              <span className="sr-only">What are we making?</span>
              <input name="item" required placeholder="What are we making? e.g. 50 heavyweight tees" />
            </label>
            <fieldset className="enquiry__qty">
              <legend className="sr-only">Quantity</legend>
              {quantities.map((q) => (
                <label key={q} className={qty === q ? "is-on" : ""}>
                  <input type="radio" name="qty" value={q} checked={qty === q} onChange={() => setQty(q)} />
                  {q}
                </label>
              ))}
            </fieldset>
            <button className="btn btn--light" type="submit">
              Send enquiry <Arrow />
            </button>
          </form>
        </div>

        <div className="footer__nav">
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <a href={wa()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
            <li>
              <a href={`tel:+${site.whatsapp}`}>Call</a>
            </li>
          </ul>
          <address>
            {site.city}, {site.country}
            <br />
            <a href={`tel:+${site.whatsapp}`}>{site.phoneDisplay}</a>
          </address>
        </div>
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} {site.name} &nbsp;·&nbsp; Samples · Bulk production · Quality finishing
      </p>
    </footer>
  );
}
