import "./Button.css";
import { Link } from "react-router-dom";

const MyButton = (props) => {
  return (
    <div>
      <button className="btn btn-outline btn-large">{props.name}</button>
    </div>
  );
};

export default MyButton;
