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
    name,
    setName,
    verified,
    setVerified,
    employee,
    setEmployee,
    displayCart,
    setDisplayCart,
    signOn,
    setSignOn,
    users,
    setUsers,
    search,
    setSearch,
    books,
    setBooks,
    bookCategory,
    setBookCategory,
  } = props;

  console.log(bookId);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=id:${bookId}&key=${api}`
      )
      .then((res) => setCurrentBook(res?.data?.items))
      .catch((err) => console.log(err));
  }, [api, bookId]);

  console.log(currentBook);
  return (
    <Navigation
      name={name}
      setName={setName}
      verified={verified}
      setVerified={setVerified}
      employee={employee}
      setEmployee={setEmployee}
      displayCart={displayCart}
      setDisplayCart={setDisplayCart}
      signOn={signOn}
      setSignOn={setSignOn}
      users={users}
      setUsers={setUsers}
      search={search}
      setSearch={setSearch}
      books={books}
      setBooks={setBooks}
      bookCategory={bookCategory}
      setBookCategory={setBookCategory}
    />
  );
};
export default Book;
