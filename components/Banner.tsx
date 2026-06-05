"use client";

export default function Banner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{ background: "var(--primary)" }}
      />

      <div className="relative z-10 text-center px-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-400 mb-4">
          SPESIALIS KAMI
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          KARUNIA ANDALAN SEJAHTERA
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          is a specialist in{" "}
          <span className="text-white font-semibold">Industrial</span>,{" "}
          <span className="text-white font-semibold">Commercial</span>,
          <br className="hidden sm:block" />
          and <span className="text-white font-semibold">Residential Construction</span>
        </p>
      </div>
    </section>
  );
}
