import { Clock, MapPin, Navigation, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Find Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pick up your ride and hit the road.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Our rental point is conveniently located in Kathgodam,
            making it easy to start your Uttarakhand adventure.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">

          {/* Map */}
          <div className="relative min-h-[350px] lg:min-h-[500px]">

            <iframe
              src="https://www.google.com/maps?q=Kathgodam,Uttarakhand&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Uttarakhand Horizon Rides Location"
              className="absolute inset-0 h-full w-full"
            />

          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <MapPin size={23} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Uttarakhand Horizon Rides
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Kathgodam, Uttarakhand
            </p>

            {/* Details */}
            <div className="mt-8 space-y-5">

              {/* Address */}
              <div className="flex gap-4">

                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-amber-600"
                />

                <div>
                  <p className="font-semibold text-slate-900">
                    Pickup Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Kathgodam, Uttarakhand
                  </p>
                </div>

              </div>

              {/* Timing */}
              <div className="flex gap-4">

                <Clock
                  size={20}
                  className="mt-1 shrink-0 text-amber-600"
                />

                <div>
                  <p className="font-semibold text-slate-900">
                    Rental Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    6:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-amber-600"
                />

                <div>
                  <p className="font-semibold text-slate-900">
                    Contact Us
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Call or WhatsApp us for availability.
                  </p>
                </div>

              </div>

            </div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kathgodam,Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Navigation size={17} />

              Get Directions
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}