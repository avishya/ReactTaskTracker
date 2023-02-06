import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickAction = () => {
    console.log("Clicked111");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClickProp={onClickAction} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;
