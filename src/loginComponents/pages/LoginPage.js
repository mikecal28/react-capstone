import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

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
            {!authIsLoading && !errorMsg ? (
              <input className="submit-button" type="submit" />
            ) : !errorMsg ? (
              <h5 style={{ margin: 0, padding: 0 }}>...submitting</h5>
            ) : (
              <h5 style={{ margin: 0, padding: 0 }}>{errorMsg}</h5>
            )}
          </div>
          {errorMsg}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
