import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  as?: "div" | "article" | "li" | "figure";
  className?: string;
}

export function Reveal({
  children,
  delayMs = 0,
  as = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const Tag = as as "div";
  const cls = reduced
    ? `reveal-no-motion is-visible ${className}`
    : `reveal${visible ? " is-visible" : ""} ${className}`;

  return (
    <Tag
      ref={ref}
      className={cls}
      style={delayMs && !reduced ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
