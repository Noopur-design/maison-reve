import { createFileRoute } from "@tanstack/react-router";
import { BlogView } from "@/views/BlogView";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Maison Rêve" },
      { name: "description", content: "Studio notes on appointments, facials and bridal planning from Maison Rêve." },
    ],
  }),
  component: BlogView,
});
