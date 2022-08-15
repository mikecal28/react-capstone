import { Link } from "react-router-dom";

function WidgetsDashboard() {
  return (
    <div className="widgets-dashboard">
      <h1>Widgets Dashboard</h1>

      <Link to={"/logout"}>Logout</Link>
    </div>
  );
}

export default WidgetsDashboard;
