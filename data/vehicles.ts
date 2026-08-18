export type VehicleType = "Scooty" | "Bike";

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  pricePerDay: number;
  weekendPrice?: number;
  securityDeposit: number;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "access",
    name: "Suzuki Access",
    type: "Scooty",
    pricePerDay: 500,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/access.jpeg",
  },

  {
    id: "activa",
    name: "Honda Activa",
    type: "Scooty",
    pricePerDay: 500,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/activa.png",
  },

  {
    id: "avenis",
    name: "Suzuki Avenis",
    type: "Scooty",
    pricePerDay: 500,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/avenis.jpeg",
  },

  {
    id: "burgman",
    name: "Suzuki Burgman",
    type: "Scooty",
    pricePerDay: 599,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/burgman.jpeg",
  },

  {
    id: "classic",
    name: "Royal Enfield Classic",
    type: "Bike",
    pricePerDay: 1199,
    securityDeposit: 4000,
    image: "/vehicles/classic.png",
  },

  {
    id: "harley",
    name: "Harley-Davidson",
    type: "Bike",
    pricePerDay: 1599,
    securityDeposit: 5000,
    image: "/vehicles/harley.jpeg",
  },

  {
    id: "hunter",
    name: "Royal Enfield Hunter",
    type: "Bike",
    pricePerDay: 999,
    securityDeposit: 4000,
    image: "/vehicles/hunter.jpeg",
  },

  {
    id: "ntorq",
    name: "TVS Ntorq",
    type: "Scooty",
    pricePerDay: 599,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/ntorq.png",
  },

  {
    id: "xoom",
    name: "Hero Xoom",
    type: "Scooty",
    pricePerDay: 500,
    weekendPrice: 800,
    securityDeposit: 2000,
    image: "/vehicles/xoom.jpeg",
  },
];