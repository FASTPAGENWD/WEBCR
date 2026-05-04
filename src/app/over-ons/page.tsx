import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { SubPageIntro, SubPageBody } from "@/components/PageShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer R.C Web Creations kennen: premium webontwikkeling, design en focus op conversie en groei.",
  alternates: { canonical: `${siteUrl}/over-ons` },
  openGraph: {
    url: `${siteUrl}/over-ons`,
    title: "Over ons | R.C Web Creations",
    description:
      "Studio voor maatwerk websites en webapps: strategie, design, development en performance.",
  },
};
export default function OverOnsPage() {
  return (
    <PageShell>
      <SubPageIntro
        eyebrow="Bedrijf"
        title="Over ons"
        description="Wij combineren ambachtelijke ontwikkeling, strak design en focus op conversie — voor merken die online willen groeien."
      />
      <SubPageBody>
        <div className="space-y-4 text-foreground/90">
          <p>
            R.C Web Creations is gespecialiseerd in maatwerk websites en webapplicaties. We
            werken nauw samen met ondernemers en teams die kwaliteit belangrijker vinden dan
            snelle templates.
          </p>
          <p>
            Van eerste strategie tot lancering en doorontwikkeling: we nemen ownership over
            performance, toegankelijkheid en een beleving die past bij jouw merk.
          </p>
        </div>
        <h2 className="text-xl font-semibold text-foreground pt-2">Onze waarden</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Transparante communicatie en haalbare afspraken</li>
          <li>Code en design met oog voor detail en onderhoud</li>
          <li>Meetbare resultaten: snelheid, SEO en conversie</li>
        </ul>
        <p>
          Wil je sparren over jouw project?{" "}
          <Link href="/#contact" className="text-foreground underline underline-offset-4 hover:opacity-80">
            Neem contact op
          </Link>
          .
        </p>
      </SubPageBody>
    </PageShell>
  );
}
