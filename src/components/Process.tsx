import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Ontdekking", description: "We duiken diep in jouw doelen, doelgroep en markt om de perfecte strategie te bepalen." },
  { num: "02", title: "Ontwerp", description: "Pixel-perfecte interfaces die schoonheid en conversie in balans brengen." },
  { num: "03", title: "Ontwikkeling", description: "Schone, schaalbare code gebouwd met moderne frameworks en bewezen technieken." },
  { num: "04", title: "Lancering & Groei", description: "Deployment, optimalisatie en continue verbetering voor maximale impact." },
];

function StepCircle({ num }: { num: string }) {
  return (
    <div className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 bg-background">
      <div className="absolute inset-0 rounded-full" style={{
        padding: "2px",
        background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }} />
      <span className="text-sm font-bold" style={{
        background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>{num}</span>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="lava-blob lava-blob-2 opacity-10" style={{ top: "30%", left: "-8%" }} />
      <div className="lava-blob lava-blob-4 opacity-10" style={{ bottom: "20%", right: "-8%" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Onze Werkwijze</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Van concept tot lancering</h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-7 md:left-1/2 md:-translate-x-px w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={step.num} delay={i * 0.08}>
                  {/* Mobile */}
                  <div className="flex items-start gap-5 md:hidden">
                    <div className="flex-shrink-0"><StepCircle num={step.num} /></div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {/* Desktop */}
                  <div className={`hidden md:flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`flex-1 ${isEven ? "text-right pr-12" : "text-left pl-12"}`}>
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2"><StepCircle num={step.num} /></div>
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
