"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
              Kami siap membantu Anda mewujudkan proyek konstruksi impian. Hubungi tim kami untuk
              konsultasi gratis dan penawaran terbaik.
            </p>

            {[
              {
                icon: Phone,
                label: "Telepon",
                value: "+62 851-0219-1155",
                href: "tel:+628510219115",
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
                    style={{ background: "rgba(200,24,30,0.1)" }}
                  >
                    <Icon size={18} style={{ color: "var(--primary)" }} />
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
          <div className="section-reveal" style={{ transitionDelay: "0.15s" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(200,24,30,0.1)" }}
                >
                  <Send size={28} style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Pesan Terkirim!
                </h3>
                <p className="text-gray-500 text-sm">
                  Tim kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
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
                    className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                    Jenis Layanan
                  </label>
                  <select className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors bg-white text-gray-700">
                    <option value="">Pilih Layanan</option>
                    <option value="engineering">Engineering</option>
                    <option value="procurement">Procurement</option>
                    <option value="construction">Construction</option>
                    <option value="epc">EPC (Full Package)</option>
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
                    className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3">
                  <Send size={15} />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
