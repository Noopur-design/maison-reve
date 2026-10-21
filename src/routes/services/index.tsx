import { createFileRoute } from "@tanstack/react-router";
import { ServicesView } from "@/views/ServicesView";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Maison Rêve" },
      { name: "description", content: "Hair, skin, nails, makeup, bridal and wellness services with illustrative prices in Indian rupees." },
    ],
  }),
  component: ServicesView,
});
