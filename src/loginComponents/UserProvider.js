import { useState, useEffect, createContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({ children }) {
  const history = useHistory();
  const match = useRouteMatch();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(false);

  function logout() {
    // fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
    fetch("https://httpbin.org/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.message === "Logged out") {
        //   setUser(null);
        //   history.push("/login");
        // }
        setUser(null);
        history.push("/login");
        setAuthIsLoading(false);
      })
      .catch((err) => {
        setUser(null);
        history.push("/login");
        // console.error("Logout Error: ", err);
        setAuthIsLoading(false);
      });
  }

  const userState = {
    user,
    setUser,
    authIsLoading,
    setAuthIsLoading,
    logout,
  };

  useEffect(() => {
    // fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
    fetch("https://httpbin.org/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.user?.role) {
        //   setUser(data.user);
        //   history.push("/widgets-dashboard");
        // } else {
        //   setUser(null);
        // }
        setUser(data.user);
        history.push("/widgets-dashboard");
        setAuthIsLoading(false);
      })
      .catch((err) => {
        setUser({
          email: "mike@devpipeline.com",
          password: "1234",
          role: "admin",
        });
        history.push("/widgets-dashboard");
        // console.error("Check Login Error: ", err);
        setAuthIsLoading(false);
      });
  }, [history]);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
