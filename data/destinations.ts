export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  mapUrl: string;
}

export const destinations: Destination[] = [
  {
    id: "nainital",
    name: "Nainital",
    description:
      "Explore the famous lake city, Mall Road, viewpoints and surrounding mountain roads.",
    image: "/destinations/nainital.png",
    distance: "Approx. 35 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nainital,Uttarakhand",
  },

  {
    id: "bhimtal",
    name: "Bhimtal",
    description:
      "A peaceful lakeside destination surrounded by forests and beautiful mountain scenery.",
    image: "/destinations/bhimtal.png",
    distance: "Approx. 25 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bhimtal,Uttarakhand",
  },

  {
    id: "sattal",
    name: "Sattal",
    description:
      "Discover a group of interconnected lakes surrounded by dense forests and quiet mountain roads.",
    image: "/destinations/sattal.jpg",
    distance: "Approx. 30 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Sattal,Uttarakhand",
  },

  {
    id: "mukteshwar",
    name: "Mukteshwar",
    description:
      "Ride through winding mountain roads and enjoy spectacular Himalayan views.",
    image: "/destinations/mukteshwar.png",
    distance: "Approx. 50 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mukteshwar,Uttarakhand",
  },

  {
    id: "kaichi-dham",
    name: "Kainchi Dham",
    description:
      "Visit one of Uttarakhand's well-known spiritual destinations surrounded by beautiful hills.",
    image: "/destinations/kaichi.png",
    distance: "Approx. 40 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kainchi+Dham,Uttarakhand",
  },

  {
    id: "nakuchiyatal",
    name: "Naukuchiatal",
    description:
      "Enjoy the peaceful atmosphere of the lake and scenic roads around the Kumaon hills.",
    image: "/destinations/nakuchiatal.png",
    distance: "Approx. 30 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Naukuchiatal,Uttarakhand",
  },
];