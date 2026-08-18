"use client";

import Image from "next/image";
import {
  Clock3,
  Gauge,
  MessageCircle,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({
  vehicle,
}: VehicleCardProps) {
  /*
   * Get the current weekday according to Indian Standard Time.
   *
   * This is important because the business is located in Uttarakhand.
   * We don't want the price to depend on the customer's device timezone.
   */
  const indiaWeekday = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
  }).format(new Date());

  /*
   * Saturday and Sunday are considered weekend days.
   */
  const isWeekend =
    indiaWeekday === "Saturday" ||
    indiaWeekday === "Sunday";

  /*
   * If the vehicle has a weekendPrice and today is Saturday/Sunday,
   * use the weekend price.
   *
   * Otherwise, use the normal price.
   */
  const currentPrice =
    isWeekend && vehicle.weekendPrice
      ? vehicle.weekendPrice
      : vehicle.pricePerDay;

  /*
   * Determine whether this particular vehicle is currently
   * using its special weekend price.
   */
  const isWeekendRateActive =
    isWeekend && Boolean(vehicle.weekendPrice);

  /*
   * WhatsApp booking message.
   */
  const message = `Hello, I am interested in renting the ${vehicle.name}. Please share its availability and booking details.`;

  const whatsappLink = `https://wa.me/919045190789?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* ========================================
          VEHICLE IMAGE
      ======================================== */}

      <div className="relative h-56 overflow-hidden bg-white sm:h-60">

        <Image
          src={vehicle.image}
          alt={`${vehicle.name} for rent in Uttarakhand`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
        />

        {/* Weekend Badge */}

        {isWeekendRateActive && (
          <div className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-md">
            WEEKEND RATE
          </div>
        )}

      </div>

      {/* ========================================
          VEHICLE DETAILS
      ======================================== */}

      <div className="border-t border-slate-100 p-5">

        {/* Vehicle Type */}

        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          {vehicle.type}
        </p>

        {/* Vehicle Name */}

        <h3 className="mt-1 text-xl font-bold text-slate-900">
          {vehicle.name}
        </h3>

        {/* ====================================
            PRICE
        ==================================== */}

        <div className="mt-5">

          <div className="flex items-end justify-between gap-3">

            <div>

              <p className="text-xs text-slate-500">
                Rental for 12 hours
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-900">
                ₹{currentPrice.toLocaleString("en-IN")}

                <span className="ml-1 text-sm font-normal text-slate-500">
                  / 12 hrs
                </span>
              </p>

            </div>

            {/* Weekend Information */}

            {isWeekendRateActive && (
              <div className="text-right">

                <p className="text-xs text-slate-400 line-through">
                  ₹{vehicle.pricePerDay.toLocaleString("en-IN")}
                </p>

                <p className="text-xs font-semibold text-amber-600">
                  Sat & Sun
                </p>

              </div>
            )}

          </div>

        </div>

        {/* ====================================
            RENTAL INFORMATION
        ==================================== */}

        <div className="mt-5 space-y-2">

          {/* Duration */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">

            <Clock3
              size={17}
              className="shrink-0 text-amber-600"
            />

            <div className="flex flex-1 items-center justify-between gap-3">

              <span className="text-sm text-slate-500">
                Rental duration
              </span>

              <span className="text-sm font-semibold text-slate-800">
                12 hours
              </span>

            </div>

          </div>

          {/* Distance */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">

            <Gauge
              size={17}
              className="shrink-0 text-amber-600"
            />

            <div className="flex flex-1 items-center justify-between gap-3">

              <span className="text-sm text-slate-500">
                Included distance
              </span>

              <span className="text-sm font-semibold text-slate-800">
                100 km
              </span>

            </div>

          </div>

        </div>

        {/* ====================================
            LATE FEE
        ==================================== */}

        <div className="mt-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">

          <div className="flex items-center justify-between gap-3">

            <span className="text-sm text-amber-800">
              Late fee after 12 hours
            </span>

            <span className="whitespace-nowrap text-sm font-bold text-amber-900">
              ₹100 / hour
            </span>

          </div>

        </div>

        {/* ====================================
            SECURITY DEPOSIT
        ==================================== */}

        <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3">

          <div className="flex items-center justify-between gap-3">

            <span className="text-sm text-slate-500">
              Security deposit
            </span>

            <span className="text-sm font-semibold text-slate-800">
              ₹{vehicle.securityDeposit.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

        {/* ====================================
            WHATSAPP BOOKING
        ==================================== */}

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