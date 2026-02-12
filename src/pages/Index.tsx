import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import EngagementProtocol from "@/components/EngagementProtocol";
import WhatWeOffer from "@/components/WhatWeOffer";
import Routes from "@/components/Routes";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeOffer />
      <HowItWorks />
      <EngagementProtocol />
      <Routes />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
