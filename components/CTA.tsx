"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="py-16"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-3">
          HUBUNGI KAMI
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Trusted. Precise. Professional.
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Build Better with Karunia Andalan Sejahtera
        </p>
        <Link href="https://wa.me/6282166241647"
          target="_blank">
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 font-semibold text-sm transition-all duration-300 hover:gap-3">
            <Phone size={16} />
            CONTACT US
          </button>
        </Link>
      </div>
    </section>
  );
}
