import {data} from "../../../data/data";
import Cards from "./cards";
import "./cardgrids.css"
const CardGrid = () => {
  const Test = data.Review;
  return (
    <div className="card-grid">
       
      {Test.map((card, index) => (
        <Cards
          key={index}
          profilePicture={card.profilePicture}
          name={card.name}
          role={card.role}
          details={card.details}
        />
      ))}
    </div> 
  );
};

export default CardGrid;
