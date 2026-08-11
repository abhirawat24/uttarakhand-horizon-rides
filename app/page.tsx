import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleSection from "@/components/VehicleSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExploreUttarakhand from "@/components/ExploreUttarakhand";
import TripPlanning from "@/components/TripPlanning";
import LocationSection from "@/components/LocationSection";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <VehicleSection />

        <WhyChooseUs />

        <ExploreUttarakhand />

        <TripPlanning />

        <LocationSection />

        <BookingCTA />
      </main>

      <Footer />
    </>
  );
}