import Rows from "../CategoryRows/Rows";

import { NavLink } from "react-router-dom";
const Browse = (props) => {
  const {
    books,
    setBooks,
    bookCategory,
    cartItems,
    setCartItems,
    setRedirect,
  } = props;
  const onAddToCart = (title, price) => {
    let count = 0;
    count = count++;
    setCartItems([...cartItems, { title: title, price: price, count: count }]);
  };

  const handleMoreButton = () => {
    setRedirect(false);
  };
  return (
    <>
      <div className="body-content">
        <div className="search-results" id="searchResults">
          {books && (
            <div className="browse">
              {!bookCategory ? (
                <h1 className="row--category">Search Results</h1>
              ) : (
                <h1 className="row--category">
                  {bookCategory === "sciFi"
                    ? "Science Fiction"
                    : bookCategory === "nonFiction"
                    ? "Non Fiction"
                    : bookCategory === "Youth"
                    ? "Young Adult"
                    : bookCategory === "juvenile fiction"
                    ? "Children's Books"
                    : bookCategory}
                </h1>
              )}
            </div>
          )}
          {books &&
            books.map((book, i) => {
              const price = book?.saleInfo?.listPrice?.amount || 13.99;
              const bookId = book?.id;
              return (
                <div className="row" id="search" key={`${i}-search`}>
                  <div className="row--image">
                    {book?.volumeInfo?.imageLinks?.thumbnail ? (
                      <img
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        height="120px"
                        alt=""
                      />
                    ) : (
                      <div className="image-alt2">
                        {book?.volumeInfo?.title}
                      </div>
                    )}
                  </div>
                  <div className="row--text">
                    <span>
                      <b>{book?.volumeInfo?.title}</b>
                    </span>
                    <span>
                      <i>{book?.volumeInfo?.authors}</i>
                    </span>
                    <div className="row--text__description">
                      <p>{book?.volumeInfo?.description}</p>
                    </div>
                    <div className="row--text__actions">
                      <NavLink to={`/book/${bookId}`}>
                        <span
                          onClick={handleMoreButton}
                          className="row--text__info"
                        >
                          More Info
                        </span>
                      </NavLink>
                      {price ? (
                        <>
                          <span className="row--text__info">${price}</span>{" "}
                          <button
                            onClick={() =>
                              onAddToCart(book?.volumeInfo?.title, price)
                            }
                          >
                            Add to Cart
                          </button>
                        </>
                      ) : (
                        <span>Currently Unavailable</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          <Rows
            bookCategory={bookCategory}
            books={books}
            setBooks={setBooks}
            setRedirect={setRedirect}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
};
export default Browse;
