import { useMemo, useState } from "react";
import { gallery, images, type GalleryItem } from "@/data/content";
import { ArrowButton, Photo, Reveal } from "@/components/site/ui";
import { Lightbox } from "@/components/site/Lightbox";

const filters = [
  ["all", "All"],
  ["hair", "Hair"],
  ["skin", "Skin"],
  ["makeup", "Makeup"],
  ["nails", "Nails"],
  ["bridal", "Bridal"],
  ["studio", "Studio"],
] as const;

export function GalleryView() {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Our gallery</p>
          <h1 className="display mt-4">Real people. Beautiful stories.</h1>
          <p className="mt-5 max-w-md text-muted">
            A look at the atmosphere, hair, skin, makeup and nails we are designing the studio around. These are style photographs, not documented client results.
          </p>
          <ArrowButton to="/booking" className="mt-7">Book your look</ArrowButton>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitSmile} alt="Smiling portrait with daisies behind" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <div className="wrap flex flex-wrap gap-2 pb-6">
        {filters.map(([item, label]) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`min-h-11 rounded-full px-4 ${filter === item ? "bg-forest text-ivory" : "bg-cream"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <section className="wrap grid grid-cols-2 gap-3 pb-16 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={(index % 3) * 90} className="min-w-0">
            <button
              type="button"
              className="block w-full min-w-0 overflow-hidden rounded-3xl text-left"
              onClick={() => setOpen(index)}
            >
              <Photo src={item.src} alt={item.alt} ratio={index % 5 === 0 ? "portrait" : "square"} className="zoom" />
              <span className="mt-2 block text-sm font-medium">{item.title}</span>
              <span className="text-xs uppercase tracking-widest text-muted">{item.category}</span>
            </button>
          </Reveal>
        ))}
      </section>

      <Reveal className="wrap grid items-center gap-8 pb-16 lg:grid-cols-2">
        <div className="relative">
          <Photo src={images.makeupArtist} alt="Makeup being applied in warm light" ratio="wide" className="zoom rounded-[2rem]" />
        </div>
        <div className="rounded-[2rem] bg-cream p-8">
          <p className="micro text-olive">Studio moments</p>
          <h2 className="display-sm mt-3">More than a salon</h2>
          <p className="mt-4 text-muted">
            When the studio shares a real tour, it will live here. Until then, the room is a photograph of the intended mood.
          </p>
          <ArrowButton to="/about" className="mt-6">Explore our studio</ArrowButton>
        </div>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
        <div className="wrap flex flex-col gap-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="micro text-beige">Follow the journey</p>
            <p className="serif mt-2 text-3xl">{`@maisonreve.in`}</p>
            <p className="text-sm text-beige">Sample handle. Social profiles are not connected yet.</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {gallery.slice(0, 4).map((item) => (
              <img key={item.id} src={item.src} alt="" className="h-16 w-16 rounded-xl object-cover" />
            ))}
          </div>
        </div>
        </section>
      </Reveal>

      {open !== null ? (
        <Lightbox
          items={items as GalleryItem[]}
          index={open}
          onClose={() => setOpen(null)}
          onIndex={setOpen}
        />
      ) : null}
    </>
  );
}
