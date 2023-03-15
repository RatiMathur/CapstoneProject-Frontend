import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customGET } from "../backendAPICall/ApiCall.js";

export default function BookDetails() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    customGET(`books/${id}`).then((response) => {
      const { name, author, description, quantity, price } = response.data;

      setName(name);
      setAuthor(author);
      setDescription(description);
      setQuantity(quantity);
      setPrice(price);
    });
  }, [id]);

  function onSubmit(event) {
    event.preventDefault();
    navigate("/dashboard/books");
  }

  return (
    <div style={{ fontSize: 30 }}>
      <h1 style={{ color: "blue" }}>Book Details</h1>
      <div>
        <label htmlFor="bookName" className="mb-2">
          Book Name : {name}
        </label>
      </div>
      <div>
        <label htmlFor="authorName" className="mb-2">
          Author Name : {author}
        </label>
      </div>
      <div>
        <label htmlFor="bookDescription" className="mb-2">
          Book Description : {description}
        </label>
      </div>
      <div>
        <label htmlFor="bookQuantity" className="mb-2">
          Book Quantity : {quantity}
        </label>
      </div>
      <div>
        <label htmlFor="bookPrice" className="mb-2">
          Book Price : {price}
        </label>
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Done
      </button>{" "}
      <button className="btn btn-primary" onClick={onSubmit}>
        Buy Now
      </button>
    </div>
  );
}
