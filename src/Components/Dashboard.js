import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 mt-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          width="100%"
          id="navbarNav"
          style={{ color: "blue", fontWeight: "bolder" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link p-3" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-3" to="/dashboard/books">
                Explore Books
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn p-3 text-primary bg-white" onClick={logout}>
          Logout
        </button>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
