import HeroSection from "./components/HeroSection";
import BlueprintSection from "./components/BlueprintSection";
import TestimonialSection from "./components/TestimonialSection";
import FounderSection from "./components/FounderSection";
import WorkWithUsSection from "./components/WorkWithUsSection";
import PainPointsSection from "./components/PainPointsSection";
import Testimonial from "./components/Testimonial";
import ServicesSection from "./components/ServicesSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
    
      <TestimonialSection />
      
      <section id="values" className="scroll-mt-24">
        <PainPointsSection/>
      </section>

      <Testimonial quote={""} supportingText={""} author={""} company={""}/>
      
      <section id="services" className="scroll-mt-24">
        <ServicesSection/>
      </section>

      <section id="work" className="scroll-mt-24">
        <BlueprintSection />
      </section>

      <section id="about" className="scroll-mt-24">
        <FounderSection />
      </section>
    
      <section id="contact" className="scroll-mt-24">
        <WorkWithUsSection/>
      </section>
    </>
  );
}
