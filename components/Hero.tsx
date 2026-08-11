import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/hero/mountain-road.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          {/* Location */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur-md">
            <MapPin size={16} className="text-amber-400" />

            Kathgodam, Uttarakhand
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Explore Uttarakhand

            <span className="mt-2 block text-amber-400">
              Your Way.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Rent bikes and scooters in Kathgodam and discover
            the mountains, lakes, valleys and hidden roads of
            Uttarakhand at your own pace.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            {/* Explore Vehicles */}
            <a
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore Vehicles

              <ArrowRight size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919045190789?text=Hello%2C%20I%20am%20interested%20in%20renting%20a%20bike%20or%20scooty.%20Please%20share%20the%20available%20vehicles%20and%20rental%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
            >
              <MessageCircle size={18} />

              WhatsApp Us
            </a>

          </div>

          {/* Quick Benefits */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">

            <span>✓ Helmets Available</span>

            <span>✓ Easy Booking</span>

            <span>✓ Kathgodam Pickup</span>

            <span>✓ Mountain Ready</span>

          </div>

        </div>

      </div>
    </section>
  );
}