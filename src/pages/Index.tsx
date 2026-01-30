import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Routes from "@/components/Routes";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Routes />
      <Testimonials />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
