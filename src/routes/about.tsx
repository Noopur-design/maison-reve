import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/views/AboutView";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maison Rêve" },
      { name: "description", content: "The story, philosophy and sample team behind Maison Rêve, a beauty studio planned for Gurugram." },
    ],
  }),
  component: AboutView,
});
