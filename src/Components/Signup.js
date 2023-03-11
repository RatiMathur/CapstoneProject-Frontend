import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { customPOST } from "../backendAPICall/ApiCall.js";
import {
  emailPattern,
  passwordPattern,
} from "../backendAPICall/reularExpressions.js";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    console.log("Signup 1");

    setUserNameAndError(userName);
    setPasswordAndError(password);
    setConfirmPasswordAndError(confirmPassword);

    if (
      !emailPattern.test(userName) ||
      !passwordPattern.test(password) ||
      confirmPassword !== password
    ) {
      return;
    }

    const request = {
      userName: userName,
      password: password,
      confirmPassword: confirmPassword,
    };

    customPOST("auth/signup", request).then((response) => {
      console.log("Signup 2");
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
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
      setPasswordError(
        "Please enter valid password.Minimum 1 capital letter.Minimum 1 special character."
      );
    } else {
      setPasswordError("");
    }
  }

  function setConfirmPasswordAndError(value) {
    setConfirmPassword(value);

    if (value === "") {
      setConfirmPasswordError("Please enter confirm password");
    } else if (!passwordPattern.test(value)) {
      setConfirmPasswordError("Please enter valid confirm password");
    } else if (value !== password) {
      setConfirmPasswordError(
        "Please enter same confirm password which you enter in password field"
      );
    } else {
      setConfirmPasswordError("");
    }
  }

  return (
    <>
      <div className="container pt-5">
        <h1
          className="display-1 pb-2"
          style={{ color: "blue", fontWeight: "bolder" }}
        >
          New User Signup
        </h1>
        <div className="card">
          <div className="card-header">Sign Up</div>
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
                />
                {userNameError && (
                  <span className="text-danger">{userNameError}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError && "is-invalid"}`}
                  id="password"
                  autoComplete="on"
                  value={password}
                  onChange={(event) => setPasswordAndError(event.target.value)}
                  onBlur={(event) => setPasswordAndError(event.target.value)}
                />
                {passwordError && (
                  <span className="text-danger">{passwordError}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    confirmPasswordError && `is-invalid`
                  }`}
                  id="confirmPassword"
                  autoComplete="on"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPasswordAndError(event.target.value)
                  }
                  onBlur={(event) =>
                    setConfirmPasswordAndError(event.target.value)
                  }
                />
                {confirmPasswordError && (
                  <span className="text-danger">{confirmPasswordError}</span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link
                to="/login"
                className="card-link"
                style={{ marginLeft: "10px" }}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
