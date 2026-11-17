import type { ShapeName } from "@/content/site";

const paths: Record<ShapeName, React.ReactNode> = {
  dots: (
    <>
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={i} cx={22 + i * 26} cy="60" rx={20 - i * 3} ry="26" />
      ))}
    </>
  ),
  asterisk: (
    <g transform="translate(60 60)">
      {[0, 45, 90, 135].map((r) => (
        <rect key={r} x="-7" y="-40" width="14" height="80" rx="3" transform={`rotate(${r})`} />
      ))}
    </g>
  ),
  arch: <path d="M10 110V60a50 50 0 0 1 100 0v50H80V62a20 20 0 0 0-40 0v48z" />,
  wave: <path d="M5 70c18-30 37-30 55 0s37 30 55 0v40H5z" />,
  bolt: <path d="M70 6 22 68h32l-12 46 56-70H64z" />,
  leaf: <path d="M10 110C10 50 50 10 110 10c0 60-40 100-100 100z" />,
  spiral: (
    <g transform="translate(60 60)">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <path key={r} d="M0 0C10-20 30-30 48-26 30-14 16-4 0 0z" transform={`rotate(${r})`} />
      ))}
    </g>
  ),
  loop: <path d="M60 60c-12-20-44-20-44 0s32 20 44 0 44-20 44 0-32 20-44 0z" fill="none" stroke="currentColor" strokeWidth="16" />,
  quarter: <path d="M10 110V10a100 100 0 0 1 100 100z" />,
  bars: (
    <>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={8 + i * 15} y={i % 2 ? 40 : 20} width="9" height={i % 2 ? 60 : 80} rx="2" />
      ))}
    </>
  ),
  diamond: <path d="M60 8 112 60 60 112 8 60z" />,
  half: <path d="M10 70a50 50 0 0 1 100 0z M10 80h100v30H10z" />,
};

export function Shape({ name, className }: { name: ShapeName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" fill="currentColor">
      {paths[name]}
    </svg>
  );
}
