import {data} from "../../data/data";
import '../../styles/testimonials.css'
import CardGrid from "./card/CardGrid";
export default function Testimonial() {
  
  const Test = data.Testimonials;
  return (
    <div className="test-main">
      <h2 className="test-heading">{Test[0].title}</h2>
      <div className="test-details">{Test[0].details}</div>
      <CardGrid />
    </div>
  );
}
