import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  bookables,
  bookingCategories,
  demoSlots,
  durationLabel,
  inCategory,
  inr,
  type Bookable,
  type CategoryId,
} from "@/data/content";

type Details = { name: string; phone: string; email: string; notes: string };

const empty: Details = { name: "", phone: "", email: "", notes: "" };

function istToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addDays(iso: string, days: number) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function monthLabel(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

function longDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BookingFlow({ initialId }: { initialId?: string }) {
  const items = useMemo(() => bookables(), []);
  const initial = items.find((item) => item.id === initialId);
  const [step, setStep] = useState(initial ? 1 : 0);
  const [category, setCategory] = useState<CategoryId>(initial?.category ?? "hair");
  const [selected, setSelected] = useState<Bookable | null>(initial ?? null);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [cursor, setCursor] = useState(() => {
    const today = istToday();
    const [y, m] = today.split("-").map(Number);
    return { year: y, month: m - 1 };
  });
  const [details, setDetails] = useState<Details>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reference, setReference] = useState("");

  const today = istToday();
  const lastDay = addDays(today, 45);
  const choices = items.filter((item) => inCategory(item, category));

  useEffect(() => {
    if (!initial) return;
    setSelected(initial);
    setCategory(initial.category);
    setStep(1);
  }, [initial]);

  function validateDetails() {
    const next: Record<string, string> = {};
    if (details.name.trim().length < 2) next.name = "Enter your full name.";
    if (!/^[6-9]\d{9}$/.test(details.phone)) next.phone = "Enter a 10-digit Indian mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function confirm() {
    if (!selected || !date || !slot) return;
    const ref = `MR-${Math.floor(1000 + Math.random() * 9000)}`;
    const record = {
      ref,
      demo: true,
      service: selected.name,
      price: selected.price,
      onwards: Boolean(selected.onwards),
      date,
      slot,
      details,
      savedAt: new Date().toISOString(),
    };
    const key = "maison-reve-demo-bookings";
    const existing = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
    localStorage.setItem(key, JSON.stringify([record, ...existing].slice(0, 20)));
    setReference(ref);
    setStep(4);
  }

  if (step === 4 && selected) {
    return (
      <section className="rounded-3xl border border-line bg-cream p-6 md:p-10">
        <p className="micro text-olive">Demo request saved</p>
        <h2 className="display-sm mt-3">We noted this on your device</h2>
        <p className="mt-4 max-w-xl text-muted">
          Reference <span className="font-semibold text-ink">{reference}</span>. This is not a confirmed appointment.
          The studio has not received it, and the time is not reserved. Connect a booking desk before treating these as real.
        </p>
        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          <div><dt className="text-muted">Service</dt><dd className="font-medium">{selected.name}</dd></div>
          <div><dt className="text-muted">When</dt><dd className="font-medium">{longDate(date)} · {slot} IST</dd></div>
          <div><dt className="text-muted">Estimate</dt><dd className="font-medium tabular-nums">{inr(selected.price)}{selected.onwards ? " onwards" : ""} · {durationLabel(selected.durationMin)}</dd></div>
          <div><dt className="text-muted">Guest</dt><dd className="font-medium">{details.name} · +91 {details.phone}</dd></div>
        </dl>
        <button
          type="button"
          className="btn btn-solid mt-8"
          onClick={() => {
            setStep(0);
            setReference("");
            setDate("");
            setSlot("");
            setDetails(empty);
          }}
        >
          Start another demo
        </button>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-line bg-ivory p-4 sm:p-6 md:p-8">
      <ol className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
        {["Service", "Date & time", "Your details", "Review"].map((label, index) => (
          <li key={label} className={`rounded-2xl border px-3 py-3 ${step === index ? "border-forest bg-cream" : "border-line"}`}>
            <span className="micro text-muted">0{index + 1}</span>
            <p className="mt-1 font-medium">{label}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-muted">Demo availability in India Standard Time. These slots are not live.</p>

      {step === 0 ? (
        <div className="mt-8">
          <h2 className="serif text-3xl">Choose a service</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {bookingCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setCategory(item.id);
                  setSelected(null);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-sm ${category === item.id ? "bg-forest text-ivory" : "bg-cream text-ink"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            {choices.map((item) => {
              const active = selected?.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`flex items-start gap-3 rounded-2xl border p-3 text-left ${active ? "border-forest bg-cream" : "border-line"}`}
                >
                  <img src={item.image} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16" />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{item.name}</span>
                      <span className="shrink-0 text-sm tabular-nums">
                        {inr(item.price)}
                        {item.onwards ? "+" : ""}
                      </span>
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted">{item.blurb}</span>
                    <span className="mt-1 block text-xs text-muted">{durationLabel(item.durationMin)}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" className="btn btn-solid" disabled={!selected} onClick={() => setStep(1)}>
              Continue
            </button>
          </div>
        </div>
      ) : null}

      {step === 1 && selected ? (
        <div className="mt-8">
          <h2 className="serif text-3xl">Date and time</h2>
          <p className="mt-2 text-sm text-muted">
            {selected.name} · {inr(selected.price)}
            {selected.onwards ? " onwards" : ""} · {durationLabel(selected.durationMin)}
          </p>
          <Calendar cursor={cursor} setCursor={setCursor} today={today} lastDay={lastDay} date={date} setDate={setDate} setSlot={setSlot} />
          <div className="mt-6">
            <p className="micro text-muted">Demo time slots · IST</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {demoSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  disabled={!date}
                  onClick={() => setSlot(time)}
                  className={`min-h-11 rounded-full border px-3 py-2 text-sm ${slot === time ? "border-forest bg-forest text-ivory" : "border-line"}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between gap-3">
            <button type="button" className="btn btn-ghost" onClick={() => setStep(0)}>Back</button>
            <button type="button" className="btn btn-solid" disabled={!date || !slot} onClick={() => setStep(2)}>Continue</button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8">
          <h2 className="serif text-3xl">Your details</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Full name" error={errors.name}>
              <input className="field" value={details.name} onChange={(event) => setDetails({ ...details, name: event.target.value })} autoComplete="name" />
            </Field>
            <Field label="Mobile" error={errors.phone}>
              <div className="flex gap-2">
                <span className="grid place-items-center rounded-2xl border border-line px-3 text-sm">+91</span>
                <input className="field" inputMode="numeric" maxLength={10} value={details.phone} onChange={(event) => setDetails({ ...details, phone: event.target.value.replace(/\D/g, "").slice(0, 10) })} autoComplete="tel-national" />
              </div>
            </Field>
            <Field label="Email" error={errors.email}>
              <input className="field" type="email" value={details.email} onChange={(event) => setDetails({ ...details, email: event.target.value })} autoComplete="email" />
            </Field>
            <Field label="Notes, optional">
              <textarea className="field min-h-28" value={details.notes} onChange={(event) => setDetails({ ...details, notes: event.target.value })} />
            </Field>
          </div>
          <div className="mt-6 flex justify-between gap-3">
            <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
            <button type="button" className="btn btn-solid" onClick={() => validateDetails() && setStep(3)}>Review</button>
          </div>
        </div>
      ) : null}

      {step === 3 && selected ? (
        <div className="mt-8">
          <h2 className="serif text-3xl">Review the demo request</h2>
          <dl className="mt-5 grid gap-3 text-sm">
            <Row k="Service" v={selected.name} />
            <Row k="Estimate" v={`${inr(selected.price)}${selected.onwards ? " onwards" : ""} · ${durationLabel(selected.durationMin)}`} />
            <Row k="When" v={`${longDate(date)} · ${slot} IST`} />
            <Row k="Guest" v={`${details.name} · +91 ${details.phone}`} />
            <Row k="Email" v={details.email} />
            {details.notes ? <Row k="Notes" v={details.notes} /> : null}
          </dl>
          <p className="mt-4 text-sm text-muted">Confirming stores this request in your browser only.</p>
          <div className="mt-6 flex justify-between gap-3">
            <button type="button" className="btn btn-ghost" onClick={() => setStep(2)}>Edit details</button>
            <button type="button" className="btn btn-solid" onClick={confirm}>Save demo request</button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Calendar({
  cursor,
  setCursor,
  today,
  lastDay,
  date,
  setDate,
  setSlot,
}: {
  cursor: { year: number; month: number };
  setCursor: (value: { year: number; month: number }) => void;
  today: string;
  lastDay: string;
  date: string;
  setDate: (value: string) => void;
  setSlot: (value: string) => void;
}) {
  const first = new Date(cursor.year, cursor.month, 1);
  const startPad = first.getDay();
  const days = new Date(cursor.year, cursor.month + 1, 0).getDate();
  const cells = [...Array.from({ length: startPad }, () => ""), ...Array.from({ length: days }, (_, index) => `${index + 1}`)];
  const min = `${today.slice(0, 7)}`;
  const cursorKey = `${cursor.year}-${`${cursor.month + 1}`.padStart(2, "0")}`;
  const canPrev = cursorKey > min;
  const maxCursor = lastDay.slice(0, 7);
  const canNext = cursorKey < maxCursor;

  return (
    <div className="mt-6 rounded-2xl border border-line p-4">
      <div className="flex items-center justify-between">
        <button type="button" className="btn btn-ghost" disabled={!canPrev} onClick={() => setCursor(shift(cursor, -1))}>Prev</button>
        <p className="font-medium">{monthLabel(cursor.year, cursor.month)}</p>
        <button type="button" className="btn btn-ghost" disabled={!canNext} onClick={() => setCursor(shift(cursor, 1))}>Next</button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-muted">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (!day) return <span key={`e-${index}`} />;
          const iso = `${cursor.year}-${`${cursor.month + 1}`.padStart(2, "0")}-${day.padStart(2, "0")}`;
          const disabled = iso < today || iso > lastDay;
          const active = iso === date;
          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => {
                setDate(iso);
                setSlot("");
              }}
              className={`min-h-11 rounded-full text-sm ${active ? "bg-forest text-ivory" : disabled ? "text-muted" : "hover:bg-cream"}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function shift(cursor: { year: number; month: number }, delta: number) {
  const date = new Date(cursor.year, cursor.month + delta, 1);
  return { year: date.getFullYear(), month: date.getMonth() };
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-brown">{error}</span> : null}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 border-b border-line py-3 sm:grid-cols-[8rem_1fr]">
      <dt className="text-muted">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
