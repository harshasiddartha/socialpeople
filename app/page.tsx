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
      <HeroSection />
    
      <TestimonialSection />
      <PainPointsSection/>
      <Testimonial quote={""} supportingText={""} author={""} company={""}/>
      <ServicesSection/>
      <BlueprintSection />
      <FounderSection />
    
      <WorkWithUsSection/>
    </>
  );
}
