import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) return res.status(400).json({ error: "Lipsește STRIPE_PRICE_ID" });
    const origin = req.headers.origin || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      billing_address_collection: "auto"
    });
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message || "Stripe error" });
  }
}
