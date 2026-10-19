import { TempusLanding } from "@/components/redesign/TempusLanding";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...(import.meta.env.VITE_TEMPUS_PREVIEW === "true"
        ? [{ name: "robots", content: "noindex, nofollow" }]
        : []),
      {
        title: "Tempus — Ciclos Invisíveis das Gerações | Florianópolis 2026",
      },
      {
        name: "description",
        content:
          "III Congresso de Psicogenealogia TEMPUS. Palestras, diálogos e vivências em Florianópolis, de 06 a 08 de novembro de 2026. Consulte programação e ingressos.",
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
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93b2d9b8-795a-41ee-9163-1233ea5d4f05/id-preview-d51b1c1b--efa37d20-fbbe-4406-aac4-b803aa99e015.lovable.app-1778780402155.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/93b2d9b8-795a-41ee-9163-1233ea5d4f05/id-preview-d51b1c1b--efa37d20-fbbe-4406-aac4-b803aa99e015.lovable.app-1778780402155.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://congressoiii.lovable.app/" }],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Tempus — III Congresso de Psicogenealogia",
          startDate: "2026-11-06T14:30-03:00",
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
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <TempusLanding />;
}
