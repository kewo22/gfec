export function ResultSeal({
  className = "w-[168px] h-[168px]",
  ringText = "GFEC · COLOMBO · EST. 2021 · VERIFIED FILE ·",
  centerLine1 = "APPROVED",
  centerLine2 = "FOR STUDY ABROAD",
  pathId = "seal-ring-path",
}: {
  className?: string;
  ringText?: string;
  centerLine1?: string;
  centerLine2?: string;
  pathId?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`-rotate-[9deg] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="var(--color-exam-gold)" strokeWidth="2.5" opacity="0.95" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-stamp-red)" strokeWidth="1.5" opacity="0.75" />
      <text fill="var(--color-exam-gold)" fontFamily="var(--font-slip-display)" fontSize="11.5" letterSpacing="3" opacity="1">
        <textPath href={`#${pathId}`} startOffset="2%">
          {ringText}
        </textPath>
      </text>
      <circle cx="100" cy="100" r="46" fill="none" stroke="var(--color-stamp-red)" strokeWidth="2" opacity="0.9" />
      <text
        x="100"
        y="98"
        textAnchor="middle"
        fill="var(--color-stamp-red)"
        fontFamily="var(--font-slip-display)"
        fontWeight="700"
        fontSize="21"
        letterSpacing="1"
      >
        {centerLine1}
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="var(--color-stamp-red)"
        fontFamily="var(--font-slip-display)"
        fontSize="10"
        letterSpacing="2"
        opacity="0.85"
      >
        {centerLine2}
      </text>
    </svg>
  );
}
