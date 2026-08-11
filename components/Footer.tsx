import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const whatsappMessage =
    "Hello, I am interested in renting a bike or scooty from Uttarakhand Horizon Rides.";

  const whatsappLink = `https://wa.me/919045190789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold">
              Uttarakhand
              <span className="block text-amber-400">
                Horizon Rides
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              Your ride for exploring the mountains, lakes and
              beautiful roads of Uttarakhand. Rent a bike or
              scooty and explore at your own pace.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              <MessageCircle size={17} />

              WhatsApp Us
            </a>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#vehicles"
                  className="transition hover:text-white"
                >
                  Our Vehicles
                </a>
              </li>

              <li>
                <a
                  href="#destinations"
                  className="transition hover:text-white"
                >
                  Destinations
                </a>
              </li>

              <li>
                <a
                  href="#trips"
                  className="transition hover:text-white"
                >
                  Plan Your Ride
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="transition hover:text-white"
                >
                  Location
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
        {/* Contact */}
<div>

  <h3 className="font-semibold">
    Contact
  </h3>

  <div className="mt-5 space-y-5 text-sm text-white/60">

    {/* Location */}
    <a
      href="#location"
      className="flex gap-3 transition hover:text-white"
    >
      <MapPin
        size={18}
        className="mt-0.5 shrink-0 text-amber-400"
      />

      <span>
        Kathgodam,
        <br />
        Uttarakhand
      </span>
    </a>

    {/* Phone */}
    <a
      href="tel:+919045190789"
      className="flex gap-3 transition hover:text-white"
    >
      <Phone
        size={18}
        className="mt-0.5 shrink-0 text-amber-400"
      />

      <span>
        <span className="block font-medium text-white/80">
          Call us for booking
        </span>

        <span className="mt-1 block">
          +91 90451 90789
        </span>
      </span>
    </a>

    {/* WhatsApp */}
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 transition hover:text-white"
    >
      <MessageCircle
        size={18}
        className="mt-0.5 shrink-0 text-amber-400"
      />

      <span>
        <span className="block font-medium text-white/80">
          WhatsApp
        </span>

        <span className="mt-1 block">
          Chat with us
        </span>
      </span>
    </a>

  </div>

</div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

         <p>
           © {new Date().getFullYear()} Uttarakhand Horizon Rides.
           All rights reserved.
           <span className="mx-2">•</span>
           Designed & Developed by{" "}
           <a
             href="https://www.linkedin.com/in/abhishekrawat24/"
             target="_blank"
             rel="noopener noreferrer"
             className="font-medium text-white/60 transition hover:text-amber-400"
        >
          Abhishek Rawat
  </a>
</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Back to top

            <ArrowUp size={15} />
          </a>

        </div>

      </div>

    </footer>
  );
}