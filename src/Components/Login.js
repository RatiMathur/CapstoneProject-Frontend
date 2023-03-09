import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { customPOST } from "../backendAPICall/ApiCall.js";
import {
  emailPattern,
  passwordPattern,
} from "../backendAPICall/reularExpressions.js";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    setUserNameAndError(userName);
    setPasswordAndError(password);

    if (!emailPattern.test(userName) || !passwordPattern.test(password)) {
      return;
    }
    const request = {
      userName: userName,
      password: password,
    };
    customPOST("auth/login", request)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(`Token from login UI ${response.data.token}`);
        navigate("/dashboard");
      })
      .catch((error) => {
        window.alert("Username or password is incorrect");
      });
  }

  function setUserNameAndError(value) {
    setUserName(value);

    if (value === "") {
      setUserNameError("Please enter email address");
    } else if (!emailPattern.test(value)) {
      setUserNameError("Please enter valid email address");
    } else {
      setUserNameError("");
    }
  }

  function setPasswordAndError(value) {
    setPassword(value);

    if (value === "") {
      setPasswordError("Please enter password");
    } else if (!passwordPattern.test(value)) {
      setPasswordError("Please enter valid password");
    } else {
      setPasswordError("");
    }
  }

  return (
    <>
      <div className="container pt-5">
        <h1 className="display-1 pb-2">BookStore</h1>
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${userNameError && `is-invalid`}`}
                  id="userName"
                  value={userName}
                  onChange={(event) => setUserNameAndError(event.target.value)}
                  onBlur={(event) => setUserNameAndError(event.target.value)}
                  placeholder="Enter emailId"
                />
                {userNameError && (
                  <span className="text-danger">{userNameError}</span> //This is to display the html component if some condition is fulfilled
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError && `is-invalid`}`}
                  id="password"
                  autoComplete="on"
                  value={password}
                  onChange={(event) => setPasswordAndError(event.target.value)}
                  onBlur={(event) => setPasswordAndError(event.target.value)}
                  placeholder="Enter password"
                />
                {passwordError && (
                  <span className="text-danger">{passwordError}</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link
                to="/signup"
                className="card-link"
                style={{ marginLeft: "10px" }}
              >
                Sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
