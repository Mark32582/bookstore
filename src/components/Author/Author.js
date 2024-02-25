import { useCallback, useEffect, useState } from "react";
import BookTile from "../BookTile/BookTile";
import axios from "axios";
import { googleBooks } from "../../config/googlebooks";

const Author = (props) => {
  const { author, setRedirect } = props;
  const [booksByAuthor, setBooksByAuthor] = useState();
  const api = googleBooks?.key;

  const handleAuthorSearch = useCallback(() => {
    if (booksByAuthor === undefined) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${author}"&key=${api}`
        )
        .then((res) => {
          setBooksByAuthor(res?.data?.items);
        })
        .catch((err) => console.log(err));
    }
  }, [api, author, booksByAuthor]);

  useEffect(() => {
    handleAuthorSearch();
  }, [booksByAuthor, author, handleAuthorSearch]);

  return (
    <>
      {booksByAuthor?.length >= 1 && (
        <div className="author">
          <div className="row--category" id="Author">
            <h2>More by {author} and others like them:</h2>
          </div>
          <div className="static-books">
            {booksByAuthor?.map((book, i) => {
              return (
                <BookTile
                  books={book}
                  key={i + "authorBooks"}
                  setRedirect={setRedirect}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Author;
