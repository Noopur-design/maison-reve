import { createFileRoute } from "@tanstack/react-router";
import { ContactView } from "@/views/ContactView";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Rêve" },
      { name: "description", content: "Contact Maison Rêve in Gurugram. Sample address and a message form that stays on your device." },
    ],
  }),
  component: ContactView,
});
