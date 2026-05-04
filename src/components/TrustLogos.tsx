import ScrollReveal from "./ScrollReveal";

const logos = ["Nexflow", "Artisan", "Vaultline", "Crescendo", "Synthetica", "Luminary"];

export default function TrustLogos() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="border-t border-border/50" />
        <div className="py-16">
          <ScrollReveal className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-12">
            Vertrouwd door innovatieve bedrijven
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-12 md:gap-y-8">
            {logos.map((name, i) => (
              <ScrollReveal
                key={name}
                delay={i * 0.05}
                className="text-lg md:text-2xl font-bold text-foreground select-none"
              >
                <span className="opacity-40 transition-opacity duration-300 hover:opacity-70 inline-block">
                  {name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="border-t border-border/50" />
      </div>
    </section>
  );
}
