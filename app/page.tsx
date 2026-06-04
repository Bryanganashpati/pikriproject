import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Alasan from "@/components/Alasan";
import Portfolio from "@/components/Portfolio";
import CostEstimate from "@/components/CostEstimate";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Projects />
      <Services />
      <Alasan />
      <About />
      <CostEstimate />
      
      
      
      
      
      <Banner />
      <Clients />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
