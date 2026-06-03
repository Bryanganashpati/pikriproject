"use client";

import {
  Home,
  Hammer,
  Sofa,
  Wallet,
  Calculator,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

const pricing = [
  {
    icon: Home,
    title: "Bangun Rumah",
    price: "Mulai Rp 3 Juta / m²",
    description:
      "Pembangunan rumah baru dengan kualitas material dan pengerjaan profesional.",
  },
  {
    icon: Hammer,
    title: "Renovasi Rumah",
    price: "Menyesuaikan Kondisi Lapangan",
    description:
      "Biaya renovasi disesuaikan dengan tingkat pekerjaan dan kebutuhan proyek.",
  },
  {
    icon: Sofa,
    title: "Interior & Furniture",
    price: "Custom Sesuai Desain",
    description:
      "Estimasi biaya disesuaikan dengan konsep desain, material, dan detail pengerjaan.",
  },
];

const factors = [
  "Luas bangunan",
  "Lokasi proyek",
  "Jenis material yang digunakan",
  "Kompleksitas desain",
  "Durasi pengerjaan",
  "Kondisi lahan atau bangunan eksisting",
];

const faqs = [
  {
    question: "Apakah harga sudah termasuk material?",
    answer:
      "Kami menyediakan pilihan jasa saja maupun jasa + material sesuai kebutuhan proyek Anda.",
  },
  {
    question: "Apakah pembayaran bisa bertahap?",
    answer:
      "Ya, pembayaran dilakukan berdasarkan progres pekerjaan yang telah disepakati bersama.",
  },
  {
    question: "Apakah tersedia survei lokasi?",
    answer:
      "Tersedia survei dan konsultasi awal untuk membantu menentukan kebutuhan proyek.",
  },
];

export default function CostEstimate() {
  return (
    <section id="estimasi-biaya" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            BIAYA & ESTIMASI
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Estimasi Biaya Pembangunan
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Transparansi biaya merupakan komitmen kami dalam memberikan
            layanan konstruksi yang profesional, jujur, dan terpercaya.
          </p>
        </div>

        {/* Harga Layanan */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricing.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>

                <div className="text-red-600 text-lg font-bold mb-4">
                  {item.price}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Alur Pembayaran */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">
            Alur Pembayaran
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-red-600 font-bold text-2xl mb-2">
                01
              </div>
              <p className="font-medium">DP Proyek</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-red-600 font-bold text-2xl mb-2">
                02
              </div>
              <p className="font-medium">Progress 30%</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-red-600 font-bold text-2xl mb-2">
                03
              </div>
              <p className="font-medium">Progress 70%</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-red-600 font-bold text-2xl mb-2">
                04
              </div>
              <p className="font-medium">Serah Terima</p>
            </div>
          </div>
        </div>

        {/* Faktor + Simulasi */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Faktor Biaya */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Faktor yang Mempengaruhi Biaya
            </h3>

            <div className="space-y-4">
              {factors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-red-600"
                  />
                  <span className="text-gray-600">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulasi */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Simulasi Estimasi
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Luas Bangunan
                </span>
                <strong>100 m²</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Harga per m²
                </span>
                <strong>Rp 3.000.000</strong>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-red-600">
                <span>Total Estimasi</span>
                <span>Rp 300.000.000</span>
              </div>

              <p className="text-xs text-gray-500">
                *Estimasi hanya sebagai gambaran awal. Harga akhir akan
                disesuaikan dengan hasil survei lokasi, desain, dan
                spesifikasi material yang dipilih.
              </p>

            </div>
          </div>

        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-navy mb-8">
            FAQ Biaya Pembangunan
          </h3>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-gray-100 pb-5"
              >
                <div className="flex items-center gap-2 font-semibold text-navy mb-2">
                  <CircleHelp size={18} />
                  {faq.question}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Butuh Estimasi Biaya Proyek?
          </h3>

          <p className="max-w-2xl mx-auto mb-8 text-red-100">
            Konsultasikan kebutuhan pembangunan atau renovasi Anda
            sekarang juga. Tim kami siap membantu memberikan estimasi
            biaya dan solusi terbaik untuk proyek Anda.
          </p>

          <a
            href="https://wa.me/6282166241647"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            <Wallet size={18} />
            Konsultasi Gratis
          </a>
        </div>

      </div>
    </section>
  );
}