import { createFileRoute } from "@tanstack/react-router";
import { GalleryView } from "@/views/GalleryView";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maison Rêve" },
      { name: "description", content: "Style photographs of hair, skin, makeup, nails, bridal looks and the studio. Not claimed client results." },
    ],
  }),
  component: GalleryView,
});
