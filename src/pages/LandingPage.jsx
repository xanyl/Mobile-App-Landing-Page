import '../styles/LandingPage.css'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Mobiles from '../components/mobiles'
import About from '../components/About'
import Testimonial from '../components/Testimonials/Testimonial'

function LandingPage() {
  return (
    <div className="l-main-content">
      <Header />
      <HeroSection />
      <Mobiles />
      <About />
      <Testimonial />
    </div>
  )
}

export default LandingPage