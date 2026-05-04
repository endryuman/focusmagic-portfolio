export type NavItem = {
  id: string;
  label: string;
};

export type SiteMessages = {
  meta: {
    title: string;
    description: string;
    /** Search phrases for `<meta name="keywords">` (also inform copy elsewhere). */
    keywords: string[];
  };
  nav: NavItem[];
  hero: {
    badge: string;
    title: string;
    description: string;
    city: string;
    instagramLabel: string;
    tiktokLabel: string;
    emailLabel: string;
  };
  process: {
    title: string;
    items: string[];
  };
  portfolio: {
    title: string;
    description: string;
    loadMore: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    cta: string;
    plans: Array<{
      name: string;
      price: string;
      details: string;
      featured?: boolean;
      points: string[];
    }>;
  };
  contact: {
    title: string;
    description: string;
    cta: string;
  };
};
