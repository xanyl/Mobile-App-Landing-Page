import PropTypes from "prop-types";
const Button = ({ onClick, backgroundColor, color, text, width }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: `15px`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`,
        border: `none`,
        borderRadius: "5px",
        cursor: "pointer",
        width: `${width}px`,
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
