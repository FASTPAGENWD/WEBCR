"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const SPRING_CONFIG = { stiffness: 150, damping: 20, mass: 0.5 };
const TILT_MAX = 12;

const CODE_LINES = [
  { indent: 0, tokens: [{ text: "import", c: "#C678DD" }, { text: " { motion } ", c: "#E5C07B" }, { text: "from", c: "#C678DD" }, { text: " 'framer-motion'", c: "#98C379" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "export default", c: "#C678DD" }, { text: " function ", c: "#61AFEF" }, { text: "Website", c: "#E5C07B" }, { text: "() {", c: "#ABB2BF" }] },
  { indent: 1, tokens: [{ text: "const", c: "#C678DD" }, { text: " [live, setLive] = ", c: "#E06C75" }, { text: "useState", c: "#61AFEF" }, { text: "(", c: "#ABB2BF" }, { text: "true", c: "#D19A66" }, { text: ")", c: "#ABB2BF" }] },
  { indent: 1, tokens: [{ text: "const", c: "#C678DD" }, { text: " conversie = ", c: "#E06C75" }, { text: "98.7", c: "#D19A66" }, { text: " // 🚀", c: "#5C6370" }] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [{ text: "return", c: "#C678DD" }, { text: " (", c: "#ABB2BF" }] },
  { indent: 2, tokens: [{ text: "<", c: "#ABB2BF" }, { text: "motion.div", c: "#E06C75" }, { text: " animate", c: "#D19A66" }, { text: "={{ ", c: "#ABB2BF" }, { text: "scale:", c: "#E06C75" }, { text: " 1.02", c: "#D19A66" }, { text: " }}", c: "#ABB2BF" }, { text: ">", c: "#ABB2BF" }] },
  { indent: 3, tokens: [{ text: "<", c: "#ABB2BF" }, { text: "Premium", c: "#E5C07B" }, { text: " snelheid", c: "#D19A66" }, { text: "=", c: "#ABB2BF" }, { text: "\"razendsnel\"", c: "#98C379" }, { text: " />", c: "#ABB2BF" }] },
  { indent: 3, tokens: [{ text: "<", c: "#ABB2BF" }, { text: "Design", c: "#E5C07B" }, { text: " kwaliteit", c: "#D19A66" }, { text: "=", c: "#ABB2BF" }, { text: "\"pixel-perfect\"", c: "#98C379" }, { text: " />", c: "#ABB2BF" }] },
  { indent: 2, tokens: [{ text: "</", c: "#ABB2BF" }, { text: "motion.div", c: "#E06C75" }, { text: ">", c: "#ABB2BF" }] },
  { indent: 1, tokens: [{ text: ")", c: "#ABB2BF" }] },
  { indent: 0, tokens: [{ text: "}", c: "#ABB2BF" }] },
];

function CodeLines({ mobile = false }: { mobile?: boolean }) {
  const fs = mobile ? "text-[11px] leading-6" : "text-sm leading-7";
  const pad = mobile ? "p-4" : "p-6 sm:p-8";
  const nw = mobile ? "w-6 text-[10px] mr-3" : "w-8 text-xs mr-6";
  const ind = mobile ? 14 : 24;

  return (
    <div className={`relative bg-[#0d1117] ${pad} font-mono ${fs} overflow-x-auto`}>
      {!mobile && (
        <>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-[80px]" style={{ background: "var(--lava-2)" }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-15 blur-[60px]" style={{ background: "var(--lava-1)" }} />
        </>
      )}
      {CODE_LINES.map((line, li) => (
        <div key={li} className="flex items-center">
          <span className={`text-right text-gray-600 select-none shrink-0 ${nw}`}>{li + 1}</span>
          <span style={{ paddingLeft: line.indent * ind }}>
            {line.tokens.length === 0 ? "\u00A0" : line.tokens.map((t, ti) => (
              <span key={ti} style={{ color: t.c }}>{t.text}</span>
            ))}
          </span>
        </div>
      ))}
      <span
        className={`inline-block ${mobile ? "w-1.5 h-4 ml-6" : "w-2 h-5 ml-12"} mt-1 rounded-sm bg-blue-400 animate-pulse`}
        aria-hidden
      />
    </div>
  );
}

function EditorChrome({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-[#1e1e2e] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      </div>
      <div className="ml-3 flex items-center gap-2 text-xs text-gray-500">
        <span className="rounded bg-white/10 px-2 py-0.5 text-gray-400">website.tsx</span>
        {!mobile && <span className="rounded px-2 py-0.5 text-gray-600">styles.css</span>}
      </div>
    </div>
  );
}

export default function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [TILT_MAX, -TILT_MAX]), SPRING_CONFIG);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-TILT_MAX, TILT_MAX]), SPRING_CONFIG);
  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);
  const glowBg = useTransform([glowX, glowY], (v: number[]) =>
    `radial-gradient(600px circle at ${v[0]}% ${v[1]}%, var(--glow-color), transparent 60%)`);

  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="lava-blob lava-blob-2 opacity-20" style={{ top: "10%", right: "-5%" }} />
      <div className="lava-blob lava-blob-4 opacity-20" style={{ bottom: "0%", left: "-5%" }} />

      <div className="relative z-10 mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Live Code Preview</span>
          </div>

          <div className="md:hidden overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <EditorChrome mobile />
            <CodeLines mobile />
          </div>

          <div className="hidden md:block" style={{ perspective: 1200 }}>
            <motion.div
              ref={cardRef}
              onMouseMove={(e) => {
                const r = cardRef.current?.getBoundingClientRect();
                if (!r) return;
                mouseX.set((e.clientX - r.left) / r.width);
                mouseY.set((e.clientY - r.top) / r.height);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                mouseX.set(0.5);
                mouseY.set(0.5);
              }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="glow-border relative mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              <motion.div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500" style={{ background: glowBg, opacity: isHovered ? 1 : 0 }} />
              <EditorChrome />
              <CodeLines />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
