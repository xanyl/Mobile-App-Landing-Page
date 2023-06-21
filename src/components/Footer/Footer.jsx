import { data } from "../../data/data";
import Button from "../Button/Button";
import "./Footer.css";

const Footer = () => {
  const footerData = data.Footer[0];

  return (
    <div className="footer-main">
      <div className="footer-nav">
        <div className="col-email">
          <div className="footer-title">{footerData.title}</div>
          <div className="footer-details">{footerData.text}</div>
          <div className="footer-contact">
            <div className="foot-email">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="foot-btn">
              <Button
                padding={"10"}
                border={"1px solid black"}
                backgroundColor={"transparent"}
                color={"black"}
                text={"Register"}
                
              />
            </div>
          </div>
        </div>
        <div className="col-categories">
          <ul>
            {footerData.categories.map((category, index) => (
              <li className={`cat-row${index + 1}`} key={index}>
                <a href="">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-about">
          <ul>
            {footerData.about.map((item, index) => (
              <li className={`about-row${index + 1}`} key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-follow">
          <ul>
            {footerData.follow.map((item, index) => (
              <li className={`follow-row${index + 1}`} key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="black-footer">
        <span>&copy; 2023 Company Name. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
