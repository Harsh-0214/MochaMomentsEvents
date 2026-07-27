/**
 * Oversized line-art watermarks — coffee beans and wedding rings drawn in
 * hairline strokes at very low opacity. Purely decorative texture behind
 * content, never carrying meaning.
 */

export function BeanMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
    >
      <ellipse cx="100" cy="130" rx="72" ry="118" transform="rotate(-18 100 130)" />
      <path d="M100 18c-26 34-30 76-14 112s18 76-4 112" strokeLinecap="round" />
      <path
        d="M74 44c-18 30-20 66-8 96"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path d="M128 66c14 28 16 62 6 92" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function RingsMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1"
    >
      <ellipse cx="118" cy="118" rx="86" ry="88" />
      <ellipse cx="118" cy="118" rx="70" ry="72" opacity="0.7" />
      <ellipse cx="212" cy="128" rx="74" ry="76" transform="rotate(14 212 128)" />
      <ellipse cx="212" cy="128" rx="59" ry="61" transform="rotate(14 212 128)" opacity="0.7" />
      {/* solitaire stone on the left band */}
      <path d="M104 30h28l10 16-24 22-24-22z" strokeLinejoin="round" />
      <path d="M94 46h48M118 30v38" opacity="0.6" />
    </svg>
  );
}
