import Mobile from "./Mobile";
import "./mobiles.css";
import screen1 from "../../../assets/img/screen1.jpg";
import screen2 from "../../../assets/img/screen2.jpg";
import screen3 from "../../../assets/img/screen3.jpg";
function Mobiles() {
  return (
    <div className="mobile-main">
      <Mobile
        screen={screen1}
        className={"mobile1"}
        height={508}
        width={230}
        borderRadius={20}
        background={"rgb(191, 191, 191)"}
      />
      <Mobile
      
        screen={screen2}
        className={"mobile1"}
        height={590}
        width={270}
        borderRadius={34}
        background={"rgb(191, 191, 191)"}
      />
      <Mobile
        screen={screen3}
        className={"mobile1"}
        height={512}
        width={230}
        borderRadius={30}
        background={"rgb(191, 191, 191)"}
      />
    </div>
  );
}

export default Mobiles;
