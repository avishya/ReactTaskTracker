import PropTypes from "prop-types";

const Button = ({ color, text, onClickProp }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClickProp}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "blue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClickProp: PropTypes.func,
};

export default Button;
