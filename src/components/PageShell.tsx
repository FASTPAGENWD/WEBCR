import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";

type SubPageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SubPageIntro({ eyebrow, title, description }: SubPageIntroProps) {
  return (
    <ScrollReveal className="block">
      <section className="relative px-6 pt-28 pb-12 md:pt-32 md:pb-16 border-b border-border/60">
        <div className="mx-auto max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
          {description ? (
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
          ) : null}
        </div>
      </section>
    </ScrollReveal>
  );
}

type SubPageBodyProps = {
  children: ReactNode;
};

export function SubPageBody({ children }: SubPageBodyProps) {
  return (
    <ScrollReveal className="block">
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 space-y-8 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </ScrollReveal>
  );
}

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
