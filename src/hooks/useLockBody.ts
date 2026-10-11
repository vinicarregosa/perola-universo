import { useEffect } from "react";

/** Trava o scroll do body enquanto `locked` for true. Restaura ao desmontar. */
export function useLockBody(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
