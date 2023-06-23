import Card from "../About/Card/Card";
import Mobile from "../About/Mobile/Mobile";
import Button from "../Button/Button";
import "./BottomHero.css";
import screen2 from "../../assets/img/screen2.jpg";

export default function BottomHero() {
  return (
    <div className="bottom-main">
      <div className="bottom-hero-main">
        <div className="bottom-col-1">
          <div className="download-col-bottom">
          <div className="btm-row-1">
            Download <br />
            App
          </div>
          <div className="btm-row-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            excepturi. Sapiente veniam laborum eum laboriosam culpa assumenda
            quos, ea ab corporis
          </div>
          </div>
          <div className="btm-row-3">
            <Card />
          </div>
        </div>
        <div className="bottom-col-2">
          <Mobile
          screen={screen2}
            className={"mobile1"}
            height={564}
            width={290}
            borderRadius={40}
            background={"rgb(191, 191, 191)"}
          />
        </div>
      </div>
      <div className="subscribe-main">
        <div className="subs-col1">
          <div className="sub-row-1">Subscribe to get updated </div>
          <div className="sub-row-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
            consectetur. Mollitia sit in earum laudantium quo! Fugiat esse
            nobis, voluptatum ab optio consequatur quia, blanditiis quaerat
            explicabo alias quis dolores.
          </div>     
        </div>
        <div className="subs-col2">
          <Button
            border="1px solid white"
            padding={"10"}
            backgroundColor={"transparent"}
            color={"white"}
            text={"Get Started"}
            width={'160'}
          />
        </div>
      </div>
    </div>
  );
}
