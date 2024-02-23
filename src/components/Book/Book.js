import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Author from "../Author/Author";

const Book = (props) => {
  const { bookId } = useParams();
  const [currentBook, setCurrentBook] = useState();
  const { cartItems, setCartItems, setRedirect } = props;

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => {
        setCurrentBook(res?.data);
      })
      .catch((err) => console.log(err));
  }, [bookId]);

  const removeScript = (description) => {
    if (description === null || description === "") {
      return "test";
    } else {
      return description?.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    }
  };

  return (
    <>
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
        <Author
          author={currentBook?.volumeInfo?.authors}
          setRedirect={setRedirect}
        />
      </div>
    </>
  );
};
export default Book;
