import type { Metadata } from "next";
import Link from "next/link";
import PageShell, { SubPageIntro, SubPageBody } from "@/components/PageShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikelen over webontwikkeling, design, performance, SEO en digitale groei.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    url: `${siteUrl}/blog`,
    title: "Blog | R.C Web Creations",
    description:
      "Inzichten over bouwen, versnellen en laten werken op het web.",
  },
};
export default function BlogPage() {
  return (
    <PageShell>
      <SubPageIntro
        eyebrow="Inzichten"
        title="Blog"
        description="Gedachten over bouwen, versnellen en laten werken op het web."
      />
      <SubPageBody>
        <p className="text-foreground/90">
          We werken aan artikelen over performance, Next.js, design systems en conversie. Wil je
          geen release missen?{" "}
          <Link
            href="/#contact"
            className="text-foreground underline underline-offset-4 hover:opacity-80"
          >
            Meld je aan via contact
          </Link>{" "}
          — dan houden we je op de hoogte.
        </p>
        <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Binnenkort
          </p>
          <p className="text-foreground font-medium text-lg">Eerste publicaties volgen zodra ze live gaan.</p>
          <p className="mt-3 text-sm">
            Tot die tijd helpen we je graag direct met je project — een bericht is zo verstuurd.
          </p>
        </div>
      </SubPageBody>
    </PageShell>
  );
}
