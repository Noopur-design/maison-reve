import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Maison Rêve" },
      { name: "description", content: "Preview terms for the Maison Rêve website. Prices and bookings are illustrative." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="wrap max-w-3xl py-14">
      <p className="micro text-olive">Terms</p>
      <h1 className="display-sm mt-3">Terms of this preview</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>Prices, packages, membership perks, team names and opening hours are illustrative. They are not an offer until the studio publishes confirmed terms.</p>
        <p>A demo booking reference does not reserve a time, take payment, or create a contract.</p>
        <p>Photographs are style images. They are not before-and-after records of clients.</p>
        <p>Skincare descriptions are not medical advice. Treatment suitability depends on a consultation, and some concerns belong with a dermatologist.</p>
        <p>Replace this page with the studio’s terms before taking real bookings.</p>
      </div>
    </article>
  );
}
