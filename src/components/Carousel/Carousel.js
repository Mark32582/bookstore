/* eslint-disable no-lone-blocks */
import { googleBooks } from "../../config/googlebooks";
import axios from "axios";
import { useCallback, useState } from "react";

const Carousel = (props) => {
  const { books, setBooks } = props;
  const api = googleBooks?.key;
 

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
  return (
    <div className="carousel">
      {books &&
        books.map((book, i) => {
          {
            if (i < 1) {
              return (
                <>
                  <div className="carousel--image" key={i}>
                    <img
                      src={book?.volumeInfo?.imageLinks?.thumbnail}
                      width="200px"
                      alt=""
                    />
                  </div>
                  <div key={i} className="carousel--text">
                    <span><b>{book?.volumeInfo?.title}</b></span>         
                    <span><i>{book?.volumeInfo?.authors}</i></span>                
                    <div className="carousel--text__description"><p >{book?.volumeInfo?.description}</p></div>
                  </div>
                </>
              );
            }
            return null;
          }
        })}
    </div>
  );
};

export default Carousel;
