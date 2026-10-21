import { createFileRoute } from "@tanstack/react-router";
import { BookingView } from "@/views/BookingView";

type BookingSearch = { service?: string };

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book an Appointment — Maison Rêve" },
      { name: "description", content: "Request a Maison Rêve appointment. Demo times are shown in IST and are not a live reservation." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const { service } = Route.useSearch();
  return <BookingView serviceId={service} />;
}
