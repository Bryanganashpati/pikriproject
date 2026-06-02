"use client";

import { useEffect, useRef } from "react";

const clients = [
  {
    name: "Pondok Indah Group",
    logo: null,
    text: "PONDOK INDAH GROUP",
    style: "font-serif font-bold text-gray-700 text-sm",
  },
  {
    name: "Sarinah",
    logo: null,
    text: "Sarinah",
    style: "font-serif italic font-bold text-gray-700 text-xl",
  },
  {
    name: "Whitesky",
    logo: null,
    text: "WHITESKY",
    style: "font-sans font-bold text-gray-800 text-sm tracking-widest bg-gray-800 text-white px-2 py-1",
  },
  {
    name: "Park",
    logo: null,
    text: "park 🌿",
    style: "font-sans text-green-700 font-bold text-base",
  },
  {
    name: "TNI AD",
    logo: null,
    text: "TNI AD",
    style: "font-serif font-bold text-gray-700 text-sm",
  },
  {
    name: "Universitas Gadjah Mada",
    logo: null,
    text: "UNIVERSITAS GADJAH MADA",
    style: "font-serif font-bold text-blue-800 text-xs",
  },
  {
    name: "ASA",
    logo: null,
    text: "ASA",
    style: "font-sans font-bold text-white text-xl bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center",
  },
  {
    name: "SKB",
    logo: null,
    text: "SKB",
    style: "font-serif font-bold text-navy text-sm border-2 border-navy px-2 py-1",
  },
];

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
              className="section-reveal trusted-logo flex items-center justify-center h-16 px-4"
              style={{ transitionDelay: `${idx * 0.08}s` }}
              title={client.name}
            >
              <span className={client.style}>{client.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center mb-8">
          {clients.slice(4).map((client, idx) => (
            <div
              key={client.name}
              className="section-reveal trusted-logo flex items-center justify-center h-16 px-4"
              style={{ transitionDelay: `${(idx + 4) * 0.08}s` }}
              title={client.name}
            >
              <span className={client.style}>{client.text}</span>
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
