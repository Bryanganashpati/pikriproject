"use client";

import { Building2, TrendingUp, Users, HardHat } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "100+",
    label: "Proyek Selesai",
    desc: "Berhasil menyelesaikan berbagai proyek konstruksi dan renovasi.",
  },
  {
    icon: TrendingUp,
    value: "13+",
    label: "Tahun Pengalaman",
    desc: "Pengalaman panjang dalam industri konstruksi Indonesia.",
  },
  {
    icon: Users,
    value: "98%",
    label: "Klien Puas",
    desc: "Tingkat kepuasan pelanggan berdasarkan hasil proyek yang telah diselesaikan.",
  },
  {
    icon: HardHat,
    value: "50+",
    label: "Tim Profesional",
    desc: "Didukung tenaga ahli, mandor, dan pekerja berpengalaman.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
            TENTANG KAMI
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Membangun Kepercayaan Melalui Kualitas dan Profesionalisme
          </h2>

          <p className="text-gray-600 leading-relaxed">
            <strong className="text-navy">
              CV Karunia Andalan Sejahtera
            </strong>{" "}
            adalah perusahaan jasa konstruksi yang bergerak di bidang
            pembangunan, renovasi, desain, dan manajemen proyek. Dengan
            pengalaman lebih dari 13 tahun, kami telah menangani berbagai
            proyek rumah tinggal, ruko, bangunan komersial, fasilitas
            industri, hingga pembangunan pabrik.
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon size={28} className="text-red-600" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-navy mb-2">
                  {stat.value}
                </h3>

                <p className="font-semibold text-navy mb-2">
                  {stat.label}
                </p>

                <p className="text-sm text-gray-500">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Profil */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Profil Perusahaan
            </h3>

            <p className="text-gray-600 leading-relaxed">
              CV Karunia Andalan Sejahtera merupakan perusahaan konstruksi
              yang menyediakan layanan pembangunan rumah, renovasi,
              pembangunan ruko, gudang, pabrik, desain interior, dan
              berbagai kebutuhan konstruksi lainnya.
            </p>
          </div>

          {/* Sejarah */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Sejarah Perusahaan
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Berdiri sejak tahun 2013, perusahaan berkembang dari
              kontraktor lokal menjadi penyedia jasa konstruksi yang
              dipercaya berbagai klien di sektor residensial, komersial,
              maupun industri.
            </p>
          </div>

          {/* Legalitas */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Legalitas Resmi
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✓ NIB Perusahaan</li>
              <li>✓ NPWP Perusahaan</li>
              <li>✓ Sertifikat Badan Usaha (SBU)</li>
              <li>✓ Perizinan Lengkap</li>
            </ul>
          </div>

          {/* Visi Misi */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Visi & Misi
            </h3>

            <p className="text-gray-600 mb-4">
              Menjadi perusahaan konstruksi terpercaya dan profesional di
              Indonesia.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✓ Mengutamakan kualitas pekerjaan</li>
              <li>✓ Menjaga ketepatan waktu proyek</li>
              <li>✓ Memberikan pelayanan terbaik</li>
              <li>✓ Mengutamakan keselamatan kerja</li>
            </ul>
          </div>

        </div>

        {/* Tim */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-navy mb-10">
            Tim Profesional Kami
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border rounded-2xl p-8 text-center">
              <h4 className="font-bold text-lg mb-2">
                Project Manager
              </h4>
              <p className="text-gray-500">
                Mengelola dan memastikan proyek berjalan sesuai target.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 text-center">
              <h4 className="font-bold text-lg mb-2">
                Arsitek Profesional
              </h4>
              <p className="text-gray-500">
                Mendesain bangunan yang estetis, modern, dan fungsional.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 text-center">
              <h4 className="font-bold text-lg mb-2">
                Site Engineer
              </h4>
              <p className="text-gray-500">
                Mengawasi kualitas pekerjaan di lapangan secara langsung.
              </p>
            </div>
          </div>
        </div>

        {/* Dokumentasi */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-navy mb-10">
            Dokumentasi Kantor & Tim Lapangan
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
  <div>
    <img
      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
      alt="Tim Lapangan"
      className="rounded-2xl h-72 w-full object-cover"
    />
    <p className="mt-2 text-xs text-gray-500">
      Foto: Unsplash - Tim Lapangan
    </p>
  </div>

  <div>
    <img
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
      alt="Kantor"
      className="rounded-2xl h-72 w-full object-cover"
    />
    <p className="mt-2 text-xs text-gray-500">
      Foto: Unsplash - Interior Kantor
    </p>
  </div>

  <div>
    <img
      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
      alt="Proyek"
      className="rounded-2xl h-72 w-full object-cover"
    />
    <p className="mt-2 text-xs text-gray-500">
      Foto: Unsplash - Proyek Konstruksi
    </p>
  </div>
</div>
        </div>

      </div>
    </section>
  );
}