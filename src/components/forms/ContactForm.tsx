import { useState, type FormEvent } from "react";

type Fields = { name: string; email: string; phone: string; interest: string; message: string };

const empty: Fields = { name: "", email: "", phone: "", interest: "Hair", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [saved, setSaved] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Partial<Fields> = {};
    if (fields.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Enter a valid email.";
    if (!/^[6-9]\d{9}$/.test(fields.phone)) next.phone = "Enter a 10-digit mobile number.";
    if (fields.message.trim().length < 10) next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;
    const key = "maison-reve-demo-messages";
    const existing = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
    localStorage.setItem(
      key,
      JSON.stringify([{ ...fields, savedAt: new Date().toISOString(), sent: false }, ...existing].slice(0, 20)),
    );
    setSaved(true);
    setFields(empty);
  }

  const interests = ["Hair", "Skin care", "Nails", "Makeup", "Bridal", "Packages", "Something else"];

  return (
    <form onSubmit={submit} className="grid gap-4" noValidate>
      <label className="text-sm">
        Your name
        <input className="field mt-1" value={fields.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
        {errors.name ? <span className="mt-1 block text-brown">{errors.name}</span> : null}
      </label>
      <label className="text-sm">
        Email
        <input className="field mt-1" type="email" value={fields.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
        {errors.email ? <span className="mt-1 block text-brown">{errors.email}</span> : null}
      </label>
      <label className="text-sm">
        Phone
        <input className="field mt-1" inputMode="numeric" value={fields.phone} onChange={(event) => update("phone", event.target.value.replace(/\D/g, "").slice(0, 10))} autoComplete="tel" />
        {errors.phone ? <span className="mt-1 block text-brown">{errors.phone}</span> : null}
      </label>
      <label className="text-sm">
        Service interest
        <select className="field mt-1" value={fields.interest} onChange={(event) => update("interest", event.target.value)}>
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="text-sm">
        Message
        <textarea className="field mt-1 min-h-32" value={fields.message} onChange={(event) => update("message", event.target.value)} />
        {errors.message ? <span className="mt-1 block text-brown">{errors.message}</span> : null}
      </label>
      <button type="submit" className="btn btn-solid">Save message on this device</button>
      <p className="text-sm text-muted">
        This preview does not email the studio. A saved message stays in your browser until you clear it.
      </p>
      {saved ? (
        <p className="rounded-2xl bg-cream px-4 py-3 text-sm" role="status">
          Saved on this device only. It has not been sent.
        </p>
      ) : null}
    </form>
  );
}
