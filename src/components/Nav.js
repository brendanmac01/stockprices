import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/stocks">
        <div>Stocks</div>
      </Link>
    </div>
  );
};

export default Nav;