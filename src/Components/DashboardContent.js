import { Link } from "react-router-dom";

export default function DashboardContent() {
  return (
    <div className="container mt-5">
      <h1
        className="display-1 pb-2"
        style={{ color: "brown", fontWeight: "bolder" }}
      >
        Welcome to your Book organizer
      </h1>
      <h1
        className="display-3 mt-3"
        style={{ color: "grey", fontWeight: "bold" }}
      >
        Enjoy Reading!!!!
      </h1>
      <Link className="btn btn-primary mt-5 ml-3" to="/dashboard/books">
        Explore Books
      </Link>
    </div>
  );
}
