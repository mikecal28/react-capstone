import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../UserProvider";

function LoginPage(props) {
  const history = useHistory();
  const { setUser, setAuthIsLoading, authIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);
    setErrorMsg("");

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthIsLoading(false);
        if (data.message === "Logged In") {
          history.push("/widgets-dashboard");
          setUser(data.user);
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMsg("Invalid Credentials");
        console.error("Login Error: ", err);
      });

    //   setTimeout(() => {
    //     if (email === "mike@example.com" && password === "1234") {
    //       setUser({
    //         id: 1,
    //         first_name: "mike",
    //         last_name: "caldwell",
    //         role: "admin",
    //       });
    //       setAuthIsLoading(false);
    //       history.push("/dashboard");
    //     } else {
    //       setUser(null);
    //       setAuthIsLoading(false);
    //       setErrorMsg("Invalid Credentials");
    //     }
    //   }, 3000);
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <h1>Welcome</h1>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="text-field"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              className="text-field"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input className="submit-button" type="submit" />
            {/* {authIsLoading && !errorMsg ? (
            <input type="submit" />
          ) : (
            <h1>...submitting</h1>
          )} */}
          </div>
          {errorMsg}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
