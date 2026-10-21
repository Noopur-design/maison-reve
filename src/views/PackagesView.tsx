import { Link } from "@tanstack/react-router";
import { addOns, images, inr, packages, priceNote, testimonials } from "@/data/content";
import { ArrowButton, Icon, Photo, Reveal, Stars } from "@/components/site/ui";

const groups = [
  { id: "signature", title: "Everyday beauty, elevated", lede: "Balanced visits for a regular rhythm.", href: "#signature" },
  { id: "bridal", title: "For your most special day", lede: "Wedding beauty with a clear list of what is included.", href: "#bridal" },
  { id: "seasonal", title: "In tune with the season", lede: "Shorter edits for weather and festivals.", href: "#seasonal" },
  { id: "membership", title: "Beauty benefits through the year", lede: "Sample membership terms, not a live contract.", href: "#membership" },
] as const;

export function PackagesView() {
  const quote = testimonials[1];
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Our packages</p>
          <h1 className="display mt-4">Curated beauty experiences for every you</h1>
          <p className="mt-5 max-w-md text-muted">
            Thoughtfully grouped services for a complete visit. Nothing here is a countdown or a false discount.
          </p>
          <ArrowButton to="/booking" className="mt-7">Explore packages</ArrowButton>
          <p className="mt-4 text-sm text-muted">{priceNote}</p>
        </div>
        <div className="hero-media">
          <Photo src={images.bridal} alt="Bridal portrait with gold jewellery" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <section className="wrap grid gap-3 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Signature packages", image: images.facial, href: "#signature" },
          { title: "Bridal packages", image: images.bridal, href: "#bridal" },
          { title: "Seasonal packages", image: images.flowers, href: "#seasonal" },
          { title: "Membership plans", image: images.salonHall, href: "#membership" },
        ].map((card, index) => (
          <Reveal key={card.title} delay={index * 90}>
            <a href={card.href} className="group relative block min-h-36 overflow-hidden rounded-3xl">
              <img src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-forest/45 transition-colors group-hover:bg-forest/55" />
              <span className="relative grid min-h-36 place-items-end p-4 font-medium text-ivory">{card.title}</span>
            </a>
          </Reveal>
        ))}
      </section>

      {groups.map((group) => {
        const list = packages.filter((item) => item.group === group.id);
        return (
          <Reveal key={group.id}>
            <section id={group.id} className="wrap scroll-mt-28 py-10">
            <h2 className="display-sm">{group.title}</h2>
            <p className="mt-2 max-w-lg text-muted">{group.lede}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {list.map((item) => (
                <article key={item.id} className={`flex min-w-0 flex-col overflow-hidden rounded-3xl border ${item.highlight ? "border-forest bg-cream" : "border-line bg-ivory"}`}>
                  <Photo src={item.image} alt="" ratio="photo" />
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {item.highlight ? <p className="micro text-olive">Signature pick</p> : null}
                    <h3 className="serif mt-1 text-2xl sm:text-3xl">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted">{item.blurb}</p>
                    <ul className="mt-4 space-y-1 text-sm">
                      {item.includes.map((line) => (
                        <li key={line}>· {line}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-lg tabular-nums">
                      {inr(item.price)}
                      {item.onwards ? <span className="text-sm text-muted"> onwards</span> : null}
                    </p>
                    <Link to="/booking" search={{ service: item.id }} className="btn btn-solid mt-4">
                      Book this package
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            </section>
          </Reveal>
        );
      })}

      <Reveal className="wrap py-10">
        <h2 className="serif text-3xl">Popular add-ons</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3">
              <span>
                <span className="block font-medium">{item.name}</span>
                <span className="text-sm text-muted">{item.note}</span>
              </span>
              <span className="tabular-nums">{inr(item.price)}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="wrap grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: "crown" as const, title: "Expert care", text: "A person, not a conveyor." },
            { icon: "leaf" as const, title: "Clear inclusions", text: "You can see what the price covers." },
            { icon: "heart" as const, title: "No fake urgency", text: "No countdown clocks or invented scarcity." },
            { icon: "shield" as const, title: "Editable terms", text: "Membership perks are samples until the studio publishes them." },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl bg-cream p-5">
              <Icon name={item.icon} className="text-olive" />
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <blockquote className="rounded-[2rem] bg-forest p-8 text-ivory">
          <p className="serif text-3xl leading-snug">“{quote.quote}”</p>
          <div className="mt-5 flex items-center gap-3">
            <img src={quote.image} alt="" className="h-11 w-11 rounded-full object-cover" />
            <span>
              <span className="block font-medium">{quote.name}</span>
              <Stars />
              <span className="block text-sm text-beige">Sample story</span>
            </span>
          </div>
        </blockquote>
      </Reveal>

      <Reveal className="wrap pb-16">
        <h2 className="serif text-3xl">Terms, plainly</h2>
        <ul className="mt-4 max-w-3xl space-y-2 text-sm text-muted">
          <li>Prices are illustrative and can change before the studio opens bookings.</li>
          <li>Bridal “onwards” means the listed figure is a starting sample, not a quote for travel or a second look.</li>
          <li>Membership percentages are layout examples. They are not an active offer.</li>
          <li>A package button saves a demo request. It does not take payment or hold a chair.</li>
        </ul>
      </Reveal>
    </>
  );
}
