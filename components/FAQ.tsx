"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the rental timings?",
    answer:
      "The standard rental period is from 6:00 AM to 6:00 PM. Please return the vehicle within the agreed rental period.",
  },

  {
    question: "What is the late return charge?",
    answer:
      "A late fee of ₹200 per hour is applicable when the vehicle is returned after the standard return time.",
  },

  {
    question: "How many kilometres are included?",
    answer:
      "Scooters include up to 100 kilometres per rental day, while bikes include up to 150 kilometres per rental day.",
  },

  {
    question: "Is a security deposit required?",
    answer:
      "Yes. A security deposit is required for the rental. The amount depends on the vehicle and is displayed on each vehicle listing.",
  },

  {
    question: "How can I book a vehicle?",
    answer:
      "Choose your preferred vehicle and click the Book Now button. You will be redirected to WhatsApp where you can check availability and discuss the booking.",
  },

  {
    question: "Where is the rental service located?",
    answer:
      "The rental service is based in Kathgodam, Uttarakhand. Please contact us on WhatsApp for the exact pickup details.",
  },

  {
    question: "Can I explore different parts of Uttarakhand with the rental?",
    answer:
      "Yes. You can use the vehicle to explore Uttarakhand while following the applicable rental terms, kilometre limits and other conditions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#F7F5EF] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Find answers about rental timings, security deposits,
            kilometre limits and booking.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mt-10 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >

                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-5">
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}