const CODE_LINES = [
  { text: 'const website = await build({ speed: "blazing" });', left: "3%", dur: "11s", del: "0s" },
  { text: "export default function App() { return <Layout />; }", left: "55%", dur: "13s", del: "1.5s" },
  { text: 'npm run deploy --target="production" --optimize', left: "20%", dur: "10s", del: "3s" },
  { text: "const roi = data.filter(x => x.conversie > 300);", left: "65%", dur: "12s", del: "0.8s" },
  { text: "await db.query('SELECT * FROM klanten');", left: "8%", dur: "14s", del: "4.5s" },
  { text: '<Button variant="gradient" onClick={startProject} />', left: "42%", dur: "11s", del: "2.2s" },
  { text: "const [loading, setLoading] = useState(false);", left: "70%", dur: "13s", del: "6s" },
  { text: "transform: rotate3d(1, 1, 0, 45deg);", left: "15%", dur: "10.5s", del: "5s" },
  { text: "grid-template: repeat(auto-fit, minmax(300px, 1fr));", left: "50%", dur: "12.5s", del: "7.5s" },
  { text: 'fetch("/api/analytics").then(r => r.json());', left: "30%", dur: "11.5s", del: "1s" },
  { text: "const theme = useTheme({ mode: 'dark' });", left: "78%", dur: "13.5s", del: "3.5s" },
  { text: "animation: morph 20s ease-in-out infinite;", left: "5%", dur: "10s", del: "8.5s" },
  { text: "export const config = { runtime: 'edge' };", left: "60%", dur: "14s", del: "2.8s" },
  { text: "const pixel = perfect(design, code, passion);", left: "25%", dur: "11s", del: "9s" },
  { text: "if (performance > 99) deploy();", left: "45%", dur: "12s", del: "5.5s" },
  { text: "const { data } = await supabase.from('projects');", left: "10%", dur: "13s", del: "7s" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-[5.5rem] md:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="lava-blob lava-blob-1" style={{ top: "-10%", left: "-5%" }} />
        <div className="lava-blob lava-blob-2" style={{ top: "50%", right: "-10%" }} />
        <div className="lava-blob lava-blob-3" style={{ bottom: "-5%", left: "30%" }} />
        <div className="lava-blob lava-blob-4" style={{ top: "20%", right: "20%" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 0%, var(--background) 70%)" }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {CODE_LINES.map((s, i) => (
          <span
            key={i}
            className="floating-code-line"
            style={{
              left: s.left,
              ["--dur" as string]: s.dur,
              ["--del" as string]: s.del,
            }}
          >
            {s.text}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="hero-theme-in hero-theme-in-delay-a inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-muted-foreground">Beschikbaar voor nieuwe projecten</span>
        </div>

        <h1 className="hero-theme-in hero-theme-in-delay-b text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          Wij bouwen websites<br />die{" "}<span className="gradient-text">converteren</span>
        </h1>

        <p className="hero-theme-in hero-theme-in-delay-c mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Op maat gemaakte digitale ervaringen voor moderne bedrijven. Geen templates — alles custom, alles premium.
        </p>

        <div className="hero-scroll-cta mt-10 md:mt-12">
          <a href="#contact" className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold text-white overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-[0.98]">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)", backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }} />
            <span className="relative z-10">Start jouw project</span>
          </a>
        </div>
      </div>

      <div className="hero-theme-in hero-theme-in-delay-e pointer-events-none absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1">
        <span className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
        <div className="hero-scroll-hint w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}>
          <div className="w-1 h-1.5 rounded-full bg-muted-foreground/60" />
        </div>
      </div>
    </section>
  );
}
