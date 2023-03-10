import { useNavigate } from "react-router-dom";

import LoginImage from "../images/LoginImage.png";

export default function Book({ book, onDeleteHandler }) {
  const navigate = useNavigate();

  return (
    <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{book.name}</div>
      <div className="card-body">
        <img src={LoginImage} width="200" height="100" />
        <h6 className="card-title">Price: ${book.price}</h6>
        <h6 className="card-text">Available: {book.quantity}</h6>
        <p className="card-text">{book.description}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigate(`/dashboard/books/${book._id}`);
          }}
        >
          Edit
        </button>{" "}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            onDeleteHandler(book._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
