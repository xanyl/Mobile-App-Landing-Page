import { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="main-nav">
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">About</a>
        <a href="#about">Testimonials</a>
        <a href="#about">Contact</a>
      </div>

      <div className={`overlay ${isNavOpen ? "open" : ""}`}>
        <div className="overlay-content">
          <a href="#home">Home</a>
          <a href="#contact">About</a>
          <a href="#about">Testimonials</a>
          <a href="#about">Contact</a>
        </div>
      </div>
      <div className="logo">smartHome</div>
      <div className="btn-two">
        <Button
          padding={"10"}
          border={"none"}
          backgroundColor={"transparent"}
          color={"white"}
          text={"Login"}
          width={"auto"}
        />
        <Button
          padding={"10"}
          background={"black"}
          color={"black"}
          border={"none"}
          text={"SignUp"}
          width={"96"}
        />
      </div>
      <div className="icon-ham" onClick={handleNavToggle}>
        &#9776;
      </div>
    </div>
  );
}

export default Header;
