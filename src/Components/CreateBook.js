import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customPOST } from "../backendAPICall/ApiCall.js";

export default function CreateBook() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState();
  const [price, setPrice] = useState(1);
  const [priceError, setPriceError] = useState();

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    console.log("Book Creation submit button clicked");

    setNameandError(name);
    setDescriptionandError(description);
    setAuthorandError(author);
    setPriceandError(price);
    setQuantityandError(quantity);

    const request = {
      name,
      author,
      description,
      price,
      quantity,
    };

    customPOST("books", request).then((response) => {
      console.log(request);
      navigate("/dashboard/books");
    });
  }

  function setNameandError(value) {
    setName(value);
    if (value === "") {
      setNameError("Please enter book name.");
    } else setNameError("");
  }

  function setAuthorandError(value) {
    setAuthor(value);
    if (value === "") {
      setAuthorError("Please enter author name.");
    } else setAuthorError("");
  }

  function setDescriptionandError(value) {
    setDescription(value);
    if (value === "") {
      setDescriptionError("Please enter the description");
    } else setDescriptionError("");
  }

  function setPriceandError(value) {
    setPrice(value);
    if (value === "") {
      setPriceError("Please enter price");
    } else setPriceError("");
  }

  function setQuantityandError(value) {
    setQuantity(value);
    if (value === "") {
      setQuantityError("Please enter the quantity");
    } else if (value >= 10000) {
      setQuantityError("Please enter the quantity less than 10000");
    } else setQuantityError("");
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <h5 className="card-header">Add</h5>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="book" className="mb-2">
                Book Name
              </label>
              <input
                type="text"
                className={`form-control ${nameError && `is-invalid`}`}
                id="bookName"
                placeholder="Book Name"
                maxLength={40}
                value={name}
                onChange={(event) => setNameandError(event.target.value)}
                onBlur={(event) => setNameandError(event.target.value)}
              />
              {nameError && <span className="text-danger">{nameError}</span>}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="authorname" className="mb-2">
                Author Name
              </label>
              <input
                type="text"
                className={`form-control ${authorError && `is-invalid`}`}
                id="authorName"
                placeholder="Author Name"
                maxLength={40}
                value={author}
                onChange={(event) => setAuthorandError(event.target.value)}
                onBlur={(event) => setAuthorandError(event.target.value)}
              />
              {authorError && (
                <span className="text-danger">{authorError}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="bookDescription" className="mb-2">
                Book Description
              </label>
              <textarea
                type="text"
                className={`form-control ${descriptionError && `is-invalid`}`}
                id="bookDescription"
                placeholder="Book Description"
                value={description}
                onChange={(event) => setDescriptionandError(event.target.value)}
                onBlur={(event) => setDescriptionandError(event.target.value)}
              />
              {descriptionError && (
                <span className="text-danger">{descriptionError}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <div className="row">
                <div className="col">
                  <label htmlFor="bookQuantity" className="mb-2">
                    Book Quantity
                  </label>
                  <input
                    type="number"
                    className={`form-control ${quantityError && `is-invalid`}`}
                    placeholder="Quantity"
                    id="bookQuantity"
                    value={quantity}
                    onChange={(event) =>
                      setQuantityandError(event.target.value)
                    }
                    onBlur={(event) => setQuantityandError(event.target.value)}
                  />
                  {quantityError && (
                    <span className="text-danger">{quantityError}</span>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="bookPrice" className="mb-2">
                    Book Price (in $)
                  </label>
                  <input
                    type="number"
                    className={`form-control ${priceError && `is-invalid`}`}
                    placeholder="Price in $"
                    id="bookPrice"
                    value={price}
                    onChange={(event) => setPriceandError(event.target.value)}
                    onBlur={(event) => setPriceandError(event.target.value)}
                  />
                  {priceError && (
                    <span className="text-danger">{priceError}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
