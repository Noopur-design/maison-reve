import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — Maison Rêve" },
      { name: "description", content: "How this Maison Rêve preview handles information you type into forms." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="wrap max-w-3xl py-14">
      <p className="micro text-olive">Privacy</p>
      <h1 className="display-sm mt-3">Privacy note</h1>
      <div className="mt-6 space-y-4 text-muted">
        <p>This is a preview website. Appointment requests and contact messages are saved in your browser’s local storage. They are not sent to a server, an email inbox, or the studio.</p>
        <p>Clearing site data removes them. Do not submit information you would not want stored on this device.</p>
        <p>Sample contact details on the site are placeholders and are not a live customer-service channel.</p>
        <p>Replace this note with the studio’s real privacy policy before launch.</p>
      </div>
    </article>
  );
}
