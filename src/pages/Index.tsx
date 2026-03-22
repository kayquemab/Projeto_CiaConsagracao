import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cast from "@/components/Cast";
import Portfolio from "@/components/Portfolio";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Cast />
      <Portfolio />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
