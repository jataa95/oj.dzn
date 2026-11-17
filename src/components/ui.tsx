import type { ReactNode } from "react";
import { site } from "@/content/site";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Black pill button with a detached round arrow "bubble" — primary CTA. */
export function CtaButton({
  href = site.calendly,
  children = "Book a free call",
  variant = "dark",
  external = true,
}: {
  href?: string;
  children?: ReactNode;
  variant?: "dark" | "light";
  external?: boolean;
}) {
  return (
    <a
      className={`cta cta--${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="cta__bubble">
        <Arrow />
      </span>
      <span className="cta__label">{children}</span>
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
