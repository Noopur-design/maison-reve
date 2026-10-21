import { createFileRoute } from "@tanstack/react-router";
import { CategoryView } from "@/views/CategoryView";

export const Route = createFileRoute("/services/makeup")({
  head: () => ({
    meta: [
      { title: "Makeup — Maison Rêve" },
      { name: "description", content: "Bridal, party, festive and editorial makeup at Maison Rêve, tailored to the occasion." },
    ],
  }),
  component: () => <CategoryView id="makeup" />,
});
