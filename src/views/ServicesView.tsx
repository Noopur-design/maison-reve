import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { addOns, categories, durationLabel, images, inr, priceNote, services } from "@/data/content";
import { ArrowButton, Icon, Photo, Reveal } from "@/components/site/ui";

const filters = ["all", "hair", "skin", "nails", "makeup", "bridal", "wellness"] as const;
type Filter = (typeof filters)[number];

const labels: Record<Filter, string> = {
  all: "All services",
  hair: "Hair",
  skin: "Skin care",
  nails: "Nail care",
  makeup: "Makeup",
  bridal: "Bridal",
  wellness: "Wellness",
};

export function ServicesView() {
  const [filter, setFilter] = useState<Filter>("all");
  const blocks = (["hair", "skin", "nails", "makeup"] as const).filter((key) => filter === "all" || filter === key);
  const loose = useMemo(() => {
    if (filter === "all" || filter === "hair" || filter === "skin" || filter === "nails" || filter === "makeup") return [];
    return services.filter((service) => service.category === filter || service.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Our services</p>
          <h1 className="display mt-4">Beauty, crafted for every you</h1>
          <p className="mt-5 max-w-md text-muted">
            From everyday elegance to a special occasion, services are designed around your style, comfort and the way you want to feel.
          </p>
          <ArrowButton to="/booking" className="mt-7">Book your appointment</ArrowButton>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "leaf" as const, title: "Premium products", text: "Chosen for hair and skin." },
              { icon: "crown" as const, title: "Expert stylists", text: "Sample team, real craft." },
              { icon: "heart" as const, title: "Personalised care", text: "A plan, not a script." },
            ].map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} className="text-olive" />
                <p className="mt-2 font-medium">{item.title}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitShoulder} alt="Woman looking over her shoulder in warm light" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <div className="wrap flex flex-wrap gap-2 pb-8">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`min-h-11 rounded-full px-4 text-sm ${filter === item ? "bg-forest text-ivory" : "bg-cream text-ink"}`}
            aria-pressed={filter === item}
          >
            {labels[item]}
          </button>
        ))}
      </div>

      <div className="wrap space-y-16 pb-8">
        {blocks.map((key, index) => {
          const page = categories[key];
          const list = services.filter((service) => service.category === key).slice(0, 3);
          return (
            <Reveal key={key} className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className={index % 2 ? "lg:order-2" : ""}>
                <Photo src={page.approachImage} alt={page.approachAlt} ratio="portrait" className="arch zoom" />
              </div>
              <div>
                <p className="micro text-muted">0{index + 1}</p>
                <h2 className="display-sm mt-2">{page.title.split(" ").slice(0, 2).join(" ")}</h2>
                <p className="mt-3 max-w-md text-muted">{page.lede}</p>
                <Link to={page.key === "hair" ? "/services/hair" : page.key === "skin" ? "/services/skin" : page.key === "nails" ? "/services/nails" : "/services/makeup"} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {list.map((service) => (
                    <article key={service.id} className="overflow-hidden rounded-2xl border border-line bg-ivory">
                      <Photo src={service.image} alt="" ratio="square" />
                      <div className="p-3">
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="mt-1 text-sm text-muted">{service.blurb}</p>
                        <p className="mt-2 text-sm tabular-nums">{inr(service.price)} · {durationLabel(service.durationMin)}</p>
                        <Link to="/booking" search={{ service: service.id }} className="btn btn-ghost mt-3 w-full">
                          Book now
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        {loose.length > 0 ? (
          <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {loose.map((service) => (
              <article key={service.id} className="rounded-2xl border border-line p-4">
                <h3 className="font-medium">{service.name}</h3>
                <p className="mt-2 text-sm text-muted">{service.blurb}</p>
                <p className="mt-3 tabular-nums">{inr(service.price)}</p>
                <Link to="/booking" search={{ service: service.id }} className="btn btn-solid mt-4">Book now</Link>
              </article>
            ))}
          </section>
        ) : null}
      </div>

      <p className="wrap pb-10 text-sm text-muted">{priceNote}</p>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
            <div>
              <h2 className="serif text-3xl">A complete beauty experience</h2>
              <p className="mt-2 text-sm text-beige">Explore a package, or build a visit from the menu.</p>
            </div>
            <ArrowButton to="/packages" variant="light">Explore packages</ArrowButton>
          </div>
        </section>
      </Reveal>

      <Reveal className="wrap grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="serif text-3xl">Our service process</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["Consultation", "Personalised plan", "Expert care", "Aftercare"].map((title, index) => (
              <div key={title}>
                <p className="micro text-olive">0{index + 1}</p>
                <p className="mt-2 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="serif text-3xl">Add-ons</h2>
          <ul className="mt-4 divide-y divide-line">
            {addOns.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                <span>
                  <span className="block font-medium">{item.name}</span>
                  <span className="text-muted">{item.note}</span>
                </span>
                <span className="tabular-nums">{inr(item.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
