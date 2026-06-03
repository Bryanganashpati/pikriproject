"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

const menuLinks = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Informasi", href: "#info" },
  { label: "Kontak Kami", href: "#contact" },
];

const layananLinks = [
  { label: "Engineering", href: "#engineering" },
  { label: "Procurement", href: "#procurement" },
  { label: "Konstruksi", href: "#construction" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d1626" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
  src="/images/logo.png"
  alt="CV Logo"
  width={40}
  height={40}
  className="w-10 h-10 object-cover"
/>
              <div>
                <p
                  className="text-xs font-bold text-white leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  KARUNIA ANDALAN
                </p>
                <p className="text-xs text-gray-400 leading-tight">SEJAHTERA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi untuk semua kebutuhan Konstruksi
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center border border-white/10 text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300 hover:pl-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">Layanan</h4>
            <ul className="space-y-3">
              {layananLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300 hover:pl-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wider uppercase">
              Informasi Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">+62 821-6624-1647</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:info@bangunera.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  info@karuniaandalansejahtera.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  CV Karunia Andalan Sejahtera, Jl. Indulgent No. 3, Kelurahan Kadu, Kecamatan Curug,
                  Kabupaten Tangerang, Banten 15810, Kabupaten Tangerang, Banten
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} CV Karunia Andalan Sejahtera. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
