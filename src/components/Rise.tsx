"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/motion";

type RiseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "p" | "h2" | "h3" | "figure";
};

export function Rise({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RiseProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-in");

    if (reduced) {
      show();
      return;
    }

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92;
    if (inView) {
      show();
      return;
    }

    el.classList.add("will-rise");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    const fallback = window.setTimeout(show, 1600);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [reduced]);

  return (
    <Tag
      ref={ref as never}
      className={`rise ${className}`.trim()}
      style={{ "--rise-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
