import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { faqsGeneral, images, studio } from "@/data/content";
import { ArrowButton, FaqList, Photo, Reveal } from "@/components/site/ui";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactView() {
  const [whatsappNote, setWhatsappNote] = useState(false);
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Contact us</p>
          <h1 className="display mt-4">Let’s create your beauty story together</h1>
          <p className="mt-5 max-w-md text-muted">
            Ask a question, or start a demo appointment. The address, phone and email below are samples from the design and must be replaced before launch.
          </p>
          <ArrowButton to="/booking" className="mt-7">Book an appointment</ArrowButton>
        </div>
        <div className="hero-media">
          <Photo src={images.portraitLift} alt="Portrait in warm side light" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <section className="wrap grid gap-3 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: MapPin, title: "Visit", text: `${studio.address[0]}, ${studio.address[1]}` },
          { icon: Phone, title: "Call", text: studio.phoneDisplay },
          { icon: Mail, title: "Email", text: studio.email },
          { icon: Clock, title: "Hours", text: studio.hours },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="h-full rounded-3xl border border-line p-4 transition-colors hover:border-brown">
              <item.icon className="h-5 w-5 text-olive" aria-hidden />
              <h2 className="mt-3 font-medium">{item.title}</h2>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-brown">Sample</p>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal className="wrap grid items-start gap-8 pb-16 lg:grid-cols-2">
        <div>
          <h2 className="serif text-3xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted">The form checks your details, then stores the note locally.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <div>
          <Photo src={images.salonDesk} alt="Reception with flowers and warm lamps" ratio="photo" className="zoom rounded-[2rem]" />
        </div>
      </Reveal>

      <Reveal>
        <section className="bg-cream">
        <div className="wrap grid gap-8 py-14 lg:grid-cols-2">
          <div>
            <h2 className="serif text-3xl">Find the studio</h2>
            <p className="mt-3 text-muted">
              Maison Rêve is planned in Gurugram, Haryana. A map pin and nearby landmarks will be added only after the street address is confirmed. This preview does not invent a pin.
            </p>
            <div className="mt-6 rounded-[2rem] border border-line bg-ivory p-6">
              <p className="micro text-olive">City</p>
              <p className="serif mt-2 text-4xl">{studio.city}</p>
              <p className="mt-3 text-sm text-muted">Sample street line: {studio.address[0]}</p>
            </div>
          </div>
          <div>
            <h2 className="serif text-3xl">Questions</h2>
            <div className="mt-4">
              <FaqList items={faqsGeneral} />
            </div>
            <button type="button" className="btn btn-ghost mt-6" onClick={() => setWhatsappNote(true)}>
              WhatsApp
            </button>
            {whatsappNote ? (
              <p className="mt-3 text-sm text-muted" role="status">
                WhatsApp appears when the studio adds a verified business number. This button does not open a chat.
              </p>
            ) : null}
          </div>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-forest text-ivory">
          <div className="wrap flex flex-col items-start justify-between gap-4 py-12 md:flex-row md:items-center">
            <div>
              <h2 className="serif text-3xl">Have a question that needs a person?</h2>
              <p className="mt-2 text-sm text-beige">Use the form, or book a demo request while the live line is being connected.</p>
            </div>
            <ArrowButton to="/booking" variant="light">Book an appointment</ArrowButton>
          </div>
        </section>
      </Reveal>
    </>
  );
}
