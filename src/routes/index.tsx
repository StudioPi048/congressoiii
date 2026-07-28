import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Calling } from "@/components/site/Calling";
import { Schedule } from "@/components/site/Schedule";
import { Venue } from "@/components/site/Venue";
import { Gallery } from "@/components/site/Gallery";
import { Convidados } from "@/components/site/Convidados";
import { Integracao } from "@/components/site/Integracao";
import { Memorias } from "@/components/site/Memorias";

import { Experiences } from "@/components/site/Experiences";
import { Investment } from "@/components/site/Investment";
import { Countdown } from "@/components/site/Countdown";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Tempus — Ciclos Invisíveis das Gerações | Florianópolis 2026",
      },
      {
        name: "description",
        content:
          "O maior encontro de Psicogenealogia do Brasil. Três dias de imersão em ancestralidade, Cabalá e consciência transgeracional. Florianópolis, 06 a 08 de Novembro de 2026.",
      },
      {
        property: "og:title",
        content: "Tempus — III Congresso de Psicogenealogia",
      },
      {
        property: "og:description",
        content:
          "Três dias de imersão profunda em ancestralidade, consciência e transformação. Florianópolis · 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://congressoiii.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Tempus — III Congresso de Psicogenealogia",
          startDate: "2026-11-06T14:00-03:00",
          endDate: "2026-11-08T13:00-03:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Hotel Torres da Cachoeira",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Luiz Boiteux Piazza, 3991",
              addressLocality: "Florianópolis",
              addressRegion: "SC",
              postalCode: "88056-000",
              addressCountry: "BR",
            },
          },
          organizer: { "@type": "Organization", name: "Instituto LIZ" },
          offers: {
            "@type": "Offer",
            price: "990.00",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",

          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-offwhite">
      <Header />
      <Hero />
      <Memorias />
      <Sobre />
      <Calling />
      <Convidados />
      <Integracao />
      <Schedule />
      <Venue />
      <Gallery />
      <Experiences />

      <Investment />
      <Countdown />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
