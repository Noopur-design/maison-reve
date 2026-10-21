import { images } from "@/data/content";
import { Icon, Photo, Reveal } from "@/components/site/ui";
import { BookingFlow } from "@/components/booking/BookingFlow";

export function BookingView({ serviceId }: { serviceId?: string }) {
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Book appointment</p>
          <h1 className="display mt-4">Your self-care moment awaits</h1>
          <p className="mt-5 max-w-md text-muted">
            Choose a service, a demo time in IST, and your details. Saving a request does not confirm a reservation.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "crown" as const, title: "Artists", text: "Sample roster" },
              { icon: "leaf" as const, title: "Products", text: "Chosen with care" },
              { icon: "heart" as const, title: "The visit", text: "Shaped around you" },
            ].map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} className="text-olive" />
                <p className="mt-2 text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitSmile} alt="Soft portrait before an appointment" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>
      <Reveal className="wrap pb-16">
        <BookingFlow initialId={serviceId} />
      </Reveal>
    </>
  );
}
