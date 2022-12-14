import { useState, useEffect, createContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export const UserContext = createContext();

function UserProvider({ children }) {
  const history = useHistory();
  const match = useRouteMatch();
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(false);

  function logout() {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged out") {
          setUser(null);
          history.push("/login");
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Logout Error: ", err);
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
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.role) {
          setUser(data.user);
          history.push("/widgets-dashboard");
        } else {
          setUser(null);
        }
        setAuthIsLoading(false);
      })
      .catch((err) => {
        console.error("Check Login Error: ", err);
        setAuthIsLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
