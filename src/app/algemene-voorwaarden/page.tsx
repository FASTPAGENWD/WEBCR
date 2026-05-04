import type { Metadata } from "next";
import PageShell, { SubPageIntro, SubPageBody } from "@/components/PageShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden en afspraken voor diensten van R.C Web Creations.",
  alternates: { canonical: `${siteUrl}/algemene-voorwaarden` },
  openGraph: {
    url: `${siteUrl}/algemene-voorwaarden`,
    title: "Algemene voorwaarden | R.C Web Creations",
    description: "Voorwaarden voor samenwerking en levering van diensten.",
  },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <PageShell>
      <SubPageIntro
        eyebrow="Juridisch"
        title="Algemene voorwaarden"
        description="Laatst bijgewerkt: 3 mei 2026. Lees onderstaande punten als kader voor samenwerking."
      />
      <SubPageBody>
        <p className="text-sm text-muted-foreground">
          Dit is een algemene sjabloontekst. Laat voorwaarden toetsen door een jurist voordat je
          ze juridisch afdwingbaar maakt.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Toepasselijkheid</h2>
          <p>
            Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van
            R.C Web Creations, tenzij uitdrukkelijk schriftelijk anders overeengekomen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2. Offertes en totstandkoming</h2>
          <p>
            Aan offertes kunnen geen rechten worden ontleend als de opdracht nog niet door beide
            partijen is bevestigd. Wijzigingen in scope kunnen leiden tot aanpassing van planning
            en prijs in overleg.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3. Uitvoering en medewerking</h2>
          <p>
            Opdrachtgever zorgt tijdig voor benodigde content, toegang en feedback. Vertraging
            aan opdrachtgeverzijde kan consequenties hebben voor deadlines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4. Intellectuele eigendom</h2>
          <p>
            Rechten op maatwerk worden overgedragen conform de overeenkomst. Generieke libraries,
            frameworks en bestaande tools blijven eigendom van derden of R.C Web Creations, tenzij
            anders afgesproken.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. Betaling</h2>
          <p>
            Facturering verloopt volgens de overeengekomen termijnen. Bij uitblijven van betaling
            kunnen werkzaamheden worden opgeschort na schriftelijke ingebrekestelling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6. Aansprakelijkheid</h2>
          <p>
            Aansprakelijkheid is beperkt tot het bedrag dat in het betreffende project overeengekomen
            is, voor zover niet uitgesloten door dwingend recht. Wij zijn niet aansprakelijk voor
            indirecte schade, gederfde winst of dataverlies tenzij sprake is van opzet of grove schuld.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7. Toepasselijk recht</h2>
          <p>
            Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd
            aan de bevoegde rechter in Nederland.
          </p>
        </section>

        <p>
          Vragen over deze voorwaarden?{" "}
          <a
            href="mailto:info@rc-webcreation.nl?subject=Vraag%20over%20voorwaarden"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            Mail ons
          </a>
          .
        </p>
      </SubPageBody>
    </PageShell>
  );
}
