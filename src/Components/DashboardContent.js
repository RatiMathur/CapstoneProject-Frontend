import React from "react";
import { Link } from "react-router-dom";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Book from "../images/Book.png";

export default function DashboardContent() {
  return (
    <div className="container mt-5">
      <h1
        className="display-1 pb-2"
        style={{ color: "brown", fontWeight: "bolder" }}
      >
        {" "}
        <span>
          <Typewriter
            words={["Welcome to KH Book Store", "Explore the world of books"]}
            typeSpeed={80}
            deleteSpeed={80}
          />
        </span>
      </h1>
      <img src={Book} />
    </div>
  );
}
