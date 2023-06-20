import '../../../styles/CardGrid.css'
import PropTypes from "prop-types";

const Cards = ({ profilePicture, name, role, details }) => {
  return (
    <div className="card">
      <p>{details}</p>
      <div className="profile-card">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div className="person-details">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Cards;
