import "./Button.css";
import { Link } from "react-router-dom";

const MyButton = (props) => {
  return (
    <div>
      {/* <Link to={`/${props.linkTo}`}> */}
      <Link to="/Services">
        <button className="btn btn-outline btn-large">{props.name}</button>
      </Link>
    </div>
  );
};

export default MyButton;
