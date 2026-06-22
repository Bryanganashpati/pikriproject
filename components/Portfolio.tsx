"use client";

import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Building2,
  Star,
} from "lucide-react";

const categories = [
  "Semua",
  "Insulation",
  "Mekanikal",
  "Sipil",
  "Pengecetan",
];

const projects = [
  {
    id: 1,
    title: "Pekerjaan Isolasi Pipa & Vessel",
    category: "Insulation",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80",
    location: "Batam",
    area: "Plant Area",
    budget: "Industrial Project",
    testimonial:
      "Pekerjaan insulasi pipa selesai sesuai standar industri dan tepat waktu.",
    client: "PT Ecogreen",
  },

  {
    id: 2,
    title: "Pekerjaan Mekanikal Industri",
    category: "Mekanikal",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80",
    location: "Nagan Raya, Aceh",
    area: "Factory Area",
    budget: "Industrial Project",
    testimonial:
      "Didukung tenaga kerja profesional dan berpengalaman di bidang mekanikal.",
    client: "PT Bepans KIM",
  },

  {
    id: 3,
    title: "Pekerjaan Sipil Struktur Plant",
    category: "Sipil",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    location: "Jambi",
    area: "Palm Oil Mill",
    budget: "Industrial Project",
    testimonial:
      "Tim bekerja profesional dan mampu memenuhi target proyek tepat waktu.",
    client: "PT Samudra Mahkota Mas",
  },

  {
    id: 4,
    title: "Pengecetan Tank & Struktur Baja",
    category: "Pengecetan",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a590b?w=1200&q=80",
    location: "Simpang Koran",
    area: "Storage Tank Area",
    budget: "Industrial Project",
    testimonial:
      "Hasil pengecetan rapi, tahan lama, dan sesuai spesifikasi yang diminta.",
    client: "PT Surya Makmur Sawit",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            PORTOFOLIO PROYEK
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Proyek Specialist Insulation
          </h2>

          <p className="text-gray-600">
            Berbagai proyek insulation, mekanikal, sipil, dan
            pengecetan yang telah kami selesaikan untuk sektor
            industri, manufaktur, pembangkit, dan pabrik kelapa
            sawit.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 border hover:border-red-600 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-50 text-red-600 mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-navy mb-4">
                  {project.title}
                </h3>

                <div className="space-y-3 text-sm text-gray-600 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {project.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    {project.area}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    {project.budget}
                  </div>
                </div>

                {/* Testimoni */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-1 mb-2 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 italic mb-2">
                    &quot;{project.testimonial}&quot;
                  </p>

                  <p className="text-xs font-semibold text-navy">
                    — {project.client}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}