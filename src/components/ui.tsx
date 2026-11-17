import type { ReactNode } from "react";
import { site } from "@/content/site";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Shared inner markup: a rolling label and an arrow that shoots out on hover. */
export function CtaInner({ children }: { children: string }) {
  return (
    <>
      <span className="cta__label">
        <span className="cta__roll" data-text={children}>
          {children}
        </span>
      </span>
      <span className="cta__icon" aria-hidden="true">
        <Arrow className="cta__arrow" />
        <Arrow className="cta__arrow cta__arrow--next" />
      </span>
    </>
  );
}

/** Primary call to action: one pill with a rolling label and a circular arrow. */
export function CtaButton({
  href = site.calendly,
  children = "Book a free call",
  variant = "solid",
  external = true,
}: {
  href?: string;
  children?: string;
  variant?: "solid" | "outline" | "dark" | "light";
  external?: boolean;
}) {
  const v = variant === "light" ? "outline" : variant === "dark" ? "solid" : variant;
  return (
    <a className={`cta cta--${v}`} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <CtaInner>{children}</CtaInner>
    </a>
  );
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ghost" href={href}>
      {children}
    </a>
  );
}

export function Hand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`hand ${className}`}>{children}</span>;
}

/** The four crosshair corner markers used to frame blocks. */
export function Corners() {
  return (
    <>
      <i className="corner corner--tl" aria-hidden="true" />
      <i className="corner corner--tr" aria-hidden="true" />
      <i className="corner corner--bl" aria-hidden="true" />
      <i className="corner corner--br" aria-hidden="true" />
    </>
  );
}

export function whatsappLink(text: string) {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null;
}
