import '../styles/LandingPage.css'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Mobiles from '../components/mobiles'
import About from '../components/About'

function LandingPage() {
  return (
    <div className="l-main-content">
      <Header />
      <HeroSection />
      <Mobiles />
      <About />
    </div>
  )
}

export default LandingPage