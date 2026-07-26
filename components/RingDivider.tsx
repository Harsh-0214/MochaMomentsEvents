/**
 * The quiet echo of the signature coffee-ring / wedding-ring motif:
 * a small, slightly imperfect ring used as a section divider.
 */
export function RingDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gold/40" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gold">
        <path
          d="M11 2.2c3.4-.4 8 2.4 8.6 7.2.6 5-3 9.6-7.8 10-4.7.4-9-3-9.6-7.8C1.6 7 5 2.9 9.4 2.3"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px w-12 bg-gold/40" />
    </div>
  );
}
