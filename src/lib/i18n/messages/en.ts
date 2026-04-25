import type { SiteMessages } from "@/lib/i18n/types";

export const en: SiteMessages = {
  meta: {
    title: "focusmagic | Photographer Portfolio",
    description: "Warm and natural lifestyle photography by Masha.",
  },
  nav: [
    { id: "about", label: "About" },
    { id: "pricing", label: "Pricing" },
    { id: "works", label: "Works" },
  ],
  hero: {
    badge: "focusmagic",
    title: "Warm, honest photography that keeps your moments alive.",
    description:
      "Hi! My name is Masha. I photograph in Tartu.\n\nI constantly experiment and improve my skills. For me, photography is a way to preserve emotion, mood, and real-life moments, and I put maximum care, sincerity, and attention into every session.\n\nTo book a photo session, message me on Instagram.",
    city: "",
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
    cta: "Book a photo session",
    plans: [
      {
        name: "Express session",
        price: "50 EUR",
        details: "30 min",
        points: [
          "25 edited photos in 4-5 days",
          "Black-and-white duplicates",
          "Original photos included",
        ],
      },
      {
        name: "Standard session",
        price: "80 EUR / hour",
        details: "Love story or personal session",
        points: [
          "50 edited photos in 4-5 days",
          "Black-and-white duplicates",
          "Original photos included",
          "Short video as a gift",
        ],
      },
      {
        name: "Reportage session",
        price: "100 EUR / hour",
        details: "Events and family moments",
        points: [
          "50 edited photos in 4-5 days",
          "Black-and-white duplicates",
          "Original photos included",
          "Short video as a gift",
        ],
      },
    ],
  },
  contact: {
    title: "Let us create your story",
    description: "If you love natural vibes and real emotions, I would love to work with you.",
    cta: "Message me on Instagram",
  },
};
