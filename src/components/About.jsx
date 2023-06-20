import "../styles/About.css";

import Mobile from "./Mobile";
import "../data/data";
import { data } from "../data/data";
import Button from "./Button";
import Card from "./card";
function About() {
  const about = data.about;
  return (
    <div className="main-about">
      <Card />
      <div className="about-title">
        <h2>About Us</h2>
        {about.map((d, index) => {
          return (
            
            <div className={index % 2 == 0 ? 'about-row': 'about-row-rev' } key={Math.random()}>
                <div className="about-col1">
                  <Mobile
                    className={"mobile1"}
                    height={"564"}
                    width={"290"}
                    borderRadius={"10"}
                    background={"rgb(191, 191, 191)"}
                  />
                </div>
                <div className="about-col2">
                  <div className="row2-title">{d.heading}</div>
                  <div className="row2-details">{d.details}</div>
                  <Button
                    backgroundColor={"black"}
                    color={"white"}
                    text={"Learn More"}
                    width={124}
                  />
                </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
