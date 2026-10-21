import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  homeServices,
  images,
  packages,
  priceNote,
  promises,
  sampleNote,
  testimonials,
} from "@/data/content";
import { ArrowButton, Icon, Marquee, Photo, Reveal, SampleLine, Stars } from "@/components/site/ui";

export function HomeView() {
  const [quote, setQuote] = useState(0);
  const story = testimonials[quote];
  const featured = packages.filter((item) => item.group === "signature" || item.id === "bridal-experience").slice(0, 3);

  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Beauty is a ritual</p>
          <h1 className="display mt-4">Look good, feel like you</h1>
          <p className="mt-5 max-w-md text-muted">
            Thoughtful hair, beauty and self-care experiences designed to help you feel confident, radiant and completely yourself.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ArrowButton to="/booking">Book your appointment</ArrowButton>
            <ArrowButton to="/about" variant="ghost">Discover our studio</ArrowButton>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[images.teamRiya, images.teamAditi, images.teamSimran].map((src) => (
                <img key={src} src={src} alt="" className="h-11 w-11 rounded-full border-2 border-ivory object-cover" />
              ))}
            </div>
            <p className="text-sm text-muted">The studio team</p>
          </div>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitHome} alt="Portrait in an ivory silk blouse, looking just past the camera" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <Marquee items={["Personalised care", "Premium products", "Expert stylists", "A relaxing ambience"]} />

      <section className="wrap py-16">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="micro text-olive">Our services</p>
              <h2 className="display-sm mt-3">Beauty, crafted for every you</h2>
            </div>
            <div>
              <p className="text-muted">
                From everyday elegance to a wedding morning, the menu is arranged around your hair, skin, hands and the occasion.
              </p>
              <Link to="/services" className="group mt-4 inline-flex items-center gap-2 font-semibold">
                View all services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, index) => (
            <Reveal key={service.href} delay={index * 90}>
              <Link to={service.href} className="group block min-w-0">
                <Photo src={service.image} alt={service.alt} ratio="portrait" className="arch zoom" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <span>
                    <span className="block font-medium">{service.title}</span>
                    <span className="text-sm text-muted">{service.text}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:bg-forest group-hover:text-ivory">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-16">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-cream lg:grid-cols-2">
            <Photo src={images.salonHall} alt="Salon interior with arched mirrors, cream chairs and warm lamps" ratio="wide" className="zoom max-sm:max-h-44 sm:min-h-72 lg:min-h-full" />
            <div className="relative bg-forest p-6 text-ivory sm:p-8 md:p-12">
              <p className="micro text-beige">Our studio</p>
              <h2 className="display-sm mt-2 max-sm:text-2xl sm:mt-3">A space to unwind, rejuvenate and shine</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-beige sm:mt-4">
                More than a row of chairs. Maison Rêve is imagined as a room where skilled work and a warm welcome sit together.
              </p>
              <Link to="/about" className="btn btn-light group mt-5 md:mt-8">
                Take a look inside
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {promises.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="min-w-0">
              <Icon name={item.icon} className="h-6 w-6 text-olive" />
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="wrap grid items-stretch gap-4 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between rounded-[2rem] bg-forest p-8 text-ivory md:p-10">
            <div>
              <p className="micro text-beige">Real people, real beauty</p>
              <h2 className="display-sm mt-3">Transformations we love</h2>
              <SampleLine>
                <span className="text-beige">{sampleNote}</span>
              </SampleLine>
            </div>
            <ArrowButton to="/gallery" variant="light" className="mt-8 self-start">
              View gallery
            </ArrowButton>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Photo src={images.hairBow} alt="Ribboned hairstyle" ratio="portrait" className="zoom rounded-3xl" />
            <div className="grid gap-3">
              <Photo src={images.eye} alt="Soft makeup close-up" ratio="photo" className="zoom rounded-3xl" />
              <Photo src={images.nails} alt="Nude manicure" ratio="photo" className="zoom rounded-3xl" />
            </div>
          </div>
        </section>
      </Reveal>

      <section className="bg-cream">
        <Reveal className="wrap grid items-center gap-8 py-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Photo src={images.flowers} alt="White daisies and cream roses" ratio="portrait" className="hidden max-h-[28rem] rounded-[2rem] lg:block" />
          <div>
            <p className="micro text-olive">What our clients say</p>
            <blockquote key={`q-${story.id}`} className="soft-fade serif mt-4 text-2xl leading-snug sm:text-3xl md:text-4xl">
              “{story.quote}”
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <img key={`a-${story.id}`} src={story.image} alt="" className="soft-fade h-12 w-12 rounded-full object-cover" />
              <div key={`n-${story.id}`} className="soft-fade">
                <p className="font-medium">{story.name}</p>
                <p className="text-sm text-muted">{story.service} · sample story</p>
                <Stars />
              </div>
              <div className="ml-auto flex gap-2">
                <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:bg-forest hover:text-ivory" aria-label="Previous story" onClick={() => setQuote((quote + testimonials.length - 1) % testimonials.length)}>
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:bg-forest hover:text-ivory" aria-label="Next story" onClick={() => setQuote((quote + 1) % testimonials.length)}>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm tabular-nums text-muted">
              {String(quote + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal className="wrap grid items-center gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Photo src={images.portraitLift} alt="Portrait with long dark hair in warm light" ratio="portrait" className="zoom rounded-[2rem]" />
        <div>
          <p className="micro text-olive">Curated for you</p>
          <h2 className="display-sm mt-3">Beauty experiences just for you</h2>
          <p className="mt-4 max-w-md text-muted">Packages that gather a facial, hair and hands into one visit. Prices are illustrative.</p>
          <ul className="mt-6 space-y-3">
            {featured.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 border-b border-line pb-3">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm tabular-nums text-muted">From the menu</span>
              </li>
            ))}
          </ul>
          <ArrowButton to="/packages" className="mt-6">Explore packages</ArrowButton>
          <p className="mt-3 text-sm text-muted">{priceNote}</p>
        </div>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap grid items-center gap-6 py-14 md:grid-cols-[1.4fr_auto_1fr]">
            <div>
              <p className="micro text-beige">Ready for your glow</p>
              <h2 className="display-sm mt-3">Book your appointment</h2>
            </div>
            <Link to="/booking" aria-label="Book your appointment" className="grid h-16 w-16 place-items-center rounded-full bg-ivory text-forest">
              <ArrowRight className="h-6 w-6" />
            </Link>
            <p className="max-w-xs text-sm text-beige md:justify-self-end">Self-care is not a luxury on this page. A confirmed chair still needs the studio’s real diary.</p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
