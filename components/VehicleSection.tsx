"use client";

import { useState } from "react";
import VehicleCard from "@/components/VehicleCard";
import { vehicles, type VehicleType } from "@/data/vehicles";

type FilterType = "All" | VehicleType;

export default function VehicleSection() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filteredVehicles =
    filter === "All"
      ? vehicles
      : vehicles.filter(
          (vehicle) => vehicle.type === filter
        );

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

        {/* Section Heading */}
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

        {/* Filters */}
        <div className="mt-8 flex justify-center">

          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">

            {/* All */}
            <button
              type="button"
              onClick={() => setFilter("All")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                filter === "All"
                  ? "bg-slate-900 text-white"
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
                  ? "bg-slate-900 text-white"
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
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bikes ({bikeCount})
            </button>

          </div>

        </div>

        {/* Vehicle Grid */}
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