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
        <span>
          <Typewriter
            words={["Welcome to KH Book Store", "Explore the world of books"]}
            typeSpeed={80}
            deleteSpeed={80}
          />
        </span>
      </h1>
      <div style={{ display: "grid" }}>
        <img
          src={Book}
          style={{
            width: "80vw",
            height: "50vh",
          }}
        />
        <p>
          Enchanting the mind one book at a time is our core focus at KH Book
          Outlet. It’s the passion behind everything we do. We believe we’re not
          just selling books; we’re impacting the lives of millions of people,
          both locally and across the globe, by making books more accessible to
          everyone. With reading comes learning, and the more we learn the
          greater the impact we can all make.{" "}
        </p>

        <p>
          While we’re not the type of company who likes to stand on the rooftop
          and shout out the ways we support our communities, we are proud of the
          number of people we’ve been able to impact through our contributions
          and book donations to literacy and education programs. Below are just
          a few of the organizations that we’ve supported along the way. Each
          month, we review dozens of donation requests from incredible
          individuals and organizations worldwide doing their part in Enchanting
          the Minds within their community.
        </p>
      </div>
    </div>
  );
}
