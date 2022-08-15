import { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../../UserProvider";
import WidgetsDashboard from "../WidgetsDashboard";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...Logging Out</div>;
}

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/widgets-dashboard" component={WidgetsDashboard} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}

export default DefaultContainer;
