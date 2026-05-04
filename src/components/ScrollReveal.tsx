"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

const THEME_EASE = [0.22, 1, 0.36, 1] as const;

/** Zelfde breekpunt als Tailwind `md` — telefoon = geen Framer scroll-hide (iOS/WebKit-betrouwbaarheid). */
const NARROW_QUERY = "(max-width: 767.98px)";

function subscribeNarrow(cb: () => void) {
  const mq = window.matchMedia(NARROW_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getNarrowSnapshot() {
  return window.matchMedia(NARROW_QUERY).matches;
}

/** SSR: smal aannemen → statische markup, volledige inhoud in HTML (geen opacity:0 op telefoon). */
function getNarrowServerSnapshot() {
  return true;
}

/**
 * Desktop: Framer scroll-in. Smal scherm / SSR-telefoon: alleen een div (geen useInView / geen opacity-0).
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const narrow = useSyncExternalStore(
    subscribeNarrow,
    getNarrowSnapshot,
    getNarrowServerSnapshot
  );

  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -8% 0px",
  });

  if (narrow || reduced) {
    return <div className={className.trim()}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className.trim()}
      initial={{ opacity: 0, y: 24 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{
        duration: 0.7,
        ease: THEME_EASE,
        delay: inView ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  );
}
