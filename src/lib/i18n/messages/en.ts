import type { SiteMessages } from "@/lib/i18n/types";

export const en: SiteMessages = {
  meta: {
    title: "focusmagic.q | Photographer Portfolio",
    description: "Warm and natural lifestyle photography by Masha.",
  },
  nav: [
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "works", label: "Works" },
  ],
  hero: {
    badge: "focusmagic.q",
    title: "Warm, honest photography that keeps your moments alive.",
    description:
      "Hi, I am Masha. I am a photographer from Zaporizhzhia, Ukraine. I focus on natural emotions, soft atmosphere, and stories that feel real.",
    city: "Based in Estonia, from Zaporizhzhia, Ukraine.",
    instagramLabel: "Instagram",
    tiktokLabel: "TikTok",
    emailLabel: "Email",
  },
  process: {
    title: "How we work",
    items: [
      "You write to me on Instagram and share your idea.",
      "We choose style, location, and timing together.",
      "You receive edited photos and bonus moments quickly.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Selected sets from recent sessions.",
    loadMore: "Load more sets",
  },
  pricing: {
    title: "Price List",
    subtitle: "For booking, please write to me on Instagram.",
    cta: "Book in Instagram",
    plans: [
      {
        name: "Express session",
        price: "50 EUR",
        details: "30 min",
        points: ["Fast portrait session", "Best for quick personal updates"],
      },
      {
        name: "Standard session",
        price: "80 EUR / hour",
        details: "Love story or personal session",
        points: [
          "50 edited photos in 4-5 days",
          "Black-and-white duplicates",
          "Original photos included",
        ],
      },
      {
        name: "Reportage session",
        price: "100 EUR / hour",
        details: "Events and family moments",
        points: ["Natural storytelling style", "Several short videos as a gift"],
      },
    ],
  },
  contact: {
    title: "Let us create your story",
    description: "If you love natural vibes and real emotions, I would love to work with you.",
    cta: "Message me on Instagram",
  },
};
