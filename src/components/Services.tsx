import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  { number: "01", icon: "{ }", title: "Custom Development", description: "Schaalbare, razendsnelle webapplicaties gebouwd met moderne frameworks en bewezen technieken." },
  { number: "02", icon: "◆", title: "UI/UX Design", description: "Interfaces die intuïtief aanvoelen en er prachtig uitzien. Research-gedreven, pixel-perfect ontwerp." },
  { number: "03", icon: "⚡", title: "Performance & SEO", description: "Razendsnelle laadtijden en maximale vindbaarheid die organische groei stimuleren." },
  { number: "04", icon: "△", title: "Conversie Optimalisatie", description: "Datagedreven optimalisatie die bezoekers omzet in klanten." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="lava-blob lava-blob-1 opacity-15" style={{ top: "20%", left: "-10%" }} />
      <div className="lava-blob lava-blob-3 opacity-15" style={{ bottom: "10%", right: "-10%" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.2fr] md:gap-16 lg:gap-24">
          <div className="relative">
            <div className="sticky top-32">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Onze Diensten</span>
                <span className="h-px w-12" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
              </div>
              <ScrollReveal>
                <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">Gebouwd voor<br />impact</h2>
              </ScrollReveal>
              <ScrollReveal className="mt-4 max-w-sm text-lg text-muted-foreground block">
                Elke pixel, elke regel code — doelgericht.
              </ScrollReveal>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.number} delay={i * 0.06} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-md transition-colors duration-500 hover:border-border">
                <span className="pointer-events-none absolute top-4 right-6 text-6xl font-bold leading-none text-muted-foreground/10 select-none">{s.number}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold text-white" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>{s.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #3B82F6, #8B5CF6)" }} />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Onze Diensten</span>
              <span className="h-px w-8" style={{ background: "linear-gradient(90deg, #8B5CF6, #3B82F6)" }} />
            </div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-foreground">Gebouwd voor impact</h2>
            </ScrollReveal>
            <ScrollReveal className="mt-3 text-muted-foreground block">
              Elke pixel, elke regel code — doelgericht.
            </ScrollReveal>
          </div>
          <div className="flex flex-col gap-5">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.number} delay={i * 0.06} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-6">
                <span className="pointer-events-none absolute top-3 right-5 text-5xl font-bold leading-none text-muted-foreground/10 select-none">{s.number}</span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}>{s.icon}</div>
                <h3 className="mb-1.5 text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
