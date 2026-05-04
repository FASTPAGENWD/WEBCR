import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

const companyLinks = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Blog", href: "/blog" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <ScrollReveal className="block">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
            <div><span className="text-xl font-bold tracking-tight text-foreground">R.C</span>{" "}<span className="text-xl text-muted-foreground">Web Creations</span></div>
            <p className="text-sm leading-relaxed text-muted-foreground">Digitale ervaringen die inspireren en converteren. Op maat gemaakt, altijd premium.</p>
            <div className="flex gap-4">
              {socialLinks.map((l) => (<a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">{l.label}</a>))}
            </div>
            </div>
            <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Diensten</h3>
            <ul className="space-y-2.5">
              {["Custom Development", "UI/UX Design", "Performance & SEO", "Conversie Optimalisatie"].map((s) => (<li key={s}><span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default">{s}</span></li>))}
            </ul>
            </div>
            <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Bedrijf</h3>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
            <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide text-foreground">Contact</h3>
            <ul className="space-y-2.5">
              <li><a href="https://wa.me/31685436044" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">WhatsApp: 0685436044</a></li>
              <li><a href="mailto:info@rc-webcreation.nl" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">info@rc-webcreation.nl</a></li>
              <li><span className="text-sm text-muted-foreground">Nederland</span></li>
            </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal className="block">
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
            <p className="text-xs text-muted-foreground">&copy; 2026 R.C Web Creations. Alle rechten voorbehouden.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
              <Link
                href="/privacybeleid"
                className="text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                Privacybeleid
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                Algemene voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
