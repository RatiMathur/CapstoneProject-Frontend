import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customGET, customPUT } from "../backendAPICall/ApiCall.js";
import "../App.css";
import LoginImage from "../images/LoginImage.png";

export default function BookDetails() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [review, setReview] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    customGET(`books/${id}`).then((response) => {
      const { name, author, description, quantity, price, review } =
        response.data;

      setName(name);
      setAuthor(author);
      setDescription(description);
      setQuantity(quantity);
      setPrice(price);
      setReview(review);
    });
  }, [id]);

  function onSubmit(event) {
    event.preventDefault();
    navigate("/dashboard/books");
  }

  function onPost(event) {
    const request = {
      name,
      author,
      description,
      quantity,
      price,
      review,
    };

    customPUT(`books/${id}`, request).then((response) =>
      window.location.reload(true)
    );
  }
  return (
    <div className="detailPage">
      <div className="image">
        <img src={LoginImage} />
      </div>
      <div style={{ fontSize: 30 }}>
        <h1 htmlFor="bookName">{name}</h1>
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
            Book Price : ${price}
          </label>
        </div>
        <form onSubmit={onPost}>
          <label> Reviews: </label>
          <div className="review">
            {review.length > 0 ? (
              review.map((rev) => {
                return <p style={{ color: "blue" }}>Review # : {rev}</p>;
              })
            ) : (
              <p>No Reviews</p>
            )}
          </div>
          <h4> Add Review </h4>
          <hr />
          <div>
            <textarea
              id="review"
              type="text"
              style={{ height: 40 }}
              onBlur={(event) => {
                setReview([...review, event.target.value]);
              }}
            ></textarea>
          </div>
          <div>
            <button
              className="btn btn-primary"
              style={{ color: "gold" }}
              type="submit"
            >
              Post Review
            </button>
          </div>
        </form>{" "}
        <button className="btn btn-primary" onClick={onSubmit}>
          Done
        </button>
      </div>
    </div>
  );
}
