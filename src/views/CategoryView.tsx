import { Link } from "@tanstack/react-router";
import { durationLabel, categories, images, inr, priceNote, sampleNote, services, team, testimonials } from "@/data/content";
import { ArrowButton, FaqList, Icon, Marquee, Photo, Reveal, Stars } from "@/components/site/ui";

export function CategoryView({ id }: { id: "hair" | "skin" | "nails" | "makeup" }) {
  const page = categories[id];
  const list = services.filter((service) => service.category === id);
  const people = team.filter((person) => page.teamIds.includes(person.id));
  const quote = testimonials[id === "skin" ? 4 : id === "makeup" ? 1 : 0];

  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">{page.eyebrow}</p>
          <h1 className="display mt-4">{page.title}</h1>
          <p className="mt-5 max-w-md text-muted">{page.lede}</p>
          <ArrowButton to="/booking" className="mt-7">{page.cta}</ArrowButton>
        </div>
        <div className="hero-media">
          <Photo src={page.hero} alt={page.heroAlt} ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>
      <Marquee items={page.marquee} />

      <Reveal className="wrap grid items-center gap-8 py-16 lg:grid-cols-2">
        <Photo src={page.approachImage} alt={page.approachAlt} ratio="portrait" className="zoom rounded-[2rem]" />
        <div>
          <p className="micro text-olive">{page.approachKicker}</p>
          <h2 className="display-sm mt-3">{page.approachTitle}</h2>
          <p className="mt-4 text-muted">{page.approachBody}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.points.map((point) => (
              <div key={point.title}>
                <Icon name={point.icon} className="text-olive" />
                <h3 className="mt-2 font-medium">{point.title}</h3>
                <p className="text-sm text-muted">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="wrap pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display-sm">The menu</h2>
          <p className="max-w-sm text-sm text-muted">{priceNote}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 80} className="flex">
              <article className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-3xl border border-line">
              <Photo src={service.image} alt="" ratio="photo" className="zoom" />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-medium">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{service.blurb}</p>
                <p className="mt-3 text-sm tabular-nums">From {inr(service.price)} · {durationLabel(service.durationMin)}</p>
                <Link to="/booking" search={{ service: service.id }} className="btn btn-ghost mt-4">
                  Book now
                </Link>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="wrap grid items-center gap-8 py-12 lg:grid-cols-2">
        <Photo src={images.salonHall} alt="Salon interior prepared for appointments" ratio="wide" className="zoom rounded-[2rem]" />
        <div>
          <p className="micro text-olive">The process</p>
          <h2 className="display-sm mt-3">{page.processTitle}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.process.map((step) => (
              <li key={step.n} className="rounded-3xl bg-cream p-4">
                <p className="micro text-olive">{step.n}</p>
                <h3 className="mt-2 font-medium">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {page.care ? (
        <Reveal className="wrap pb-12">
          <h2 className="serif text-3xl">{page.careTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.care.map((note) => (
              <article key={note.title} className="rounded-3xl border border-line p-5">
                <h3 className="font-medium">{note.title}</h3>
                <p className="mt-2 text-sm text-muted">{note.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      ) : null}

      <Reveal>
        <section className="bg-cream">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="micro text-olive">Sample team</p>
            <h2 className="display-sm mt-3">In practised hands</h2>
            <p className="mt-3 text-sm text-muted">{sampleNote}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {people.map((person) => (
              <article key={person.id} className="flex gap-4">
                <img src={person.image} alt="" className="h-24 w-20 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-medium">{person.name}</h3>
                  <p className="text-sm text-muted">{person.role}</p>
                  <p className="mt-1 text-sm text-muted">{person.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
      </Reveal>

      <Reveal className="wrap grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Sample story</p>
          <blockquote className="serif mt-3 text-3xl leading-snug">“{quote.quote}”</blockquote>
          <div className="mt-4 flex items-center gap-3">
            <img src={quote.image} alt="" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <p className="font-medium">{quote.name}</p>
              <Stars />
            </div>
          </div>
        </div>
        <div>
          <p className="micro text-olive">Questions</p>
          <h2 className="serif mt-3 text-3xl">Before you book</h2>
          <div className="mt-4">
            <FaqList items={page.faqs} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
            <div>
              <h2 className="display-sm">{page.ctaTitle}</h2>
              <p className="mt-3 max-w-md text-sm text-beige">{page.ctaNote}</p>
            </div>
            <ArrowButton to="/booking" variant="light">Book your appointment</ArrowButton>
          </div>
        </section>
      </Reveal>
    </>
  );
}
