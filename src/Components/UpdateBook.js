import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customGET, customPUT } from "../backendAPICall/ApiCall.js";

export default function UpdateProduct() {
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

    const request = {
      name,
      author,
      description,
      quantity,
      price,
    };

    customPUT(`books/${id}`, request).then((response) =>
      navigate("/dashboard/books")
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <h5 className="card-header">Update</h5>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="bookName" className="mb-2">
                Book Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Product Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="authorName" className="mb-2">
                Author Name
              </label>
              <input
                type="text"
                className="form-control"
                id="authorName"
                placeholder="Author Name"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="bookDescription" className="mb-2">
                Book Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="bookDescription"
                placeholder="Book Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <div className="row">
                <div className="col">
                  <label htmlFor="bookQuantity" className="mb-2">
                    Book Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    id="bookQuantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </div>
                <div className="col">
                  <label htmlFor="bookPrice" className="mb-2">
                    Book Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="price"
                    id="bookPrice"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
