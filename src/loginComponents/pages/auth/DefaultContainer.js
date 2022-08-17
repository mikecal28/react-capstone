import { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../../UserProvider";
import WidgetsDashboard from "../../../components/pages/WidgetsDashboard";
import WidgetPage from "../../../components/pages/WidgetPage";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...Logging Out</div>;
}

function DefaultContainer() {
  return (
    <div className="default-container">
      <Switch>
        <Route exact path="/widgets-dashboard" component={WidgetsDashboard} />
        <Route path="/widgets-dashboard/:widgetId" component={WidgetPage} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default DefaultContainer;
