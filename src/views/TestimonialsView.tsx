import { sampleNote, testimonials } from "@/data/content";
import { ArrowButton, Photo, Reveal, Stars } from "@/components/site/ui";
import { images } from "@/data/content";

export function TestimonialsView() {
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Stories</p>
          <h1 className="display mt-4">Real people. Real stories. Real confidence.</h1>
          <p className="mt-5 max-w-md text-muted">
            The notes on this page are written as sample stories so the layout can be reviewed. They are not verified reviews and they are not from Google.
          </p>
          <ArrowButton to="/booking" className="mt-7">Book your experience</ArrowButton>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitSmile} alt="Soft smiling portrait" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <section className="border-y border-line">
        <p className="wrap py-8 text-sm text-muted">{sampleNote}</p>
      </section>

      <section className="wrap py-14">
        <h2 className="display-sm">Stories for the layout</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((story, index) => (
            <Reveal key={story.id} delay={(index % 2) * 90}>
              <article className="grid h-full gap-4 rounded-3xl border border-line p-4 sm:grid-cols-[7rem_1fr]">
                <img src={story.image} alt="" className="h-28 w-full rounded-2xl object-cover sm:h-full" />
                <div>
                  <Stars />
                  <p className="mt-3 text-sm leading-relaxed">“{story.quote}”</p>
                  <p className="mt-3 font-medium">{story.name}</p>
                  <p className="text-sm text-muted">{story.service} · sample story</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="bg-cream">
          <div className="wrap py-14">
            <h2 className="serif text-3xl">Video stories</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Video testimonials will appear when the studio shares them. These stills are placeholders, not playable films.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[images.portraitShoulder, images.salonHall, images.bridal].map((src) => (
                <Photo key={src} src={src} alt="Placeholder still for a future video story" ratio="wide" className="zoom rounded-3xl" />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap flex flex-col items-start justify-between gap-4 py-14 md:flex-row md:items-center">
            <div>
              <p className="micro text-beige">Your story could be next</p>
              <h2 className="display-sm mt-3">Book your appointment</h2>
            </div>
            <ArrowButton to="/booking" variant="light">Book your appointment</ArrowButton>
          </div>
        </section>
      </Reveal>
    </>
  );
}
