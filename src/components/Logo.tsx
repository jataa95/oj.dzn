export function BoltMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 440 440" aria-hidden="true">
      <circle cx="220" cy="220" r="220" fill="#efe1ce" />
      <path fill="#333" d="M265 15 98 243h114l-40 172 166-228H232z" />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`logo ${dark ? "logo--dark" : ""}`}>
      <BoltMark size={30} />
      <span className="logo__word">
        OJ.D<span className="logo__fade">ZN</span>
      </span>
    </span>
  );
}
