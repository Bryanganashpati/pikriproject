import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Karunia Andalan Sejahtera - Trusted Engineering, Procurement & Construction",
  description:
    "CV Karunia Andalan Sejahtera adalah jasa kontraktor dan EPC (Engineering, Procurement, and Construction). Melayani konstruksi industri, komersial, dan residensial.",
  keywords: "konstruksi, EPC, engineering, procurement, kontraktor Indonesia, Bangun Era Konstruksi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
