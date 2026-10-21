import { Link } from "@tanstack/react-router";
import { ArrowRight, Crown, Flower2, Heart, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { IconName } from "@/data/content";

const icons = {
  leaf: Leaf,
  crown: Crown,
  heart: Heart,
  shield: ShieldCheck,
  spark: Sparkles,
  flower: Flower2,
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp className={className} strokeWidth={1.4} aria-hidden />;
}

export function Photo({
  src,
  alt,
  ratio = "portrait",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: "portrait" | "wide" | "photo" | "square" | "tall";
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`frame ratio-${ratio} ${className}`}>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}

export function ArrowButton({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: "/" | "/about" | "/services" | "/services/hair" | "/services/skin" | "/services/nails" | "/services/makeup" | "/packages" | "/gallery" | "/testimonials" | "/contact" | "/booking" | "/blog" | "/privacy" | "/terms";
  children: ReactNode;
  variant?: "solid" | "light" | "ghost";
  className?: string;
}) {
  return (
    <Link to={to} className={`btn btn-${variant} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} role="img" aria-label="Maison Rêve emblem">
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="currentColor" strokeWidth="0.4" />
      <defs>
        <path id="ring" d="M80,80 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" />
      </defs>
      <text fill="currentColor" fontSize="9" letterSpacing="3.2" fontFamily="Manrope, sans-serif">
        <textPath href="#ring">HAIR · BEAUTY · STUDIO · SELF CARE · </textPath>
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="0.9">
        <path d="M80 102 V58" />
        <path d="M80 78 C68 70 62 60 64 50 C72 54 78 64 80 74" />
        <path d="M80 86 C94 76 102 66 98 54 C90 60 84 70 80 80" />
        <circle cx="80" cy="48" r="3" />
      </g>
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 220" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M70 210 C72 150 68 90 74 24" />
      <path d="M74 150 C46 140 28 118 22 88" />
      <path d="M72 124 C98 112 118 96 124 64" />
      <path d="M73 92 C50 78 40 58 46 36" />
      <path d="M74 70 C96 58 108 42 104 22" />
    </svg>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-ivory">
      <div className="marquee-track flex w-max items-center py-4">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="micro flex items-center gap-8 px-4 text-muted">
            {item}
            <span aria-hidden className="text-olive">
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-brown" aria-label="5 sample stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden />
      ))}
    </span>
  );
}

export function SampleLine({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted">{children}</p>;
}

export function CtaBand({
  eyebrow,
  title,
  note,
  to = "/booking",
  label = "Book your appointment",
  image,
}: {
  eyebrow: string;
  title: string;
  note: string;
  to?: string;
  label?: string;
  image?: string;
}) {
  return (
    <section className="bg-forest text-ivory">
      <div className="wrap grid items-center gap-8 py-14 md:grid-cols-[1.4fr_auto_1fr] md:py-16">
        <div>
          <p className="micro text-beige">{eyebrow}</p>
          <h2 className="display-sm mt-3 max-w-xl">{title}</h2>
        </div>
        <Link
          to={to}
          aria-label={label}
          className="grid h-16 w-16 place-items-center rounded-full bg-ivory text-forest"
        >
          <ArrowRight className="h-6 w-6" />
        </Link>
        <p className="max-w-xs text-sm leading-relaxed text-beige md:justify-self-end">{note}</p>
      </div>
      {image ? (
        <div className="wrap hidden pb-10 md:block">
          <Photo src={image} alt="" ratio="wide" className="max-h-48 rounded-2xl opacity-90" />
        </div>
      ) : null}
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            {item.q}
            <span className="text-muted group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="pt-3 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/**
 * Shared reveal registry: one rAF-throttled scroll/resize pass drives every
 * pending element, so even a fast flick or an in-page anchor jump can't scroll
 * past an element without revealing it (a per-element IntersectionObserver can
 * drop those transitions and leave content stuck hidden). Each element reveals
 * once its top rises into the bottom tenth of the viewport — which also covers
 * anything already scrolled past (negative top) or deep-linked below the fold.
 */
const pendingReveals = new Map<Element, () => void>();
let revealWired = false;
let revealScheduled = false;

function runRevealPass() {
  revealScheduled = false;
  const trigger = window.innerHeight * 0.9;
  for (const [el, reveal] of pendingReveals) {
    if (el.getBoundingClientRect().top < trigger) {
      pendingReveals.delete(el);
      reveal();
    }
  }
  if (pendingReveals.size === 0) {
    window.removeEventListener("scroll", scheduleRevealPass);
    window.removeEventListener("resize", scheduleRevealPass);
    revealWired = false;
  }
}

function scheduleRevealPass() {
  if (revealScheduled) return;
  revealScheduled = true;
  requestAnimationFrame(runRevealPass);
}

function registerReveal(el: Element, reveal: () => void) {
  pendingReveals.set(el, reveal);
  if (!revealWired) {
    revealWired = true;
    window.addEventListener("scroll", scheduleRevealPass, { passive: true });
    window.addEventListener("resize", scheduleRevealPass, { passive: true });
  }
  scheduleRevealPass();
  return () => {
    pendingReveals.delete(el);
  };
}

/**
 * Fades its children up as they scroll into view. SSR renders the content
 * visible; it is only hidden where `@media (scripting: enabled)` applies (JS
 * is on), so no-JS visitors and crawlers always see everything. `delay`
 * staggers a group of siblings.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    return registerReveal(el, () => setShown(true));
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div ref={ref} className={`reveal ${shown ? "is-in" : ""} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
