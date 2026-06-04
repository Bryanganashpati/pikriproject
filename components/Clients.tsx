"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  {
    name: "PT ECOGREEN",
    image: "/images/ecogreen.png",
  },
  {
    name: "PT MUSIM MAS",
    image: "/images/musimmas.png",
  },
  {
    name: "PT PACIFIC MEDAN INDUSTRI",
    image: "/images/pamin.png",
  },
  {
    name: "PT EVYAP SABUN INDONESIA",
    image: "/images/evyap.png",
  },
  {
    name: "PT CHAROEN POKPHAND INDONESIA",
    image: "/images/pokphand.jpg",
  },
  {
    name: "PT BELAWAN TANKI INDONESIA",
    image: "/images/belawan-tanki-indonesia.jpg",
  },
  {
    name: "PT GANDAERAH HENDANA",
    image: "/images/gni.jpg",
  },
  {
    name: "PT BEPANS KIM",
    image: "/images/kim.png",
  },
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-reveal");

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-reveal">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            KLIEN
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Dipercaya Oleh
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center mb-8">
          {clients.slice(0, 4).map((client, idx) => (
            <div
              key={client.name}
              className="section-reveal trusted-logo flex items-center justify-center h-20"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={180}
                height={80}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center mb-8">
          {clients.slice(4).map((client, idx) => (
            <div
              key={client.name}
              className="section-reveal trusted-logo flex items-center justify-center h-20"
              style={{ transitionDelay: `${(idx + 4) * 0.08}s` }}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={180}
                height={80}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm section-reveal">
          dan banyak perusahaan lainnya
        </p>
      </div>
    </section>
  );
}