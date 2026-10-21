import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/views/CategoryView";

export const Route = createFileRoute("/services/hair")({
  head: () => ({
    meta: [
      { title: "Hair Services — Maison Rêve" },
      { name: "description", content: "Cuts, colour, balayage, smoothing and bridal hair at Maison Rêve, with illustrative prices." },
    ],
  }),
  component: () => <CategoryView id="hair" />,
});
