import React, { useState } from "react";
import axios from "axios";
import Navigation from "../Navigation/Navigation";
import Grid from "../Grid/Grid";
import LogonForm from "../LogonForm/LogonForm";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Cart from "../Cart/Cart";
import Carousel from "../Carousel/Carousel";

const AddBooks = (props) => {
  const {
    setName,
    verified,
    setVerified,
    displayCart,
    setDisplayCart,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    users,
    setUsers,
    search,
    setSearch,
<<<<<<< Updated upstream
    books,
=======
    books: propBooks,
>>>>>>> Stashed changes
    setBooks,
    bookCategory,
    setBookCategory
  } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
<<<<<<< Updated upstream
=======
  const [orderSearch, setOrderSearch] = useState(propSearch);
  const [orderBooks, setOrderBooks] = useState(propBooks);
>>>>>>> Stashed changes
  const [selectedBook, setSelectedBook] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderError, setOrderError] = useState(false);

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
    event.preventDefault();

    // Add logic here to handle the form submission, such as sending data to a backend server or updating state variables.
    if (selectedBook) {
      const newBook = {
        title: selectedBook.volumeInfo.title,
        author: selectedBook.volumeInfo.authors[0],
        quantity: orderQuantity,
        category: selectedBook.volumeInfo.category,
        cost: selectedBook.volumeInfo.cost,
        description: selectedBook.volumeInfo.description,
        googleId: selectedBook.volumeInfo.googleId,
        id: selectedBook.volumeInfo.id,
        inventoryCount: selectedBook.volumeInfo.inventoryCount,
        pageCount: selectedBook.volumeInfo.pageCount,
        publisher: selectedBook.volumeInfo.publisher,
        publisherDate: selectedBook.volumeInfo.publisherDate,
        retailPrice: selectedBook.volumeInfo.retailPrice,
        thumbnail: selectedBook.volumeInfo.thumbnail,
      };
      // Further processing
      setTitle("");
      setAuthor("");
      setQuantity("");
      setSelectedBook(null);
      setOrderQuantity(1);
      setOrderSuccess(true);
      setOrderError(false);
    } else {
      setOrderError(true);
      setOrderSuccess(false);
    }
  };

  const handleBookLinkClick = (bookUrl) => {
    console.log(`Opening book URL: ${bookUrl}`);
    // Open the book URL in a new tab or window
  };

  return (
    <div>
      <Navigation 
        setName={setName}
        verified={verified}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
        signOn={signOn}
        setSignOn={setSignOn}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        users={users}
        setUsers={setUsers}
        search={search}
        setSearch={setSearch}
        books={books}
        setBooks={setBooks}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
      />
      <LogonForm
        signOn={signOn}
        setSignOn={setSignOn}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
        users={users}
        setUsers={setUsers}
      />
      <Cart cart={displayCart} books={books} setBooks={setBooks} />
      {employee === true ? (
        <AdminDashboard users={users} books={books} setBooks={setBooks} />
      ) : (
        <div className="carousel-container">
          <Carousel
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
          />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Enter title"
/>
<input
  type="text"
  value={author}
  onChange={(e) => setAuthor(e.target.value)}
  placeholder="Enter author"
/>
<input
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
  placeholder="Enter quantity"
/>

<div>
  <label>
    <input
      type="radio"
      name="collection"
      value="employeeRecommendations"
      checked={collection === "employeeRecommendations"}
      onChange={(e) => setCollection(e.target.value)}
    />
    Employee Recommendations
  </label>
  <label>
    <input
      type="radio"
      name="collection"
      value="bestSellers"
      checked={collection === "bestSellers"}
      onChange={(e) => setCollection(e.target.value)}
    />
    Best Sellers
  </label>
  <label>
    <input
      type="radio"
      name="collection"
      value="newReleases"
      checked={collection === "newReleases"}
      onChange={(e) => setCollection(e.target.value)}
    />
    New Releases
  </label>
  <label>
    <input
      type="radio"
      name="collection"
      value="carousel"
      checked={collection === "carousel"}
      onChange={(e) => setCollection(e.target.value)}
    />
    Carousel
  </label>
</div>
        <button type="submit">Add Book</button>
      </form>

      <div>
        <h2>Search Books</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter search term"
          />
          <button onClick={handleSearch}>Search</button>
        </form>

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