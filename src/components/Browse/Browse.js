import Rows from "../CategoryRows/Rows";
import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
const Browse = (props) => {
  const {
    verified,
    setVerified,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    displayCart,
    setDisplayCart,
    users,
    setUsers,
    search,
    setSearch,
    books,
    setBooks,
    bookCategory,
    setBookCategory,
    cartItems,
  } = props;

  return (
    <>
      <Navigation
        verified={verified}
        setVerified={setVerified}
        signOn={signOn}
        setSignOn={setSignOn}
        employee={employee}
        setEmployee={setEmployee}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        setUsers={setUsers}
        search={search}
        setSearch={setSearch}
        books={books}
        setBooks={setBooks}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
        cartItems={cartItems}
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
              const bookId = book?.id;
              console.log(book);
              return (
                <div className="row" id="search" key={i+"search"}>
                  <div className="row--image">
                    <img
                      src={book?.volumeInfo?.imageLinks?.thumbnail}
                      height="120px"
                      alt=""
                    />
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
                        <span className="row--text__info">More Info</span>
                      </NavLink>
                      {book?.saleInfo?.listPrice?.amount ? (
                        <>
                          <span className="row--text__info">
                            ${book?.saleInfo?.listPrice?.amount}
                          </span>{" "}
                          <button>Add to Cart</button>
                        </>
                      ) : (
                        <span>Currently Unavailable</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          <Rows bookCategory={bookCategory} books={books} setBooks={setBooks} />
        </div>
      </div>
    </>
  );
};
export default Browse;
