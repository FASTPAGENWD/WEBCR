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
 * Alleen gemount op desktop (breed scherm + geen reduced motion).
 * Aparte component zodat useInView ná mount draait met een geldige ref — niet met een effect die
 * eerst bij `narrow===true` al met ref=null is afgebroken (dat liet desktop op opacity:0 hangen).
 */
function DesktopScrollReveal({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -8% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
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
  const reduced = useReducedMotion() ?? false;
  const narrow = useSyncExternalStore(
    subscribeNarrow,
    getNarrowSnapshot,
    getNarrowServerSnapshot
  );

  const cls = className.trim();

  if (narrow || reduced) {
    return <div className={cls}>{children}</div>;
  }

  return <DesktopScrollReveal className={cls} delay={delay}>{children}</DesktopScrollReveal>;
}
