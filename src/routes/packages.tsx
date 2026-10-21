import { createFileRoute } from "@tanstack/react-router";
import { PackagesView } from "@/views/PackagesView";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Beauty Packages — Maison Rêve" },
      { name: "description", content: "Everyday, bridal, seasonal and membership packages with illustrative prices in rupees." },
    ],
  }),
  component: PackagesView,
});
