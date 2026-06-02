"use client";

import {
  HardHat,
  Calculator,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    icon: HardHat,
    title: "Tukang Berpengalaman",
    description:
      "Didukung tenaga kerja profesional dan berpengalaman dalam berbagai proyek konstruksi.",
  },
  {
    icon: Calculator,
    title: "Transparansi RAB",
    description:
      "Perhitungan biaya yang jelas, rinci, dan transparan tanpa biaya tersembunyi.",
  },
  {
    icon: ShieldCheck,
    title: "Bergaransi",
    description:
      "Setiap pekerjaan dilengkapi garansi sebagai bentuk komitmen terhadap kualitas.",
  },
  {
    icon: Clock3,
    title: "Tepat Waktu",
    description:
      "Pengerjaan proyek sesuai jadwal yang telah disepakati bersama klien.",
  },
  {
    icon: BadgeCheck,
    title: "Material Berkualitas",
    description:
      "Menggunakan material pilihan untuk memastikan hasil bangunan lebih kuat dan tahan lama.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description:
      "Konsultasikan kebutuhan proyek Anda tanpa biaya dan dapatkan solusi terbaik.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            KEUNGGULAN KAMI
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Alasan Memilih Kami
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Kami berkomitmen memberikan layanan konstruksi yang profesional,
            transparan, dan berkualitas untuk memastikan setiap proyek
            berjalan lancar serta memberikan hasil terbaik bagi klien.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}