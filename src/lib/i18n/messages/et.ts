import type { SiteMessages } from "@/lib/i18n/types";

export const et: SiteMessages = {
  meta: {
    title: "focusmagic.q | Fotograafi portfoolio",
    description: "Soe ja loomulik fotograafia Mashalt.",
  },
  nav: [
    { id: "about", label: "Minust" },
    { id: "pricing", label: "Hinnakiri" },
    { id: "works", label: "Tood" },
  ],
  hero: {
    badge: "focusmagic.q",
    title: "Soojad ja ausad fotod, mis hoiavad hetked elus.",
    description:
      "Tere, mina olen Masha. Olen fotograaf Zaporižžjast, Ukrainast. Mulle meeldib jäädvustada loomulikke emotsioone ja ehtsat atmosfääri.",
    city: "Tegutsen Eestis, pärit Zaporižžjast, Ukrainast.",
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
    cta: "Broneeri Instagramis",
    plans: [
      {
        name: "Express fotosessioon",
        price: "50 EUR",
        details: "30 min",
        points: ["Kiire portreesessioon", "Sobib lühikeseks personaalseks sessiooniks"],
      },
      {
        name: "Standard fotosessioon",
        price: "80 EUR / tund",
        details: "Love story või personaalne sessioon",
        points: [
          "50 töödeldud fotot 4-5 päevaga",
          "Mustvalged duplikaadid",
          "Kaasa ka originaalfailid",
        ],
      },
      {
        name: "Reportaaži fotosessioon",
        price: "100 EUR / tund",
        details: "Üritused ja perefotod",
        points: ["Loomulik reportaažistiil", "Mõned lühivideod kingituseks"],
      },
    ],
  },
  contact: {
    title: "Loome sinu loo koos",
    description: "Kui sulle meeldivad loomulikkus ja ehtsad emotsioonid, töötan sinuga hea meelega.",
    cta: "Kirjuta Instagramis",
  },
};
