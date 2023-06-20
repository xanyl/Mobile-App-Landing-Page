import "../styles/About.css";
import google from "../assets/img/google.png";
import apple from "../assets/img/apple.png";

export default function Card() {
  return (
    <div className="card-store">
      <div className="apple-store">
        <img src={apple} alt="" />
      </div>
      <div className="google-play">
        <img src={google} />
      </div>
    </div>
  );
}
