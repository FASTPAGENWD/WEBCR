import type { Metadata } from "next";
import PageShell, { SubPageIntro, SubPageBody } from "@/components/PageShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Hoe R.C Web Creations omgaat met persoonsgegevens, cookies en privacy (AVG-inzicht).",
  alternates: { canonical: `${siteUrl}/privacybeleid` },
  openGraph: {
    url: `${siteUrl}/privacybeleid`,
    title: "Privacybeleid | R.C Web Creations",
    description: "Informatie over verwerking van persoonsgegevens en cookies.",
  },
};

export default function PrivacybeleidPage() {
  return (
    <PageShell>
      <SubPageIntro
        eyebrow="Juridisch"
        title="Privacybeleid"
        description="Laatst bijgewerkt: 3 mei 2026. Dit document beschrijft hoe wij met gegevens omgaan."
      />
      <SubPageBody>
        <p className="text-sm text-muted-foreground">
          Dit is een algemene informatieve tekst. Laat een document op maat opstellen door een
          jurist als je specifieke verplichtingen hebt (bijv. AVG, sectorregels).
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Wie zijn wij</h2>
          <p>
            R.C Web Creations verzorgt webontwikkeling en aanverwante diensten. Voor
            privacyvragen kun je contact opnemen via{" "}
            <a
              href="mailto:info@rc-webcreation.nl"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              info@rc-webcreation.nl
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2. Welke gegevens verwerken we</h2>
          <p>We kunnen onder meer de volgende gegevens verwerken:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Naam en bedrijfsnaam</li>
            <li>E-mailadres en telefoonnummer (bijv. via WhatsApp of formulier)</li>
            <li>Inhoud van je berichten aan ons</li>
            <li>Technische gegevens zoals IP-adres en browsertype (via hosting/analytics)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3. Doeleinden</h2>
          <p>
            We gebruiken gegevens om contact met je te onderhouden, offertes uit te brengen,
            projecten uit te voeren en — waar van toepassing — de website te verbeteren en te
            beveiligen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4. Bewaartermijnen</h2>
          <p>
            We bewaren gegevens niet langer dan nodig voor de doelen waarvoor ze zijn verzameld,
            tenzij een langere bewaarplicht geldt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. Rechten</h2>
          <p>
            Onder de AVG heb je rechten zoals inzage, correctie en verwijdering. Stuur een
            verzoek naar het e-mailadres hierboven. Je kunt ook een klacht indienen bij de
            Autoriteit Persoonsgegevens.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
          <p>
            Deze site kan functionele en analytische cookies gebruiken. Pas instellingen in
            je browser aan als je bepaalde cookies wilt weigeren.
          </p>
        </section>
      </SubPageBody>
    </PageShell>
  );
}
