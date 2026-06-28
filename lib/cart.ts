"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TIERS } from "./tiers";

export type { Tier } from "./tiers";
export { TIERS } from "./tiers";

export type CartItem = {
  tierId: string;
  eventName: string;
  eventDate: string;
  quantity: number;
  photoDataUrl?: string;  // compressed base64 front-of-ticket image
  backNotes?: string;     // tier 2 & 3 only
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQty: (index: number, qty: number) => void;
  clear: () => void;
  total: () => number;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((s) => ({ items: [...s.items, item] })),
      removeItem: (index) =>
        set((s) => ({ items: s.items.filter((_, i) => i !== index) })),
      updateQty: (index, qty) =>
        set((s) => ({
          items: s.items.map((it, i) => (i === index ? { ...it, quantity: qty } : it)),
        })),
      clear: () => set({ items: [] }),
      total: () => {
        const { items } = get();
        return items.reduce((sum, item) => {
          const tier = TIERS.find((t) => t.id === item.tierId);
          return sum + (tier?.price ?? 0) * item.quantity;
        }, 0);
      },
    }),
    { name: "relive-cart" }
  )
);
