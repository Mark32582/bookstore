import React, { useState } from "react";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const AddBooks = (props) => {
  const { search, setSearch, books, setBooks } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [selectedBook, setSelectedBook] = useState(null);
  const selectedCollections = [
    "bestSeller",
    "newReleases",
    "carousel",
    "employeeRecommendations",
  ];
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState(false);

  const fetchCollection = async (collectionName, setBooks) => {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const results = querySnapshot.docs.map((doc) => ({
      collection: collectionName,
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      description: doc.data().description,
      thumbnail: doc.data().thumbnail,
      cost: doc.data().cost,
    }));
    console.log(results);
    setBooks(results);
  };

  const handleSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => {
        setBooks(res?.data?.items);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (selectedBook) => {
    if (selectedBook) {
      const newBook = {
        title: selectedBook?.volumeInfo?.title || selectedBook?.title,
        author: selectedBook?.volumeInfo?.authors[0] || selectedBook?.author,
        quantity: orderQuantity,
        category: selectedBook?.volumeInfo?.category || selectedBook?.category,
        cost: selectedBook?.volumeInfo?.cost || selectedBook?.cost || 8.99,
        description:
          selectedBook?.volumeInfo?.description || selectedBook?.description,
        googleId: selectedBook?.volumeInfo?.googleId || selectedBook?.googleId,
        id: selectedBook?.volumeInfo?.id || selectedBook?.id,
        inventoryCount:
          selectedBook?.volumeInfo?.inventoryCount || orderQuantity,
        pageCount:
          selectedBook?.volumeInfo?.pageCount || selectedBook?.pageCount,
        publisher:
          selectedBook?.volumeInfo?.publisher || selectedBook?.publisher,
        publisherDate:
          selectedBook?.volumeInfo?.publisherDate ||
          selectedBook?.publisherDate,
        retailPrice:
          selectedBook?.volumeInfo?.retailPrice ||
          selectedBook?.retailPrice ||
          14.99,
        thumbnail:
          selectedBook?.volumeInfo?.thumbnail || selectedBook?.thumbnail,
      };

      setOrderSuccess(true);
      setOrderError(false);
    } else {
      setOrderError(true);
      setOrderSuccess(false);
    }
  };

  return (
    <div className="add-container">
      {orderSuccess && (
        <h3
          style={{
            color: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Your order has been placed successfully!
        </h3>
      )}
      {orderError && (
        <h3
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Something went wrong. Please try again in a moment.
        </h3>
      )}
      <div className="heading">
        {selectedBook && (
          <div>
            <div>
              <h2 className="title">Supplier's Cart</h2>
              <p>
                Title: {selectedBook?.volumeInfo?.title || selectedBook?.title}
              </p>
              <p>
                Author:{" "}
                {selectedBook?.volumeInfo?.authors[0] || selectedBook?.author}
              </p>
              <p>Quantity: {orderQuantity}</p>
              <p>
                Price:{" "}
                {selectedBook?.saleInfo?.listPrice?.amount *
                  Number(orderQuantity) ||
                  selectedBook?.cost * Number(orderQuantity) ||
                  8.99 * Number(orderQuantity)}
              </p>
              <button type="submit" onClick={() => handleSubmit(selectedBook)}>
                Place Order to Supplier
              </button>
            </div>
          </div>
        )}
        <div>
          <h2 className="title">Search Books</h2>

          <ul>
            {selectedCollections.map((collectionName, i) => (
              <li key={`collectionName-${i}`} className="list">
                <input
                  type="radio"
                  name="collection"
                  value={collectionName}
                  onClick={() => fetchCollection(collectionName, setBooks)}
                />
                {collectionName}
              </li>
            ))}
          </ul>

          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter search term"
            />
            <button onClick={handleSearch}>Search</button>

            <div className="add-book"></div>
          </div>
        </div>
      </div>

      {books &&
        books?.map((book) => (
          <li key={book?.id} className="list">
            <div className="list">
              <img
                src={book?.volumeInfo?.imageLinks?.thumbnail || book?.thumbnail}
                alt="Book Thumbnail"
                height="200px"
              />

              <div>
                <h3>{book?.volumeInfo?.title || book?.title}</h3>
                <p>{book?.volumeInfo?.description || book?.description}</p>
                <p>
                  Price:{" "}
                  {book?.saleInfo?.listPrice?.amount || book?.cost || "8.99"}
                </p>
              </div>
            </div>

            <input
              type="number"
              value={orderQuantity}
              onChange={(event) => setOrderQuantity(event.target.value)}
              placeholder="Quantity"
            />
            <button type="submit" onClick={() => setSelectedBook(book)}>
              Place in Cart
            </button>
          </li>
        ))}
    </div>
  );
};

export default AddBooks;
