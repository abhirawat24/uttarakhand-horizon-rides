"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Vehicles", href: "#vehicles" },
  { name: "Destinations", href: "#destinations" },
  { name: "Trips", href: "#trips" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-0 pt-0" : "px-4 pt-4 sm:px-6"
      }`}
    >
      <nav
        className={`
          mx-auto flex h-[68px] items-center
          justify-between
          border
          px-4
          shadow-lg
          shadow-slate-900/5
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-6
          lg:px-7

          ${
            scrolled
              ? "max-w-none rounded-none border-white/30 bg-white/80"
              : "max-w-7xl rounded-2xl border-white/40 bg-white/70"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          className="relative flex h-12 w-[150px] items-center"
        >
         <Image
           src="/logo/uhrlogo.png"
           alt="Uttarakhand Horizon Rides"
           fill
           priority
           className="animate-logo-float object-contain object-left"
/>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#vehicles"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/40 bg-white/90 p-3 shadow-xl backdrop-blur-xl sm:mx-6 md:hidden">
          <div className="flex flex-col">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-amber-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#vehicles"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
}