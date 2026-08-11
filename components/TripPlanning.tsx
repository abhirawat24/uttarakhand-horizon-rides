import {
  Mountain,
  Map,
  Compass,
  Route,
} from "lucide-react";

const trips = [
  {
    icon: Mountain,
    title: "Lake & Hills",
    route: "Kathgodam → Bhimtal → Sattal → Naukuchiatal",
    description:
      "A relaxed route covering some of the beautiful lakes around the Kumaon region.",
  },

  {
    icon: Map,
    title: "Nainital Escape",
    route: "Kathgodam → Nainital → Snow View → Naina Peak",
    description:
      "A classic mountain ride for travellers visiting Nainital for the first time.",
  },

  {
    icon: Compass,
    title: "Mountain Adventure",
    route: "Kathgodam → Bhowali → Kainchi Dham → Mukteshwar",
    description:
      "A longer mountain ride through winding roads and scenic Kumaon landscapes.",
  },
];

export default function TripPlanning() {
  return (
    <section
      id="trips"
      className="bg-[#F7F5EF] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Plan Your Ride
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Where will the road take you?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Need some inspiration? Here are a few routes you can
            consider for your Uttarakhand adventure.
          </p>

        </div>

        {/* Trip Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          {trips.map((trip) => {
            const Icon = trip.icon;

            return (
              <div
                key={trip.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {trip.title}
                </h3>

                <div className="mt-3 rounded-xl bg-slate-50 p-4">

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Suggested Route
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
                    {trip.route}
                  </p>

                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {trip.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">

          <a
            href="#vehicles"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Choose a vehicle for your trip
            <Route size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}