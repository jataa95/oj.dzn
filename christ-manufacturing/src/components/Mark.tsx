/** The CHRIST cross — flared, pointed terminals with stitch-hole dots, after the brand's badge. */
export function Cross({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 140" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <path
        fill="currentColor"
        d="M50 0 61 9 58.5 38.5 89 36 100 50 89 64 58.5 61.5 60 126 50 140 40 126 41.5 61.5 11 64 0 50 11 36 41.5 38.5 39 9Z"
      />
      <g fill="var(--mark-hole, #fff)">
        <circle cx="50" cy="20" r="3.6" />
        <circle cx="50" cy="50" r="3.6" />
        <circle cx="23" cy="50" r="3.6" />
        <circle cx="77" cy="50" r="3.6" />
        <circle cx="50" cy="84" r="3.6" />
        <circle cx="50" cy="114" r="3.6" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`}>
      <Cross className="wordmark__cross" />
      <span>CHRIST</span>
    </span>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function Chevron({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }}>
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
