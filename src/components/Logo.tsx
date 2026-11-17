export function BoltMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 440 440" aria-hidden="true">
      <circle cx="220" cy="220" r="220" fill="#EFE1CE" />
      <path fill="#333333" d="M265 15 98 243h114l-40 172 166-228H232z" />
    </svg>
  );
}

/** App-icon version of the mark: cream circle on a charcoal rounded square. */
export function BoltIcon({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <rect width="512" height="512" rx="110" fill="#333333" />
      <circle cx="256" cy="256" r="210" fill="#EFE1CE" />
      <path fill="#333333" d="M298 62 139 278h108l-38 164 159-218H266z" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`logo ${dark ? "logo--dark" : ""}`}>
      {dark ? <BoltMark size={34} /> : <BoltIcon size={34} />}
      <span className="logo__word">
        oj<span className="logo__dot">.</span>dzn
      </span>
    </span>
  );
}
