import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({
  vehicle,
}: VehicleCardProps) {
  const message = `Hello, I am interested in renting the ${vehicle.name}. Please share its availability and booking details.`;

  const whatsappLink = `https://wa.me/919045190789?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Vehicle Image */}
      <div className="relative h-56 overflow-hidden bg-white sm:h-60">

        <Image
          src={vehicle.image}
          alt={`${vehicle.name} for rent in Uttarakhand`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* Details */}
      <div className="border-t border-slate-100 p-5">

        {/* Type */}
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          {vehicle.type}
        </p>

        {/* Name */}
        <h3 className="mt-1 text-xl font-bold text-slate-900">
          {vehicle.name}
        </h3>

        {/* Price */}
        <div className="mt-5">

          <p className="text-xs text-slate-500">
            Rental per day
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            ₹{vehicle.pricePerDay.toLocaleString("en-IN")}

            <span className="ml-1 text-sm font-normal text-slate-500">
              /day
            </span>
          </p>

        </div>

        {/* Security */}
        <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">

          <div className="flex items-center justify-between">

            <span className="text-sm text-slate-500">
              Security deposit
            </span>

            <span className="text-sm font-semibold text-slate-800">
              ₹{vehicle.securityDeposit.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <MessageCircle size={17} />

          Book Now on WhatsApp
        </a>

      </div>

    </article>
  );
}