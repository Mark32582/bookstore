import { useParams } from "react-router-dom";
import { googleBooks } from "../../config/googlebooks";
import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Book = (props) => {
  const { bookId } = useParams();
  const api = googleBooks?.key;
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
  } = props;

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      )
      .then((res) => {
        setCurrentBook(res?.data?.volumeInfo);
        
      })
      .catch((err) => console.log(err));
  }, []);

//   console.log(bookId);
  console.log(currentBook);

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
      />
      <div></div>
    </>
  );
};
export default Book;
