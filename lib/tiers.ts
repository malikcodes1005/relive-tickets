export type Tier = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
};

export const TIERS: Tier[] = [
  {
    id: "tier-1",
    name: "Classic Reprint",
    price: 14.99,
    description: "The original, brought back to life.",
    features: [
      "3.5″ × 7.25″ printed ticket stub",
      "Protective sleeve",
      "Wax seal packaging",
      "Thank-you card",
    ],
  },
  {
    id: "tier-2",
    name: "Stat Card Upgrade",
    price: 26.99,
    description: "The full story, front and back.",
    badge: "Most Popular",
    features: [
      "Everything in Classic Reprint",
      "Back-of-card event recap & stats",
      "Premium hard case",
      "Twine-wrapped presentation",
    ],
  },
  {
    id: "tier-3",
    name: "Display Edition",
    price: 39.99,
    description: "Made to be shown off.",
    badge: "Premium",
    features: [
      "Everything in Stat Card Upgrade",
      "Holographic foil finish",
      "Display stand included",
      "Premium gift presentation",
    ],
  },
];
