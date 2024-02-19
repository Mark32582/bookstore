import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Author from "../Author/Author";
import LogonForm from "../LogonForm/LogonForm";
import Cart from "../Cart/Cart";

const Book = (props) => {
  const { bookId } = useParams();
  const [currentBook, setCurrentBook] = useState();
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
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => {
        setCurrentBook(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeScript = (description) => {
    if (description === null || description === "") {
      return "test";
    } else {
      return description?.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    }
  };

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
      <div className="book-background">
        <div className="book-container">
          <div className="book--image">
            <img
              src={currentBook?.volumeInfo?.imageLinks?.thumbnail}
              width="200px"
              alt=""
            />
          </div>
          <div className="book--text">
            <span>
              <h1>{currentBook?.volumeInfo?.title}</h1>
            </span>
            <span>
              <i>{currentBook?.volumeInfo?.authors}</i>
            </span>
            <div className="book--text__description">
              <p>{removeScript(currentBook?.volumeInfo?.description)}</p>
            </div>
          </div>
        </div>
        <Author author={currentBook?.volumeInfo?.authors} />
      </div>
    </>
  );
};
export default Book;
