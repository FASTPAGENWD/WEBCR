import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TiltCard from "@/components/TiltCard";
import TrustLogos from "@/components/TrustLogos";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TiltCard />
        <TrustLogos />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
