import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/data/content";

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, items.length, onClose, onIndex]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-forest/90 p-4" role="dialog" aria-modal="true" aria-label={item.title}>
      <button ref={closeRef} type="button" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink" onClick={onClose}>
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </button>
      <button type="button" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory text-ink sm:left-6" onClick={() => onIndex((index - 1 + items.length) % items.length)} aria-label="Previous image">
        <ChevronLeft />
      </button>
      <figure className="w-full max-w-3xl">
        <img src={item.src} alt={item.alt} className="max-h-[78vh] w-full rounded-2xl object-contain" />
        <figcaption className="mt-3 text-center text-sm text-ivory">
          {item.title}
          <span className="mt-1 block text-beige">Style photograph — not a claimed client result.</span>
        </figcaption>
      </figure>
      <button type="button" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory text-ink sm:right-6" onClick={() => onIndex((index + 1) % items.length)} aria-label="Next image">
        <ChevronRight />
      </button>
    </div>
  );
}
