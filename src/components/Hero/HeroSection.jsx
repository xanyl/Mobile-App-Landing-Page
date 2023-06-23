import "./HeroSection.css";

import { data } from "../../data/data";
function HeroSection() {
  return (
    <div className="hero-main">
      <div className="hero-title">{data.heading}</div>
      <div className="hero-details">{data.details}</div>
      <div className="social-icons">
        <div>
          <i
            className="fa-brands fa-facebook"
            style={{ color: "#c6c7c7", fontSize: "24px" }}
          ></i>
        </div>
        <div>
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#c6c7c7", fontSize: "24px" }}
          ></i>
        </div>
        <div>
          <i
            className="fa-brands fa-twitter"
            style={{ color: "#c6c7c7", fontSize: "24px" }}
          ></i>
        </div>
        <div>
          <i
            className="fa-brands fa-linkedin"
            style={{ color: "#c6c7c7", fontSize: "24px" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
