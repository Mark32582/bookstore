import React, { useState } from "react";
import axios from "axios";

const AddBooks = (props) => {
  const { search, setSearch, books, setBooks } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [collection, setCollection] = useState("null");
  const selectedCollections = [
    "Best Seller",
    "New Releases",
    "Carousel",
    "Employee Recommendations",
  ];
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState(false);

  const fetchCollection = async (collectionName, setSearchResults) => {};

  const handleSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => {
        setBooks(res?.data?.items);
      })
      .catch((err) => console.log(err));
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setOrderQuantity(1);
  };

  const handleOrderQuantityChange = (event) => {
    setOrderQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    //   event.preventDefault();
    //   if (selectedBook) {
    //     const newBook = {
    //       title: selectedBook.volumeInfo.title,
    //       author: selectedBook.volumeInfo.authors[0],
    //       quantity: orderQuantity,
    //       category: selectedBook.volumeInfo.category,
    //       cost: selectedBook.volumeInfo.cost,
    //       description: selectedBook.volumeInfo.description,
    //       googleId: selectedBook.volumeInfo.googleId,
    //       id: selectedBook.volumeInfo.id,
    //       inventoryCount: selectedBook.volumeInfo.inventoryCount,
    //       pageCount: selectedBook.volumeInfo.pageCount,
    //       publisher: selectedBook.volumeInfo.publisher,
    //       publisherDate: selectedBook.volumeInfo.publisherDate,
    //       retailPrice: selectedBook.volumeInfo.retailPrice,
    //       thumbnail: selectedBook.volumeInfo.thumbnail,
    //     };

    //     // Logic for adding the new book to the collection
    //     // Example: setBooks([...books, newBook]);

    //     setTitle("");
    //     setAuthor("");
    //     setQuantity("");
    //     setSelectedBook(null);
    //     setOrderQuantity(1);
    //     setOrderSuccess(true);
    //     setOrderError(false);
    //   } else {
    //     setOrderError(true);
    //     setOrderSuccess(false);
    //   }
    // };

    const handleBookLinkClick = (bookUrl) => {
      console.log(`Opening book URL: ${bookUrl}`);
      // Open the book URL in a new tab or window
    };
  };

  return (
    <div>
      <div className="add-books">
        <div className="add-container">
          <h2>Search Books</h2>
          <form onSubmit={handleSubmit}>
            <ul>
              {selectedCollections.map((collectionName) => (
                <li key={collectionName}>
                  <label>
                    <input
                      type="radio"
                      name="collection"
                      value={collectionName}
                      onChange={() => fetchCollection(collectionName)}
                    />
                    {collectionName}
                  </label>
                </li>
              ))}
            </ul>
          </form>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter search term"
              />
              <button onClick={handleSearch}>Search</button>
            </form>
            <div className="add-book">
              <button type="submit">Add Book</button> 
            </div>
            {books?.map((book) => (
              <li key={book.id}>
                <div onClick={() => handleBookClick(book)}>
                  <a
                    href={book.volumeInfo.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail}
                      alt="Book Thumbnail"
                    />
                  </a>
                  <div>
                    <h3>
                      <a
                        href={book.volumeInfo.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {book.volumeInfo.title}
                      </a>
                    </h3>
                    <p>{book.volumeInfo.description}</p>
                    <p>Price: {book.saleInfo?.listPrice?.amount}</p>
                  </div>
                </div>
                <form onSubmit={handleOrderQuantityChange}>
                  <input
                    type="number"
                    value={orderQuantity}
                    onChange={handleOrderQuantityChange}
                    placeholder="Quantity"
                  />
                  <button type="submit">Order</button>
                </form>
              </li>
            ))}
          </div>
        </div>
      </div>
      {selectedBook && (
        <div>
          <h2>Selected Book</h2>
          <p>Title: {selectedBook.volumeInfo.title}</p>
          <p>Author: {selectedBook.volumeInfo.authors[0]}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {selectedBook.saleInfo?.listPrice?.amount}</p>
          <input
            type="number"
            value={orderQuantity}
            onChange={handleOrderQuantityChange}
            placeholder="Quantity"
          />

          <button type="submit">Order Book</button>
        </div>
      )}

      {orderSuccess && <p>Success!</p>}
      {orderError && <p>Error placing order. Please try again.</p>}
    </div>
  );
};

export default AddBooks;
