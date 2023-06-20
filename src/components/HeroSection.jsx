import "../styles/HeroSection.css";
import fb from "../assets/icons/facebook.png";
import insta from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";
import { data } from "../data/data";
function HeroSection() {
  return (
    <div className="hero-main">
      <div className="hero-title">{data.heading}</div>
      <div className="hero-details">{data.details}</div>
      <div className="social-icons">
        <div>
          <img src={fb} />
        </div>
        <div>
          <img src={insta} />
        </div>
        <div>
          <img src={twitter} />
        </div>
        <div>
          <img src={linkedin} />
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
