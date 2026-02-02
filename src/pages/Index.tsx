import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeOffer from "@/components/WhatWeOffer";
import Routes from "@/components/Routes";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeOffer />
      <Routes />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
