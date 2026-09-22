"use client";
 
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
 
type RevealVariant = "up" | "scale" | "fade";
 
const variantClass: Record<RevealVariant, string> = {
  up: "",
  scale: "reveal-scale",
  fade: "reveal-fade",
};
 
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  as?: "div" | "section" | "li" | "article" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
 
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
 
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
 
  return (
    <Tag
      ref={ref as never}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${variantClass[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}