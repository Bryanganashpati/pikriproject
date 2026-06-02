"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    tag: "HELIPORT PROJECT",
    title: "PT Bangun Era Konstruksi",
    subtitle: "Let's build your future through trusted Engineering, Procurement, and Construction.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    tag: "INDUSTRIAL PROJECT",
    title: "Konstruksi Industri Terpercaya",
    subtitle: "Kami hadir membangun infrastruktur industri kelas dunia di seluruh Indonesia.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
    tag: "COMMERCIAL PROJECT",
    title: "Engineering & Procurement",
    subtitle: "Solusi EPC terintegrasi dengan standar nasional dan internasional.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const goToPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto transition-all duration-500 ${
          animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-2xl">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-red-400 mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {slide.tag}
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
          >
            {slide.title}
          </h1>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#about">
              <button className="btn-primary">
                ▶ Tentang Kami
              </button>
            </Link>
            <Link href="#projects">
              <button className="border border-white/50 text-white px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-navy transition-all duration-300">
                Lihat Proyek
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-primary text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-primary text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 h-1 ${
              idx === current ? "bg-primary w-8" : "bg-white/50 w-4"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase vertical-text" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="scroll-indicator">
          <ChevronDown size={20} className="text-white/60" />
        </div>
      </div>
    </section>
  );
}
