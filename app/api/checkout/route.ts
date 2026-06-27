import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { TIERS } from "@/lib/tiers";
import type { CartItem } from "@/lib/cart";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
});

export async function POST(req: NextRequest) {
  const { items }: { items: CartItem[] } = await req.json();

  const line_items = items.map((item) => {
    const tier = TIERS.find((t) => t.id === item.tierId);
    if (!tier) throw new Error(`Unknown tier: ${item.tierId}`);
    return {
      price_data: {
        currency: "usd",
        unit_amount: Math.round(tier.price * 100),
        product_data: {
          name: `${tier.name} — ${item.eventName}`,
          description: item.eventDate
            ? `Event date: ${item.eventDate}`
            : undefined,
        },
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
    shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "AU"] },
    metadata: {
      items: JSON.stringify(items.map((i) => ({ tierId: i.tierId, eventName: i.eventName, eventDate: i.eventDate }))),
    },
  });

  return NextResponse.json({ url: session.url });
}
