"use client";

import { useState } from "react";
import {
  MapPin,
  Ruler,
  Wallet,
  Star,
} from "lucide-react";

const categories = [
  "Semua",
  "Rumah Tinggal",
  "Renovasi",
  "Interior",
  "Ruko",
  "Minimalis Modern",
  "Industrial",
  "Scandinavian",
];

const projects = [
  {
    id: 1,
    title: "Rumah Minimalis Modern 2 Lantai",
    category: "Minimalis Modern",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    location: "Surabaya",
    area: "180 m²",
    budget: "Rp 850 Juta",
    testimonial:
      "Pengerjaan rapi, tepat waktu, dan hasil sesuai desain.",
    client: "Bapak Andi",
  },
  {
    id: 2,
    title: "Renovasi Rumah Tinggal",
    category: "Renovasi",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    location: "Sidoarjo",
    area: "120 m²",
    budget: "Rp 250 Juta",
    testimonial:
      "Proses renovasi berjalan lancar dan transparan.",
    client: "Ibu Rina",
  },
  {
    id: 3,
    title: "Interior Ruang Tamu Scandinavian",
    category: "Scandinavian",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    location: "Gresik",
    area: "75 m²",
    budget: "Rp 80 Juta",
    testimonial:
      "Desain interior sangat nyaman dan modern.",
    client: "Bapak Dimas",
  },
  {
    id: 4,
    title: "Pembangunan Ruko 3 Lantai",
    category: "Ruko",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    location: "Surabaya",
    area: "350 m²",
    budget: "Rp 1,8 Miliar",
    testimonial:
      "Proyek selesai sesuai target dan kualitas memuaskan.",
    client: "PT Maju Jaya",
  },
  {
    id: 5,
    title: "Gudang & Workshop Industrial",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
    location: "Gresik",
    area: "800 m²",
    budget: "Rp 3,5 Miliar",
    testimonial:
      "Tim profesional dan sangat berpengalaman.",
    client: "PT Sukses Mandiri",
  },
  {
    id: 6,
    title: "Rumah Tinggal Modern",
    category: "Rumah Tinggal",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    location: "Malang",
    area: "150 m²",
    budget: "Rp 650 Juta",
    testimonial:
      "Hasil bangunan sangat memuaskan dan berkualitas.",
    client: "Bapak Yusuf",
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
            Hasil Pekerjaan Kami
          </h2>

          <p className="text-gray-600">
            Jelajahi berbagai proyek yang telah kami selesaikan sebagai
            bukti komitmen kami terhadap kualitas, ketepatan waktu,
            dan kepuasan pelanggan.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 border"
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* Project Image */}
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

                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {project.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Ruler size={16} />
                    {project.area}
                  </div>

                  <div className="flex items-center gap-2">
                    <Wallet size={16} />
                    {project.budget}
                  </div>
                </div>

                {/* Testimoni */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-1 mb-2 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
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