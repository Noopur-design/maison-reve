import { images, promises, sampleNote, team, testimonials } from "@/data/content";
import { ArrowButton, Icon, Photo, Reveal, Stars } from "@/components/site/ui";

export function AboutView() {
  const quote = testimonials[0];
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">About us</p>
          <h1 className="display mt-4">A space created for you</h1>
          <p className="mt-5 max-w-md text-muted">
            At Maison Rêve, beauty is more than a look. It is a feeling. Personal care, skilled artistry and a room designed for you to feel comfortable come together here.
          </p>
          <ArrowButton to="/contact" className="mt-7">Our story</ArrowButton>
          <div className="mt-8 flex items-center gap-3">
            <img src={images.teamRiya} alt="" className="h-11 w-11 rounded-full object-cover" />
            <p className="text-sm text-muted">Placeholder figures below — not verified business data.</p>
          </div>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitLift} alt="Portrait with closed eyes and warm window light" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <Reveal>
        <section id="studio" className="wrap grid items-center gap-8 pb-16 lg:grid-cols-2">
          <Photo src={images.salonHall} alt="Wide view of the salon floor with arched mirrors" ratio="wide" className="zoom rounded-[2rem]" />
          <div>
            <p className="micro text-olive">Our story</p>
            <h2 className="display-sm mt-3">Beauty with a deeper purpose</h2>
            <p className="mt-4 text-muted">
              Maison Rêve starts from a simple belief: beauty should feel effortless, personal and kind. What begins as a studio brief grows into a place where artistry, care and community are meant to meet.
            </p>
            <p className="mt-3 text-muted">
              Hygiene, a proper consultation and a plan you understand are part of the visit — not extras written in small print.
            </p>
            <ArrowButton to="/services" variant="ghost" className="mt-6">See the menu</ArrowButton>
          </div>
        </section>
      </Reveal>

      <section className="border-y border-line">
        <p className="wrap py-8 text-sm text-muted">{sampleNote} Client counts and ratings are left off until they can be confirmed.</p>
      </section>

      <section className="wrap grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="micro text-olive">Our philosophy</p>
          <h2 className="display-sm mt-3">Care. Confidence. Community.</h2>
          <p className="mt-4 text-muted">
            Beauty here is a form of self-expression. The work is high-care and plain-spoken. You are not a ticket number.
          </p>
          <ArrowButton to="/testimonials" variant="ghost" className="mt-6">Sample stories</ArrowButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {promises.slice(0, 3).map((item) => (
            <article key={item.title} className="rounded-[2rem] bg-cream p-5">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-ivory">
                <Icon name={item.icon} className="text-olive" />
              </div>
              <h3 className="mt-6 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="wrap grid items-center gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="micro text-olive">Meet the team</p>
            <h2 className="display-sm mt-3">The artists behind your glow</h2>
            <p className="mt-4 text-muted">Names and portraits below are sample profiles for this preview, not a published staff list.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.id} delay={index * 100}>
                <article>
                  <Photo src={person.image} alt={`Sample portrait of ${person.name}`} ratio="portrait" className="zoom rounded-3xl" />
                  <h3 className="mt-3 font-medium">{person.name}</h3>
                  <p className="text-sm text-muted">{person.role}</p>
                  <p className="mt-1 text-sm text-muted">{person.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="wrap grid items-center gap-8 py-16 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">The studio</p>
          <h2 className="display-sm mt-3">A place to pause</h2>
          <p className="mt-4 text-muted">
            Warm interiors, plants and enough quiet to hear the consultation. The photographs show the intended atmosphere. They are not a claim about a finished address.
          </p>
          <ArrowButton to="/gallery" className="mt-6">See the gallery</ArrowButton>
        </div>
        <Photo src={images.salonDesk} alt="Reception desk with flowers and warm light" ratio="wide" className="zoom rounded-[2rem]" />
      </Reveal>

      <Reveal>
        <section className="border-t border-line">
        <div className="wrap py-14 text-center">
          <blockquote className="serif mx-auto max-w-3xl text-3xl leading-snug">“{quote.quote}”</blockquote>
          <div className="mt-5 inline-flex items-center gap-3">
            <img src={quote.image} alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-left text-sm">
              <span className="block font-medium">{quote.name}</span>
              <Stars />
              <span className="block text-muted">Sample story</span>
            </span>
          </div>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
            <div>
              <p className="micro text-beige">Ready for your glow</p>
              <h2 className="display-sm mt-3">Book your appointment</h2>
            </div>
            <ArrowButton to="/booking" variant="light">Book your appointment</ArrowButton>
          </div>
        </section>
      </Reveal>
    </>
  );
}
