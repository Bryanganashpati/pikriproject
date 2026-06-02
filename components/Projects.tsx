"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gedung Perkantoran Modern",
    category: "Commercial",
    location: "Jakarta Selatan",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    id: 2,
    title: "Fasilitas Industri Berat",
    category: "Industrial",
    location: "Bekasi, Jawa Barat",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 3,
    title: "Kompleks Residensial",
    category: "Residential",
    location: "Tangerang Selatan",
    year: "2022",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: 4,
    title: "Heliport & Terminal",
    category: "Industrial",
    location: "Kalimantan Timur",
    year: "2022",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
];

const categoryColors: Record<string, string> = {
  Commercial: "bg-blue-100 text-blue-700",
  Industrial: "bg-orange-100 text-orange-700",
  Residential: "bg-green-100 text-green-700",
};

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 section-reveal">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
              PORTOFOLIO
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Project Kami
            </h2>
          </div>
          <Link
            href="#projects"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-300"
          >
            Lihat Semua Project <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card section-reveal cursor-pointer group"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="w-full h-full service-card-img bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-card-overlay">
                  <div>
                    <span className="text-white/70 text-xs font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <p className="text-white font-bold text-lg mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {project.title}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-red-400" />
                      <span className="text-white/70 text-xs">{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-sm font-bold text-navy mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={11} className="text-gray-400" />
                  <span className="text-xs text-gray-400">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden section-reveal">
          <Link href="#projects">
            <button className="btn-primary">
              Lihat Semua Project <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
