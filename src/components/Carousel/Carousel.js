/* eslint-disable no-lone-blocks */
// import { googleBooks } from "../../config/googlebooks";
// import axios from "axios";
// import { useCallback, useState } from "react";

const Carousel = (props) => {
  const { books, setBooks } = props;
  //   const api = googleBooks?.key;
  //   const [search, setSearch] = useState();

  console.log(books);
  return (
    <div className="temp-carousel">
      {books &&
        books.map((book, i) => {
          {
            return (
              <div className="temp">
                <div className="interior">
                  <b>id:</b> {book?.id}
                </div>
                <div className="interior">
                  <b>title:</b> {book?.volumeInfo?.title}
                </div>
                <div className="interior">
                  <b>author:</b> {book?.volumeInfo?.authors}
                </div>
                <div className="interior">
                  <b>category:</b> {book?.volumeInfo?.categories}
                </div>
                <div className="interior">
                  <b>description: </b>
                  {book?.volumeInfo?.description}
                </div>
                <div className="interior">
                  <b>thumbnail URL: </b>
                  {book?.volumeInfo?.imageLinks?.thumbnail}
                </div>
                <div className="interior">
                  <b>page count: </b>
                  {book?.volumeInfo?.pageCount}
                </div>
                <div className="interior">
                  <b>published date: </b>
                  {book?.volumeInfo?.publishedDate}
                </div>
                <div className="interior">
                  <b>publisher:</b> {book?.volumeInfo?.publisher}
                </div>
                <div className="interior">
                  <b>retail price: </b>
                  {book?.saleInfo?.listPrice?.amount}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Carousel;
