"use client";

import { useInView } from "react-intersection-observer";

interface FlipValueProps {
  value: string;
  delayMs?: number;
  className?: string;
}

export default function FlipValue({ value, delayMs = 0, className }: FlipValueProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <span
      ref={ref}
      className={`inline-flex ${className ?? ""}`}
      style={{ perspective: "240px" }}
    >
      {value.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="slip-flip-char inline-block"
          style={
            inView
              ? {
                animation: "slip-flip 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both",
                animationDelay: `${delayMs + i * 80}ms`,
              }
              : { opacity: 0, transform: "rotateX(90deg)" }
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}
