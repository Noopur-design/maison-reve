import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsView } from "@/views/TestimonialsView";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Stories — Maison Rêve" },
      { name: "description", content: "Sample client stories for the Maison Rêve layout. Not verified reviews." },
    ],
  }),
  component: TestimonialsView,
});
