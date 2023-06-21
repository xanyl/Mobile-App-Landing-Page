import "./Header.css";
import Button from "../Button/Button";
function Header() {
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
      <div className="logo"> smartHome</div>
      <div className="btn-two">
        {/* <button className="btn-1">Login</button>
        <button>SignUp</button> */}
        <Button
          padding={"10"}
          border ={'none'}
          backgroundColor={"transparent"}
          color={"white"}
          text={"Login"}
        />
        <Button
          padding={"10"}
          background={"black"}
          color={"black"}
          border ={'none'}
          text={"SignUp"}
          width={96}
        />
      </div>
    </div>
  );
}

export default Header;
