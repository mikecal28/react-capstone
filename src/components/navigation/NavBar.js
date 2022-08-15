import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar">
      {props.location.pathname === "/login" && (
        <Link exact to={"/"} style={{ textDecoration: "none" }}>
          <button className="nav-buttons">Home</button>
        </Link>
      )}
      {props.location.pathname === "/" && (
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <button className="nav-buttons">Log In</button>
        </Link>
      )}
    </div>
  );
}

export default NavBar;
