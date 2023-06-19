import '../styles/LandingPage.css'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Mobiles from '../components/Mobiles'

function LandingPage() {
  return (
    <div className="l-main-content">
      <Header />
      <HeroSection />
      <Mobiles />
    </div>
  )
}

export default LandingPage