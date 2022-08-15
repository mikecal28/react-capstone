import { Switch, Route } from "react-router-dom";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import NavBar from "../../../components/navigation/NavBar";
import "../../../assets/vimal-s-AVtaJiElubk-unsplash.jpg";

function LoginContainer(props) {
  return (
    <div className="login-container">
      <Route
        path="*"
        {...props}
        render={(routeProps) => <NavBar {...routeProps} />}
      />
      <Switch>
        <Route
          exact
          path="/"
          {...props}
          render={(routeProps) => <HomePage {...routeProps} />}
        />
        <Route
          path="/login"
          {...props}
          render={(routeProps) => <LoginPage {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default LoginContainer;
