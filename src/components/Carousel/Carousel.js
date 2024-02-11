import { googleBooks } from "../../config/googlebooks";
import axios from "axios";
import { useCallback, useState } from "react";

const Carousel = (props) => {
  const { books, setBooks } = props;
  const api = googleBooks?.key;
  //   const [books, setBooks] = useState();
  const [search, setSearch] = useState();

  //   useCallback(() => {
  // if (search) {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${api}`
  //     )
  //     .then((res) => setBooks(res?.data?.items))
  //     .catch((err) => console.log(err));
  // }
  //   }, [search, api]);
  //   const bookLibrary = axios
  //     .get(`https://www.googleapis.com/books/v1/volumes?q=javascript&key=${api}`)
  //     .then(res=>setBooks(res?.data?.items))
  //     .catch(err =>console.log(err))

  // console.log(bookLibrary)
  console.log(books);
  return (
    <div>
      {books &&
        books.map((book, i) => {
          {
            if (i < 1) {
              return (
                <div key={i}>
                  <b>{book?.volumeInfo?.title}</b>
                  <br />
                  <i>{book?.volumeInfo?.authors}</i>
                  <br />
                  {book?.volumeInfo?.description}
                </div>
              );
            }
          }
        })}
      <span>random stuff currently </span>
    </div>
  );
};

export default Carousel;
