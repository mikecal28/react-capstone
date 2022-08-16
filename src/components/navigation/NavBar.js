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

      {props.location.pathname.includes("/widgets-dashboard") && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">About</button>
          </Link>
          <Link
            to={"/widgets-dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="page-title">Widgets Dashboard</div>
          </Link>
          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
