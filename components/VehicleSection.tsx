"use client";

import { useState } from "react";
import { Clock3, Gauge, IndianRupee } from "lucide-react";

import VehicleCard from "@/components/VehicleCard";
import { vehicles, type VehicleType } from "@/data/vehicles";

type FilterType = "All" | VehicleType;

export default function VehicleSection() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredVehicles =
    filter === "All"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === filter);

  const scooterCount = vehicles.filter(
    (vehicle) => vehicle.type === "Scooty"
  ).length;

  const bikeCount = vehicles.filter(
    (vehicle) => vehicle.type === "Bike"
  ).length;

  return (
    <section
      id="vehicles"
      className="bg-[#F7F5EF] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================================
            SECTION HEADING
        ================================= */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Our Fleet
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose Your Ride
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose from our bikes and scooters and start exploring
            Uttarakhand at your own pace.
          </p>

        </div>

        {/* ================================
            RENTAL INFORMATION
        ================================= */}

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">

          {/* Rental Duration */}

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Clock3 size={19} />
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">
                12 Hours
              </p>

              <p className="text-xs text-slate-500">
                Rental duration
              </p>
            </div>

          </div>

          {/* Distance */}

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Gauge size={19} />
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">
                100 KM
              </p>

              <p className="text-xs text-slate-500">
                Included per rental
              </p>
            </div>

          </div>

          {/* Late Fee */}

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <IndianRupee size={19} />
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">
                ₹100 / Hour
              </p>

              <p className="text-xs text-slate-500">
                Late fee after 12 hours
              </p>
            </div>

          </div>

        </div>

        {/* ================================
            WEEKEND NOTICE
        ================================= */}

        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">

          <p className="text-sm font-medium text-amber-900">
            <span className="font-bold">Weekend rates:</span>{" "}
            Access, Activa, Avenis, Burgman, Ntorq & Xoom are{" "}
            <span className="font-bold">₹800 / 12 hours</span>{" "}
            on Saturday & Sunday.
          </p>

        </div>

        {/* ================================
            FILTERS
        ================================= */}

        <div className="mt-10 flex justify-center">

          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">

            {/* All */}

            <button
              type="button"
              onClick={() => setFilter("All")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                filter === "All"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All ({vehicles.length})
            </button>

            {/* Scooters */}

            <button
              type="button"
              onClick={() => setFilter("Scooty")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                filter === "Scooty"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Scooters ({scooterCount})
            </button>

            {/* Bikes */}

            <button
              type="button"
              onClick={() => setFilter("Bike")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                filter === "Bike"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bikes ({bikeCount})
            </button>

          </div>

        </div>

        {/* ================================
            VEHICLE GRID
        ================================= */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}

        </div>

      </div>
    </section>
  );
}