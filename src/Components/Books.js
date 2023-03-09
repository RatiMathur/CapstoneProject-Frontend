import { useState, useEffect } from "react";
import { customGET, customDELETE } from "../backendAPICall/ApiCall.js";
import { useNavigate } from "react-router-dom";
import Book from "./Book.js";

export default function Books() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    customGET("books").then((response) => setBooks(response.data));
  }, []);

  function onDelete(id) {
    if (window.confirm("Do you want to delete this item?")) {
      customDELETE(`books/${id}`).then((response) => {
        const filteredBooks = books.filter(
          (book) => book.id !== response.data.id
        );
        setBooks(filteredBooks);
      });
    }
    window.location.reload(true);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 pb-2">Books</h1>
            <button
              type="button"
              className="btn btn-primary btn-lg float-end"
              onClick={() => {
                navigate("/dashboard/books/new");
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {books.map((book) => (
            <div className="col-3">
              <Book book={book} onDeleteHandler={onDelete} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
