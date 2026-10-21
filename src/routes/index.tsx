import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/views/HomeView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Rêve — Look Good, Feel Like You" },
      {
        name: "description",
        content:
          "Maison Rêve is a luxury hair, beauty and self-care studio in Gurugram. Explore services, packages and a demo appointment request.",
      },
    ],
  }),
  component: HomeView,
});
