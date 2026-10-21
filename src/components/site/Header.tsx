import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: true },
  { to: "/gallery", label: "Gallery", exact: true },
  { to: "/packages", label: "Packages", exact: false },
  { to: "/blog", label: "Blog", exact: true },
  { to: "/contact", label: "Contact", exact: true },
] as const;

const serviceLinks = [
  { to: "/services", label: "All services" },
  { to: "/services/hair", label: "Hair" },
  { to: "/services/skin", label: "Skin care" },
  { to: "/services/nails", label: "Nail care" },
  { to: "/services/makeup", label: "Makeup" },
] as const;

export function Header() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesActive = path.startsWith("/services");

  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Lock the real scrolling element (html, not body) while the menu is open,
  // and reserve the scrollbar's width so the page doesn't jump when it hides.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const scrollbarW = window.innerWidth - html.clientWidth;
    const prevOverflow = html.style.overflow;
    const prevPad = html.style.paddingRight;
    html.style.overflow = "hidden";
    if (scrollbarW > 0) html.style.paddingRight = `${scrollbarW}px`;
    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = prevPad;
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`site-header sticky top-0 z-40 border-b border-line ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <Link to="/" className="min-w-0 shrink-0">
          <span className="block whitespace-nowrap font-serif text-base tracking-[0.12em] text-ink sm:text-xl sm:tracking-widest">
            MAISON RÊVE
          </span>
          <span className="micro mt-1 block whitespace-nowrap text-muted">Hair · Beauty · Studio</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <NavItem to="/" label="Home" active={path === "/"} />
          <NavItem to="/about" label="About" active={path === "/about"} />
          <div className="group relative">
            <Link to="/services" className={`nav-link ${servicesActive ? "is-active" : ""}`}>
              Services
            </Link>
            <div className="invisible absolute left-1/2 top-full z-20 w-52 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-line bg-ivory p-2 shadow-sm">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-cream"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.slice(2).map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} active={item.exact ? path === item.to : path.startsWith(item.to)} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/booking" className="btn btn-solid hidden sm:inline-flex">
            Book appointment
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-20 z-30 flex flex-col border-t border-line bg-ivory lg:hidden"
        >
          <nav
            className="wrap flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain py-4"
            aria-label="Mobile"
          >
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />
            <p className="micro px-1 pb-1 pt-3 text-muted">Services</p>
            {serviceLinks.map((item) => (
              <MobileLink key={item.to} to={item.to} label={item.label} />
            ))}
            <MobileLink to="/gallery" label="Gallery" />
            <MobileLink to="/packages" label="Packages" />
            <MobileLink to="/testimonials" label="Stories" />
            <MobileLink to="/blog" label="Blog" />
            <MobileLink to="/contact" label="Contact" />
          </nav>
          <div className="wrap shrink-0 border-t border-line py-3">
            <Link to="/booking" className="btn btn-solid w-full">
              Book appointment
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

function NavItem({ to, label, active }: { to: (typeof links)[number]["to"]; label: string; active: boolean }) {
  return (
    <Link to={to} className={`nav-link ${active ? "is-active" : ""}`}>
      {label}
    </Link>
  );
}

function MobileLink({ to, label }: { to: "/" | "/about" | "/services" | "/services/hair" | "/services/skin" | "/services/nails" | "/services/makeup" | "/gallery" | "/packages" | "/testimonials" | "/blog" | "/contact"; label: string }) {
  return (
    <Link to={to} className="rounded-xl px-1 py-2.5 text-lg serif text-ink">
      {label}
    </Link>
  );
}
