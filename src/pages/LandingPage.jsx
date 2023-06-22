import About from "../components/About/About";
import Mobiles from "../components/About/Mobile/mobiles";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import Facts from "../components/FAQ/Facts";
import "./LandingPage.css";
import "../components/Testimonials/Testimonial";
import Testimonial from "../components/Testimonials/Testimonial";
import BottomHero from "../components/BottomHero/BottomHero";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <div className="l-main-content">
      <Header />
      <HeroSection />
      <Mobiles />
      <About />
      <Testimonial />
      <Facts />
      <BottomHero />
      <Footer />
    </div>
  );
}

export default LandingPage;
