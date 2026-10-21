import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { studio } from "@/data/content";
import { Photo } from "@/components/site/ui";
import { images } from "@/data/content";

function Social({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
      title={`${label} link will be added by the studio`}
      aria-label={`${label}, not connected yet`}
    >
      {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr_0.9fr]">
        <div>
          <p className="font-serif text-2xl tracking-widest">MAISON RÊVE</p>
          <p className="micro mt-1 text-muted">Hair · Beauty · Studio</p>
          <p className="mt-4 max-w-xs text-sm text-muted">
            A space where beauty, self-care and confidence are meant to meet. This preview uses sample contact details.
          </p>
          <div className="mt-5 flex gap-2">
            <Social label="Instagram">
              <Instagram />
            </Social>
            <Social label="Pinterest">
              <Pinterest />
            </Social>
            <Social label="Facebook">
              <Facebook />
            </Social>
            <Social label="YouTube">
              <Youtube />
            </Social>
          </div>
        </div>
        <div>
          <p className="micro text-muted">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brown">Home</Link></li>
            <li><Link to="/about" className="hover:text-brown">About</Link></li>
            <li><Link to="/services" className="hover:text-brown">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-brown">Gallery</Link></li>
            <li><Link to="/packages" className="hover:text-brown">Packages</Link></li>
            <li><Link to="/blog" className="hover:text-brown">Blog</Link></li>
            <li><Link to="/testimonials" className="hover:text-brown">Stories</Link></li>
            <li><Link to="/contact" className="hover:text-brown">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="micro text-muted">Our services</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services/hair" className="hover:text-brown">Hair services</Link></li>
            <li><Link to="/services/skin" className="hover:text-brown">Skin care</Link></li>
            <li><Link to="/services/nails" className="hover:text-brown">Nail care</Link></li>
            <li><Link to="/services/makeup" className="hover:text-brown">Makeup</Link></li>
            <li><Link to="/packages" className="hover:text-brown">Bridal packages</Link></li>
            <li><Link to="/packages" className="hover:text-brown">Membership</Link></li>
          </ul>
        </div>
        <div>
          <p className="micro text-muted">Contact us</p>
          <ul className="mt-4 space-y-3 text-sm text-ink">
            <li>{studio.address[0]}<br />{studio.address[1]} <span className="text-muted">(sample)</span></li>
            <li>{studio.phoneDisplay} <span className="text-muted">(sample)</span></li>
            <li>{studio.email} <span className="text-muted">(sample)</span></li>
            <li>{studio.hours}</li>
          </ul>
        </div>
        <Photo src={images.salonDesk} alt="Marble reception with flowers" ratio="portrait" className="arch hidden max-h-56 lg:block" />
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Rêve. Preview website.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms" className="hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Pinterest() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 3.2A8.8 8.8 0 0 0 8.1 19.9c-.1-.7-.2-1.8 0-2.6l1.5-6.2s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.6-2.8 3.6-6.1 0-2.5-1.7-4.4-4.8-4.4-3.5 0-5.7 2.6-5.7 5.5 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.3-.2.4-.5.2-1.4-.6-2-2.2-2-4 0-3 2.5-6.6 7.5-6.6 4 0 6.6 2.9 6.6 6 0 4.1-2.3 7.2-5.6 7.2-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.2.9-.8 1.9-1.2 2.6A8.8 8.8 0 1 0 12 3.2Z" />
    </svg>
  );
}
function Facebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M14.2 20v-6.2h2.1l.3-2.4h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.4c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H9.2v2.4h2.4V20h2.6Z" />
    </svg>
  );
}
function Youtube() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17.2 5.7 12 5.7 12 5.7s-5.2 0-6.9.4A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.7.4 6.9.4 6.9.4s5.2 0 6.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10.4 14.8V9.2L15.2 12l-4.8 2.8Z" />
    </svg>
  );
}
