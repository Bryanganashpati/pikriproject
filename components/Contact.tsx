"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    email: "",
    layanan: "",
    pesan: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-reveal");

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "6282166241647";

    const message = `
*Permintaan Konsultasi Baru*

Nama: ${formData.nama}
Telepon: ${formData.telepon}
Email: ${formData.email}
Layanan: ${formData.layanan}

Pesan:
${formData.pesan}
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-reveal">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            HUBUNGI KAMI
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontak Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="section-reveal space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Kami siap membantu Anda mewujudkan proyek konstruksi impian.
              Hubungi tim kami untuk konsultasi gratis dan penawaran terbaik.
            </p>

            {[
              {
                icon: Phone,
                label: "Telepon",
                value: "+62 821-6624-1647",
                href: "tel:+6282166241647",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@karuniaandalansejahtera.com",
                href: "mailto:info@karuniaandalansejahtera.com",
              },
              {
                icon: MapPin,
                label: "Alamat",
                value:
                  "Jl. Indulgent No. 3, Kelurahan Kadu, Kecamatan Curug, Kabupaten Tangerang, Banten 15810",
                href: "#",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center"
                    style={{
                      background: "rgba(200,24,30,0.1)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: "var(--primary)",
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                      {item.label}
                    </p>

                    <a
                      href={item.href}
                      className="text-gray-700 text-sm hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div
            className="section-reveal"
            style={{
              transitionDelay: "0.15s",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.nama}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nama: e.target.value,
                      })
                    }
                    className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Nomor Telepon
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="08xx-xxxx-xxxx"
                    value={formData.telepon}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        telepon: e.target.value,
                      })
                    }
                    className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="email@anda.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Jenis Layanan
                </label>

                <select
                  required
                  value={formData.layanan}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      layanan: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white text-gray-700"
                >
                  <option value="">Pilih Layanan</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Procurement">Procurement</option>
                  <option value="Construction">Construction</option>
                  <option value="EPC (Full Package)">
                    EPC (Full Package)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Pesan
                </label>

                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  value={formData.pesan}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pesan: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3 flex items-center gap-2"
              >
                <Send size={15} />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}