import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "View your saved details and order history.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
