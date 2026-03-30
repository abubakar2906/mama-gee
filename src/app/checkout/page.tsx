import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Mama Gee order and send it via WhatsApp.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
