export function BoltMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 440 440" aria-hidden="true">
      <circle cx="220" cy="220" r="220" fill="#EFE1CE" />
      <path fill="#333333" d="M265 15 98 243h114l-40 172 166-228H232z" />
    </svg>
  );
}

/** The brand mark on its own — no wordmark, no background. */
export function Logo({ size = 38 }: { size?: number }) {
  return (
    <span className="logo">
      <BoltMark size={size} />
      <span className="sr-only">oj.dzn</span>
    </span>
  );
}
