"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "bangun-rumah",
    title: "Jasa Bangun Rumah",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description:
      "Layanan pembangunan rumah dari tahap perencanaan hingga serah terima dengan kualitas terbaik.",
    duration: "3 - 8 Bulan",
    advantages: [
      "Material berkualitas",
      "Tenaga kerja berpengalaman",
      "Garansi pekerjaan",
    ],
  },
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    description:
      "Renovasi rumah total maupun sebagian sesuai kebutuhan dan anggaran.",
    duration: "1 - 4 Bulan",
    advantages: [
      "Pengerjaan cepat",
      "Biaya transparan",
      "Desain menyesuaikan kebutuhan",
    ],
  },
  {
    id: "desain-interior",
    title: "Desain Interior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    description:
      "Menciptakan interior yang nyaman, modern, dan fungsional.",
    duration: "2 - 6 Minggu",
    advantages: [
      "Desain custom",
      "Visualisasi 3D",
      "Konsultasi profesional",
    ],
  },
  {
    id: "ruko",
    title: "Pembangunan Ruko",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description:
      "Pembangunan ruko untuk kebutuhan bisnis dengan desain modern dan efisien.",
    duration: "4 - 10 Bulan",
    advantages: [
      "Struktur kuat",
      "Desain komersial",
      "Pengerjaan tepat waktu",
    ],
  },
  {
    id: "kanopi-pagar",
    title: "Kanopi & Pagar",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description:
      "Pembuatan kanopi dan pagar dengan berbagai pilihan material dan desain.",
    duration: "3 - 14 Hari",
    advantages: [
      "Material berkualitas",
      "Desain modern",
      "Harga kompetitif",
    ],
  },
  {
    id: "plafon-atap",
    title: "Plafon & Atap",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    description:
      "Pemasangan plafon dan atap untuk hunian maupun bangunan komersial.",
    duration: "1 - 4 Minggu",
    advantages: [
      "Rapi dan presisi",
      "Material tahan lama",
      "Garansi pemasangan",
    ],
  },
  {
    id: "pabrik",
    title: "Pembangunan Pabrik",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    description:
      "Konstruksi pabrik dan fasilitas industri dengan standar keamanan tinggi.",
    duration: "6 - 18 Bulan",
    advantages: [
      "Standar industri",
      "Tim profesional",
      "Manajemen proyek terintegrasi",
    ],
  },
];

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 section-reveal">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            APA YANG KAMI TAWARKAN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Service Kami
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Mendukung tercapainya tujuan desain dan konstruksi bangunan yang dirancang sesuai visi
            setiap pelanggan.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <div
      key={service.id}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {service.description}
        </p>

        <div className="mb-4">
          <span className="font-semibold">
            Estimasi Pengerjaan:
          </span>
          <p className="text-sm text-gray-600">
            {service.duration}
          </p>
        </div>

        <ul className="space-y-2 mb-6">
          {service.advantages.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle
                size={16}
                className="text-green-600"
              />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="inline-block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold"
        >
          Konsultasi WhatsApp
        </a>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
