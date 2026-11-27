"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial smooth scrolling (Lenis). Pauses while the menu is open,
 * handles in-page anchor links, and is skipped for reduced motion / touch devices
 * (which already have native momentum scrolling).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -40 }, autoRaf: true });
    const html = document.documentElement;
    const sync = () => {
      if (html.classList.contains("menu-open")) lenis.stop();
      else lenis.start();
    };
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => {
      mo.disconnect();
      lenis.destroy();
    };
  }, []);
  return null;
}
