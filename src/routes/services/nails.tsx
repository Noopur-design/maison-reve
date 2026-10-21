import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/views/CategoryView";

export const Route = createFileRoute("/services/nails")({
  head: () => ({
    meta: [
      { title: "Nail Care — Maison Rêve" },
      { name: "description", content: "Manicures, pedicures, gel and nail art at Maison Rêve, with hygiene notes and illustrative prices." },
    ],
  }),
  component: () => <CategoryView id="nails" />,
});
