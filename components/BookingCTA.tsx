import { ArrowRight, MessageCircle } from "lucide-react";

export default function BookingCTA() {
  const whatsappMessage =
    "Hello, I want to rent a bike/scooty from Uttarakhand Horizon Rides. Please share the available vehicles and booking details.";

  const whatsappLink = `https://wa.me/919045190789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center sm:px-10 lg:px-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-amber-400/10" />

          <div className="relative z-10 mx-auto max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Your Uttarakhand Adventure Awaits
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Pick your ride. Start your journey.
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              Choose a bike or scooty and contact us directly on
              WhatsApp to check availability and book your ride.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              <MessageCircle size={18} />

              Book Your Ride

              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}