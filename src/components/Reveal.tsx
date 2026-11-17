"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType, type CSSProperties } from "react";

/** Adds `is-in` once the element scrolls into view. Pure CSS handles the animation. */
export function useInView<T extends Element>(threshold = 0.2, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return [ref, inView] as const;
}

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLElement>(0.15);
  return (
    <Tag ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={{ ...style, "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
