import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClickAddTask, showAdd }) => {
  const onClickAction = () => {
    console.log("Clicked111");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClickProp={onClickAddTask}
      />
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
