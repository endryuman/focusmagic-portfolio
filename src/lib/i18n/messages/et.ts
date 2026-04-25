import type { SiteMessages } from "@/lib/i18n/types";

export const et: SiteMessages = {
  meta: {
    title: "focusmagic | Fotograafi portfoolio",
    description: "Soe ja loomulik fotograafia Mashalt.",
  },
  nav: [
    { id: "about", label: "Minust" },
    { id: "pricing", label: "Hinnakiri" },
    { id: "works", label: "Tood" },
  ],
  hero: {
    badge: "focusmagic",
    title: "Soojad ja ausad fotod, mis hoiavad hetked elus.",
    description:
      "Tere! Minu nimi on Masha. Pildistan Tartus.\n\nKatsetan pidevalt ja arendan oma oskusi. Minu jaoks on fotograafia viis hoida alles emotsioonid, meeleolu ja elu ehtsad hetked ning igasse pildistamisse panen maksimaalselt tähelepanu, siirust ja soovi saavutada ilus tulemus.\n\nFotosessiooni broneerimiseks kirjuta mulle Instagrami.",
    city: "",
    instagramLabel: "Instagram",
    tiktokLabel: "TikTok",
    emailLabel: "Email",
  },
  process: {
    title: "Kuidas me töötame",
    items: [
      "Kirjutad mulle Instagrami ja jagad oma ideed.",
      "Valime koos stiili, asukoha ja aja.",
      "Saad kiiresti töödeldud fotod ja boonusmaterjalid.",
    ],
  },
  portfolio: {
    title: "Portfoolio",
    description: "Valik hiljutistest fotosessioonidest.",
    loadMore: "Laadi rohkem komplekte",
  },
  pricing: {
    title: "Hinnakiri",
    subtitle: "Broneerimiseks kirjuta mulle Instagrami.",
    cta: "Broneeri fotosessioon",
    plans: [
      {
        name: "Express fotosessioon",
        price: "50 EUR",
        details: "30 min",
        points: [
          "25 töödeldud fotot 4-5 päevaga",
          "Mustvalged duplikaadid",
          "Kaasa ka originaalfailid",
        ],
      },
      {
        name: "Standard fotosessioon",
        price: "80 EUR / tund",
        details: "Love story või personaalne sessioon",
        points: [
          "50 töödeldud fotot 4-5 päevaga",
          "Mustvalged duplikaadid",
          "Kaasa ka originaalfailid",
          "Lühivideo kingituseks",
        ],
      },
      {
        name: "Reportaaži fotosessioon",
        price: "100 EUR / tund",
        details: "Üritused ja perefotod",
        points: [
          "50 töödeldud fotot 4-5 päevaga",
          "Mustvalged duplikaadid",
          "Kaasa ka originaalfailid",
          "Lühivideo kingituseks",
        ],
      },
    ],
  },
  contact: {
    title: "Loome sinu loo koos",
    description: "Kui sulle meeldivad loomulikkus ja ehtsad emotsioonid, töötan sinuga hea meelega.",
    cta: "Kirjuta Instagramis",
  },
};
