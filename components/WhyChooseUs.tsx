import {
  ShieldCheck,
  Clock3,
  MapPin,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Vehicles",
    description:
      "Well-maintained bikes and scooters ready for your Uttarakhand journey.",
  },
  {
    icon: Clock3,
    title: "Simple Rental Process",
    description:
      "Choose your vehicle, check availability and book directly through WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Start your journey from Kathgodam and head towards the mountains with ease.",
  },
  {
    icon: Headphones,
    title: "Local Support",
    description:
      "Get assistance with your rental and basic travel-related queries when you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your journey starts with the right ride.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Whether you're heading towards Nainital, Bhimtal,
              Mukteshwar or exploring the roads beyond, we make it
              easier to start your Uttarakhand journey.
            </p>
          </div>

          {/* Right side */}
          <div className="grid gap-5 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}