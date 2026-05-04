import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#05070E] py-28 md:py-36">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-30" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full blur-[80px] md:blur-[120px] opacity-25" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Laten we iets<br /><span className="gradient-text">uitzonderlijks</span> bouwen.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06} className="mt-6 text-base md:text-lg text-gray-400 max-w-xl mx-auto block">
          Klaar om jouw idee werkelijkheid te maken? Neem contact op via WhatsApp of e-mail — we reageren binnen 24 uur.
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/31685436044?text=Hoi%2C%20ik%20heb%20interesse%20in%20een%20website!" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 sm:px-10 sm:py-5 text-base font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-[0.98]">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }} />
            <svg className="relative z-10 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            <span className="relative z-10">WhatsApp ons</span>
          </a>
          <a href="mailto:info@rc-webcreation.nl?subject=Nieuw%20Project" className="group relative inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 sm:px-10 sm:py-5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 active:scale-[0.98]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <span>Stuur een e-mail</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-8 block">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500" />0685436044</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500" />info@rc-webcreation.nl</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
