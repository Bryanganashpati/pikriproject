"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Proyek", href: "#projects" },
  {
    label: "Layanan",
    href: "#layanan",
    children: [
      { label: "Engineering", href: "#projects" },
      { label: "Procurement", href: "#services" },
      { label: "Construction", href: "#layanan" },
      { label: "Pengecetan", href: "#layanan"},
    ],
  },
  { label: "Informasi", href: "#info" },
  { label: "Kontak Kami", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
  src="/images/logo.png"
  alt="CV Logo"
  width={40}
  height={40}
  className="w-10 h-10 object-cover"
/>
              <div className="">
                <p
                  className={`text-xs font-bold leading-tight ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  KARUNIA ANDALAN
                </p>
                <p
                  className={`text-xs leading-tight ${
                    scrolled ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  SEJAHTERA
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-primary min-w-[180px] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white mt-2 shadow-xl border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-primary border-b border-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-8 py-2 text-sm text-gray-500 hover:text-primary border-b border-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
