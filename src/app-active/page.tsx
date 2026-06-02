import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVisionValues from "@/components/MissionVisionValues";
import Gallery from "@/components/Gallery";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVisionValues />
        <Solutions />
        <Gallery />
        <Services />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
