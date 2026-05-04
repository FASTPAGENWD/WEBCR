import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { SubPageIntro, SubPageBody } from "@/components/PageShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van idee naar live product: ontdekking, ontwerp, ontwikkeling, lancering en doorontwikkeling.",
  alternates: { canonical: `${siteUrl}/werkwijze` },
  openGraph: {
    url: `${siteUrl}/werkwijze`,
    title: "Werkwijze | R.C Web Creations",
    description:
      "Heldere stappen van strategie tot oplevering — zonder ruis, met focus op kwaliteit.",
  },
};

export default function WerkwijzePage() {
  return (
    <PageShell>
      <SubPageIntro
        eyebrow="Proces"
        title="Werkwijze"
        description="Een helder proces, zonder ruis — zodat jij weet waar je aan toe bent."
      />
      <SubPageBody>
        <div className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Ontdekking</h2>
            <p>
              We verkleinen het vraagstuk tot kerndoelen, doelgroep en succescriteria. Zo
              ontstaat een plan waar ontwerp en techniek op aansluiten.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Ontwerp</h2>
            <p>
              We vertalen strategie naar een visuele taal en interacties die gebruikers
              begrijpen — mobile-first, toegankelijk en merkconsistent.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Ontwikkeling</h2>
            <p>
              Schone architectuur, snelle laadtijden en een codebase die mee kan groeien.
              Je krijgt inzicht in voortgang en kunt tussentijds feedback geven.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Lancering &amp; groei</h2>
            <p>
              Go-live, monitoring en optimalisatie. We koppelen analytics waar nodig en
              plannen vervolgstappen voor conversie en SEO.
            </p>
          </section>
        </div>
        <p className="pt-4">
          Bekijk ook de korte uitleg op de homepage onder{" "}
          <Link href="/#process" className="text-foreground underline underline-offset-4 hover:opacity-80">
            Werkwijze
          </Link>{" "}
          of{" "}
          <Link href="/#contact" className="text-foreground underline underline-offset-4 hover:opacity-80">
            start een gesprek
          </Link>
          .
        </p>
      </SubPageBody>
    </PageShell>
  );
}
