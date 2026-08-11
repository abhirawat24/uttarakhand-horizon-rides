import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function ExploreUttarakhand() {
  return (
    <section
      id="destinations"
      className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Explore Uttarakhand
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            The road is part of the journey.
          </h2>

          <p className="mt-4 leading-7 text-white/70">
            Pick a destination, get on your ride and discover the
            mountains at your own pace.
          </p>

        </div>

        {/* Destinations */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <Image
                  src={destination.image}
                  alt={`${destination.name}, Uttarakhand`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-white">
                  <MapPin size={15} />
                  {destination.distance}
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {destination.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {destination.description}
                </p>

                <a
                 href={destination.mapUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
                >
                 Explore Destination
                 <span aria-hidden="true">→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}