export const site = {
  name: "USLU Estrich & Bodentechnik",
  owner: "Ümit Uslu",
  claim: "Estrich- und Bodentechnik mit Charakter",
  phones: ["0162 8305563", "0176 64055672"],
  phoneHref: "tel:+491628305563",
  email: "info@uslu-estrich.de",
  whatsapp: "+49 15567 567545",
  whatsappHref: "https://wa.me/4915567567545",
  address: {
    street: "Schachtstraße 40",
    zipCity: "59192 Bergkamen",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Schachtstra%C3%9Fe+40%2C+59192+Bergkamen",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Schachtstra%C3%9Fe+40,+59192+Bergkamen&output=embed",
  },
  hours: [
    { day: "Montag – Samstag", time: "08:00 – 18:00" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  stats: [
    { value: "500+", label: "Abgeschlossene Projekte" },
    { value: "98%", label: "Zufriedene Kunden" },
    { value: "20", label: "Jahre Erfahrung" },
  ],
  services: [
    {
      slug: "estricharbeiten",
      title: "Estricharbeiten",
      short: "Fachgerechte Ausführung für stabile, langlebige und perfekte Böden.",
      description:
        "Von Zement- über Anhydrit- bis hin zu Schnellestrich: Wir verlegen Ihren Estrich präzise, fachgerecht und termintreu – die Basis für jeden hochwertigen Bodenbelag.",
    },
    {
      slug: "fussbodenheizung",
      title: "Fußbodenheizung",
      short: "Effiziente Heizsysteme für mehr Komfort und Energieeinsparung.",
      description:
        "Wir planen und verlegen moderne Fußbodenheizungssysteme, die Ihr Zuhause gleichmäßig erwärmen und dabei spürbar Energiekosten sparen.",
    },
    {
      slug: "haussanierung",
      title: "Haussanierung",
      short: "Komplette Renovierungen – sauber, zuverlässig und termingerecht umgesetzt.",
      description:
        "Von der Entkernung bis zur schlüsselfertigen Übergabe begleiten wir Ihre Sanierung mit einem eingespielten Team und höchsten Qualitätsansprüchen.",
    },
    {
      slug: "beratung-planung",
      title: "Beratung und Planung",
      short: "Individuelle Betreuung von Anfang bis zur perfekten Umsetzung.",
      description:
        "Jedes Projekt beginnt mit einem persönlichen Gespräch. Wir beraten Sie ehrlich, planen vorausschauend und begleiten Sie bis zur letzten Handwerkerleistung.",
    },
  ],
} as const;
