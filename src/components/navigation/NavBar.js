import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar">
      {props.location.pathname === "/login" && (
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button className="nav-buttons">Home</button>
        </Link>
      )}

      {props.location.pathname === "/" && (
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <button className="nav-buttons">Log In | Guest</button>
        </Link>
      )}

      {props.location.pathname === "/widgets-dashboard" && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">About</button>
          </Link>
          <div className="page-title">Widgets Dashboard</div>

          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )}

      {props.location.pathname.includes("/widgets-dashboard/") && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/widgets-dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Widgets</button>
          </Link>
          <div className="page-title">
            {props.location.pathname.includes("swapi-search")
              ? "Swapi Search"
              : props.location.pathname.includes("weather")
              ? "Weather"
              : props.location.pathname.includes("hangman")
              ? "Hangman"
              : props.location.pathname.includes("message-scroller")
              ? "Message Scroller"
              : props.location.pathname.includes("analogue-clock")
              ? "Analogue Clock"
              : ""}
          </div>

          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )}

      {props.location.pathname === "/about" && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/widgets-dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Widgets</button>
          </Link>
          <div className="page-title">About</div>

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
