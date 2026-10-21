import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/views/CategoryView";

export const Route = createFileRoute("/services/skin")({
  head: () => ({
    meta: [
      { title: "Skincare — Maison Rêve" },
      { name: "description", content: "Facials and skin rituals at Maison Rêve. Suitability depends on a consultation. No medical claims." },
    ],
  }),
  component: () => <CategoryView id="skin" />,
});
